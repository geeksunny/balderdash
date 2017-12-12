function pickEnvironmentValue(envKey, defValue) {
    let value = process.env[envKey];
    return (typeof value === "undefined") ? defValue : value;
}

module.exports = {
    speedtest: {
        debounce: pickEnvironmentValue("BOULDERDASH_DEBOUNCE", 500),    //500ms
        cooldown: pickEnvironmentValue("BOULDERDASH_COOLDOWN", 300000)  //5 minutes
    }
};