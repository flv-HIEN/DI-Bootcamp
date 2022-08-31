// Exercice 1
let x=4;
let y=20;
if (x>y){
    console.log(x," est plus grand que ",y)
}else{
    console.log(y," est plus grand que ",x)
}

// Exercice 2
let newDog = "Chihuahua";
console.log(newDog.length)
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())
if (newDog=="Chihuahua"){
    console.log("J'adore les chihuahuas, c'est ma race de chien préférée")
}else{
    console.log("Je m'en fous, je préfère les chats")
}

// Exercice 3
let val = prompt("Saisissez un nombre entier")
if(val%2==0){
    alert(val+" est un nombre pair")
}else {
    alert(val+" est un nombre impair")
}

// Exercice 4
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
console.log(users.length)
let taille=users.length;
if (taille==0){
    console.log("personne n'est en ligne")
}else if(taille==1){
    console.log(users[0]," est en ligne")
}else if(taille==2){
    console.log(users[0]," and",users[1]," sont en ligne")
}else{
    console.log(users[0],",",users[1]," et ",taille-2," autres sont en ligne")
}


