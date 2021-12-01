let counterVar = 0;
function changeBackground(strColor) {
    let countVar = document.getElementById("countVar");
    countVar.innerHTML = ++counterVar;
    document.body.style.backgroundColor = strColor;
}

function changeHandle() {
    let rC = document.getElementById("rot");
    let gC = document.getElementById("grun");
    let bC = document.getElementById("blau");
    let outRgb = document.getElementById("out-rgb");
    let outHex = document.getElementById("out-hex");
    let outHexValue;

    let rgb = `rgb(${rC.value},${gC.value},${bC.value})`;
    document.body.style.backgroundColor = rgb;

    outRgb.innerHTML = rgb;

    outHexValue = convertRGBtoHex(rC.value, gC.value, bC.value)

    outHex.innerHTML = outHexValue;

}

function ColorToHex(color) {
    let hexadecimal = Number(color).toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function convertRGBtoHex(red, green, blue) {
    return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}