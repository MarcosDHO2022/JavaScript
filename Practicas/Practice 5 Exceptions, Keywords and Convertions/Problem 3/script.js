'use strict';
//Code made by Marcos Hernández   Date: 08/11/2021

function is_Blank(isblank) {
    try {
        if (isblank != '') {
            throw "false";
        } else {
            throw "true";
        }
    } catch (err) {
        return err;
    }
}

console.log(is_Blank(''));
console.log(is_Blank('abc'));