//Code made by Marcos Hernández   Date: 25/10/2021

'use strict'

class calculator{
    constructor(firstnumber, secondnumber){
        this.firstnumber = firstnumber;
        this.secondnumber = secondnumber;
    }
    addition(){
        return "The addition of the two numbers is: " + (this.firstnumber + this.secondnumber);
    }
    subtraction(){
        return "The subtraction of the two numbers is: " + (this.firstnumber - this.secondnumber);
    }
    multiplication(){
        return "The multiplication of the two numbers is: " + (this.firstnumber * this.secondnumber);
    }
    division(){
        return "The division of the two numbers is: " + (this.firstnumber / this.secondnumber);
    }
};

let calculator1 = new calculator(parseFloat(prompt("Introduce the first number: ")), parseFloat(prompt("Introduce the second number: ")));
console.log("////Object////")
console.log( calculator1 );
console.log("////Results////")
console.log( calculator1.addition());
console.log( calculator1.subtraction());
console.log( calculator1.multiplication());
console.log( calculator1.division());

