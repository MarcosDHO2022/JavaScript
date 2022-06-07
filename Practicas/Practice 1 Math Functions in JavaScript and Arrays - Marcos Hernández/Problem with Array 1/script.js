//Name: Marcos Hernández   Group: Juniors PM   Date: 27/09/2021

function array1(){
    let x = 0;
    const array = [1,2,3,4,5,6];
    document.write("<h2>1.	Iterate through all the elements within an array using while and display them on the screen.</h2>")
    while (x < array.length){
        document.write(array[x] + "<br>");
        x += 1;
    }
}

window.onload = array1;