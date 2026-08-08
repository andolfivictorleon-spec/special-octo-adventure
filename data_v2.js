const buildings = {

    biblioteca: {

        nome:"Biblioteca",

        emoji:"📚",

        livello:0,

        punteggio:0,

        migliore:0,

        missione:"Rispondi al quiz di cultura generale.",

        domande:[

            {
                domanda:"Chi ha scritto \"Pinocchio\"?",
                opzioni:[
                    { testo:"✍️ Carlo Collodi", corretta:true },
                    { testo:"✍️ Dante Alighieri", corretta:false },
                    { testo:"✍️ Alessandro Manzoni", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama il libro che spiega il significato delle parole?",
                opzioni:[
                    { testo:"📔 Diario", corretta:false },
                    { testo:"📖 Dizionario", corretta:true },
                    { testo:"📓 Quaderno", corretta:false }
                ]
            },

            {
                domanda:"In quale continente si trova l'Egitto?",
                opzioni:[
                    { testo:"🌍 Africa", corretta:true },
                    { testo:"🌏 Asia", corretta:false },
                    { testo:"🌎 Europa", corretta:false }
                ]
            },

            {
                domanda:"Chi ha scritto \"Il Piccolo Principe\"?",
                opzioni:[
                    { testo:"✍️ Antoine de Saint-Exupéry", corretta:true },
                    { testo:"✍️ J.K. Rowling", corretta:false },
                    { testo:"✍️ Roald Dahl", corretta:false }
                ]
            },

            {
                domanda:"Qual è considerato il fiume più lungo del mondo?",
                opzioni:[
                    { testo:"🌊 Il Nilo", corretta:true },
                    { testo:"🌊 Il Po", corretta:false },
                    { testo:"🌊 Il Tevere", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama la scrittura con i disegnini dell'antico Egitto?",
                opzioni:[
                    { testo:"𓁿 Geroglifici", corretta:true },
                    { testo:"🔤 Alfabeto latino", corretta:false },
                    { testo:"😀 Emoji", corretta:false }
                ]
            },

            {
                domanda:"In che anno Cristoforo Colombo arrivò in America?",
                opzioni:[
                    { testo:"🗓️ 1492", corretta:true },
                    { testo:"🗓️ 1800", corretta:false },
                    { testo:"🗓️ 1000", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama una storia inventata con animali che parlano e insegna una lezione?",
                opzioni:[
                    { testo:"🦊 Favola", corretta:true },
                    { testo:"📰 Biografia", corretta:false },
                    { testo:"📚 Enciclopedia", corretta:false }
                ]
            },

            {
                domanda:"Qual è la capitale d'Italia?",
                opzioni:[
                    { testo:"🏛️ Roma", corretta:true },
                    { testo:"🏙️ Milano", corretta:false },
                    { testo:"🌋 Napoli", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama chi scrive un libro?",
                opzioni:[
                    { testo:"✍️ Autore", corretta:true },
                    { testo:"🎭 Attore", corretta:false },
                    { testo:"🏗️ Architetto", corretta:false }
                ]
            },

            {
                domanda:"Qual è il pianeta più vicino al Sole?",
                opzioni:[
                    { testo:"☿️ Mercurio", corretta:true },
                    { testo:"♀️ Venere", corretta:false },
                    { testo:"♂️ Marte", corretta:false }
                ]
            },

            {
                domanda:"Qual è la lingua ufficiale del Regno Unito?",
                opzioni:[
                    { testo:"🇬🇧 Inglese", corretta:true },
                    { testo:"🇫🇷 Francese", corretta:false },
                    { testo:"🇩🇪 Tedesco", corretta:false }
                ]
            },

            {
                domanda:"Qual è l'oceano più grande del mondo?",
                opzioni:[
                    { testo:"🌊 Oceano Pacifico", corretta:true },
                    { testo:"🌊 Oceano Atlantico", corretta:false },
                    { testo:"🌊 Mar Mediterraneo", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama la storia della propria vita scritta da sé stessi?",
                opzioni:[
                    { testo:"📔 Autobiografia", corretta:true },
                    { testo:"🦊 Fiaba", corretta:false },
                    { testo:"📖 Dizionario", corretta:false }
                ]
            },

            {
                domanda:"In quale città si trova la Torre Eiffel?",
                opzioni:[
                    { testo:"🗼 Parigi", corretta:true },
                    { testo:"🏛️ Roma", corretta:false },
                    { testo:"🎡 Londra", corretta:false }
                ]
            },

            {
                domanda:"Come si chiamano le lettere che formano le parole scritte?",
                opzioni:[
                    { testo:"🔤 Alfabeto", corretta:true },
                    { testo:"🔢 Numeri", corretta:false },
                    { testo:"🎵 Note musicali", corretta:false }
                ]
            },

            {
                domanda:"Qual è il monte più alto del mondo?",
                opzioni:[
                    { testo:"🏔️ Everest", corretta:true },
                    { testo:"🏔️ Monte Bianco", corretta:false },
                    { testo:"🌋 Vesuvio", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama chi disegna le immagini di un libro?",
                opzioni:[
                    { testo:"🖍️ Illustratore", corretta:true },
                    { testo:"📰 Editore", corretta:false },
                    { testo:"✏️ Correttore", corretta:false }
                ]
            },

            {
                domanda:"In quale paese si trova la Grande Muraglia?",
                opzioni:[
                    { testo:"🇨🇳 Cina", corretta:true },
                    { testo:"🇯🇵 Giappone", corretta:false },
                    { testo:"🇮🇳 India", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama la storia di vita di una persona scritta da un'altra persona?",
                opzioni:[
                    { testo:"📕 Biografia", corretta:true },
                    { testo:"📔 Autobiografia", corretta:false },
                    { testo:"🦊 Fiaba", corretta:false }
                ]
            }

        ]

    },


    municipio: {

        nome:"Municipio",

        emoji:"🏛️",

        livello:0,

        punteggio:0,

        migliore:0,

        missione:"Rispondi al quiz sulle regole della città.",

        domande:[

            {
                domanda:"Chi guida un Comune in Italia?",
                opzioni:[
                    { testo:"🎓 Il Sindaco", corretta:true },
                    { testo:"👑 Il Re", corretta:false },
                    { testo:"📮 Il Postino", corretta:false }
                ]
            },

            {
                domanda:"Cos'è una legge?",
                opzioni:[
                    { testo:"📜 Una regola che tutti devono rispettare", corretta:true },
                    { testo:"🎲 Un gioco da tavolo", corretta:false },
                    { testo:"🍰 Un dolce", corretta:false }
                ]
            },

            {
                domanda:"Dove si vota per eleggere il Sindaco?",
                opzioni:[
                    { testo:"🗳️ Al seggio elettorale", corretta:true },
                    { testo:"🛒 Al supermercato", corretta:false },
                    { testo:"🏊 In piscina", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama il palazzo dove lavora il Sindaco?",
                opzioni:[
                    { testo:"🏛️ Municipio", corretta:true },
                    { testo:"🏥 Ospedale", corretta:false },
                    { testo:"🏟️ Stadio", corretta:false }
                ]
            },

            {
                domanda:"Quale di questi è un diritto di ogni bambino?",
                opzioni:[
                    { testo:"📚 Andare a scuola", corretta:true },
                    { testo:"🚗 Guidare la macchina", corretta:false },
                    { testo:"🗳️ Votare alle elezioni", corretta:false }
                ]
            },

            {
                domanda:"Cosa fanno i vigili urbani?",
                opzioni:[
                    { testo:"🚦 Regolano il traffico e aiutano i cittadini", corretta:true },
                    { testo:"🍳 Cucinano nei ristoranti", corretta:false },
                    { testo:"📐 Insegnano matematica", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama il documento che serve per farsi riconoscere?",
                opzioni:[
                    { testo:"🪪 Carta d'identità", corretta:true },
                    { testo:"📄 Pagella", corretta:false },
                    { testo:"🎟️ Biglietto del cinema", corretta:false }
                ]
            },

            {
                domanda:"Quale colore del semaforo significa 'fermati'?",
                opzioni:[
                    { testo:"🔴 Rosso", corretta:true },
                    { testo:"🟢 Verde", corretta:false },
                    { testo:"🔵 Blu", corretta:false }
                ]
            },

            {
                domanda:"Cosa può succedere se non si rispettano le regole della strada?",
                opzioni:[
                    { testo:"🎟️ Si può ricevere una multa", corretta:true },
                    { testo:"🏆 Si vince un premio", corretta:false },
                    { testo:"Niente di niente", corretta:false }
                ]
            },

            {
                domanda:"Come si chiamano le persone che vivono in una città?",
                opzioni:[
                    { testo:"🧑‍🤝‍🧑 Cittadini", corretta:true },
                    { testo:"🐾 Animali", corretta:false },
                    { testo:"✈️ Solo turisti", corretta:false }
                ]
            },

            {
                domanda:"Chi decide le leggi nazionali in Italia?",
                opzioni:[
                    { testo:"🏛️ Il Parlamento", corretta:true },
                    { testo:"🎒 Il Preside", corretta:false },
                    { testo:"🏫 Il Sindaco", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama il documento che serve per guidare un'automobile?",
                opzioni:[
                    { testo:"🚗 Patente", corretta:true },
                    { testo:"📄 Pagella", corretta:false },
                    { testo:"🛂 Passaporto", corretta:false }
                ]
            },

            {
                domanda:"A cosa servono le tasse pagate dai cittadini?",
                opzioni:[
                    { testo:"🏫 A pagare scuole, strade e servizi pubblici", corretta:true },
                    { testo:"🎁 A comprare regali", corretta:false },
                    { testo:"❌ A niente", corretta:false }
                ]
            },

            {
                domanda:"Chi rappresenta l'Italia nel mondo come capo dello Stato?",
                opzioni:[
                    { testo:"🎖️ Il Presidente della Repubblica", corretta:true },
                    { testo:"🏛️ Il Sindaco", corretta:false },
                    { testo:"🎓 Il Maestro", corretta:false }
                ]
            },

            {
                domanda:"Cosa si festeggia il 2 giugno in Italia?",
                opzioni:[
                    { testo:"🇮🇹 La Festa della Repubblica", corretta:true },
                    { testo:"🎄 Il Natale", corretta:false },
                    { testo:"🏖️ Ferragosto", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama il luogo dove i cittadini vanno a votare?",
                opzioni:[
                    { testo:"🗳️ Seggio elettorale", corretta:true },
                    { testo:"📚 Biblioteca", corretta:false },
                    { testo:"🏟️ Stadio", corretta:false }
                ]
            },

            {
                domanda:"Chi si occupa di spegnere gli incendi?",
                opzioni:[
                    { testo:"🚒 I vigili del fuoco", corretta:true },
                    { testo:"🚦 I vigili urbani", corretta:false },
                    { testo:"🩺 I dottori", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama la raccolta differenziata dei rifiuti?",
                opzioni:[
                    { testo:"♻️ Riciclo", corretta:true },
                    { testo:"🔥 Bruciare tutto insieme", corretta:false },
                    { testo:"🗑️ Sprecare", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama la bandiera italiana, con i tre colori verde, bianco e rosso?",
                opzioni:[
                    { testo:"🇮🇹 Tricolore", corretta:true },
                    { testo:"🏳️ Bicolore", corretta:false },
                    { testo:"🚩 Stendardo", corretta:false }
                ]
            },

            {
                domanda:"Chi si occupa di aiutare i cittadini in caso di pericolo o reato?",
                opzioni:[
                    { testo:"👮 La polizia", corretta:true },
                    { testo:"📮 Il postino", corretta:false },
                    { testo:"🔧 L'idraulico", corretta:false }
                ]
            }

        ]

    },


    laboratorio: {

        nome:"Laboratorio",

        emoji:"🔬",

        livello:0,

        punteggio:0,

        migliore:0,

        missione:"Rispondi al quiz di scienze.",

        domande:[

            {
                domanda:"Cosa diventa l'acqua quando bolle?",
                opzioni:[
                    { testo:"💨 Vapore", corretta:true },
                    { testo:"🧊 Ghiaccio", corretta:false },
                    { testo:"🪨 Sasso", corretta:false }
                ]
            },

            {
                domanda:"Di cosa hanno bisogno le piante per crescere?",
                opzioni:[
                    { testo:"☀️ Luce e acqua", corretta:true },
                    { testo:"🌑 Solo buio", corretta:false },
                    { testo:"🧴 Solo plastica", corretta:false }
                ]
            },

            {
                domanda:"Quanti pianeti ci sono nel Sistema Solare?",
                opzioni:[
                    { testo:"🪐 8", corretta:true },
                    { testo:"🪐 3", corretta:false },
                    { testo:"🪐 15", corretta:false }
                ]
            },

            {
                domanda:"Qual è la stella al centro del Sistema Solare?",
                opzioni:[
                    { testo:"☀️ Il Sole", corretta:true },
                    { testo:"🌙 La Luna", corretta:false },
                    { testo:"🔴 Marte", corretta:false }
                ]
            },

            {
                domanda:"Quale gas respiriamo per vivere?",
                opzioni:[
                    { testo:"💨 Ossigeno", corretta:true },
                    { testo:"☁️ Anidride carbonica", corretta:false },
                    { testo:"🎈 Elio", corretta:false }
                ]
            },

            {
                domanda:"Cosa succede all'acqua quando fa molto freddo?",
                opzioni:[
                    { testo:"🧊 Diventa ghiaccio", corretta:true },
                    { testo:"💨 Diventa vapore", corretta:false },
                    { testo:"✨ Sparisce", corretta:false }
                ]
            },

            {
                domanda:"Quale organo pompa il sangue nel corpo?",
                opzioni:[
                    { testo:"❤️ Il cuore", corretta:true },
                    { testo:"🍽️ Lo stomaco", corretta:false },
                    { testo:"🫘 Il fegato", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama il processo con cui le piante usano la luce per nutrirsi?",
                opzioni:[
                    { testo:"🌿 Fotosintesi", corretta:true },
                    { testo:"🍽️ Digestione", corretta:false },
                    { testo:"😮‍💨 Respirazione", corretta:false }
                ]
            },

            {
                domanda:"Quanti stati principali della materia esistono (solido, liquido, gassoso)?",
                opzioni:[
                    { testo:"3️⃣ 3", corretta:true },
                    { testo:"2️⃣ 2", corretta:false },
                    { testo:"5️⃣ 5", corretta:false }
                ]
            },

            {
                domanda:"Cosa usiamo per vedere le cose molto piccole in laboratorio?",
                opzioni:[
                    { testo:"🔬 Il microscopio", corretta:true },
                    { testo:"🔭 Il telescopio", corretta:false },
                    { testo:"📷 La macchina fotografica", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama la forza che ci tiene attaccati a terra?",
                opzioni:[
                    { testo:"🌍 Gravità", corretta:true },
                    { testo:"⚡ Elettricità", corretta:false },
                    { testo:"🧲 Magnetismo", corretta:false }
                ]
            },

            {
                domanda:"Quale organo del corpo usiamo per vedere?",
                opzioni:[
                    { testo:"👀 Gli occhi", corretta:true },
                    { testo:"👂 Le orecchie", corretta:false },
                    { testo:"👃 Il naso", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama lo strumento per misurare la temperatura?",
                opzioni:[
                    { testo:"🌡️ Termometro", corretta:true },
                    { testo:"📏 Righello", corretta:false },
                    { testo:"⚖️ Bilancia", corretta:false }
                ]
            },

            {
                domanda:"Quale di questi animali NON è un insetto?",
                opzioni:[
                    { testo:"🕷️ Il ragno", corretta:true },
                    { testo:"🐜 La formica", corretta:false },
                    { testo:"🦋 La farfalla", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama il passaggio dell'acqua da liquido a vapore?",
                opzioni:[
                    { testo:"💨 Evaporazione", corretta:true },
                    { testo:"🧊 Solidificazione", corretta:false },
                    { testo:"💧 Condensazione", corretta:false }
                ]
            },

            {
                domanda:"Quale pianeta è conosciuto come il Pianeta Rosso?",
                opzioni:[
                    { testo:"🔴 Marte", corretta:true },
                    { testo:"♀️ Venere", corretta:false },
                    { testo:"🪐 Giove", corretta:false }
                ]
            },

            {
                domanda:"Qual è la più piccola unità che compone tutti gli esseri viventi?",
                opzioni:[
                    { testo:"🔬 La cellula", corretta:true },
                    { testo:"⚛️ L'atomo", corretta:false },
                    { testo:"💧 La molecola", corretta:false }
                ]
            },

            {
                domanda:"Cosa produce l'energia in una pala eolica?",
                opzioni:[
                    { testo:"💨 Il vento", corretta:true },
                    { testo:"☀️ Il sole", corretta:false },
                    { testo:"💧 L'acqua", corretta:false }
                ]
            },

            {
                domanda:"Quante zampe ha di solito un insetto?",
                opzioni:[
                    { testo:"6️⃣ 6", corretta:true },
                    { testo:"4️⃣ 4", corretta:false },
                    { testo:"8️⃣ 8", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama lo strumento che serve per pesare gli oggetti?",
                opzioni:[
                    { testo:"⚖️ Bilancia", corretta:true },
                    { testo:"🌡️ Termometro", corretta:false },
                    { testo:"📏 Righello", corretta:false }
                ]
            }

        ]

    },


    museo: {

        nome:"Museo d'Arte",

        emoji:"🎨",

        livello:0,

        punteggio:0,

        migliore:0,

        missione:"Rispondi al quiz sull'arte.",

        domande:[

            {
                domanda:"Con cosa si dipinge di solito un quadro?",
                opzioni:[
                    { testo:"🖌️ Pennello e colori", corretta:true },
                    { testo:"🔨 Martello", corretta:false },
                    { testo:"🍴 Forchetta", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama chi scolpisce statue?",
                opzioni:[
                    { testo:"🗿 Scultore", corretta:true },
                    { testo:"👨‍🍳 Cuoco", corretta:false },
                    { testo:"🚗 Autista", corretta:false }
                ]
            },

            {
                domanda:"Quali sono due colori primari?",
                opzioni:[
                    { testo:"🔴🔵 Rosso e blu", corretta:true },
                    { testo:"🟢🟣 Verde e viola", corretta:false },
                    { testo:"🟤⚪ Marrone e grigio", corretta:false }
                ]
            },

            {
                domanda:"Chi dipinse il famoso quadro della Gioconda?",
                opzioni:[
                    { testo:"🎨 Leonardo da Vinci", corretta:true },
                    { testo:"🎨 Pablo Picasso", corretta:false },
                    { testo:"🎨 Vincent van Gogh", corretta:false }
                ]
            },

            {
                domanda:"Dove si trovano di solito le opere d'arte da ammirare?",
                opzioni:[
                    { testo:"🏛️ Nei musei", corretta:true },
                    { testo:"🛒 Nei supermercati", corretta:false },
                    { testo:"🅿️ Nei parcheggi", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama un dipinto che ritrae il volto di una persona?",
                opzioni:[
                    { testo:"🖼️ Ritratto", corretta:true },
                    { testo:"🏞️ Paesaggio", corretta:false },
                    { testo:"🍎 Natura morta", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama un dipinto che ritrae frutta o oggetti?",
                opzioni:[
                    { testo:"🍎 Natura morta", corretta:true },
                    { testo:"🖼️ Ritratto", corretta:false },
                    { testo:"🏞️ Paesaggio", corretta:false }
                ]
            },

            {
                domanda:"Quale strumento usa uno scultore per lavorare la pietra?",
                opzioni:[
                    { testo:"🔨 Scalpello", corretta:true },
                    { testo:"🖌️ Pennello", corretta:false },
                    { testo:"📏 Righello", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama il luogo dove gli artisti espongono le loro opere?",
                opzioni:[
                    { testo:"🖼️ Galleria d'arte", corretta:true },
                    { testo:"🏋️ Palestra", corretta:false },
                    { testo:"📚 Biblioteca", corretta:false }
                ]
            },

            {
                domanda:"Come si chiamano i colori ottenuti mescolando due colori primari?",
                opzioni:[
                    { testo:"🎨 Colori secondari", corretta:true },
                    { testo:"👻 Colori invisibili", corretta:false },
                    { testo:"❓ Colori senza nome", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama un dipinto molto grande fatto direttamente su un muro?",
                opzioni:[
                    { testo:"🖼️ Murale", corretta:true },
                    { testo:"🖼️ Ritratto", corretta:false },
                    { testo:"🖼️ Miniatura", corretta:false }
                ]
            },

            {
                domanda:"Quale arte usa il corpo per esprimersi a ritmo di musica?",
                opzioni:[
                    { testo:"💃 La danza", corretta:true },
                    { testo:"🗿 La scultura", corretta:false },
                    { testo:"🖌️ La pittura", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama l'edificio dove si vanno a vedere spettacoli teatrali?",
                opzioni:[
                    { testo:"🎭 Teatro", corretta:true },
                    { testo:"🏛️ Museo", corretta:false },
                    { testo:"📚 Biblioteca", corretta:false }
                ]
            },

            {
                domanda:"Di che materiale sono fatte molte statue antiche famose?",
                opzioni:[
                    { testo:"🗿 Marmo", corretta:true },
                    { testo:"🧸 Plastica", corretta:false },
                    { testo:"📦 Cartone", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama l'arte di progettare edifici e spazi?",
                opzioni:[
                    { testo:"🏗️ Architettura", corretta:true },
                    { testo:"📸 Fotografia", corretta:false },
                    { testo:"🎵 Musica", corretta:false }
                ]
            },

            {
                domanda:"Quale colore si ottiene mescolando il giallo e il blu?",
                opzioni:[
                    { testo:"🟢 Verde", corretta:true },
                    { testo:"🟠 Arancione", corretta:false },
                    { testo:"🟣 Viola", corretta:false }
                ]
            },

            {
                domanda:"Chi ha dipinto il famoso quadro \"Notte stellata\"?",
                opzioni:[
                    { testo:"🎨 Vincent van Gogh", corretta:true },
                    { testo:"🎨 Claude Monet", corretta:false },
                    { testo:"🎨 Pablo Picasso", corretta:false }
                ]
            },

            {
                domanda:"Come si chiama l'arte di scattare immagini con una macchina fotografica?",
                opzioni:[
                    { testo:"📷 Fotografia", corretta:true },
                    { testo:"🎬 Cinematografia", corretta:false },
                    { testo:"🖌️ Pittura", corretta:false }
                ]
            },

            {
                domanda:"In quale famoso museo di Parigi si trova la Gioconda?",
                opzioni:[
                    { testo:"🏛️ Il Louvre", corretta:true },
                    { testo:"🏛️ Il Prado", corretta:false },
                    { testo:"🏛️ Gli Uffizi", corretta:false }
                ]
            },

            {
                domanda:"Quale colore si ottiene mescolando il rosso e il giallo?",
                opzioni:[
                    { testo:"🟠 Arancione", corretta:true },
                    { testo:"🟢 Verde", corretta:false },
                    { testo:"🟣 Viola", corretta:false }
                ]
            }

        ]

    }

};
