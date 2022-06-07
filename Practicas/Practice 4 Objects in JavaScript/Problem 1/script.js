//Code made by Marcos Hernández   Date: 18/10/2021

'use strict'

const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};

for(let studentProperty in student){
    document.write("<h3>" + studentProperty + "</h3>");
    document.write(student[studentProperty] + "<br>");
}