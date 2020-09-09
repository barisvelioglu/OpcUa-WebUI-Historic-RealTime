module.exports = {
    name : "Molding",
    endpointUrl : "opc.tcp://10.214.6.29:49320",
    tags : [
		     "ns=2;s=MoldUPCUA.Mold.ARBURG.MachineParameters.f8973.f8973-Value", //MachineParameters.f8973
	     "ns=2;s=MoldUPCUA.Mold.ARBURG.MachineParameters.f19000_7.f19000_7-Value", //MachineParameters.f8973
	     "ns=2;s=MoldUPCUA.Mold.ARBURG.MachineParameters.f99003_1.f99003_1-Value", //MachineParameters.f8973
	     "ns=2;s=MoldUPCUA.Mold.ARBURG.MachineParameters.f99003_2.f99003_2-Value", //MachineParameters.f8973
	     "ns=2;s=MoldUPCUA.Mold.ARBURG.MachineParameters.f99004_1.f99004_1-Value", //MachineParameters.f8973
	     "ns=2;s=MoldUPCUA.Mold.ARBURG.MachineParameters.t4012.t4012-Value", //MachineParameters.f8973
		 
		 
	     "ns=2;s=MoldUPCUA.Mold.ARBURG.ClampingUnit.f9103.f9103-Value", //MachineParameters.f8973
	     "ns=2;s=MoldUPCUA.Mold.ARBURG.ClampingUnit.Mould.Closing.F101I.F101I-Value", //MachineParameters.f8973
		 

	     "ns=2;s=MoldUPCUA.Mold.ARBURG.InjectionUnits.Unit1.Dosage-Deco-Cooling.t400.t400-Value", //MachineParameters.f8973
	     "ns=2;s=MoldUPCUA.Mold.ARBURG.InjectionUnits.Unit1.Dosage-Deco-Cooling.V402.V402-Value", //MachineParameters.f8973
		 "ns=2;s=MoldUPCUA.Mold.ARBURG.InjectionUnits.Unit1.Dosage-Deco-Cooling.V403.V403-Value", //MachineParameters.f8973
		 "ns=2;s=MoldUPCUA.Mold.ARBURG.MachineData.f9000.f9000-Value", //MachineParameters.f8973
		"ns=2;s=MoldingArdiuno.Ardiuno.100001 - C1",
		"ns=2;s=MoldingArdiuno.Ardiuno.100001 - C2",
		"ns=2;s=MoldingArdiuno.Ardiuno.100001 - C3",
		"ns=2;s=St200.St200.ST200AmountOfPlastic",
		"ns=2;s=St200.St200.St200BadPartCounter",
		"ns=2;s=St200.St200.St200ChillingDuration",		
		"ns=2;s=St200.St200.St200CycleTime",		
		"ns=2;s=St200.St200.St200EnergyConsumption",		
		"ns=2;s=St200.St200.St200ErrorDescription",
		
		"ns=2;s=St200.St200.St200ErrorFlag",	
		"ns=2;s=St200.St200.St200ErrorNumber",	
		"ns=2;s=St200.St200.St200GoodPartCounter",	
		"ns=2;s=St200.St200.St200MachineID",	
		"ns=2;s=St200.St200.St200MachineStatus",	
		"ns=2;s=St200.St200.ST200MoldingKLTIsFull",	
		"ns=2;s=St200.St200.St200OperatorID",		
		"ns=2;s=St200.St200.St200OperatorLoggedInOut",
		"ns=2;s=St200.St200.St200OrderNo",
		
		"ns=2;s=St200.St200.St200OrderQuantity",	
		"ns=2;s=St200.St200.St200OrderStatus",	
		"ns=2;s=St200.St200.St200PartQuantity",	
		"ns=2;s=St200.St200.St200PartResult",	
		"ns=2;s=St200.St200.ST200PressCount",	
		"ns=2;s=St200.St200.ST200ProcessPause",	
		"ns=2;s=St200.St200.ST200ProducedParts",
		"ns=2;s=St200.St200.St200ProgramNumber",
		
		
		"ns=2;s=St200.St200.St200SafetyStatus","ns=2;s=St200.St200.St200StopReason","ns=2;s=St200.St200.St200TotalPartCounter","ns=2;s=St200.St200.St200WorkOrderActive","ns=2;s=St200.St200.ST210MoldingOrder",
		
    ],
	userIdentity : {
		userName: "Administrator",
		password: "password"
	}
};
