const express = require("express");
const chalk = require("chalk");
const socketIO = require("socket.io");
const port = 6161;
const moment = require('moment');
const {
    AttributeIds,
    OPCUAClient,
    TimestampsToReturn,
} = require("node-opcua");

const JSONdb = require('simple-json-db');

const hostname = require("os").hostname().toLowerCase();

const configFolder = './configs/';
const fs = require('fs');

var configs = [];

fs.readdirSync(configFolder).forEach(configFile => {

    console.log("///FILES///");
    console.log(configFile);

    configs.push({
        file : './configs/'+configFile,
        data : [],
        db : null
    });
});

var startedDate = moment();

for(var x = 0; x < configs.length; x++) {
    var config = configs[x];
    config.file = require('./'+configs[x].file);
    config.db = new JSONdb('./database/'+config.file.name+'-'+moment().format('L').replace(/\//g,'-')+'.json');
}

setInterval(function(){
    
    var currentDate = moment();

    if(currentDate.format('D') != startedDate.format('D')) {

        for(var x = 0; x < configs.length; x++) {
            var config = configs[x];
			config.data = [];
			
            config.db = new JSONdb('./database/'+config.file.name+'-'+moment().format('L').replace(/\//g,'-')+'.json');
		}
		
		startedDate = currentDate;
    }
    
}, 60000);

(async () => {
    try {
        
        // --------------------------------------------------------
        const app = express();
        app.set('view engine', 'ejs');
        app.use(express.static(__dirname + '/'));
        app.set('views', __dirname + '/');
        app.get("/", function(req, res){
            res.render('index', { configs : configs});
		});

		app.get("/allinone", function(req, res){
            res.render('allinone', { configs : configs});
		});

		app.get("/lastvalues", function(req, res){
            res.render('lastvalues', { configs : configs});
		});
		
		app.get("/history", function(req, res){

			var date = moment(req.query.date);

			try{
				var obj = JSON.parse(fs.readFileSync('./database/'+req.query.station+'-'+date.format('L').replace(/\//g,'-')+'.json', 'utf8'));
				var data = [];
				obj.monitoring.forEach(function(o){
					data.push(JSON.parse(o));
				})
				
				console.log(data);
				
				res.render('history', { configs : configs, station : req.query.station, date : req.query.date, tags : data });

			}catch(ex){
				res.send("NOT FOUND!");
			}
			
        });
        
        app.use(express.static(__dirname + '/'));
    
        const io =socketIO.listen(app.listen(port));
    
        io.sockets.on('connection', function (socket) {
        });
    
        console.log("Listening on port " + port);
        console.log("visit http://localhost:" + port);
    
        for(let x = 0; x < configs.length; x++) {

			(async () => {

				let config = configs[x];

				config.client = OPCUAClient.create({
					endpoint_must_exist: false
				});
		
				config.client.on("backoff", (retry, delay) => {
					console.log("Retrying to connect to ", config.file.endpointUrl, " attempt ", retry);
				});
		
				console.log(" connecting to ", chalk.cyan(config.file.endpointUrl));
				await config.client.connect(config.file.endpointUrl);
				console.log(" connected to ", chalk.cyan(config.file.endpointUrl));
		
				config.session = await config.client.createSession();
				console.log(" session created".yellow);
		
				config.subscription = await config.session.createSubscription2({
					requestedPublishingInterval: 20,
					requestedMaxKeepAliveCount: 20,
					requestedLifetimeCount: 6000,
					maxNotificationsPerPublish: 1000,
					publishingEnabled: true,
					priority: 10
				});
		
				config.subscription.on("keepalive", function () {
					console.log("keepalive");
				}).on("terminated", function () {
					console.log(" TERMINATED ------------------------------>")
				});
	
				for(var xx=0; xx < config.file.tags.length; xx++){
	   
					let nodeIdToMonitor = config.file.tags[xx];
					console.log("============>" + nodeIdToMonitor)
					const itemToMonitor = {
						nodeId: nodeIdToMonitor,
						attributeId: AttributeIds.Value
					};
					
					const parameters = {
						samplingInterval: 100,
						discardOldest: true,
						queueSize: 100
					};
	
					const monitoredItem = await config.subscription.monitor(itemToMonitor, parameters, TimestampsToReturn.Both);
		
					monitoredItem.on("changed", (dataValue) => {
						
							config.data.push(JSON.stringify({
							value: dataValue.value.value,
							timestamp: dataValue.serverTimestamp,
							nodeId: nodeIdToMonitor,
						}));
						
						config.db.set('monitoring', config.data);
		
						console.log(dataValue.value.toString());
						
						io.sockets.emit(config.file.name, {
							value: dataValue.value.value,
							timestamp: dataValue.serverTimestamp,
							nodeId: nodeIdToMonitor,
							browseName: "Temperature"
						});
					});	
				}

			})();

        }

        // detect CTRL+C and close
        let running = true;
        process.on("SIGINT", async () => {
            if (!running) {
                return; // avoid calling shutdown twice
            }
            console.log("shutting down client");
            running = false;

            for (let index = 0; index < configs.length; index++) {
				try {
					const conf = configs[index];

					await conf.subscription.terminate();
	
					await conf.session.close();
					await conf.client.disconnect();
				} catch (error) {
					console.log(error);
				}

            }

            console.log("Done");
            process.exit(0);

        });
  
    }
    catch (err) {
        console.log(chalk.bgRed.white("Error" + err.message));
        console.log(err);
        process.exit(-1);
    }
})();

