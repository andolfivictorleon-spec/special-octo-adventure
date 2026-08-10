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



const ordineEdifici = [
    "municipio", "biblioteca", "laboratorio", "museo",
    "ospedale", "stadio", "teatro", "mercato",
    "stazione", "banca", "parco", "zoo",
    "osservatorio", "aeroporto"
];



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
renderer3D.setSize(mappa.clientWidth || 900, 520, false);

const scena3D = new THREE.Scene();

const camera3D = new THREE.PerspectiveCamera(48, (mappa.clientWidth || 900) / 520, 0.1, 100);
camera3D.position.set(0, 12, 13);
camera3D.lookAt(0, 0, 0);

scena3D.add(new THREE.AmbientLight(0xffffff, 0.8));

const sole3D = new THREE.DirectionalLight(0xffffff, 0.8);
sole3D.position.set(5, 8, 4);
scena3D.add(sole3D);


// Il terreno verde
const terreno = new THREE.Mesh(
    new THREE.PlaneGeometry(17, 16),
    new THREE.MeshStandardMaterial({ color: 0x8bd36b })
);
terreno.rotation.x = -Math.PI / 2;
scena3D.add(terreno);



// ---------- Posizioni degli edifici: griglia 4 colonne x 4 righe ----------

const posizioniEdifici = {};

const colonneX = [-4.5, -1.5, 1.5, 4.5];
const righeZ = [-4.5, -1.5, 1.5, 4.5];

let indiceGriglia = 0;

ordineEdifici.forEach(function(nome){

    let colonna = indiceGriglia % 4;
    let riga = Math.floor(indiceGriglia / 4);

    posizioniEdifici[nome] = {
        x: colonneX[colonna],
        z: righeZ[riga]
    };

    indiceGriglia++;

});



function posizioneVerso(base, distanza){

    // Sposta un punto "verso l'esterno" della mappa, per non sovrapporsi ad altri edifici
    let segnoX = base.x >= 0 ? 1 : -1;
    let segnoZ = base.z >= 0 ? 1 : -1;

    return {
        x: base.x + segnoX * distanza * 0.3,
        z: base.z + segnoZ * distanza
    };

}



// ---------- Aspetto degli edifici: stile "casetta classica" ----------

const aspettoEdifici = {

    municipio:    { parete:0xf0e6d2, tetto:0xc0392b, decorazione:"colonna" },
    biblioteca:   { parete:0xd2a679, tetto:0x5b3a29, decorazione:"libri" },
    laboratorio:  { parete:0xeafcff, tetto:0x2980b9, decorazione:"provetta" },
    museo:        { parete:0xcaa6e0, tetto:0xf1c40f, decorazione:"cupola" },
    ospedale:     { parete:0xffffff, tetto:0xe74c3c, decorazione:"croce" },
    stadio:       { parete:0x6ec46e, tetto:0x7f8c8d, decorazione:"pallone" },
    teatro:       { parete:0x922b21, tetto:0xf1c40f, decorazione:"maschere" },
    mercato:      { parete:0xe67e22, tetto:0xf9e79f, decorazione:"cesta" },
    stazione:     { parete:0x95a5a6, tetto:0x2c3e50, decorazione:"orologio" },
    banca:        { parete:0xf5eeda, tetto:0xd4af37, decorazione:"moneta" },
    parco:        { parete:0x82c99a, tetto:0x6b4a2f, decorazione:"albero" },
    zoo:          { parete:0xd2691e, tetto:0x2d5a3d, decorazione:"orecchie" },
    osservatorio: { parete:0x2c3e50, tetto:0xecf0f1, decorazione:"telescopio" },
    aeroporto:    { parete:0xecf0f1, tetto:0x3498db, decorazione:"aereo" }

};



function aggiungiDecorazione(gruppo, tipo, coloreExtra){

    let materiale = new THREE.MeshStandardMaterial({ color: coloreExtra });

    if(tipo === "colonna"){

        let cono = new THREE.Mesh(new THREE.ConeGeometry(1.05, 0.6, 4), materiale);
        cono.position.y = 1.5;
        cono.rotation.y = Math.PI / 4;
        gruppo.add(cono);

    } else if(tipo === "libri"){

        for(let i = 0; i < 3; i++){
            let libro = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.08, 0.25), materiale);
            libro.position.set(0, 1.35 + i * 0.1, 0);
            libro.rotation.y = i * 0.3;
            gruppo.add(libro);
        }

    } else if(tipo === "provetta"){

        let tubo = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.6, 10), materiale);
        tubo.position.y = 1.5;
        gruppo.add(tubo);

        let pallina = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 10), new THREE.MeshStandardMaterial({ color: 0x2ecc71 }));
        pallina.position.y = 1.85;
        gruppo.add(pallina);

    } else if(tipo === "cupola"){

        let cupola = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2), materiale);
        cupola.position.y = 1.4;
        gruppo.add(cupola);

    } else if(tipo === "croce"){

        let verticale = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.5, 0.14), materiale);
        verticale.position.y = 1.65;
        gruppo.add(verticale);

        let orizzontale = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.14, 0.14), materiale);
        orizzontale.position.y = 1.65;
        gruppo.add(orizzontale);

    } else if(tipo === "pallone"){

        let palla = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 10), materiale);
        palla.position.y = 1.7;
        gruppo.add(palla);

    } else if(tipo === "maschere"){

        let maschera1 = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 10), materiale);
        maschera1.position.set(-0.15, 1.55, 0);
        gruppo.add(maschera1);

        let maschera2 = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 10), materiale);
        maschera2.position.set(0.15, 1.55, 0);
        gruppo.add(maschera2);

    } else if(tipo === "cesta"){

        let cesta = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 0.3, 8), materiale);
        cesta.position.y = 1.5;
        gruppo.add(cesta);

    } else if(tipo === "orologio"){

        let anello = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.05, 8, 16), materiale);
        anello.position.y = 1.6;
        gruppo.add(anello);

        let centro = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), new THREE.MeshStandardMaterial({ color: 0x2b2438 }));
        centro.position.y = 1.6;
        gruppo.add(centro);

    } else if(tipo === "moneta"){

        let moneta = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.08, 16), materiale);
        moneta.position.y = 1.6;
        moneta.rotation.x = Math.PI / 2;
        gruppo.add(moneta);

    } else if(tipo === "albero"){

        let tronco = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.35, 8), new THREE.MeshStandardMaterial({ color: 0x6b4a2f }));
        tronco.position.y = 1.4;
        gruppo.add(tronco);

        let chioma = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.5, 8), materiale);
        chioma.position.y = 1.85;
        gruppo.add(chioma);

    } else if(tipo === "orecchie"){

        let orecchioSx = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.3, 8), materiale);
        orecchioSx.position.set(-0.2, 1.65, 0);
        gruppo.add(orecchioSx);

        let orecchioDx = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.3, 8), materiale);
        orecchioDx.position.set(0.2, 1.65, 0);
        gruppo.add(orecchioDx);

    } else if(tipo === "telescopio"){

        let corpo = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.14, 0.55, 10), materiale);
        corpo.position.y = 1.6;
        corpo.rotation.z = Math.PI / 5;
        gruppo.add(corpo);

    } else if(tipo === "aereo"){

        let fusoliera = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.55, 8), materiale);
        fusoliera.position.y = 1.6;
        fusoliera.rotation.z = Math.PI / 2;
        gruppo.add(fusoliera);

        let ala = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.03, 0.45), materiale);
        ala.position.y = 1.6;
        gruppo.add(ala);

    }

}



function creaEdificioRealistico(nome, scala){

    scala = scala || 1;

    let aspetto = aspettoEdifici[nome];

    let gruppo = new THREE.Group();

    let materialeParete = new THREE.MeshStandardMaterial({ color: aspetto.parete });
    let materialeTetto = new THREE.MeshStandardMaterial({ color: aspetto.tetto });
    let materialePorta = new THREE.MeshStandardMaterial({ color: 0x5b3a29 });
    let materialeFinestra = new THREE.MeshStandardMaterial({ color: 0xbde3f5 });

    let corpo = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.1, 1.1), materialeParete);
    corpo.position.y = 0.55;
    gruppo.add(corpo);

    let tetto = new THREE.Mesh(new THREE.ConeGeometry(1.05, 0.65, 4), materialeTetto);
    tetto.position.y = 1.42;
    tetto.rotation.y = Math.PI / 4;
    gruppo.add(tetto);

    let porta = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.5, 0.06), materialePorta);
    porta.position.set(0, 0.25, 0.56);
    gruppo.add(porta);

    let finestraSx = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.22, 0.06), materialeFinestra);
    finestraSx.position.set(-0.42, 0.7, 0.56);
    gruppo.add(finestraSx);

    let finestraDx = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.22, 0.06), materialeFinestra);
    finestraDx.position.set(0.42, 0.7, 0.56);
    gruppo.add(finestraDx);

    aggiungiDecorazione(gruppo, aspetto.decorazione, aspetto.tetto === 0xffffff ? 0x333333 : 0xffffff);

    gruppo.userData.materialiColorati = [materialeParete];
    gruppo.userData.materialeTetto = materialeTetto;

    gruppo.scale.set(scala, scala, scala);

    return gruppo;

}



const edificiMesh = {};
const edificiMeshDuplicato = {};



ordineEdifici.forEach(function(nome){

    let gruppo = creaEdificioRealistico(nome, 1);

    gruppo.position.set(posizioniEdifici[nome].x, 0, posizioniEdifici[nome].z);

    scena3D.add(gruppo);

    edificiMesh[nome] = gruppo;

});



function aggiornaBottoniEdifici(){

    // Il "blocco" si vede colorando l'edificio di grigio; la logica di ingresso resta in edificioSbloccato().

}



function coloraEdificio(gruppo, coloreOriginale, sbloccato){

    gruppo.userData.materialiColorati.forEach(function(materiale){

        if(!sbloccato){
            materiale.color.set(0x999999);
            materiale.transparent = true;
            materiale.opacity = 0.5;
        } else {
            materiale.color.set(coloreOriginale);
            materiale.transparent = false;
            materiale.opacity = 1;
        }

    });

}



function applicaBagliore(gruppo, livello){

    // Rimuove l'eventuale indicatore precedente
    if(gruppo.userData.indicatore){

        gruppo.remove(gruppo.userData.indicatore);
        gruppo.userData.indicatore = null;

    }

    if(livello === "Oro"){

        let contenitore = new THREE.Group();
        contenitore.position.y = 2.3;
        contenitore.userData.baseY = 2.3;

        let stella = new THREE.Mesh(
            new THREE.OctahedronGeometry(0.38, 0),
            new THREE.MeshBasicMaterial({ color: 0xffd700 })
        );
        contenitore.add(stella);

        let anello = new THREE.Mesh(
            new THREE.TorusGeometry(0.32, 0.05, 8, 16),
            new THREE.MeshBasicMaterial({ color: 0xfff3b0 })
        );
        anello.rotation.x = Math.PI / 2;
        contenitore.add(anello);

        gruppo.add(contenitore);
        gruppo.userData.indicatore = contenitore;

    } else if(livello === "Diamante"){

        let contenitore = new THREE.Group();
        contenitore.position.y = 2.4;
        contenitore.userData.baseY = 2.4;

        let gemma = new THREE.Mesh(
            new THREE.OctahedronGeometry(0.46, 0),
            new THREE.MeshBasicMaterial({ color: 0x4fd8ff })
        );
        contenitore.add(gemma);

        let anello = new THREE.Mesh(
            new THREE.TorusGeometry(0.4, 0.05, 8, 16),
            new THREE.MeshBasicMaterial({ color: 0xd7f7ff })
        );
        anello.rotation.x = Math.PI / 2;
        contenitore.add(anello);

        gruppo.add(contenitore);
        gruppo.userData.indicatore = contenitore;

    }

}



function aggiornaAspettoEdifici(){

    ordineEdifici.forEach(function(nome){

        let gruppo = edificiMesh[nome];

        if(!gruppo){
            return;
        }

        let sbloccato = edificioSbloccato(nome);
        let edificio = buildings[nome];

        coloraEdificio(gruppo, aspettoEdifici[nome].parete, sbloccato);
        applicaBagliore(gruppo, sbloccato ? edificio.livello : null);


        // Edificio duplicato: mostra il livello dell'ULTIMO tentativo, solo se diverso dal record
        let livelloUltimo = getLevel(edificio.punteggio);
        let mostraDuplicato = sbloccato && edificio.punteggio > 0 && livelloUltimo !== edificio.livello;

        if(mostraDuplicato){

            if(!edificiMeshDuplicato[nome]){

                let duplicato = creaEdificioRealistico(nome, 0.7);
                let posizioneEsterna = posizioneVerso(posizioniEdifici[nome], 1.6);

                duplicato.position.set(posizioneEsterna.x, 0, posizioneEsterna.z);

                scena3D.add(duplicato);

                edificiMeshDuplicato[nome] = duplicato;

            }

            coloraEdificio(edificiMeshDuplicato[nome], aspettoEdifici[nome].parete, true);
            applicaBagliore(edificiMeshDuplicato[nome], livelloUltimo);

        } else if(edificiMeshDuplicato[nome]){

            scena3D.remove(edificiMeshDuplicato[nome]);
            delete edificiMeshDuplicato[nome];

        }

    });

}



// ---------- Il personaggio 3D: stile "scarabocchio" (doodle) ----------

let gruppoPersonaggio3D = null;
let orologioAnimazione = 0;



function segmentoScarabocchio(lunghezza, raggio, colore){

    // Un cilindro leggermente irregolare, come tracciato a mano libera
    let geometria = new THREE.CylinderGeometry(raggio * 0.85, raggio, lunghezza, 6);
    let materiale = new THREE.MeshStandardMaterial({ color: colore, flatShading: true });

    return new THREE.Mesh(geometria, materiale);

}



function creaPersonaggio3D(colore){

    let gruppo = new THREE.Group();

    let nero = 0x2b2438;

    // Corpo: un cilindro sottile e un po' storto, come un tratto di penna
    let corpo = segmentoScarabocchio(0.6, 0.14, colore);
    corpo.position.y = 0.5;
    corpo.rotation.z = 0.06;
    gruppo.add(corpo);

    // Testa: una sfera leggermente schiacciata, col contorno nero (effetto "disegnato")
    let testaContorno = new THREE.Mesh(
        new THREE.SphereGeometry(0.34, 10, 10),
        new THREE.MeshBasicMaterial({ color: nero, side: THREE.BackSide })
    );
    testaContorno.scale.set(1.08, 1.08, 1.08);
    testaContorno.position.y = 1.05;
    gruppo.add(testaContorno);

    let testa = new THREE.Mesh(
        new THREE.SphereGeometry(0.32, 10, 10),
        new THREE.MeshStandardMaterial({ color: 0xffdbac, flatShading: true })
    );
    testa.position.y = 1.05;
    gruppo.add(testa);

    // Occhi: due piccoli punti neri come uno scarabocchio
    let materialeOcchi = new THREE.MeshBasicMaterial({ color: nero });

    let occhioSx = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 6), materialeOcchi);
    occhioSx.position.set(-0.12, 1.08, 0.28);
    gruppo.add(occhioSx);

    let occhioDx = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 6), materialeOcchi);
    occhioDx.position.set(0.1, 1.06, 0.28);
    gruppo.add(occhioDx);

    // Sorriso: una piccola linea curva fatta con un toro sottile
    let sorriso = new THREE.Mesh(
        new THREE.TorusGeometry(0.09, 0.015, 6, 10, Math.PI),
        materialeOcchi
    );
    sorriso.position.set(0, 0.98, 0.29);
    sorriso.rotation.z = Math.PI;
    gruppo.add(sorriso);

    // Braccia: due bastoncini sottili e storti
    let braccioSx = segmentoScarabocchio(0.4, 0.06, nero);
    braccioSx.position.set(-0.28, 0.6, 0);
    braccioSx.rotation.z = 0.5;
    gruppo.add(braccioSx);

    let braccioDx = segmentoScarabocchio(0.4, 0.06, nero);
    braccioDx.position.set(0.28, 0.6, 0);
    braccioDx.rotation.z = -0.45;
    gruppo.add(braccioDx);

    // Gambe: due bastoncini sottili
    let gambaSx = segmentoScarabocchio(0.42, 0.07, nero);
    gambaSx.position.set(-0.12, 0.05, 0);
    gambaSx.rotation.z = 0.12;
    gruppo.add(gambaSx);

    let gambaDx = segmentoScarabocchio(0.42, 0.07, nero);
    gambaDx.position.set(0.14, 0.05, 0);
    gambaDx.rotation.z = -0.1;
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

    orologioAnimazione += 0.06;

    if(gruppoPersonaggio3D){

        gruppoPersonaggio3D.position.y = 0.05 + Math.sin(orologioAnimazione) * 0.05;
        gruppoPersonaggio3D.rotation.z = Math.sin(orologioAnimazione * 0.7) * 0.06;

    }

    ordineEdifici.forEach(function(nome){

        if(edificiMesh[nome] && edificiMesh[nome].userData.indicatore){
            let indicatore = edificiMesh[nome].userData.indicatore;
            indicatore.rotation.y += 0.05;
            indicatore.position.y = indicatore.userData.baseY + Math.sin(orologioAnimazione * 1.3) * 0.15;
        }

        if(edificiMeshDuplicato[nome] && edificiMeshDuplicato[nome].userData.indicatore){
            let indicatoreDup = edificiMeshDuplicato[nome].userData.indicatore;
            indicatoreDup.rotation.y += 0.05;
            indicatoreDup.position.y = indicatoreDup.userData.baseY + Math.sin(orologioAnimazione * 1.3) * 0.15;
        }

    });

    renderer3D.render(scena3D, camera3D);

}

animaScena3D();



// ---------- Movimento nella mappa 3D ----------

let posizioneX = 0;
let posizioneZ = 0;

let vicinoAttuale = null;

const PASSO = 0.45;
const LIMITE_X = 6.4;
const LIMITE_Z = 6.6;
const DISTANZA_INGRESSO = 1.2;



function posizionaIniziale(){

    posizioneX = 0;
    posizioneZ = 6.2;

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



// Tenendo premuto un bottone o un tasto, il personaggio continua a camminare
// finché non lo si rilascia.

let intervalloMovimento = null;
let direzioneAttiva = null;
const PAUSA_TRA_PASSI = 130; // millisecondi tra un passo e l'altro mentre si tiene premuto



function iniziaMovimentoContinuo(nomeDirezione, dx, dz){

    if(direzioneAttiva === nomeDirezione){
        return; // già in movimento in questa direzione
    }

    fermaMovimentoContinuo();

    direzioneAttiva = nomeDirezione;

    muovi(dx, dz); // primo passo subito, per rispondere anche a un tocco veloce

    intervalloMovimento = setInterval(function(){
        muovi(dx, dz);
    }, PAUSA_TRA_PASSI);

}



function fermaMovimentoContinuo(){

    if(intervalloMovimento){
        clearInterval(intervalloMovimento);
        intervalloMovimento = null;
    }

    direzioneAttiva = null;

}



function collegaBottoneDirezione(idBottone, nomeDirezione, dx, dz){

    let bottone = document.getElementById(idBottone);

    bottone.addEventListener("pointerdown", function(evento){
        evento.preventDefault();
        iniziaMovimentoContinuo(nomeDirezione, dx, dz);
    });

    bottone.addEventListener("pointerup", fermaMovimentoContinuo);
    bottone.addEventListener("pointerleave", fermaMovimentoContinuo);
    bottone.addEventListener("pointercancel", fermaMovimentoContinuo);

}

collegaBottoneDirezione("btnSu", "su", 0, -PASSO);
collegaBottoneDirezione("btnGiu", "giu", 0, PASSO);
collegaBottoneDirezione("btnSinistra", "sinistra", -PASSO, 0);
collegaBottoneDirezione("btnDestra", "destra", PASSO, 0);



function direzioneDaTasto(tasto){

    if(tasto === "ArrowUp" || tasto === "w" || tasto === "W"){
        return { nome:"su", dx:0, dz:-PASSO };
    }

    if(tasto === "ArrowDown" || tasto === "s" || tasto === "S"){
        return { nome:"giu", dx:0, dz:PASSO };
    }

    if(tasto === "ArrowLeft" || tasto === "a" || tasto === "A"){
        return { nome:"sinistra", dx:-PASSO, dz:0 };
    }

    if(tasto === "ArrowRight" || tasto === "d" || tasto === "D"){
        return { nome:"destra", dx:PASSO, dz:0 };
    }

    return null;

}



document.addEventListener("keydown", function(evento){

    let direzione = direzioneDaTasto(evento.key);

    if(direzione){
        iniziaMovimentoContinuo(direzione.nome, direzione.dx, direzione.dz);
    }

});



document.addEventListener("keyup", function(evento){

    let direzione = direzioneDaTasto(evento.key);

    if(direzione && direzione.nome === direzioneAttiva){
        fermaMovimentoContinuo();
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

    renderer3D.setSize(mappa.clientWidth || 900, 520, false);
    camera3D.aspect = (mappa.clientWidth || 900) / 520;
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
