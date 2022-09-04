/*Exercice 1 : Informations
Des Instructions
Partie I : fonction sans paramètres

Créez une fonction appelée infoAboutMe()qui ne prend aucun paramètre.
La fonction devrait console.log une phrase vous concernant (c'est-à-dire votre nom, votre âge, vos loisirs, etc.).
Appelez la fonction. */

function infoAboutMe(){
    console.log("Je suis Flavie, j'ai 22 ans et j'aime la musique");
}
infoAboutMe();

/*Partie II : fonction à trois paramètres

Créez une fonction appelée infoAboutPerson(personName, personAge, personFavoriteColor)qui prend 3 paramètres.
La fonction doit console.log une phrase sur la personne (c'est-à-dire "Vous vous appelez ..., vous avez .. ans, votre couleur préférée est ...")
Appelez la fonction deux fois avec les arguments suivants :
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")
 */

function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log("Je suis ",personName," j'ai ",personAge," et ma couleur préféré est le ",personFavoriteColor);
}
infoAboutPerson("Flavie", 35, "rouge");

/*Exercice 2 : Astuces
Des Instructions
John a créé un calculateur de pourboire simple pour aider à calculer le montant du pourboire quand lui et sa famille vont au restaurant.

Créez une fonction nommée calculateTip()qui ne prend aucun paramètre.

À l'intérieur de la fonction, demandez à John le montant de la facture.

Voici les règles
Si la facture est inférieure à 50 $, laissez un pourboire de 20 %.
Si la facture est comprise entre 50 $ et 200 $, pourboire de 15 %.
Si la facture est supérieure à 200 $, laissez un pourboire de 10 %.

Console.log le montant du pourboire et la facture finale (facture + pourboire).

Appelez la calculateTip()fonction.
 */

function calculateTip(montant){
    if(montant<50){
        return (montant*20)/100;
    }else if(montant>=50 && montant<200){
        return (montant*15)/100;
    }else if(montant>200){
        return (montant*10)/100;
    }else{
        return "ERROR";
    }
}
let val=Number(prompt("Entrez le montant de la facture"));
let facture=calculateTip(val);
console.log("Laissez ",facture,"$")

/*Exercice 3 : Trouver Les Nombres Divisibles Par 23
Des Instructions
Créez un appel de fonction isDivisible()qui ne prend aucun paramètre.

Dans la fonction, parcourez les nombres de 0 à 500.

Console.log tous les nombres divisibles par 23.

À la fin, console.log la somme de tous les nombres divisibles par 23.

Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
391 414 437 460 483
Sum : 5313
Bonus: Add a parameter divisor to the function.

isDivisible(divisor)

Example:
isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
isDivisible(45) : Console.log all the numbers divisible by 45, and their sum
 */
function isDivisible(divisor){
    let r=0;
    let sum=0;
    for(let i=0;i<=500;i++){
        if(i%divisor==0){
            r=r+i+" ";
            sum=sum+i;
        }
    }
    console.log(r);
    console.log("All theses numbers are divisible by ",divisor,", and their sum gives ",sum);
}
isDivisible(45)

/*Exercise 4 : Shopping List
Instructions
let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
Add the stock and prices objects to your js file.

Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

Create a function called myBill() that takes no parameters.

The function should return the total price of your shoppingList. In order to do this you must follow these rules:
The item must be in stock. (Hint : check out if .. in)
If the item is in stock find out the price in the prices object.

Call the myBill() function.

Bonus: If the item is in stock, decrease the item’s stock by 1 */

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
} ; 

let prices = {    
    "banana": 5, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
};

let shoppingList = ["banana","orange","apple"];

function myBill(){
    let somme=0;
    for(let y in shoppingList){
        for(let z in stock){
            if(shoppingList[y]==z && stock[z]!=0){
                for(let u in prices){
                    if(shoppingList[y]==u){
                        somme=somme+prices[u];
                        stock[z] =stock[z]-1;
                        console.log(z,stock[z]);
                    }
                }
            }
        }
        
    }
    return somme;
}
    
console.log(myBill())

/*Exercise 5 : What’s In My Wallet ?
Instructions
Note: Read the illustration (point 4), while reading the instructions

Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
an item price
and an array representing the amount of change in your pocket.

In the function, determine whether or not you can afford the item.
If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

Change will always be represented in the following order: quarters, dimes, nickels, pennies.
A quarters is 0.25
A dimes is 0.10
A nickel is 0.05
A penny is 0.01


4. To illustrate:

After you created the function, invoke it like this:

changeEnough(4.25, [25, 20, 5, 0])
The value 4.25 represents the item’s price
The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)


Examples

changeEnough(14.11, [2,100,0,0]) => returns false
changeEnough(0.75, [0,0,20,5]) => returns true


 */

function changeEnough(itemPrice, amountOfChange){
    let pieces = [0.25, 0.10, 0.05, 0.01];
    let article=0;
    let solde=0;
    for( let i=0;i<4;i++){
            solde = amountOfChange[i]*pieces[i];
            article = article+solde;
    }
    if(itemPrice<=article){
        console.log("True");
    }
    else{
    console.log("False");
    }
}
changeEnough(4.25, [25, 20, 5, 0])
changeEnough(14.11, [2,100,0,0])
changeEnough(0.75, [0,0,20,5])

/*Exercice 6 : Frais De Vacances
Des Instructions
Créons des fonctions qui calculent les coûts de vos vacances :

Définissez une fonction appelée hotelCost().
Il doit demander à l'utilisateur le nombre de nuits qu'il souhaite séjourner à l'hôtel.
Si l'utilisateur ne répond pas ou si la réponse n'est pas un chiffre, redemandez.
L'hôtel coûte 140 $ par nuit. La fonction doit être returnle prix total de l'hôtel.

Définissez une fonction appelée planeRideCost().
Il devrait demander à l'utilisateur sa destination.
Si l'utilisateur ne répond pas ou si la réponse n'est pas une chaîne, redemandez.
La fonction devrait avoir returnun prix différent selon l'emplacement.
"Londres": 183$
"Paris" : 220$
Toute autre destination : 300$

Définissez une fonction appelée rentalCarCost().
Il doit demander à l'utilisateur le nombre de jours qu'il souhaite louer la voiture.
Si l'utilisateur ne répond pas ou si la réponse n'est pas un chiffre, redemandez.
Calculez le coût de location de la voiture. La voiture coûte 40 $ par jour.
Si l'utilisateur loue une voiture pendant plus de 10 jours, il bénéficie d'une réduction de 5 %.
La fonction doit returnindiquer le prix total de la location de voiture.

Définissez une fonction appelée totalVacationCost()qui renvoie le coût total des vacances de l'utilisateur en appelant les 3 fonctions que vous avez créées ci-dessus.
Exemple : La voiture coûte : $x, l'hôtel coûte : $y, les billets d'avion coûtent : $z.
Astuce : Vous devez appeler les fonctions hotelCost(), planeRideCost()et rentalCarCost()à l'intérieur de la fonction totalVacationCost().

Appelez la fonctiontotalVacationCost()

Bonus : Au lieu d'utiliser un promptà l'intérieur des 3 premières fonctions, utilisez uniquement une invite à l'intérieur de la totalVacationCost()fonction. Vous devez modifier les 3 premières fonctions en conséquence.
 */

function hotelCost(sej){
    return sej*140;
}

function planeRideCost(plan){
    if(plan=="Londres"){
        return 183
    }else if(plan=="Paris"){
        return 220
    }else{
        return 300
    }
}

function rentalCarCost(rid){
    if(rid>=10){
        return (rid*40)-(((rid*40)*5)/100);
    }else{
        return rid*40;
    }
}

function totalVacationCost(){
    let sejour= prompt("Combien de jours sejournerez vous à l'hotel?");
    if(sejour==""||sejour==NaN){
        sejour= prompt("Combien de jours sejournerez vous à l'hotel?");
    }else{
        sejour=hotelCost(sejour);
    }
    let plane= prompt("Quel est votre destination?");
    if(plane==""){
        plane= prompt("Quel est votre destination?");
    }else{
        plane=planeRideCost(plane);
    }
    let ride= Number(prompt("Combien de jours louez vous la voiture?"));
    if(ride==""||ride==NaN){
        ride= Number(prompt("Combien de jours louez vous la voiture?"));
    }else{
        ride=rentalCarCost(ride);
    }
    console.log("La voiture coûte :",ride," $x, l'hôtel coûte :",sejour," $y, les billets d'avion coûtent :",plane," $z.");
}
totalVacationCost();