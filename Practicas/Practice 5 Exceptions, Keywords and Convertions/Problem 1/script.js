//Code made by Marcos Hernández   Date: 08/11/2021

function divide(numerator, denominator) {
    try {
        numerator = parseFloat(prompt("Introduce the numerator: "));
        denominator = parseFloat(prompt("Introduce the denominator: "));
        if (denominator == 0) {
            throw "Attempted to divide by zero";
        }
    } catch (err) {
        document.getElementById("error").innerHTML = err + "<br>";

    } finally {
        let result = 0;
        result = numerator / denominator;
        document.getElementById("result").innerHTML = "The result of " + numerator + "/" + denominator + " is: " + result;
    }
}

window.onload = divide;