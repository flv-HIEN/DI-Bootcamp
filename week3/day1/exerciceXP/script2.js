/*Exercise 2 : Users And Style
Instructions
<div>Users:</div>
<ul>
    <li>John</li>
    <li>Pete</li>
</ul>


Add the code above, to your HTML file

Add a “light blue” background color and some padding to the <div>.

Do not display the <li> that contains the text node “John”.

Add a border to the <li> that contains the text node “Pete”.

Change the font size of the whole body.

Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
 */
let newDiv = document.querySelector("div")
newDiv.style.background="lightblue";
newDiv.style.padding="6px";
let item1=document.querySelector("ul>li:first-child")
item1.style.display="none";
let item2=document.querySelector("ul>li:last-child")
item2.style.border="solid 1px black";
let item3=document.querySelector("body")
item3.setAttribute('style',"font-size:50px");
if(newDiv.style.background=="lightblue"){
    let val=document.getElementsByTagName("li");
    alert("hello "+val[0].textContent+" and "+val[1].textContent)
   
}
