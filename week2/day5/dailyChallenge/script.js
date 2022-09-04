
/*console.log("99 bouteilles de bière")
console.log("Prenez-en 1, passez-la autour de vous")
console.log("98 bouteilles de bière au mur")*/

let compteur;
let val=99;
while(val!=0){
    compteur=Number(prompt("Entrez un nombre"));
    if(compteur>val){
        alert("Nombre trop grand")
    }else{
        console.log(val," bouteilles de bière au mur")
        if(compteur==1){
        console.log("Prenez-en ",compteur,", passez-la autour de vous")
        }else{
            console.log("Prenez-en ",compteur,", passez-les autour de vous")
        }
        val=val-compteur;
        console.log(val," bouteilles de bière au mur")
    }
    
}