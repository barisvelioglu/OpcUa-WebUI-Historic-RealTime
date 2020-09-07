module.exports = {
    name : "ST130",
    endpointUrl : "opc.tcp://10.214.16.190:4840",
    tags : [
        "ns=2;s=Application.ST130.ST130PartResult",
        "ns=2;s=Application.ST130.ST130StartActivity",
		"ns=2;s=Application.ST130.ST130EndActivity",
        "ns=2;s=Application.ST130.ST130OrderNo",

        "ns=2;s=Application.ST130.ST130ProcessStatus",
        "ns=2;s=Application.ST130.ST130OrderActive",
        "ns=2;s=Application.ST130.ST130MachineState",

        "ns=2;s=Application.ST130.ST130PartIdentifier",
        "ns=2;s=Application.ST130.ST130ProcessName",
        "ns=2;s=Application.ST130.ST130TotalPartCounter",
        "ns=2;s=Application.ST130.ST130CycleTime",
        "ns=2;s=Application.ST130.ST130BadPartCounter",
        "ns=2;s=Application.ST130.ST130EnergyConsumption",
        "ns=2;s=Application.ST130.ST130GoodPartCounter",

        "ns=2;s=Application.ST130.ST130ErrorFlag",
        "ns=2;s=Application.ST130.ST130ErrorNumber"

    ] 
};