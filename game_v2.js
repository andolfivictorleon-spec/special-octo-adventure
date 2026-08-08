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



let domandeSessione = [];
let indiceSessione = 0;
let correttiSessione = 0;
let edificioSessione = null;



function mescola(array){

    let copia = array.slice();

    for(let i = copia.length - 1; i > 0; i--){

        let j = Math.floor(Math.random() * (i + 1));

        let temp = copia[i];
        copia[i] = copia[j];
        copia[j] = temp;

    }

    return copia;

}



function startQuiz(type){

    edificioSessione = type;

    let edificio = buildings[type];

    domandeSessione = mescola(edificio.domande).slice(0, 5);

    indiceSessione = 0;
    correttiSessione = 0;

    renderDomandaSessione();

}



function renderDomandaSessione(){

    let edificio = buildings[edificioSessione];
    let domandaCorrente = domandeSessione[indiceSessione];

    let bottoni = "";

    domandaCorrente.opzioni.forEach(function(opzione, indice){

        bottoni += `
        <button class="quizButton"
        onclick="rispondiSessione(${indice})">
        ${opzione.testo}
        </button>
        `;

    });

    panel.innerHTML = `

    <h2>Quiz ${edificio.nome}</h2>

    <p class="quizProgresso">
    Domanda ${indiceSessione + 1} di ${domandeSessione.length}
    </p>

    <p>
    ${domandaCorrente.domanda}
    </p>

    ${bottoni}

    `;

}



function rispondiSessione(indiceScelto){

    let domandaCorrente = domandeSessione[indiceSessione];
    let scelta = domandaCorrente.opzioni[indiceScelto];

    if(scelta.corretta){
        correttiSessione++;
    }

    let messaggio = scelta.corretta
        ? "✅ Esatto!"
        : "❌ Sbagliato!";

    let ultimaDomanda = (indiceSessione === domandeSessione.length - 1);

    panel.innerHTML = `

    <h2>${messaggio}</h2>

    <button class="quizButton"
    onclick="prossimaDomandaSessione()">

    ${ultimaDomanda ? "Vedi risultato" : "Prossima domanda"}

    </button>

    `;

}



function prossimaDomandaSessione(){

    indiceSessione++;

    if(indiceSessione < domandeSessione.length){

        renderDomandaSessione();

    } else {

        finisciSessione();

    }

}



function finisciSessione(){

    let type = edificioSessione;
    let edificio = buildings[type];

    let punteggio = 5 + correttiSessione;

    let recordPrecedente = edificio.migliore || 0;

    let miglioramento = upgradeBuilding(type, punteggio);

    let messaggioRecord = "";

    if(miglioramento && recordPrecedente > 0){

        messaggioRecord = `<p>🎉 Hai fatto meglio dell'ultima volta! L'edificio cresce!</p>`;

    }

    panel.innerHTML = `

    <h2>Risultato</h2>

    <p>
    Hai risposto bene a ${correttiSessione} domande su ${domandeSessione.length}
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



// ---------- Movimento del personaggio ----------

const mappa = document.getElementById("city");
const personaggio = document.getElementById("player");

let posizioneX = 0;
let posizioneY = 0;

let vicinoAttuale = null;

const PASSO = 28;
const DISTANZA_INGRESSO = 75;



function posizionaIniziale(){

    posizioneX = (mappa.clientWidth / 2) - 20;
    posizioneY = (mappa.clientHeight / 2) - 20;

    aggiornaPosizionePersonaggio();

}



function aggiornaPosizionePersonaggio(){

    personaggio.style.left = posizioneX + "px";
    personaggio.style.top = posizioneY + "px";

}



function muovi(dx, dy){

    let maxX = mappa.clientWidth - personaggio.offsetWidth;
    let maxY = mappa.clientHeight - personaggio.offsetHeight;

    posizioneX = Math.max(0, Math.min(maxX, posizioneX + dx));
    posizioneY = Math.max(0, Math.min(maxY, posizioneY + dy));

    aggiornaPosizionePersonaggio();

    controllaVicinanza();

}



function controllaVicinanza(){

    let centroGiocatoreX = posizioneX + (personaggio.offsetWidth / 2);
    let centroGiocatoreY = posizioneY + (personaggio.offsetHeight / 2);

    let trovato = null;

    ordineEdifici.forEach(function(nome){

        let bottone = document.getElementById("btn-" + nome);

        if(!bottone){
            return;
        }

        let centroEdificioX = bottone.offsetLeft + (bottone.offsetWidth / 2);
        let centroEdificioY = bottone.offsetTop + (bottone.offsetHeight / 2);

        let distanza = Math.hypot(centroGiocatoreX - centroEdificioX, centroGiocatoreY - centroEdificioY);

        if(distanza <= DISTANZA_INGRESSO){
            trovato = nome;
        }

    });

    if(trovato && trovato !== vicinoAttuale){

        vicinoAttuale = trovato;
        openBuilding(trovato);

    }

    if(!trovato){

        vicinoAttuale = null;

    }

}



document.getElementById("btnSu").addEventListener("click", function(){ muovi(0, -PASSO); });
document.getElementById("btnGiu").addEventListener("click", function(){ muovi(0, PASSO); });
document.getElementById("btnSinistra").addEventListener("click", function(){ muovi(-PASSO, 0); });
document.getElementById("btnDestra").addEventListener("click", function(){ muovi(PASSO, 0); });



document.addEventListener("keydown", function(evento){

    if(evento.key === "ArrowUp" || evento.key === "w" || evento.key === "W"){
        muovi(0, -PASSO);
    }

    if(evento.key === "ArrowDown" || evento.key === "s" || evento.key === "S"){
        muovi(0, PASSO);
    }

    if(evento.key === "ArrowLeft" || evento.key === "a" || evento.key === "A"){
        muovi(-PASSO, 0);
    }

    if(evento.key === "ArrowRight" || evento.key === "d" || evento.key === "D"){
        muovi(PASSO, 0);
    }

});



// ---------- Personaggio 3D (Three.js) ----------

const schermataSelezione = document.getElementById("selezionePersonaggio");
const sezioneCitta = document.getElementById("city");
const sezioneControlli = document.getElementById("controls");

const canvas3D = document.getElementById("player");

const renderer3D = new THREE.WebGLRenderer({ canvas: canvas3D, alpha: true, antialias: true });
renderer3D.setSize(70, 70, false);

const scena3D = new THREE.Scene();

const camera3D = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
camera3D.position.set(0, 1.4, 4);
camera3D.lookAt(0, 0.6, 0);

const luceAmbiente = new THREE.AmbientLight(0xffffff, 0.7);
scena3D.add(luceAmbiente);

const luceDirezionale = new THREE.DirectionalLight(0xffffff, 0.8);
luceDirezionale.position.set(2, 3, 2);
scena3D.add(luceDirezionale);

let gruppoPersonaggio3D = null;



function creaPersonaggio3D(colore){

    let gruppo = new THREE.Group();

    let materiale = new THREE.MeshStandardMaterial({ color: colore });
    let materialeTesta = new THREE.MeshStandardMaterial({ color: 0xffdbac });

    let testa = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), materialeTesta);
    testa.position.y = 1.55;
    gruppo.add(testa);

    let busto = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.8, 0.4), materiale);
    busto.position.y = 0.95;
    gruppo.add(busto);

    let braccioSx = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.75, 0.2), materiale);
    braccioSx.position.set(-0.42, 0.95, 0);
    gruppo.add(braccioSx);

    let braccioDx = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.75, 0.2), materiale);
    braccioDx.position.set(0.42, 0.95, 0);
    gruppo.add(braccioDx);

    let gambaSx = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.75, 0.25), materialeTesta);
    gambaSx.position.set(-0.16, 0.15, 0);
    gruppo.add(gambaSx);

    let gambaDx = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.75, 0.25), materialeTesta);
    gambaDx.position.set(0.16, 0.15, 0);
    gruppo.add(gambaDx);

    return gruppo;

}



function impostaPersonaggio3D(colore){

    if(gruppoPersonaggio3D){

        scena3D.remove(gruppoPersonaggio3D);

    }

    gruppoPersonaggio3D = creaPersonaggio3D(colore);

    scena3D.add(gruppoPersonaggio3D);

}



function animaPersonaggio3D(){

    requestAnimationFrame(animaPersonaggio3D);

    if(gruppoPersonaggio3D){

        gruppoPersonaggio3D.rotation.y += 0.02;

    }

    renderer3D.render(scena3D, camera3D);

}

animaPersonaggio3D();



function scegliPersonaggio(colore){

    localStorage.setItem("personaggioScelto", colore);

    impostaPersonaggio3D(colore);

    schermataSelezione.classList.add("nascosto");
    sezioneCitta.classList.remove("nascosto");
    sezioneControlli.classList.remove("nascosto");

    posizionaIniziale();

}



document.getElementById("btnCambiaPersonaggio").addEventListener("click", function(){

    schermataSelezione.classList.remove("nascosto");
    sezioneCitta.classList.add("nascosto");
    sezioneControlli.classList.add("nascosto");

});



let personaggioSalvato = localStorage.getItem("personaggioScelto");

if(personaggioSalvato){

    scegliPersonaggio(personaggioSalvato);

} else {

    schermataSelezione.classList.remove("nascosto");

}
