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
        nome = "Città senza nome";
    }

    creaNuovaCitta(nome);

}



function renderizzaSelezioneCitta(){

    let elenco = elencoCitta();

    let contenitore = document.getElementById("elencoCittaContenitore");

    let listaHtml = elenco.map(function(c){
        return `<button class="quizButton" onclick="selezionaCitta('${c.id}')">🏙️ ${c.nome}</button>`;
    }).join("");

    contenitore.innerHTML = `

    ${listaHtml}

    <input type="text" id="nomeNuovaCitta" class="inputTesto" placeholder="Nome nuova città">

    <button class="quizButton" onclick="confermaNuovaCitta()">➕ Crea nuova città</button>

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
