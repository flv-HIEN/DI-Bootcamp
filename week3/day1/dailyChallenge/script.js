let solarPlanet=["Jupiter","Mars","Mercure","Neptune","Pluton","Saturne","Terre","Uranus","Venus"];
let solarSystem=[
    Jupiter={
        "moons":1,
        "color":"green"
    },
    Mars={
        "moons":2,
        "color":"red"
    },
    Mercure={
        "moons":3,
        "color":"gray"
    },
    Neptune={
        "moons":4,
        "color":"orange"
    },
    Pluton={
        "moons":5,
        "color":"yellow"
    },
    Saturne={
        "moons":6,
        "color":"brown"
    },
    Terre={
        "moons":7,
        "color":"blue"
    },
    Uranus={
        "moons":8,
        "color":"lightblue"
    },
    Venus={
        "moons":9,
        "color":"pink"
    }
];
let inSection=document.querySelector("section");
    for(let planet of solarPlanet){
        let newDiv= document.createElement("div");
        newDiv.classList.add("planet");
        newDiv.innerHTML=planet;
        inSection.appendChild(newDiv);
    }
let planet= document.getElementsByTagName("div");
planet[0].style.background="green";
planet[1].style.background="red";
planet[2].style.background="gray";
planet[3].style.background="orange";
planet[4].style.background="yellow";
planet[5].style.background="brown";
planet[6].style.background="blue";
planet[7].style.background="lightblue";
planet[8].style.background="pink";




inSection.style.display="flex";
inSection.style.width="100%";
inSection.style.height="50%";
inSection.style.justifyContent="space-around";
inSection.style.flexWrap="wrap";

for(let i=0;i<9;i++){
    planet[i].style.textAlign="center";
   
}

