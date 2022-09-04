function playTheGame(){
    let val;
    let computerNumber;
    let reponse=confirm("Voulez vous vraiment jouer?");
    if(!reponse){
        alert("Pas de problème, au revoir.")
    }else{
        val=Number(prompt("Entrez un nombre entre 0 et 10..."));
    }
    if(!val|| val==""){
        alert("Désolé, pas un numéro, au revoir .")
    }else if((val>=0 && val<=10)||val==0){
            computerNumber=Math.floor(Math.random()*10)+1;
            console.log(val,computerNumber)
            compareNumbers(val,computerNumber);
                
        }
}
function compareNumbers(userNumber,computerNumber){
    let i;
    for(i=0;i<2;i++){
        if(userNumber==computerNumber){
            console.log("winner!");
            break;
        }
        else if(userNumber<computerNumber){
            if(i<2){
                userNumber=prompt("Votre numéro est plus petit que celui de l'ordinateur, devinez à nouveau");
            }
            
        }
        else if(userNumber>computerNumber){
            if(i<2){
                userNumber=prompt("Votre numéro est plus grand que celui de l'ordinateur, devinez à nouveau");
            }    
        }
    } 
    if(i==2){
        alert("Game's over!"); 
    }   
}
