let CPS = 12;
let TOGGLE_KEYBIND = "k";
let toggled = false;

ModAPI.addEventListener("key", event => {
    if (event.key === TOGGLE_KEYBIND) {
        toggled = !toggled;
    }
});

let autoClickInterval = setInterval(() => {
    if (toggled) {
        ModAPI.clickMouse();
    }
}, 1000/CPS);
