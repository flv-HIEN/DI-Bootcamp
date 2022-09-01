/* Écrivez un programme JavaScript qui recrée le modèle ci-dessous.
Faites ce défi deux fois : d'abord en utilisant une boucle, puis en utilisant deux boucles for imbriquées (imbriquées signifie l'une dans l'autre - consultez ce didacticiel sur les boucles imbriquées ).
Faites ce défi quotidien par vous-même, sans regarder les réponses sur Internet.*/
// En utilisant une seule boucle
let star="";
for(let i=0;i<6;i++){
    star=star+"*";
    console.log(star)
}

// En utilisant deux boucles
star="*"
for(let i=1;i<2;i++){
    console.log(star)
    for(let j=1;j<6;j++){
        star=star+"*";
        console.log(star)
    }
    
}