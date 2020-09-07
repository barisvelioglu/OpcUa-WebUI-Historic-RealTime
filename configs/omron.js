module.exports = {
    name : "Omron",
    endpointUrl : "opc.tcp://10.214.6.29:49320",
    tags : [
        "ns=2;s=OMRON_AGV_Tags.AGV_Controller.LD130TrolleyOrder",
		"ns=2;s=OMRON_AGV_Tags.AGV_Controller.LD130TrolleyStatus",
		"ns=2;s=OMRON_AGV_Tags.AGV_Controller.LD90ConveyorOrder",
		"ns=2;s=OMRON_AGV_Tags.AGV_Controller.LD90ConveyorStatus",
		"ns=2;s=OMRON_AGV_Tags.AGV_Controller.LD90JigOrder",
		"ns=2;s=OMRON_AGV_Tags.AGV_Controller.LD90JigStatus",
		"ns=2;s=OMRON_AGV_Tags.AGV_Controller.LD90Jig2Status",
		
		"ns=2;s=omron_nj.ct130.CmdDropoff_Done_60",
		"ns=2;s=omron_nj.ct130.CmdOutputQuery_OutValue_60",
		"ns=2;s=omron_nj.ct130.CmdPickup_Done_60",
		"ns=2;s=omron_nj.ct130.CmdQPickDrop_Done_60",
		"ns=2;s=omron_nj.ct130.CmdQPickDrop_Exe_60",
		"ns=2;s=omron_nj.ct130.CmdQPickDrop_Goal1_60",
		"ns=2;s=omron_nj.ct130.CmdQPickDrop_Goal2_60",
		"ns=2;s=omron_nj.ct130.CmdQPickDrop_JobId_60",
		"ns=2;s=omron_nj.ct130.CmdQPickDrop_RobotName_60",
		"ns=2;s=omron_nj.ct130.CmdQPickDrop_Status_60",
		"ns=2;s=omron_nj.ct130.job_dropoff_status_60",
		"ns=2;s=omron_nj.ct130.job_pick_status_60",
		"ns=2;s=omron_nj.ct130.job_Sorgu_id_60",
    ] 
};