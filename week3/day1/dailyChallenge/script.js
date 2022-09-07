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
    Vénus={
        "moons":9,
        "color":"pink"
    }
];
let inSection=document.querySelector(".listPlanets")
for(let planet of solarSystem){
    let newDiv= document.createElement("div");
    newDiv.classList.add("planet")
    newDiv.style.backgroundColor=planet.color;
    newDiv.innerHTML=planet;
    inSection.appendChild(newDiv);
}
inSection.style="display:flex";
//inSection.style="align-content:space-batween";
//inSection.setAttribute('style',"display:flex, width:100%,justify-content:space-batween, flex-wrap:wrap;")