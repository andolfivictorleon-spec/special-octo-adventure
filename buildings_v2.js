function getLevel(score){


if(score===0)
return "Bloccato";


if(score<=5)
return "Bronzo";


if(score<=7)
return "Argento";


if(score<=9)
return "Oro";


return "Diamante";


}



function upgradeBuilding(name,score){


let building = buildings[name];

let recordPrecedente = building.migliore || 0;

let miglioramento = score > recordPrecedente;


building.punteggio = score;

if(miglioramento){

    building.migliore = score;

}

building.livello = getLevel(building.migliore);



saveBuildings();


return miglioramento;


}




function saveBuildings(){

localStorage.setItem(

"buildings",

JSON.stringify(buildings)

);


}



function loadBuildings(){


let saved =
localStorage.getItem("buildings");



if(saved){

let datiSalvati = JSON.parse(saved);

for(let nome in datiSalvati){

    if(buildings[nome]){

        buildings[nome].punteggio = datiSalvati[nome].punteggio || 0;

        buildings[nome].migliore = datiSalvati[nome].migliore || 0;

        buildings[nome].livello = datiSalvati[nome].livello || 0;

    }

}

}



}



function getEmojiForLevel(level){


switch(level){


case "Bronzo":
return "📚";


case "Argento":
return "🏫";


case "Oro":
return "🏛️✨";


case "Diamante":
return "🏰💎";


default:
return "🔒";


}


}
