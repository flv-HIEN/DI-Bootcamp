/*Ajoutez le code ci-dessus à votre fichier HTML

Utilisation de Javascript :
Récupérez le div et console.log it
Changez le nom "Pete" en "Richard".
Remplacez chaque prénom des deux <ul> par votre nom.
Supprimez le <li>qui contient le nœud de texte "Sarah".

Bonus - Utilisation de Javascript :
Ajoutez une classe appelée student_list aux deux <ul>'s.
Ajoutez les classes universityet attendanceau premier <ul>. */

let div= document.getElementById("container").innerHTML;
console.log(div)

document.querySelector("ul>li:last-child").innerHTML="Richard";

let l1=document.querySelectorAll("ul>li");
for(let elem of l1){
    elem.innerHTML="Flavie";
}

let l2=document.querySelectorAll("ul>li:nth-child(2n)");
l2[1].remove();

let l= document.querySelectorAll("ul");
l[0].classList.add("student_list")
l[1].classList.add("student_list")