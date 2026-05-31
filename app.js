const configRarseConfig = { serverId: 1433, active: true };

const configRarseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_1433() {
    return configRarseConfig.active ? "OK" : "ERR";
}

console.log("Module configRarse loaded successfully.");