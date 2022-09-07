/*Exercise 3 : Change The Navbar
Instructions
<div id="navBar">
    <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">My Friends</a></li>
        <li><a href="#">Messenger</a></li>
        <li><a href="#">My Pics</a></li>
    </ul>
</div>


Add the code above, to your HTML file

In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

We are going to add a new <li> to the <ul>.
First, create a new <li> tag (use the createElement method).
Create a new text node with “Logout” as its specified text.
Append the text node to the newly created list node (<li>).
Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

Bonus
Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
 */
let div1=document.querySelector("div");
//div1.removeAttribute('navBar')
div1.setAttribute('id','socialNetworkNavigation')
let ul1=document.querySelector("ul");
const li1=document.createElement("li");
const newText=document.createTextNode("Logout");
li1.appendChild(newText);
ul1.appendChild(li1);
let first = document.querySelector("ul>li:first-child");
let last = document.querySelector("ul>li:last-child");
console.log(first.textContent," ",last.textContent)