const DashButton = require('dash-button');
const config = require('libs/config');


// TODO: Add debounce time, throttling/cooldown periods, multi-press patterns
const Btn = function(name, mac, callback, startListening) {
    if (typeof mac === 'undefined') {
        throw new Error('MAC address required!');
    }
    this.mac = mac;
    this.name = name;
    this.dashButton = new DashButton(this.mac);

    if (typeof callback === 'function') {
        this.callback = callback;
    } else {
        const parent = this;
        this.callback = async function() {
            console.log('Click detected from "'+parent.name+'".');
        };
    }

    this.subscription = null;
    if (startListening) {
        this.listen();
    }
};

Btn.prototype.listen = function(callback) {
    if (typeof callback === 'function') {
        this.callback = callback;
    }
    this.subscription = this.dashButton.addListener(this.callback);
    console.log("Listening for "+this.name+".");
};

Btn.prototype.stop = function() {
    if (this.subscription !== null) {
        this.subscription.unsubscribe();
    }
};


const BtnGroup = function() {
    // TODO: Class to handle distributing configuration settings to multiple Btns
};


module.exports = {
    Btn: Btn,
    BtnGroup: BtnGroup
};