//Code created by Fernando Pérez and Marcos Hernández  Date: 04/10/2021  Group: Juniors PM

function CtoF(a){
    a = parseFloat(prompt('Introduce the number to convert to Fahrenheit: ')); 
    a = (a * 9/5) + 32;
    document.getElementById("f").innerHTML = "Result: " + a + "°F";
}

function FtoC(b){
    b = parseFloat(prompt('Introduce the number to convert to Celsius: ')); 
    b = (b - 32) * 5/9;
    document.getElementById("c").innerHTML = "Result: " + b + "°C";
}

document.getElementById("fah").onclick = CtoF;
document.getElementById("cel").onclick = FtoC;




