// Ecercice 1

let favoriteFood = "chicken";
let favoriteMeal = "lunch";
console.log("I eat ",favoriteFood ," at every ",favoriteMeal)

// Exzecice 2

// Partie 1

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = myWatchedSeries.toString();
console.log("I watched ",myWatchedSeriesLength," series: ",myWatchedSeriesSentence)

//Partie 2

myWatchedSeries.splice(2, 1, "friends");
console.log(myWatchedSeries)

myWatchedSeries.push("lucifer");
console.log(myWatchedSeries)

myWatchedSeries.unshift("black clother");
console.log(myWatchedSeries)

myWatchedSeries.splice(1, 1);
console.log(myWatchedSeries[1].charAt(2))
console.log(myWatchedSeries)

// Exercice 3

let celcius = 30;
let fahrenheit = ((celcius/5)*9)+32;
console.log(celcius,"°C is ", fahrenheit)

// Exercice 4

    let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: a+b = 55 car a et b sont des nombres définis
    // Actual:a+b = 55

    a = 2;

    console.log(a+b) //second expression
    // Prediction: a+b = 23 car b garde sa valeur d'en haut et a prend 2 comme valeur
    console.log(c)
    // c est indéfini
    // Actual:a+b = 23

    console.log(3 + 4 + '5');
    // Prediction: error -- correction=3 + 4 + '5'=75 ça va utiliser le code ascii de '5'
    // Actual: 75

    // Exercice 5

    console.log(typeof(15))
    // Prediction:Number
    // Actual:Number

    console.log(typeof(5.5))
    // Prediction:Number
    // Actual:Number

    console.log(typeof(NaN))
    // Prediction:Null-- correction = Number
    // Actual:Number

    console.log(typeof("hello"))
    // Prediction:String
    // Actual:String

    console.log(typeof(true))
    // Prediction:Boolean
    // Actual:Boolean

    console.log(typeof(1 != 2))
    // Prediction:Boolean
    // Actual:Boolean

    console.log("hamburger" + "s")
    // Prediction:hambergers
    // Actual:hambergers

    console.log("hamburgers" - "s")
    // Prediction:hamberger -- correction = Nan
    // Actual:Nan

    console.log("1" + "3")
    // Prediction:13
    // Actual:13

    console.log("1" - "3")
    // Prediction:1 -- correction = -2
    // Actual:-2

    console.log("johnny" + 5)
    // Prediction: -- correction = johnny5
    // Actual:johnny5

    console.log("johnny" - 5)
    // Prediction: -- correction = Nan
    // Actual:Nan

    console.log(99 * "hello")
    // Prediction: -- correction = Nan
    // Actual:Nan

    console.log(1 != 1)
    // Prediction:false
    // Actual:false

    console.log(1 == "1")
    // Prediction:false -- correction = true
    // Actual:true

    console.log(1 === "1")
    // Prediction:false
    // Actual:false



    // Exercice 6

    console.log(5 + "34")
    // Prediction:534
    // Actual:

    console.log(5 - "4")
    // Prediction:54
    // Actual:1

    console.log(10 % 5)
    // Prediction:2
    // Actual:0

    console.log(5 % 10)
    // Prediction:2
    // Actual:5

    console.log("Java" + "Script")
    // Prediction:JavaScript
    // Actual:

    console.log(" " + " ")
    // Prediction:"  "
    // Actual:

    console.log(" " + 0)
    // Prediction: " 0"
    // Actual:

    console.log(true + true)
    // Prediction:true
    // Actual:2

    console.log(true + false)
    // Prediction:false
    // Actual:1

    console.log(false + true)
    // Prediction:false
    // Actual:1

    console.log(false - true)
    // Prediction:Nan
    // Actual:-1

    console.log(!true)
    // Prediction:false
    // Actual:false

    console.log(3 - 4)
    // Prediction:-1
    // Actual:-1

    console.log("Bob" - "bill")
    // Prediction:Nan
    // Actual:Nan

