//Name: Marcos Hernández   Group: Juniors PM   Date: 27/09/2021

function array3(){
    let x = 0;
    const array = [1,2,3,4,5,6];
    document.write("<h2>3. Generate a copy of an array but with all elements incremented by 1.</h2>")
    document.write("<h4>Normal copy of the array: </h4>")
    while (x < array.length){
        document.write(array[x] + " ");
        x += 1;
    }
    document.write("<h4>Incremented by 1: </h4>")
    x = 0;
    while (x < array.length){
        array[x] += 1;
        document.write(array[x] + " ");
        x += 1;
    }
}

window.onload = array3;