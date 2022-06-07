//Made by Marcos Hernández

const factorialN = n => {
    if (n === 0){
        return 1;
    } else return n * factorialN(n-1);     
}

document.write("The factorial of the number introduced is: " + factorialN(n = parseInt(prompt("Write a number to calculate its factorial: "))));