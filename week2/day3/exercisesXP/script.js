/*Partie I - Examen Des Tableaux

Écrivez du code pour supprimer "Greg" du peopletableau.

Écrivez le code pour remplacer "James" par "Jason".

Écrivez du code pour ajouter votre nom à la fin du peopletableau.

Écrivez le code qui console.logs l'index de Mary. jetez un oeil à la indexOfméthode sur Google .

Écrivez du code pour faire une copie du peopletableau à l'aide de la sliceméthode.
La copie ne doit PAS inclure "Marie" ou votre nom.
Astuce : rappelez-vous que maintenant le peopletableau devrait ressembler à cecilet people = ["Mary", "Devon", "Jason", "Yourname"];
Astuce : Consultez la documentation de la sliceméthode

Écrivez le code qui donne l'index de "Foo". Pourquoi renvoie-t-il -1 ?

Créez une variable appelée lastdont la valeur est le dernier élément du tableau.
Astuce : Quelle est la relation entre l'indice du dernier élément du tableau et la longueur du tableau ?*/

let people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people)

people.splice(2,1,"Jason")
console.log(people)

people.push("Flavie")
console.log(people)

console.log(people.indexOf("Mary"))

let tab= people.slice(1,3)
console.log(tab)

console.log(people.indexOf("Foo"))
// ça affiche -1 car Foo n'existe pas


let last = people[people.length-1];
console.log(last)


/*Partie II - Boucles
À l'aide d'une boucle, parcourez le peopletableau et console.log chaque personne.

À l'aide d'une boucle, parcourez le peopletableau et quittez la boucle après avoir console.log "Jason" .
Indice : jetez un œil à l' breakénoncé de la leçon.*/

for(let elt of people){
    console.log(elt)
}
for(let val of people){
    console.log(val)
    if(val=="Jason"){
        break;
    }
}

/*Exercice 2 : Vos Couleurs Préférées
Des Instructions
Créez un tableau appelé colorsoù la valeur est une liste de vos cinq couleurs préférées.
Bouclez à travers le tableau et pendant que vous bouclez console.log une chaîne comme ceci : "Mon choix n°1 est bleu", "Mon choix n°2 est rouge" ect… .
Bonus : changez-le en console.log "Mon 1er choix", "Mon 2ème choix", "Mon 3ème choix", en choisissant le suffixe correct pour chaque numéro.
Astuce : créer un tableau de suffixes pour faire le Bonus*/

let colors=["white","pink","red","green","blue"];
let i=1;
for(let col of colors){
    console.log("Mon choix n°",i," est ",col)
    i++;
}

let suff=["er","ème"];
let a=1;
for(let col of colors){
    if(a==1){
        console.log("Mon ",a,suff[0]," choix est ",col)
    }else{
        console.log("Mon ",a,suff[1]," choix est ",col)
    }
    a++;
}
/*Exercice 3 : Répéter La Question
Des Instructions
Demander à l'utilisateur un numéro.
Astuce : Vérifiez le type de données que vous recevez à partir de l'invite (c.-à-d. Utilisez la typeofméthode)

Tant que le nombre est inférieur à 10, continuez à demander à l'utilisateur un nouveau numéro.
Astuce : Quelle whileboucle est la plus pertinente pour cette situation ?*/
/*let num;
let type=typeof num;
console.log(type)
num=Number(prompt("Veuillez entrer un numéro"));
while(num<10){
    num=Number(prompt("Veuillez entrer un numéro"));
}

/* Exercice 4 : Gestion Du Bâtiment*/

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}

/*Revue Sur Les Objets
Copiez et collez l'objet ci-dessus dans votre fichier Javascript.

Console.log le nombre d'étages du bâtiment.

Console.log combien d'appartements sont aux étages 1 et 3.

Console.log le nom du deuxième locataire et le nombre de pièces qu'il possède dans son appartement.

Vérifiez si la somme du loyer de Sarah et de David est supérieure au loyer de Dan. Si c'est le cas, augmentez le loyer de Dan à 1200.
*/

console.log(building.numberOfFloors)
console.log("Il ya ",building.numberOfAptByFloor.firstFloor+building.numberOfAptByFloor.thirdFloor, " appartements aux étages 1 et 3")
console.log(building.nameOfTenants[1]," possède ",building.numberOfRoomsAndRent.dan[0]," pièces")
if(building.numberOfRoomsAndRent.sarah[1]>building.numberOfRoomsAndRent.dan[1] && building.numberOfRoomsAndRent.david[1]>building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1]=100;
}else{
    console.log("no no")
}
/*Exercice 5 : Famille
Des Instructions
Créez un objet appelé famille avec quelques paires clé-valeur.
A l' aide d'une for inboucle, console.log les clés de l'objet.
À l' aide d'une for inboucle, console.log les valeurs de l'objet.*/

let family={
    father:"papa",
    mother:"maman",
    numberofchildren:10
}

for(let x in family){
    console.log(x)
    console.log(family[x])
}
/* Exercice 6
Des Instructions*/

let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

//Étant donné l'objet ci-dessus et en utilisant un for loop, console.log "mon nom est Rudolf le raindeer"
let sentence="";
for(let element in details){
   sentence=sentence+" "+element+" "+details[element]
}
console.log(sentence)

/*Exercice 7 : Groupe Secret
Des Instructions*/
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
/*Un groupe d'amis a décidé de créer une société secrète. Le nom de la société sera la première lettre de chacun de leurs noms triés par ordre alphabétique.
Indice : une chaîne est un tableau de lettres
Console.log le nom de leur société secrète. La sortie doit être "ABJKPS"*/
names1=names.sort();
console.log(names1)
let secret="";
for(let y of names1){
    secret=secret+y[0];
}
console.log(secret)

