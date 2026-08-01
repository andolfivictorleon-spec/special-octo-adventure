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


building.punteggio = score;


building.livello = getLevel(score);



saveBuildings();


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

Object.assign(

buildings,

JSON.parse(saved)

);

}



}
