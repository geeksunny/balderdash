const btn = require('libs/btn');

const buttons = {
    nerf: '10:20:30:40:50:60',
    slimjim: '11:22:33:44:55:66',
    burtsbees: 'aa:bb:cc:dd:ee:ff'
};
const btns = [];


for (let button in buttons) {
    console.log("Creating Btn for "+button+".");
    let btn = new btn.Btn(button, buttons[button], null, true);
    btns.push(btn);
}