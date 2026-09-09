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
        cliccaEdificio:"Clicca un edificio per iniziare.",
        nomeTalpa:"🐹 Acchiappa la Talpa",
        nomeMemoria:"🧠 Memoria",
        nomeSimon:"🎨 Sequenza Colori",
        nomeNumero:"🔢 Indovina il Numero",
        nomeTris:"⭕ Tris",
        nomeSerpente:"🐍 Serpente",
        nomeReazione:"⚡ Reazione Veloce",
        nomeBandiera:"🌍 Indovina la Bandiera",
        nomeImpiccato:"🔤 Impiccato",
        nomePuzzle:"🧩 Puzzle Scorrevole",
        rigioca:"Rigioca",
        nessunRecord:"Nessun record ancora",
        record:"Record",
        vittorie:"Vittorie",
        salvataggi:"💾 Salvataggi",
        cittaAttuale:"Città attuale",
        salvaOra:"💾 Salva ora",
        cambiaCitta:"🔄 Cambia città",
        progressoSalvato:"✅ Progresso salvato!",
        salvaAutomatico:"Il gioco salva sempre da solo, ma puoi salvare anche a mano quando vuoi.",
        titoloApp:"🏙️ La mia città",
        sceltaCittaTitolo:"🏙️ Scegli la tua città",
        sceltaCittaSottotitolo:"Ogni città ha il suo progresso separato.",
        placeholderNomeCitta:"Nome nuova città",
        creaCitta:"➕ Crea nuova città",
        importaCitta:"⬆️ Importa la mia vecchia città",
        cittaSenzaNome:"Città senza nome",
        rinominaCitta:"✏️ Rinomina città"
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
        cliccaEdificio:"Click a building to start.",
        nomeTalpa:"🐹 Whack-a-Mole",
        nomeMemoria:"🧠 Memory",
        nomeSimon:"🎨 Color Sequence",
        nomeNumero:"🔢 Guess the Number",
        nomeTris:"⭕ Tic-Tac-Toe",
        nomeSerpente:"🐍 Snake",
        nomeReazione:"⚡ Quick Reaction",
        nomeBandiera:"🌍 Guess the Flag",
        nomeImpiccato:"🔤 Hangman",
        nomePuzzle:"🧩 Sliding Puzzle",
        rigioca:"Play again",
        nessunRecord:"No record yet",
        record:"Record",
        vittorie:"Wins",
        salvataggi:"💾 Saves",
        cittaAttuale:"Current city",
        salvaOra:"💾 Save now",
        cambiaCitta:"🔄 Change city",
        progressoSalvato:"✅ Progress saved!",
        salvaAutomatico:"The game always saves by itself, but you can also save manually whenever you want.",
        titoloApp:"🏙️ My City",
        sceltaCittaTitolo:"🏙️ Choose your city",
        sceltaCittaSottotitolo:"Each city has its own separate progress.",
        placeholderNomeCitta:"New city name",
        creaCitta:"➕ Create new city",
        importaCitta:"⬆️ Import my old city",
        cittaSenzaNome:"Unnamed city",
        rinominaCitta:"✏️ Rename city"
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
    let elTitoloApp = document.getElementById("titoloApp");
    let elTitoloSceltaCitta = document.getElementById("titoloSceltaCitta");
    let elSottotitoloSceltaCitta = document.getElementById("sottotitoloSceltaCitta");

    if(elTitolo) elTitolo.textContent = t("titoloScelta");
    if(elSottotitolo) elSottotitolo.textContent = t("sottotitoloScelta");
    if(elCambiaPersonaggio) elCambiaPersonaggio.textContent = t("cambiaPersonaggio");
    if(elTitoloBenvenuto) elTitoloBenvenuto.textContent = t("benvenuto");
    if(elTestoBenvenuto) elTestoBenvenuto.textContent = t("cliccaEdificio");
    if(elTitoloApp) elTitoloApp.textContent = t("titoloApp");
    if(elTitoloSceltaCitta) elTitoloSceltaCitta.textContent = t("sceltaCittaTitolo");
    if(elSottotitoloSceltaCitta) elSottotitoloSceltaCitta.textContent = t("sceltaCittaSottotitolo");

    if(typeof renderizzaSelezioneCitta === "function"){
        renderizzaSelezioneCitta();
    }

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
