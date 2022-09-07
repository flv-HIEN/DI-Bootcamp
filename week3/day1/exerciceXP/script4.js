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
        "image": "image11.jpg",
        "alreadyREad":true
    },
    book2={
        "title":"Une si longue lettre" ,
        "author":"Mariama Ba" ,
        "image": "image11.jpg",
        "alreadyREad":false
    }
]
console.log(allBooks)
let listLivre=document.querySelector("div");
let tabl=document.createElement("table");
let newTr1=document.createElement("tr");
let newTh1=document.createElement("th");
newTh1.innerHTML="Name & Author";
let newTh2=document.createElement("th");
newTh2.innerHTML="Image";
let newTh3=document.createElement("th");
newTh3.innerHTML="Image";
newTr1.appendChild(newTh1);
newTr1.appendChild(newTh2);
newTr1.appendChild(newTh3);
tabl.appendChild(newTr1);


for(let i=0;i<2;i++){
    let newTr2=document.createElement("tr");
    let newTd1=document.createElement("td");
    newTd1.innerHTML=allBooks[i].title+" written by "+allBooks[i].author;
    newTr2.appendChild(newTd1);

    let newTd2=document.createElement("td");
    let imag=document.createElement("img");
    imag.setAttribute("src",allBooks[i].image);
    imag.style.width="100px";
    newTd2.appendChild(imag);
    newTr2.appendChild(newTd2);

    let newTd3=document.createElement("td");
    if(allBooks[i].alreadyREad==true){
        newTd3.innerHTML="Dejà lu";
        newTd3.style.background="green";
    }else{
        newTd3.innerHTML="Non lu";
        newTd3.style.background="red";
    }
    newTr2.appendChild(newTd3);
    tabl.appendChild(newTr2);
}
listLivre.appendChild(tabl);


/*let newTr3=document.createElement("tr");
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
for(let i=0;i<3;i++){
    let a=allBooks[i].title;
    let b=allBooks[i].author;
    let section=document.createElement("section");
    listLivre.appendChild(section);
    section.innerHTML=a+" is written by "+b;

    
}
let section1=document.createElement("section");
let image=document.createElement("img");
section1.appendChild(image);
image.setAttribute('src',"https://www.pexels.com/fr-fr/photo/gros-plan-de-papier-sur-fond-blanc-256450/");

let image1=document.createElement("img");
section1.appendChild(image1);
image1.setAttribute('src',"https://www.pexels.com/fr-fr/photo/gros-plan-de-papier-sur-fond-blanc-256450/");

listLivre.appendChild(section1)*/




