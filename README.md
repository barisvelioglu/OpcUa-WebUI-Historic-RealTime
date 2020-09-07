HTML WEB UI to display a OPCUA monitored variable based on node, express, socket.io  and node-opcua


![alt text](
![Image of Yaktocat](https://i.ibb.co/fDs4ZrF/Capture.png)



#### how to install

##### prerequiste 

* git
* nodejs


##### step by step install 

This steps describe how you can install and test the application  on a linux box, such as ubuntu.
The application is also working on Windows, instructions left to the reader to adapt.


    $ git clone https://github.com/node-opcua/node-opcua-htmlpanel
    $ cd node-opcua-htmlpanel
    $ npm i
    $
    $ # start server in background
    $ node node_modules/node-opcua/bin/simple_server.js > /dev/null &
    $
    $ # start the html server
    $ node app.js
    
Now visit  ````http://localhost:6161' on your web browser
    
    
        
    
