module.exports = {
    name : "CNC",
    endpointUrl : "opc.tcp://10.214.6.29:49320",
	
    tags : [
	
	 
		
		
		
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310WorkOrderNo",
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310WorkOrderActive",
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310TotalPartCounter",
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310StopReason",
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310ShiftChange",
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310SafetyStatus",
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310Product_Type",
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310ProcessStatus",
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310PressingForce2ndStep",
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310PressingForce1stStep",
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310PartResult",
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310PartPresent",
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310OperatorLoggedInOut",
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310OperatorID",
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310NOKReason",
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310MachineState",
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310LifeBit",
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310IIWAinNode4",
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310GripperStatus",
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310GoodPartCounter",
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310ErrorFlag",
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310EnergyConsumption",
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310DoorIsOpen",
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310CycleTime",
		"ns=2;s=St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310BadPartCounter",
		
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320WorkOrderNo",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320WorkOrderActive",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320TotalPartCounter",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320StopReason",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320ShiftChange",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320SafetyStatus",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320Product_Type",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320ProcessStatus",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320PartResult",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320PartPresent",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320OperatorLoggedInOut",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320OperatorID",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320NOKReason",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320MarkActive",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320MachineState",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320LifeBit",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320LaserReady",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320LaserProgramName",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320LaserError",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320IIWAinNode3",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320GoodPartCounter",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320ErrorFlag",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320EnergyConsumption",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320DoorIsOpen",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320DMCSerialNo",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320DMCReadCode",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320CycleTime",
		"ns=2;s=St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320BadPartCounter",
		
        "ns=2;s=ST300.MES.St301TransferCAM2",
		"ns=2;s=ST300.MES.St301Status",
		"ns=2;s=ST300.MES.St301InputCAM2",
		"ns=2;s=ST300.MES.St301InputCAM1",
		"ns=2;s=ST300.MES.St301CAM3Finished",
		"ns=2;s=ST300.MES.St300WorkOrder",
		"ns=2;s=ST300.MES.St300UnloadTransferSubassy",
		"ns=2;s=ST300.MES.St300UnloadTransferGear",
		"ns=2;s=ST300.MES.St300UnloadInputSubassy",
		"ns=2;s=ST300.MES.St300TransferShaftLoadTray",
		"ns=2;s=ST300.MES.St300TransferShaftCustom",
		"ns=2;s=ST300.MES.St300TransferShaftClassic",
		"ns=2;s=ST300.MES.St300TransferEngravingLoad",
		"ns=2;s=ST300.MES.St300StopReason",
		"ns=2;s=ST300.MES.St300SafePlace",
		"ns=2;s=ST300.MES.St300ReadProcess",
		"ns=2;s=ST300.MES.St300RawTransferGear",
		"ns=2;s=ST300.MES.St300RawInputShaft",
		"ns=2;s=ST300.MES.St300ProgramJob12",
		"ns=2;s=ST300.MES.St300ProgramJob10",
		"ns=2;s=ST300.MES.St300ProgramJob9",
		"ns=2;s=ST300.MES.St300ProgramJob8",
		"ns=2;s=ST300.MES.St300ProgramJob7",
		"ns=2;s=ST300.MES.St300ProgramJob6",
		"ns=2;s=ST300.MES.St300ProgramJob5",
		"ns=2;s=ST300.MES.St300ProgramJob4",
		"ns=2;s=ST300.MES.St300ProgramJob3",
		"ns=2;s=ST300.MES.St300ProgramJob3",
		"ns=2;s=ST300.MES.St300ProgramJob2",
		"ns=2;s=ST300.MES.St300ProgramJob1",
		"ns=2;s=ST300.MES.St300PickTransferShaft",
		"ns=2;s=ST300.MES.St300MoveNode6",
		"ns=2;s=ST300.MES.St300MoveNode5",
		"ns=2;s=ST300.MES.St300MoveNode4",	
		"ns=2;s=ST300.MES.St300MoveNode3",
		"ns=2;s=ST300.MES.St300MoveNode2",
		"ns=2;s=ST300.MES.St300MoveNode1",	
		"ns=2;s=ST300.MES.St300MachineStatus",
		"ns=2;s=ST300.MES.St300LoadTransferSubAssyPart",
		"ns=2;s=ST300.MES.St300LoadJig",
		"ns=2;s=ST300.MES.St300LoadInputSubAssyParts",
		"ns=2;s=ST300.MES.St300LoadInputShaft",
		"ns=2;s=ST300.MES.St300InputEngravingLoad",
		"ns=2;s=ST300.MES.St300GearRatip",
		"ns=2;s=ST300.MES.St300CollectParts",	
		"ns=2;s=ST300.MES.St300BearingType2_2",	
		"ns=2;s=ST300.MES.St300BearingType2_1",
		"ns=2;s=ST300.MES.St300BearingType1_2",
		"ns=2;s=ST300.MES.St300BearingType1_1",
		"ns=2;s=ST300.MES.St300_Unload Input Subassy",	
		
		"ns=2;s=IIWA_1.dev.type_write",
		"ns=2;s=IIWA_1.dev.type_read",
		"ns=2;s=IIWA_1.dev.status",
		"ns=2;s=IIWA_1.dev.part_write",
		"ns=2;s=IIWA_1.dev.part_read",
		"ns=2;s=IIWA_1.dev.node_write",
		"ns=2;s=IIWA_1.dev.node_read",
		"ns=2;s=IIWA_1.dev.jobid_write",
		"ns=2;s=IIWA_1.dev.jobid_read",
		"ns=2;s=IIWA_1.dev.is_error",
		"ns=2;s=IIWA_1.dev.errorState",
		
		"ns=2;s=DMG.Device1.Z3 Eksen Ready",
		"ns=2;s=DMG.Device1.Z1 Eksen Ready",
		"ns=2;s=DMG.Device1.Y1 Eksen Ready",
		"ns=2;s=DMG.Device1.X1 Eksen Ready",
		"ns=2;s=DMG.Device1.Takım Degistirme Sayacı",
		"ns=2;s=DMG.Device1.Sol Parça Yerleştir_OK",
		"ns=2;s=DMG.Device1.Sol Parça Yerleştir",
		"ns=2;s=DMG.Device1.Sol Parça Kavra_OK",
		"ns=2;s=DMG.Device1.Sol Parça Hava Tut",
		"ns=2;s=DMG.Device1.Sol Parça Çıkart_OK",
		"ns=2;s=DMG.Device1.Sol Parça Çıkart",
		"ns=2;s=DMG.Device1.Sol Parça Ayrıl_OK",
		"ns=2;s=DMG.Device1.Sol Ayna Boş",
		"ns=2;s=DMG.Device1.Sol Ayna Ayrıl",	
		"ns=2;s=DMG.Device1.Sağ Parça Yerleştir_OK",
		"ns=2;s=DMG.Device1.Sağ Parça Yerleştir",
		"ns=2;s=DMG.Device1.Sağ Parça Kavra_OK",
		"ns=2;s=DMG.Device1.Sağ Parça Hava Tut",
		"ns=2;s=DMG.Device1.Sağ Parça Çıkart_OK",
		"ns=2;s=DMG.Device1.Sağ Parça Çıkart",
		"ns=2;s=DMG.Device1.Sağ Parça Ayrıl_OK",
		"ns=2;s=DMG.Device1.Sağ Ayna Boş",
		"ns=2;s=DMG.Device1.Sağ Ayna Ayrıl",
		"ns=2;s=DMG.Device1.Robot Ready",
		"ns=2;s=DMG.Device1.Robot Program Numarası",
		"ns=2;s=DMG.Device1.Robot Mod Aktif",
		"ns=2;s=DMG.Device1.RG748",
		"ns=2;s=DMG.Device1.RG747",
		"ns=2;s=DMG.Device1.RG746",
		"ns=2;s=DMG.Device1.RG745",
		"ns=2;s=DMG.Device1.RG744",
		"ns=2;s=DMG.Device1.Q1Eksen Ready",
		"ns=2;s=DMG.Device1.progStatus",
		"ns=2;s=DMG.Device1.Programlar Eşleşti_OK",
		"ns=2;s=DMG.Device1.Programlar Eşleşti",
		"ns=2;s=DMG.Device1.Program Numarası Seç_OK",
		"ns=2;s=DMG.Device1.Program Numarası Seç",
		"ns=2;s=DMG.Device1.Program Durdu",
		"ns=2;s=DMG.Device1.Program Çalışıyor",
		"ns=2;s=DMG.Device1.Program Beklemede",
		"ns=2;s=DMG.Device1.progName",
		"ns=2;s=DMG.Device1.Part Program Status OK",
		"ns=2;s=DMG.Device1.Part Program Status Error",
		"ns=2;s=DMG.Device1.Part Program Status Active",
		"ns=2;s=DMG.Device1.Otomatik Mod Seçildi",
		"ns=2;s=DMG.Device1.Makine Toplam Çalışma Süresi",
		"ns=2;s=DMG.Device1.Makine Hazır",
		"ns=2;s=DMG.Device1.Kapı Açık Robot Girebilir_0",
		"ns=2;s=DMG.Device1.Kapı Açık Robot Girebilir_1",
		"ns=2;s=DMG.Device1.Emergency",
		"ns=2;s=DMG.Device1.Cycle Start",
		"ns=2;s=DMG.Device1.CNC Program Numarası",
		"ns=2;s=DMG.Device1.CNC Kapı Kapatma Onayı_1",
		"ns=2;s=DMG.Device1.CNC Kapı Kapatma Onayı_0",
		"ns=2;s=DMG.Device1.CNC Kapı Açma isteği_1_OK",
		"ns=2;s=DMG.Device1.CNC Kapı Açma isteği_1",
		"ns=2;s=DMG.Device1.CNC Kapı Açma isteği_0_OK",
		"ns=2;s=DMG.Device1.CNC Kapı Açma isteği_0",
		"ns=2;s=DMG.Device1.CNC Çalışma Modu",
		"ns=2;s=DMG.Device1.C4 Eksen Ready",
		"ns=2;s=DMG.Device1.C3 Eksen Ready",
		"ns=2;s=DMG.Device1.C1 Eksen Ready",		
		"ns=2;s=DMG.Device1.B1 Eksen Ready",	
		"ns=2;s=DMG.Device1.Alarm Sebebi ile Program Durduruldu",
		"ns=2;s=DMG.Device1.Alarm Durumu",		

    ] ,
	userIdentity : {
		userName: "Administrator",
		password: "password"
	}
};
