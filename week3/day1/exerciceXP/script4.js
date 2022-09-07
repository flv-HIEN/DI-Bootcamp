/*Exercise 4 : My Book List
Instructions
Take a look at this link for help.

The point of this challenge is to display a list of two books on your browser.

In the body of the HTML page, create an empty div:
<div class="listBooks"></div>
In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
title,
author,
image : a url,
alreadyRead : which is a boolean (true or false).

Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
Requirements : All the instructions below need to be coded in the js file:
Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
For each book :
You have to display the book’s title and the book’s author.
Example: HarryPotter written by JKRolling.
The width of the image has to be set to 100px.
If the book is already read. Set the color of the book’s details to red.
 */

let allBooks=[
    book1={
        "title":"l'aventure ambigue" ,
        "author":"Cheik Amidou Kane" ,
        "image": "",
        "alreadyREad":true
    },
    book2={
        "title":"Une si longue lettre" ,
        "author":"Mariama Ba" ,
        "image": "",
        "alreadyREad":true
    },
    book3={
        "title":"Le monde s'effondre" ,
        "author":"Ferdinand Oyono" ,
        "image": "",
        "alreadyREad":false
    }
]
console.log(allBooks)
let listLivre=document.querySelector("div");
let tabl=document.createElement("table");
let newTh=document.createElement("tr");
let newTd=document.createElement("th");
newTd.innerHTML="Name";
let newTd2=document.createElement("th");
newTd2.innerHTML="Author";
newTh.appendChild(newTd);
newTh.appendChild(newTd2);
tabl.appendChild(newTh);

let newTr=document.createElement("tr");
let newTd3=document.createElement("td");
newTd3.innerHTML=allBooks[0].title;
let newTd4=document.createElement("td");
newTd4.innerHTML=allBooks[0].author;
newTr.appendChild(newTd3);
newTr.appendChild(newTd4);
tabl.appendChild(newTr);

let newTr2=document.createElement("tr");
let newTd5=document.createElement("td");
newTd5.innerHTML=allBooks[1].title;
let newTd6=document.createElement("td");
newTd6.innerHTML=allBooks[1].author;
newTr2.appendChild(newTd5);
newTr2.appendChild(newTd6);
tabl.appendChild(newTr2);
listLivre.appendChild(tabl);

let parent=document.querySelector("table");
let child=document.getElementsByTagName("th");
parent.setAttribute('style',"border:solid 2px black");
child[0].setAttribute('style',"border:solid 2px black");
child[1].setAttribute('style',"border:solid 2px black");
let childh=document.getElementsByTagName("td");
for(let i of childh){
    i.setAttribute('style',"border:solid 2px black");
}
parent.setAttribute('style',"border-collapse:collapse;");






