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



function updateInfo(){

    document.getElementById(
        "playerInfo"
    ).innerHTML =
    "⭐ Punti biblioteca: "
    + player.biblioteca;

}



function openBuilding(type){


if(type==="biblioteca"){


panel.innerHTML = `

<h2>📚 Biblioteca</h2>

<p>
Missione:
Rispondi al quiz sugli animali.
</p>


<button class="quizButton"
onclick="startQuiz()">

Inizia missione

</button>

`;

}



if(type==="municipio"){


panel.innerHTML = `

<h2>🏛️ Municipio</h2>

<p>
Qui potrai vedere la crescita della città.
</p>

`;

}


}




function startQuiz(){


panel.innerHTML = `

<h2>Quiz Biblioteca</h2>


<p>
Quale animale è un mammifero?
</p>


<button class="quizButton"
onclick="answer(false)">
🐟 Pesce
</button>


<button class="quizButton"
onclick="answer(true)">
🐶 Cane
</button>


<button class="quizButton"
onclick="answer(false)">
🐦 Aquila
</button>


`;

}



function answer(correct){


let score = correct ? 10 : 5;


player.biblioteca = score;


saveGame();


let level =
calculateLevel(score);



panel.innerHTML = `

<h2>Risultato</h2>

<p>
Hai ottenuto ${score}/10
</p>


<div class="level">
${getEmoji(level)}
</div>


<h3>
Biblioteca livello ${level}
</h3>


<button class="quizButton"
onclick="location.reload()">

Torna alla città

</button>

`;

updateInfo();


}




function calculateLevel(score){


if(score<=5)
return "Bronzo";


if(score<=7)
return "Argento";


if(score<=9)
return "Oro";


return "Diamante";


}




function getEmoji(level){


switch(level){


case "Bronzo":
return "📚";


case "Argento":
return "🏫";


case "Oro":
return "🏛️✨";


case "Diamante":
return "🏰💎";


}



}



loadGame();

updateInfo();
