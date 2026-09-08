// ---------- Sistema "città" (partite separate) ----------

function elencoCitta(){

    let dati = localStorage.getItem("elencoCitta");

    return dati ? JSON.parse(dati) : [];

}



function salvaElencoCitta(elenco){

    localStorage.setItem("elencoCitta", JSON.stringify(elenco));

}



let cittaAttiva = localStorage.getItem("cittaAttiva") || null;



function chiave(nomeBase){

    return "citta_" + cittaAttiva + "_" + nomeBase;

}



function creaNuovaCitta(nome){

    let elenco = elencoCitta();

    let id = "c" + Date.now();

    elenco.push({ id:id, nome:nome });

    salvaElencoCitta(elenco);

    selezionaCitta(id);

}



function selezionaCitta(id){

    cittaAttiva = id;

    localStorage.setItem("cittaAttiva", id);

    document.getElementById("selezioneCitta").classList.add("nascosto");

    inizializzaGioco();

}



function confermaNuovaCitta(){

    let campo = document.getElementById("nomeNuovaCitta");

    let nome = campo.value.trim();

    if(!nome){
        nome = t("cittaSenzaNome");
    }

    creaNuovaCitta(nome);

}



function haProgressoVecchio(){

    return localStorage.getItem("buildings") !== null;

}



function importaProgressoVecchio(){

    let elenco = elencoCitta();

    let id = "c" + Date.now();

    elenco.push({ id:id, nome: t("titoloApp").replace("🏙️ ", "") });

    salvaElencoCitta(elenco);

    cittaAttiva = id;

    localStorage.setItem("cittaAttiva", id);

    let chiaviDaCopiare = [
        "buildings", "cittaEducativa", "personaggioScelto",
        "arcade_talpa_record", "arcade_memoria_record", "arcade_simon_record",
        "arcade_numero_record", "arcade_tris_vittorie", "arcade_serpente_record",
        "arcade_reazione_record", "arcade_bandiera_record", "arcade_impiccato_vittorie",
        "arcade_puzzle_record"
    ];

    chiaviDaCopiare.forEach(function(chiaveVecchia){

        let valore = localStorage.getItem(chiaveVecchia);

        if(valore !== null){
            localStorage.setItem(chiave(chiaveVecchia), valore);
        }

    });

    document.getElementById("selezioneCitta").classList.add("nascosto");

    inizializzaGioco();

}



function renderizzaSelezioneCitta(){

    let elenco = elencoCitta();

    let contenitore = document.getElementById("elencoCittaContenitore");

    let listaHtml = elenco.map(function(c){
        return `<button class="quizButton" onclick="selezionaCitta('${c.id}')">🏙️ ${c.nome}</button>`;
    }).join("");

    let importaHtml = haProgressoVecchio()
        ? `<button class="quizButton" onclick="importaProgressoVecchio()">${t("importaCitta")}</button>`
        : "";

    contenitore.innerHTML = `

    ${listaHtml}

    ${importaHtml}

    <input type="text" id="nomeNuovaCitta" class="inputTesto" placeholder="${t("placeholderNomeCitta")}">

    <button class="quizButton" onclick="confermaNuovaCitta()">${t("creaCitta")}</button>

    `;

}



function tornaSelezioneCitta(){

    localStorage.removeItem("cittaAttiva");

    location.reload();

}



function salvaOraProgresso(){

    if(typeof saveBuildings === "function"){
        saveBuildings();
    }

    if(typeof saveGame === "function"){
        saveGame();
    }

    apriGestioneSalvataggi(true);

}



renderizzaSelezioneCitta();
