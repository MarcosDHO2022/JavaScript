//Code made by Marcos Hernández   Date: 08/11/2021

function validatePin(pin) {
    var validated = !isNaN(pin) && pin.toString().length == 4;

    return validated;
}

console.log(validatePin("ABCD"));