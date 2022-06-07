//Code created by Fernando Pérez and Marcos Hernández  Date: 04/10/2021  Group: Juniors PM

function factorial(n){
    n = parseInt(prompt("Introduce the number: "));
    let answer = 1;
    for(let i = n; i >= 1; i--){
        answer *= i;
    }
    document.getElementById("result").innerHTML = "The factorial of " + n + " is " + answer;
} 

document.getElementById("f").onclick = factorial;

