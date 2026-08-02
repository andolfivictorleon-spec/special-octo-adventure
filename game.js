let player = {

    name:"Giocatore"

};



const panel =
document.getElementById("gamePanel");



function saveGame(){

    localStorage.setItem(
        "cittaEducativa",
        JSON.stringify(player)
    );

}



function loadGame(){

    let data =
    localStorage.getItem("cittaEducativa");


    if(data){

        player = JSON.parse(data);

    }


}



const ordineEdifici = ["municipio", "biblioteca", "laboratorio", "museo"];



function edificioCompletato(nome){

    return buildings[nome].punteggio > 0;

}



function edificioSbloccato(nome){

    let indice = ordineEdifici.indexOf(nome);

    if(indice === 0){
        return true;
    }

    let precedente = ordineEdifici[indice - 1];

    return edificioCompletato(precedente);

}



function aggiornaBottoniEdifici(){

    ordineEdifici.forEach(function(nome){

        let bottone = document.getElementById("btn-" + nome);

        if(!bottone){
            return;
        }

        bottone.disabled = !edificioSbloccato(nome);

    });

}



const livelliPossibili = ["livello-bronzo", "livello-argento", "livello-oro", "livello-diamante"];



function aggiornaAspettoEdifici(){

    ordineEdifici.forEach(function(nome){

        let bottone = document.getElementById("btn-" + nome);

        if(!bottone){
            return;
        }

        bottone.classList.remove(...livelliPossibili);

        let livello = buildings[nome].livello;

        if(livello === "Bronzo") bottone.classList.add("livello-bronzo");
        if(livello === "Argento") bottone.classList.add("livello-argento");
        if(livello === "Oro") bottone.classList.add("livello-oro");
        if(livello === "Diamante") bottone.classList.add("livello-diamante");

    });

}



function contaEdificiSbloccati(){

    let contatore = 0;

    for(let nome in buildings){

        if(buildings[nome].livello !== "Bloccato" && buildings[nome].livello !== 0){
            contatore++;
        }

    }

    return contatore;

}



function updateInfo(){

    let sbloccati = contaEdificiSbloccati();
    let totale = Object.keys(buildings).length;

    document.getElementById(
        "playerInfo"
    ).innerHTML =
    "⭐ Edifici sbloccati: "
    + sbloccati + "/" + totale;

}



function openBuilding(type){

    if(!edificioSbloccato(type)){
        return;
    }

    let edificio = buildings[type];

    panel.innerHTML = `

    <h2>${edificio.emoji} ${edificio.nome}</h2>

    <p>
    Missione:
    ${edificio.missione}
    </p>


    <button class="quizButton"
    onclick="startQuiz('${type}')">

    Inizia missione

    </button>

    `;

}



let domandaAttuale = null;



function startQuiz(type){

    let edificio = buildings[type];

    let indiceDomanda = Math.floor(Math.random() * edificio.domande.length);

    domandaAttuale = edificio.domande[indiceDomanda];

    let bottoni = "";

    domandaAttuale.opzioni.forEach(function(opzione, indice){

        bottoni += `
        <button class="quizButton"
        onclick="answer('${type}', ${indice})">
        ${opzione.testo}
        </button>
        `;

    });

    panel.innerHTML = `

    <h2>Quiz ${edificio.nome}</h2>

    <p>
    ${domandaAttuale.domanda}
    </p>

    ${bottoni}

    `;

}



function answer(type, indiceScelto){

    let edificio = buildings[type];
    let scelta = domandaAttuale.opzioni[indiceScelto];

    let score = scelta.corretta ? 10 : 5;

    let recordPrecedente = edificio.migliore || 0;

    let miglioramento = upgradeBuilding(type, score);

    let messaggioRecord = "";

    if(miglioramento && recordPrecedente > 0){

        messaggioRecord = `<p>🎉 Hai fatto meglio dell'ultima volta! L'edificio cresce!</p>`;

    }

    panel.innerHTML = `

    <h2>Risultato</h2>

    <p>
    Hai ottenuto ${score}/10
    </p>

    ${messaggioRecord}


    <div class="level">
    ${getEmojiForLevel(edificio.livello)}
    </div>


    <h3>
    ${edificio.nome} livello ${edificio.livello}
    </h3>


    <button class="quizButton"
    onclick="location.reload()">

    Torna alla città

    </button>

    `;

    updateInfo();

    aggiornaBottoniEdifici();

    aggiornaAspettoEdifici();


}



loadBuildings();
loadGame();
updateInfo();
aggiornaBottoniEdifici();
aggiornaAspettoEdifici();
