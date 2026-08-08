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



// (aggiornaBottoniEdifici e aggiornaAspettoEdifici sono definite più sotto, per i modelli 3D)



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



let opzioniMostrate = [];



function renderDomandaSessione(){

    let edificio = buildings[edificioSessione];
    let domandaCorrente = domandeSessione[indiceSessione];

    opzioniMostrate = mescola(domandaCorrente.opzioni);

    let bottoni = "";

    opzioniMostrate.forEach(function(opzione, indice){

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

    let scelta = opzioniMostrate[indiceScelto];

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



// ---------- Scena 3D: mappa, edifici e personaggio ----------

const schermataSelezione = document.getElementById("selezionePersonaggio");
const sezioneCitta = document.getElementById("city");
const sezioneControlli = document.getElementById("controls");
const mappa = document.getElementById("city");

const canvas3D = document.getElementById("scena3D");

const renderer3D = new THREE.WebGLRenderer({ canvas: canvas3D, antialias: true });
renderer3D.setSize(mappa.clientWidth || 700, 420, false);

const scena3D = new THREE.Scene();

const camera3D = new THREE.PerspectiveCamera(45, (mappa.clientWidth || 700) / 420, 0.1, 100);
camera3D.position.set(0, 6.5, 7);
camera3D.lookAt(0, 0, 0);

scena3D.add(new THREE.AmbientLight(0xffffff, 0.75));

const sole3D = new THREE.DirectionalLight(0xffffff, 0.8);
sole3D.position.set(4, 6, 3);
scena3D.add(sole3D);


// Il terreno verde
const terreno = new THREE.Mesh(
    new THREE.PlaneGeometry(9, 6.5),
    new THREE.MeshStandardMaterial({ color: 0x8bd36b })
);
terreno.rotation.x = -Math.PI / 2;
scena3D.add(terreno);



// ---------- Creazione degli edifici 3D ----------

const posizioniEdifici = {
    municipio:    { x:-2.3, z:-1.6 },
    biblioteca:   { x: 2.3, z:-1.6 },
    laboratorio:  { x:-2.3, z: 1.6 },
    museo:        { x: 2.3, z: 1.6 }
};

const edificiMesh = {};



function creaEdificioMunicipio(colore){

    let gruppo = new THREE.Group();

    let corpo = new THREE.Mesh(
        new THREE.BoxGeometry(1.4, 1.2, 1.2),
        new THREE.MeshStandardMaterial({ color: colore })
    );
    corpo.position.y = 0.6;
    gruppo.add(corpo);

    let tetto = new THREE.Mesh(
        new THREE.ConeGeometry(1.1, 0.7, 4),
        new THREE.MeshStandardMaterial({ color: 0xc0392b })
    );
    tetto.position.y = 1.55;
    tetto.rotation.y = Math.PI / 4;
    gruppo.add(tetto);

    gruppo.userData.materialiColorati = [corpo.material];
    gruppo.userData.materialeTetto = tetto.material;

    return gruppo;

}



function creaEdificioBiblioteca(colore){

    let gruppo = new THREE.Group();

    let corpo = new THREE.Mesh(
        new THREE.CylinderGeometry(0.75, 0.85, 1.3, 12),
        new THREE.MeshStandardMaterial({ color: colore })
    );
    corpo.position.y = 0.65;
    gruppo.add(corpo);

    let tetto = new THREE.Mesh(
        new THREE.ConeGeometry(0.85, 0.6, 12),
        new THREE.MeshStandardMaterial({ color: 0x5b3a29 })
    );
    tetto.position.y = 1.6;
    gruppo.add(tetto);

    gruppo.userData.materialiColorati = [corpo.material];
    gruppo.userData.materialeTetto = tetto.material;

    return gruppo;

}



function creaEdificioLaboratorio(colore){

    let gruppo = new THREE.Group();

    let corpo = new THREE.Mesh(
        new THREE.BoxGeometry(1.3, 1.1, 1.1),
        new THREE.MeshStandardMaterial({ color: colore })
    );
    corpo.position.y = 0.55;
    gruppo.add(corpo);

    let provetta = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18, 0.18, 0.7, 10),
        new THREE.MeshStandardMaterial({ color: 0x2980b9 })
    );
    provetta.position.y = 1.45;
    gruppo.add(provetta);

    let pallina = new THREE.Mesh(
        new THREE.SphereGeometry(0.22, 10, 10),
        new THREE.MeshStandardMaterial({ color: 0x2ecc71, emissive: 0x114411 })
    );
    pallina.position.y = 1.85;
    gruppo.add(pallina);

    gruppo.userData.materialiColorati = [corpo.material];
    gruppo.userData.materialeTetto = provetta.material;

    return gruppo;

}



function creaEdificioMuseo(colore){

    let gruppo = new THREE.Group();

    let corpo = new THREE.Mesh(
        new THREE.BoxGeometry(1.4, 1.0, 1.2),
        new THREE.MeshStandardMaterial({ color: colore })
    );
    corpo.position.y = 0.5;
    gruppo.add(corpo);

    let cupola = new THREE.Mesh(
        new THREE.SphereGeometry(0.75, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2),
        new THREE.MeshStandardMaterial({ color: 0xf1c40f })
    );
    cupola.position.y = 1.0;
    gruppo.add(cupola);

    gruppo.userData.materialiColorati = [corpo.material];
    gruppo.userData.materialeTetto = cupola.material;

    return gruppo;

}



const coloriBase = {
    municipio:   0xf0e6d2,
    biblioteca:  0xd2a679,
    laboratorio: 0xeafcff,
    museo:       0xcaa6e0
};

const costruttoriEdifici = {
    municipio: creaEdificioMunicipio,
    biblioteca: creaEdificioBiblioteca,
    laboratorio: creaEdificioLaboratorio,
    museo: creaEdificioMuseo
};



ordineEdifici.forEach(function(nome){

    let gruppo = costruttoriEdifici[nome](coloriBase[nome]);

    gruppo.position.set(posizioniEdifici[nome].x, 0, posizioniEdifici[nome].z);

    scena3D.add(gruppo);

    edificiMesh[nome] = gruppo;

});



function aggiornaBottoniEdifici(){

    // Con la scena 3D il "blocco" si vede colorando l'edificio di grigio,
    // il controllo se si può entrare resta invariato in edificioSbloccato().

}



function aggiornaAspettoEdifici(){

    ordineEdifici.forEach(function(nome){

        let gruppo = edificiMesh[nome];

        if(!gruppo){
            return;
        }

        let sbloccato = edificioSbloccato(nome);
        let livello = buildings[nome].livello;

        gruppo.userData.materialiColorati.forEach(function(materiale){

            if(!sbloccato){

                materiale.color.set(0x999999);
                materiale.transparent = true;
                materiale.opacity = 0.5;

            } else {

                materiale.color.set(coloriBase[nome]);
                materiale.transparent = false;
                materiale.opacity = 1;

            }

        });

        let materialeTetto = gruppo.userData.materialeTetto;

        if(sbloccato && livello === "Diamante"){
            materialeTetto.emissive = new THREE.Color(0x3399ff);
            materialeTetto.emissiveIntensity = 0.6;
        } else if(sbloccato && livello === "Oro"){
            materialeTetto.emissive = new THREE.Color(0xffd54f);
            materialeTetto.emissiveIntensity = 0.4;
        } else {
            materialeTetto.emissiveIntensity = 0;
        }

    });

}



// ---------- Il personaggio 3D (chibi, tondo e buffo) ----------

let gruppoPersonaggio3D = null;
let orologioAnimazione = 0;



function creaPersonaggio3D(colore){

    let gruppo = new THREE.Group();

    let materialeColore = new THREE.MeshStandardMaterial({ color: colore });
    let materialePelle = new THREE.MeshStandardMaterial({ color: 0xffdbac });
    let materialeOcchi = new THREE.MeshStandardMaterial({ color: 0x2b2438 });

    let corpo = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 16), materialeColore);
    corpo.scale.set(1, 0.85, 1);
    corpo.position.y = 0.42;
    gruppo.add(corpo);

    let testa = new THREE.Mesh(new THREE.SphereGeometry(0.42, 16, 16), materialePelle);
    testa.position.y = 1.05;
    gruppo.add(testa);

    let occhioSx = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), materialeOcchi);
    occhioSx.position.set(-0.15, 1.08, 0.36);
    gruppo.add(occhioSx);

    let occhioDx = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), materialeOcchi);
    occhioDx.position.set(0.15, 1.08, 0.36);
    gruppo.add(occhioDx);

    let braccioSx = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 10), materialeColore);
    braccioSx.position.set(-0.42, 0.4, 0);
    gruppo.add(braccioSx);

    let braccioDx = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 10), materialeColore);
    braccioDx.position.set(0.42, 0.4, 0);
    gruppo.add(braccioDx);

    let gambaSx = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.25, 10), materialePelle);
    gambaSx.position.set(-0.16, 0.05, 0);
    gruppo.add(gambaSx);

    let gambaDx = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.25, 10), materialePelle);
    gambaDx.position.set(0.16, 0.05, 0);
    gruppo.add(gambaDx);

    return gruppo;

}



function impostaPersonaggio3D(colore){

    if(gruppoPersonaggio3D){

        scena3D.remove(gruppoPersonaggio3D);

    }

    gruppoPersonaggio3D = creaPersonaggio3D(colore);
    gruppoPersonaggio3D.position.set(0, 0, 0);

    scena3D.add(gruppoPersonaggio3D);

}



function animaScena3D(){

    requestAnimationFrame(animaScena3D);

    orologioAnimazione += 0.05;

    if(gruppoPersonaggio3D){

        gruppoPersonaggio3D.position.y = 0.06 + Math.sin(orologioAnimazione) * 0.04;

    }

    renderer3D.render(scena3D, camera3D);

}

animaScena3D();



// ---------- Movimento nella mappa 3D ----------

let posizioneX = 0;
let posizioneZ = 0;

let vicinoAttuale = null;

const PASSO = 0.32;
const LIMITE_X = 3.3;
const LIMITE_Z = 2.4;
const DISTANZA_INGRESSO = 1.3;



function posizionaIniziale(){

    posizioneX = 0;
    posizioneZ = 0;

    aggiornaPosizionePersonaggio();

}



function aggiornaPosizionePersonaggio(){

    if(gruppoPersonaggio3D){

        gruppoPersonaggio3D.position.x = posizioneX;
        gruppoPersonaggio3D.position.z = posizioneZ;

    }

}



function muovi(dx, dz){

    posizioneX = Math.max(-LIMITE_X, Math.min(LIMITE_X, posizioneX + dx));
    posizioneZ = Math.max(-LIMITE_Z, Math.min(LIMITE_Z, posizioneZ + dz));

    aggiornaPosizionePersonaggio();

    controllaVicinanza();

}



function controllaVicinanza(){

    let trovato = null;

    ordineEdifici.forEach(function(nome){

        let posizioneEdificio = posizioniEdifici[nome];

        let distanza = Math.hypot(posizioneX - posizioneEdificio.x, posizioneZ - posizioneEdificio.z);

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



// ---------- Scelta del personaggio ----------

function scegliPersonaggio(colore){

    localStorage.setItem("personaggioScelto", colore);

    impostaPersonaggio3D(colore);

    schermataSelezione.classList.add("nascosto");
    sezioneCitta.classList.remove("nascosto");
    sezioneControlli.classList.remove("nascosto");

    posizionaIniziale();

    renderer3D.setSize(mappa.clientWidth || 700, 420, false);
    camera3D.aspect = (mappa.clientWidth || 700) / 420;
    camera3D.updateProjectionMatrix();

}



document.getElementById("btnCambiaPersonaggio").addEventListener("click", function(){

    schermataSelezione.classList.remove("nascosto");
    sezioneCitta.classList.add("nascosto");
    sezioneControlli.classList.add("nascosto");

});



loadBuildings();
loadGame();
updateInfo();
aggiornaBottoniEdifici();
aggiornaAspettoEdifici();



let personaggioSalvato = localStorage.getItem("personaggioScelto");

if(personaggioSalvato){

    scegliPersonaggio(personaggioSalvato);

} else {

    schermataSelezione.classList.remove("nascosto");

}
