//Code made by Marcos Hernández   Date: 27/10/2021

'use strict'

const library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
];

for(let libraryProperty in library){
    if (library[libraryProperty].readingStatus) {
        library[libraryProperty].readingStatus = "<h5>" + "This book is already read." + "</h5>"
    } else {
        library[libraryProperty].readingStatus = "<h5>" + "This book has not been read yet." + "</h5>"
    }
    document.write("<h3>" + "Reading status of the book number: " + "<span>" + libraryProperty + "</span>" + "</h3>")
    for (let j in library[libraryProperty]){
        document.write(" " + library[libraryProperty][j] + "<br>");
    }
}