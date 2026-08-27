// ---------- Sistema lingua / Language system ----------

const TESTI = {

    it: {
        titoloScelta:"Scegli il tuo personaggio!",
        sottotitoloScelta:"Un personaggio 3D che si muove nella città",
        cambiaPersonaggio:"🔄 Cambia personaggio",
        edificiSbloccati:"Edifici sbloccati",
        missione:"Missione",
        iniziaMissione:"Inizia missione",
        quiz:"Quiz",
        domanda:"Domanda",
        di:"di",
        esatto:"✅ Esatto!",
        sbagliato:"❌ Sbagliato!",
        prossimaDomanda:"Prossima domanda",
        vediRisultato:"Vedi risultato",
        risultato:"Risultato",
        haiRispostoBene:"Hai risposto bene a",
        domandeSu:"domande su",
        recordMigliorato:"🎉 Hai fatto meglio dell'ultima volta! L'edificio cresce!",
        livello:"livello",
        tornaAllaCitta:"Torna alla città",
        salaGiochi:"🕹️ Sala Giochi",
        scegliMinigioco:"Scegli un minigioco!",
        tornaSalaGiochi:"Torna alla Sala Giochi",
        impostazioni:"⚙️ Impostazioni",
        scegliLingua:"Scegli la lingua",
        chiudi:"Chiudi",
        benvenuto:"Benvenuto!",
        cliccaEdificio:"Clicca un edificio per iniziare."
    },

    en: {
        titoloScelta:"Choose your character!",
        sottotitoloScelta:"A 3D character that walks around the city",
        cambiaPersonaggio:"🔄 Change character",
        edificiSbloccati:"Buildings unlocked",
        missione:"Mission",
        iniziaMissione:"Start mission",
        quiz:"Quiz",
        domanda:"Question",
        di:"of",
        esatto:"✅ Correct!",
        sbagliato:"❌ Wrong!",
        prossimaDomanda:"Next question",
        vediRisultato:"See result",
        risultato:"Result",
        haiRispostoBene:"You answered correctly on",
        domandeSu:"out of",
        recordMigliorato:"🎉 You did better than last time! The building grows!",
        livello:"level",
        tornaAllaCitta:"Back to the city",
        salaGiochi:"🕹️ Arcade",
        scegliMinigioco:"Choose a minigame!",
        tornaSalaGiochi:"Back to the Arcade",
        impostazioni:"⚙️ Settings",
        scegliLingua:"Choose language",
        chiudi:"Close",
        benvenuto:"Welcome!",
        cliccaEdificio:"Click a building to start."
    }

};



let linguaCorrente = localStorage.getItem("lingua") || "en";



function t(chiave){

    return (TESTI[linguaCorrente] && TESTI[linguaCorrente][chiave]) || chiave;

}



let buildings = (linguaCorrente === "it") ? buildingsIT : buildingsEN;



function applicaTraduzioniStatiche(){

    let elTitolo = document.getElementById("titoloScelta");
    let elSottotitolo = document.getElementById("sottotitoloScelta");
    let elCambiaPersonaggio = document.getElementById("btnCambiaPersonaggio");
    let elTitoloBenvenuto = document.getElementById("titoloBenvenuto");
    let elTestoBenvenuto = document.getElementById("testoBenvenuto");

    if(elTitolo) elTitolo.textContent = t("titoloScelta");
    if(elSottotitolo) elSottotitolo.textContent = t("sottotitoloScelta");
    if(elCambiaPersonaggio) elCambiaPersonaggio.textContent = t("cambiaPersonaggio");
    if(elTitoloBenvenuto) elTitoloBenvenuto.textContent = t("benvenuto");
    if(elTestoBenvenuto) elTestoBenvenuto.textContent = t("cliccaEdificio");

}



function cambiaLingua(nuovaLingua){

    linguaCorrente = nuovaLingua;

    localStorage.setItem("lingua", nuovaLingua);

    buildings = (nuovaLingua === "it") ? buildingsIT : buildingsEN;

    if(typeof loadBuildings === "function"){
        loadBuildings();
    }

    if(typeof aggiornaAspettoEdifici === "function"){
        aggiornaAspettoEdifici();
    }

    if(typeof updateInfo === "function"){
        updateInfo();
    }

    applicaTraduzioniStatiche();

    renderizzaImpostazioni();

}



function apriImpostazioni(){

    document.getElementById("finestraImpostazioni").classList.remove("nascosto");

    renderizzaImpostazioni();

}



function chiudiImpostazioni(){

    document.getElementById("finestraImpostazioni").classList.add("nascosto");

}



function renderizzaImpostazioni(){

    let corpo = document.getElementById("corpoImpostazioni");

    if(!corpo){
        return;
    }

    corpo.innerHTML = `

    <h2>${t("impostazioni")}</h2>

    <p>${t("scegliLingua")}</p>

    <button class="quizButton" onclick="cambiaLingua('en')">
        🇬🇧 English ${linguaCorrente === "en" ? "✅" : ""}
    </button>

    <button class="quizButton" onclick="cambiaLingua('it')">
        🇮🇹 Italiano ${linguaCorrente === "it" ? "✅" : ""}
    </button>

    <button class="quizButton" onclick="chiudiImpostazioni()">${t("chiudi")}</button>

    `;

}


applicaTraduzioniStatiche();
