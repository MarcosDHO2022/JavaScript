//Name: Marcos Hernández   Group: Juniors PM   Date: 27/09/2021

function array4(){
    let total = 0;
    let x = 0;
    const array = [1,2,3,4,5,6];
    document.write("<h2>4. Calculate the average.</h2>");
    document.write("<h4>The list to find the average: </h4>");
    while (x < array.length) {
        document.write(array[x] + " ");
        x += 1;
    }
    document.write("<h4>The average of the entire list: </h4>");
    x = 0;
    while (x < array.length){
        total += array[x];
        x += 1;
    }
    total = total / array.length;
    document.write(total);
}

window.onload = array4;