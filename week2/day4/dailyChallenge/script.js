/*Des Instructions
Demander à l'utilisateur plusieurs mots (séparés par des virgules).
Mettez les mots dans un tableau.
Console.log les mots un par ligne, dans un cadre rectangulaire comme indiqué ci-dessous.
Consultez les conseils et les exigences ci-dessous.
Par exemple, si l'utilisateur vous donne :
Hello, World, in, a, frame
vous le transformerez en : ["Hello", "World", "in", "a", "frame"]
qui s'affichera comme suit :

des étoiles et des mots


Indice
Le nombre d'étoiles qui entoure la phrase doit dépendre de la longueur du mot le plus long.
*/
let sentence=prompt("Entrez une suite de mots séparés de virgules")
let tab= sentence.split(",");
console.log(tab)
let taille=0;
for(let i of tab){
    if(i.length>taille){
        taille=i.length;
    }   
}
let etoile="";
for(let c=0;c<taille+4;c++){
    etoile=etoile+"*";
}
console.log(etoile);
for(let v of tab){
    let espace="";
    let es=taille+3-(v.length+2);
    for(let a=0;a<es;a++){
        espace=espace+" ";
    }
    console.log("* "+v+espace+"*");
}
console.log(etoile);