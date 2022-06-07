//Name: Marcos Hernández   Group: Juniors PM   Date: 27/09/2021

function array2(){
    const array = [1,2,3,4,5,6];
    document.write("<h2>2. Iterate through all the elements within an array using for and display them on the screen.</h2>")
    for (let x=0; x < array.length; x++){
        document.write(array[x] + "<br>");
    }
}

window.onload = array2;