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

    },


    ospedale: {

        nome:"Ospedale",

        emoji:"🏥",

        livello:0,

        punteggio:0,

        migliore:0,

        missione:"Rispondi al quiz sul corpo umano e la salute.",

        domande:[

            { domanda:"Quale organo pompa il sangue nel corpo?", opzioni:[
                { testo:"❤️ Cuore", corretta:true },
                { testo:"🍽️ Stomaco", corretta:false },
                { testo:"🧠 Cervello", corretta:false }
            ]},

            { domanda:"Quante ossa ha circa lo scheletro di un adulto?", opzioni:[
                { testo:"🦴 206", corretta:true },
                { testo:"🦴 100", corretta:false },
                { testo:"🦴 500", corretta:false }
            ]},

            { domanda:"Quale organo usiamo per respirare?", opzioni:[
                { testo:"🫁 Polmoni", corretta:true },
                { testo:"🫘 Fegato", corretta:false },
                { testo:"🩸 Reni", corretta:false }
            ]},

            { domanda:"Cosa usiamo per disinfettare una piccola ferita?", opzioni:[
                { testo:"🩹 Disinfettante", corretta:true },
                { testo:"🧵 Colla", corretta:false },
                { testo:"🌾 Farina", corretta:false }
            ]},

            { domanda:"Chi cura le persone malate in ospedale?", opzioni:[
                { testo:"🩺 I medici", corretta:true },
                { testo:"👨‍🍳 I cuochi", corretta:false },
                { testo:"🚗 Gli autisti", corretta:false }
            ]},

            { domanda:"Come si chiama chi aiuta i medici e si prende cura dei pazienti?", opzioni:[
                { testo:"👩‍⚕️ Infermiere", corretta:true },
                { testo:"📮 Postino", corretta:false },
                { testo:"🔧 Meccanico", corretta:false }
            ]},

            { domanda:"Cosa dobbiamo fare se ci facciamo un piccolo taglio?", opzioni:[
                { testo:"🩹 Lavare e coprire la ferita", corretta:true },
                { testo:"🙈 Ignorarlo", corretta:false },
                { testo:"🙊 Nasconderlo", corretta:false }
            ]},

            { domanda:"Quale numero si chiama in Italia in caso di emergenza medica?", opzioni:[
                { testo:"☎️ 118", corretta:true },
                { testo:"☎️ 100", corretta:false },
                { testo:"☎️ 25", corretta:false }
            ]},

            { domanda:"Cosa aiuta a guarire un osso rotto?", opzioni:[
                { testo:"🦴 Il gesso", corretta:true },
                { testo:"📼 Il nastro adesivo", corretta:false },
                { testo:"❌ Niente", corretta:false }
            ]},

            { domanda:"Quale organo filtra il sangue e produce l'urina?", opzioni:[
                { testo:"🫘 I reni", corretta:true },
                { testo:"❤️ Il cuore", corretta:false },
                { testo:"🫁 I polmoni", corretta:false }
            ]},

            { domanda:"Quanti denti da latte ha di solito un bambino?", opzioni:[
                { testo:"🦷 20", corretta:true },
                { testo:"🦷 32", corretta:false },
                { testo:"🦷 10", corretta:false }
            ]},

            { domanda:"Cosa dobbiamo fare prima di mangiare?", opzioni:[
                { testo:"🧼 Lavarci le mani", corretta:true },
                { testo:"🏃 Correre", corretta:false },
                { testo:"📢 Urlare", corretta:false }
            ]},

            { domanda:"Da dove prendiamo soprattutto la vitamina D?", opzioni:[
                { testo:"☀️ Dal sole", corretta:true },
                { testo:"🌑 Dal buio", corretta:false },
                { testo:"❄️ Dal ghiaccio", corretta:false }
            ]},

            { domanda:"Come si chiama il medico specializzato nei denti?", opzioni:[
                { testo:"🦷 Dentista", corretta:true },
                { testo:"👶 Pediatra", corretta:false },
                { testo:"👁️ Oculista", corretta:false }
            ]},

            { domanda:"Cosa misura il termometro?", opzioni:[
                { testo:"🌡️ La temperatura del corpo", corretta:true },
                { testo:"⚖️ Il peso", corretta:false },
                { testo:"📏 L'altezza", corretta:false }
            ]},

            { domanda:"Quale organo ci permette di pensare?", opzioni:[
                { testo:"🧠 Il cervello", corretta:true },
                { testo:"🍽️ Lo stomaco", corretta:false },
                { testo:"🫘 Il fegato", corretta:false }
            ]},

            { domanda:"Perché è importante dormire abbastanza?", opzioni:[
                { testo:"😴 Per far riposare corpo e mente", corretta:true },
                { testo:"⏰ Per perdere tempo", corretta:false },
                { testo:"❌ Non serve a niente", corretta:false }
            ]},

            { domanda:"Cosa dovremmo fare se un amico si fa male?", opzioni:[
                { testo:"🆘 Chiamare un adulto per aiuto", corretta:true },
                { testo:"😂 Ridere", corretta:false },
                { testo:"🏃 Scappare", corretta:false }
            ]},

            { domanda:"Quale pasto è considerato il più importante della giornata?", opzioni:[
                { testo:"🥣 La colazione", corretta:true },
                { testo:"🌙 Uno spuntino di notte", corretta:false },
                { testo:"❌ Nessuno in particolare", corretta:false }
            ]},

            { domanda:"Come si chiama il medico specializzato nei bambini?", opzioni:[
                { testo:"👶 Pediatra", corretta:true },
                { testo:"🦷 Dentista", corretta:false },
                { testo:"🐾 Veterinario", corretta:false }
            ]}

        ]

    },


    stadio: {

        nome:"Stadio",

        emoji:"⚽",

        livello:0,

        punteggio:0,

        migliore:0,

        missione:"Rispondi al quiz sullo sport.",

        domande:[

            { domanda:"Quanti giocatori ci sono in una squadra di calcio in campo?", opzioni:[
                { testo:"⚽ 11", corretta:true },
                { testo:"⚽ 7", corretta:false },
                { testo:"⚽ 15", corretta:false }
            ]},

            { domanda:"Ogni quanti anni si svolgono le Olimpiadi estive?", opzioni:[
                { testo:"🏅 4 anni", corretta:true },
                { testo:"🏅 2 anni", corretta:false },
                { testo:"🏅 10 anni", corretta:false }
            ]},

            { domanda:"In quale sport si segna facendo canestro?", opzioni:[
                { testo:"🏀 Basket", corretta:true },
                { testo:"⚽ Calcio", corretta:false },
                { testo:"🎾 Tennis", corretta:false }
            ]},

            { domanda:"Quale attrezzo si usa per giocare a tennis?", opzioni:[
                { testo:"🎾 Racchetta", corretta:true },
                { testo:"🏑 Bastone da hockey", corretta:false },
                { testo:"⚾ Mazza da baseball", corretta:false }
            ]},

            { domanda:"In quale sport si colpisce una palla con una mazza per farla volare lontano?", opzioni:[
                { testo:"⚾ Baseball", corretta:true },
                { testo:"🏊 Nuoto", corretta:false },
                { testo:"🏐 Pallavolo", corretta:false }
            ]},

            { domanda:"Cosa indossa un ciclista in testa per sicurezza?", opzioni:[
                { testo:"🪖 Il casco", corretta:true },
                { testo:"🎩 Il cappello", corretta:false },
                { testo:"❌ Niente", corretta:false }
            ]},

            { domanda:"In quale sport si gareggia nell'acqua per la vittoria?", opzioni:[
                { testo:"🏊 Nuoto", corretta:true },
                { testo:"🏃 Atletica", corretta:false },
                { testo:"🤺 Scherma", corretta:false }
            ]},

            { domanda:"Come si chiama il luogo dove si corre nell'atletica leggera?", opzioni:[
                { testo:"🏟️ Pista", corretta:true },
                { testo:"🏊 Piscina", corretta:false },
                { testo:"🌳 Campo", corretta:false }
            ]},

            { domanda:"In quale sport si colpisce la palla soprattutto con i piedi?", opzioni:[
                { testo:"⚽ Calcio", corretta:true },
                { testo:"🏀 Basket", corretta:false },
                { testo:"🏐 Pallavolo", corretta:false }
            ]},

            { domanda:"Come si chiama la medaglia per il primo posto alle Olimpiadi?", opzioni:[
                { testo:"🥇 Oro", corretta:true },
                { testo:"🥈 Argento", corretta:false },
                { testo:"🥉 Bronzo", corretta:false }
            ]},

            { domanda:"In quale sport si salta più in alto possibile su un'asticella?", opzioni:[
                { testo:"🏃 Salto in alto", corretta:true },
                { testo:"🏃 Salto in lungo", corretta:false },
                { testo:"🏃 Corsa veloce", corretta:false }
            ]},

            { domanda:"Quale sport si pratica su una tavola con le rotelle?", opzioni:[
                { testo:"🛹 Skateboard", corretta:true },
                { testo:"⛷️ Sci", corretta:false },
                { testo:"🏊 Nuoto", corretta:false }
            ]},

            { domanda:"In quale sport due squadre si lanciano la palla oltre una rete alta?", opzioni:[
                { testo:"🏐 Pallavolo", corretta:true },
                { testo:"⚽ Calcio", corretta:false },
                { testo:"🏉 Rugby", corretta:false }
            ]},

            { domanda:"Cosa si usa per proteggere i denti in alcuni sport da contatto?", opzioni:[
                { testo:"🦷 Paradenti", corretta:true },
                { testo:"🕶️ Occhiali", corretta:false },
                { testo:"🎩 Cappello", corretta:false }
            ]},

            { domanda:"Quale sport invernale si pratica sulla neve con due assi ai piedi?", opzioni:[
                { testo:"⛷️ Sci", corretta:true },
                { testo:"🏊 Nuoto", corretta:false },
                { testo:"🚴 Ciclismo", corretta:false }
            ]},

            { domanda:"Quanti tempi ha di solito una partita di calcio?", opzioni:[
                { testo:"⚽ 2", corretta:true },
                { testo:"⚽ 4", corretta:false },
                { testo:"⚽ 3", corretta:false }
            ]},

            { domanda:"Come si chiama chi allena una squadra sportiva?", opzioni:[
                { testo:"📋 Allenatore", corretta:true },
                { testo:"🚩 Arbitro", corretta:false },
                { testo:"📣 Tifoso", corretta:false }
            ]},

            { domanda:"Chi controlla che le regole vengano rispettate durante una partita?", opzioni:[
                { testo:"🚩 L'arbitro", corretta:true },
                { testo:"📣 Il pubblico", corretta:false },
                { testo:"🧤 Il portiere", corretta:false }
            ]},

            { domanda:"In quale sport si combatte con una spada sportiva?", opzioni:[
                { testo:"🤺 Scherma", corretta:true },
                { testo:"🥋 Judo", corretta:false },
                { testo:"🚴 Ciclismo", corretta:false }
            ]},

            { domanda:"Come si chiama chi tifa per una squadra durante la partita?", opzioni:[
                { testo:"📣 Tifoso", corretta:true },
                { testo:"🚩 Arbitro", corretta:false },
                { testo:"📋 Allenatore", corretta:false }
            ]}

        ]

    },


    teatro: {

        nome:"Teatro",

        emoji:"🎭",

        livello:0,

        punteggio:0,

        migliore:0,

        missione:"Rispondi al quiz sul teatro e le emozioni.",

        domande:[

            { domanda:"Come si chiama chi recita in un'opera teatrale?", opzioni:[
                { testo:"🎭 Attore", corretta:true },
                { testo:"🎬 Regista", corretta:false },
                { testo:"🍿 Spettatore", corretta:false }
            ]},

            { domanda:"Come si chiama chi dirige uno spettacolo teatrale?", opzioni:[
                { testo:"🎬 Regista", corretta:true },
                { testo:"🎭 Attore", corretta:false },
                { testo:"🧵 Costumista", corretta:false }
            ]},

            { domanda:"Come si chiama il testo scritto che gli attori seguono a teatro?", opzioni:[
                { testo:"📜 Copione", corretta:true },
                { testo:"📔 Diario", corretta:false },
                { testo:"🍳 Ricetta", corretta:false }
            ]},

            { domanda:"Cosa indossano gli attori per interpretare un personaggio?", opzioni:[
                { testo:"👘 Costumi", corretta:true },
                { testo:"🎒 Zaini", corretta:false },
                { testo:"🧤 Guanti da lavoro", corretta:false }
            ]},

            { domanda:"Come si chiama il pubblico che guarda e applaude a teatro?", opzioni:[
                { testo:"🍿 Spettatori", corretta:true },
                { testo:"🎭 Attori", corretta:false },
                { testo:"✍️ Autori", corretta:false }
            ]},

            { domanda:"Quale espressione mostra il volto quando si è felici?", opzioni:[
                { testo:"😊 Sorriso", corretta:true },
                { testo:"😠 Broncio", corretta:false },
                { testo:"😐 Sguardo vuoto", corretta:false }
            ]},

            { domanda:"Come si chiama una storia teatrale buffa che fa ridere?", opzioni:[
                { testo:"😂 Commedia", corretta:true },
                { testo:"😢 Tragedia", corretta:false },
                { testo:"📰 Cronaca", corretta:false }
            ]},

            { domanda:"Come si chiama una storia teatrale molto triste?", opzioni:[
                { testo:"😢 Tragedia", corretta:true },
                { testo:"😂 Commedia", corretta:false },
                { testo:"🦊 Favola", corretta:false }
            ]},

            { domanda:"Cosa cala all'inizio e alla fine di uno spettacolo teatrale?", opzioni:[
                { testo:"🎪 Il sipario", corretta:true },
                { testo:"🏠 Il tetto", corretta:false },
                { testo:"💡 La luce", corretta:false }
            ]},

            { domanda:"Come si chiama chi scrive un'opera teatrale?", opzioni:[
                { testo:"✍️ Drammaturgo", corretta:true },
                { testo:"🎭 Attore", corretta:false },
                { testo:"💄 Truccatore", corretta:false }
            ]},

            { domanda:"Come si chiama il luogo dove gli attori si preparano prima di entrare in scena?", opzioni:[
                { testo:"🚪 Camerino", corretta:true },
                { testo:"🛋️ Sala d'attesa", corretta:false },
                { testo:"🍳 Cucina", corretta:false }
            ]},

            { domanda:"Quale emozione mostriamo di solito con le lacrime?", opzioni:[
                { testo:"😢 Tristezza", corretta:true },
                { testo:"😄 Felicità", corretta:false },
                { testo:"😑 Noia", corretta:false }
            ]},

            { domanda:"Come si chiama il ballo a ritmo di musica presente in molti spettacoli?", opzioni:[
                { testo:"💃 Danza", corretta:true },
                { testo:"🗣️ Recitazione", corretta:false },
                { testo:"📖 Lettura", corretta:false }
            ]},

            { domanda:"Cosa fa il pubblico per mostrare di aver apprezzato uno spettacolo?", opzioni:[
                { testo:"👏 Applaude", corretta:true },
                { testo:"😾 Fischia sempre", corretta:false },
                { testo:"🚪 Se ne va subito", corretta:false }
            ]},

            { domanda:"Come si chiama una piccola opera teatrale cantata e ballata?", opzioni:[
                { testo:"🎤 Musical", corretta:true },
                { testo:"📰 Documentario", corretta:false },
                { testo:"📺 Telegiornale", corretta:false }
            ]},

            { domanda:"Come si chiama il luogo rialzato dove recitano gli attori?", opzioni:[
                { testo:"🎪 Palcoscenico", corretta:true },
                { testo:"🏡 Cortile", corretta:false },
                { testo:"🚪 Corridoio", corretta:false }
            ]},

            { domanda:"Quale emozione si mostra con le sopracciglia alzate e la bocca aperta?", opzioni:[
                { testo:"😲 Sorpresa", corretta:true },
                { testo:"😑 Noia", corretta:false },
                { testo:"😌 Calma", corretta:false }
            ]},

            { domanda:"Come si chiama chi crea gli abiti indossati dagli attori?", opzioni:[
                { testo:"🧵 Costumista", corretta:true },
                { testo:"🎬 Regista", corretta:false },
                { testo:"💡 Tecnico luci", corretta:false }
            ]},

            { domanda:"Quale emozione mostriamo quando aggrottiamo la fronte e stringiamo i pugni?", opzioni:[
                { testo:"😠 Rabbia", corretta:true },
                { testo:"😄 Gioia", corretta:false },
                { testo:"😴 Sonno", corretta:false }
            ]},

            { domanda:"Come si chiama la persona che controlla le luci durante uno spettacolo?", opzioni:[
                { testo:"💡 Tecnico luci", corretta:true },
                { testo:"🎭 Attore", corretta:false },
                { testo:"🍿 Spettatore", corretta:false }
            ]}

        ]

    },


    mercato: {

        nome:"Mercato",

        emoji:"🛒",

        livello:0,

        punteggio:0,

        migliore:0,

        missione:"Rispondi al quiz sull'economia e gli alimenti.",

        domande:[

            { domanda:"Cosa usiamo per pagare quando compriamo qualcosa?", opzioni:[
                { testo:"💶 Il denaro", corretta:true },
                { testo:"🍃 Le foglie", corretta:false },
                { testo:"🪨 I sassi", corretta:false }
            ]},

            { domanda:"Come si chiama il luogo dove si vendono frutta e verdura fresca?", opzioni:[
                { testo:"🛒 Mercato", corretta:true },
                { testo:"🏥 Ospedale", corretta:false },
                { testo:"🎭 Teatro", corretta:false }
            ]},

            { domanda:"Cosa succede spesso al prezzo di un prodotto molto richiesto e raro?", opzioni:[
                { testo:"📈 Di solito sale", corretta:true },
                { testo:"📉 Scende sempre", corretta:false },
                { testo:"➡️ Resta sempre uguale", corretta:false }
            ]},

            { domanda:"Come si chiama la moneta usata in Italia e in molti paesi europei?", opzioni:[
                { testo:"💶 Euro", corretta:true },
                { testo:"💵 Dollaro", corretta:false },
                { testo:"💷 Sterlina", corretta:false }
            ]},

            { domanda:"Cosa riceviamo quando paghiamo più del prezzo giusto?", opzioni:[
                { testo:"💰 Il resto", corretta:true },
                { testo:"🎁 Un regalo", corretta:false },
                { testo:"❌ Niente", corretta:false }
            ]},

            { domanda:"Come si chiama il foglio che mostra quanto abbiamo speso?", opzioni:[
                { testo:"🧾 Scontrino", corretta:true },
                { testo:"🎫 Biglietto", corretta:false },
                { testo:"🎓 Diploma", corretta:false }
            ]},

            { domanda:"Da dove viene di solito il latte che compriamo?", opzioni:[
                { testo:"🐄 Dalle mucche", corretta:true },
                { testo:"🐔 Dalle galline", corretta:false },
                { testo:"🐟 Dai pesci", corretta:false }
            ]},

            { domanda:"Come si chiama chi vende frutta e verdura al mercato?", opzioni:[
                { testo:"🍎 Fruttivendolo", corretta:true },
                { testo:"📮 Postino", corretta:false },
                { testo:"🚒 Pompiere", corretta:false }
            ]},

            { domanda:"Cosa conviene fare prima di comprare, per non spendere troppo?", opzioni:[
                { testo:"📝 Fare una lista e un budget", corretta:true },
                { testo:"🎲 Comprare tutto a caso", corretta:false },
                { testo:"🙈 Non pensarci", corretta:false }
            ]},

            { domanda:"Come si chiama il posto dove si tiene il denaro risparmiato in sicurezza?", opzioni:[
                { testo:"🏦 Banca", corretta:true },
                { testo:"🏫 Scuola", corretta:false },
                { testo:"⚽ Stadio", corretta:false }
            ]},

            { domanda:"Cosa significa \"risparmiare\"?", opzioni:[
                { testo:"💰 Mettere via dei soldi invece di spenderli subito", corretta:true },
                { testo:"💸 Spendere tutto subito", corretta:false },
                { testo:"🎁 Regalare tutto", corretta:false }
            ]},

            { domanda:"Quale di questi è un alimento?", opzioni:[
                { testo:"🍞 Pane", corretta:true },
                { testo:"🪑 Sedia", corretta:false },
                { testo:"✏️ Matita", corretta:false }
            ]},

            { domanda:"Come si chiama il luogo dove si coltivano frutta e verdura?", opzioni:[
                { testo:"🌾 Campo/orto", corretta:true },
                { testo:"🏢 Ufficio", corretta:false },
                { testo:"🏋️ Palestra", corretta:false }
            ]},

            { domanda:"Perché alcuni prodotti al mercato sono scontati?", opzioni:[
                { testo:"🏷️ Per farli comprare a un prezzo più basso", corretta:true },
                { testo:"💔 Perché sono sempre rotti", corretta:false },
                { testo:"😠 Per punire i clienti", corretta:false }
            ]},

            { domanda:"Cosa significa \"scambiare\" due oggetti?", opzioni:[
                { testo:"🔄 Dare una cosa e riceverne un'altra", corretta:true },
                { testo:"🗑️ Buttare via qualcosa", corretta:false },
                { testo:"🙈 Nascondere qualcosa", corretta:false }
            ]},

            { domanda:"Come si chiama il contenitore dove mettiamo la spesa al mercato?", opzioni:[
                { testo:"🛒 Sporta/carrello", corretta:true },
                { testo:"🎒 Zaino da scuola", corretta:false },
                { testo:"🧳 Valigia", corretta:false }
            ]},

            { domanda:"Da dove viene di solito il miele?", opzioni:[
                { testo:"🐝 Dalle api", corretta:true },
                { testo:"🐄 Dalle mucche", corretta:false },
                { testo:"🐟 Dai pesci", corretta:false }
            ]},

            { domanda:"Cosa dobbiamo controllare su un alimento prima di comprarlo?", opzioni:[
                { testo:"📅 La data di scadenza", corretta:true },
                { testo:"🎨 Il colore dell'etichetta", corretta:false },
                { testo:"❌ Niente", corretta:false }
            ]},

            { domanda:"Come si chiama la richiesta di un prodotto da parte delle persone?", opzioni:[
                { testo:"📈 Domanda", corretta:true },
                { testo:"📉 Offerta", corretta:false },
                { testo:"❓ Risposta", corretta:false }
            ]},

            { domanda:"Quale di questi NON è un modo comune per pagare?", opzioni:[
                { testo:"🍃 Con le foglie", corretta:true },
                { testo:"🪙 Con le monete", corretta:false },
                { testo:"💳 Con la carta", corretta:false }
            ]}

        ]

    },


    stazione: {

        nome:"Stazione",

        emoji:"🚉",

        livello:0,

        punteggio:0,

        migliore:0,

        missione:"Rispondi al quiz sui trasporti e la geografia.",

        domande:[

            { domanda:"Su cosa viaggia un treno?", opzioni:[
                { testo:"🛤️ Binari", corretta:true },
                { testo:"🛣️ Strade", corretta:false },
                { testo:"☁️ Nel cielo", corretta:false }
            ]},

            { domanda:"Come si chiama chi guida un treno?", opzioni:[
                { testo:"🚂 Macchinista", corretta:true },
                { testo:"✈️ Pilota", corretta:false },
                { testo:"⚓ Capitano", corretta:false }
            ]},

            { domanda:"Cosa serve per salire su un treno?", opzioni:[
                { testo:"🎫 Un biglietto", corretta:true },
                { testo:"🛂 Un passaporto", corretta:false },
                { testo:"❌ Niente", corretta:false }
            ]},

            { domanda:"Quale mezzo di trasporto vola nel cielo?", opzioni:[
                { testo:"✈️ Aereo", corretta:true },
                { testo:"🚂 Treno", corretta:false },
                { testo:"🚢 Nave", corretta:false }
            ]},

            { domanda:"Quale mezzo di trasporto viaggia sull'acqua?", opzioni:[
                { testo:"🚢 Nave", corretta:true },
                { testo:"🚂 Treno", corretta:false },
                { testo:"✈️ Aereo", corretta:false }
            ]},

            { domanda:"Come si chiama il luogo dove i treni si fermano per far salire i passeggeri?", opzioni:[
                { testo:"🚉 Stazione", corretta:true },
                { testo:"🛫 Aeroporto", corretta:false },
                { testo:"⚓ Porto", corretta:false }
            ]},

            { domanda:"Quale mezzo pubblico si muove sulle strade della città con molte fermate?", opzioni:[
                { testo:"🚌 Autobus", corretta:true },
                { testo:"🚤 Sottomarino", corretta:false },
                { testo:"✈️ Aereo", corretta:false }
            ]},

            { domanda:"Come si chiama un treno che viaggia sottoterra in città?", opzioni:[
                { testo:"🚇 Metropolitana", corretta:true },
                { testo:"🚡 Funivia", corretta:false },
                { testo:"🚝 Monorotaia", corretta:false }
            ]},

            { domanda:"Cosa mostra un orario dei treni?", opzioni:[
                { testo:"🕒 Quando arrivano e partono i treni", corretta:true },
                { testo:"🍞 Il prezzo del pane", corretta:false },
                { testo:"☀️ Le previsioni del tempo", corretta:false }
            ]},

            { domanda:"Quale mezzo di trasporto è mosso dalla forza delle gambe?", opzioni:[
                { testo:"🚲 Bicicletta", corretta:true },
                { testo:"✈️ Aereo", corretta:false },
                { testo:"🚢 Nave", corretta:false }
            ]},

            { domanda:"Come si chiama il documento che serve per viaggiare in un altro paese?", opzioni:[
                { testo:"🛂 Passaporto", corretta:true },
                { testo:"📄 Pagella", corretta:false },
                { testo:"🧾 Scontrino", corretta:false }
            ]},

            { domanda:"Qual è il continente più grande del mondo?", opzioni:[
                { testo:"🌏 Asia", corretta:true },
                { testo:"🌍 Europa", corretta:false },
                { testo:"🌏 Oceania", corretta:false }
            ]},

            { domanda:"Come si chiama l'insieme di regole per attraversare la strada in sicurezza?", opzioni:[
                { testo:"🚦 Codice della strada", corretta:true },
                { testo:"📚 Regolamento scolastico", corretta:false },
                { testo:"❌ Nessuna regola", corretta:false }
            ]},

            { domanda:"Cosa indica il colore verde di un semaforo per i pedoni?", opzioni:[
                { testo:"🚶 Si può attraversare", corretta:true },
                { testo:"🛑 Bisogna fermarsi", corretta:false },
                { testo:"🏃 Bisogna correre", corretta:false }
            ]},

            { domanda:"Quale mezzo di trasporto è tipico delle città con i canali, come Venezia?", opzioni:[
                { testo:"🚤 Gondola", corretta:true },
                { testo:"🛷 Slitta", corretta:false },
                { testo:"🛴 Monopattino", corretta:false }
            ]},

            { domanda:"Come si chiama la valigia che si porta in viaggio?", opzioni:[
                { testo:"🧳 Bagaglio", corretta:true },
                { testo:"🎒 Zainetto scolastico", corretta:false },
                { testo:"🗑️ Cestino", corretta:false }
            ]},

            { domanda:"Quale continente si trova più a sud di tutti?", opzioni:[
                { testo:"🧊 Antartide", corretta:true },
                { testo:"🌍 Europa", corretta:false },
                { testo:"🌏 Asia", corretta:false }
            ]},

            { domanda:"Come si chiama il grande specchio d'acqua salata che separa i continenti?", opzioni:[
                { testo:"🌊 Oceano", corretta:true },
                { testo:"🏞️ Lago", corretta:false },
                { testo:"🏞️ Fiume", corretta:false }
            ]},

            { domanda:"Quale mezzo pubblico è collegato a cavi sospesi e attraversa le montagne?", opzioni:[
                { testo:"🚡 Funivia", corretta:true },
                { testo:"🚇 Metropolitana", corretta:false },
                { testo:"🚋 Tram", corretta:false }
            ]},

            { domanda:"Come si chiama chi controlla i biglietti sul treno?", opzioni:[
                { testo:"🎫 Controllore", corretta:true },
                { testo:"🚂 Macchinista", corretta:false },
                { testo:"🚉 Capostazione", corretta:false }
            ]}

        ]

    },


    banca: {

        nome:"Banca",

        emoji:"🏦",

        livello:0,

        punteggio:0,

        migliore:0,

        missione:"Rispondi al quiz sui soldi e i numeri.",

        domande:[

            { domanda:"Cosa fa una banca con i soldi che le persone depositano?", opzioni:[
                { testo:"🏦 Li custodisce e li fa fruttare", corretta:true },
                { testo:"🗑️ Li butta via", corretta:false },
                { testo:"🙈 Li nasconde e basta", corretta:false }
            ]},

            { domanda:"Come si chiama il conto dove si tengono i risparmi in banca?", opzioni:[
                { testo:"💰 Conto di risparmio", corretta:true },
                { testo:"📖 Conto delle favole", corretta:false },
                { testo:"🎮 Conto dei giochi", corretta:false }
            ]},

            { domanda:"Quanto fa 15 + 27?", opzioni:[
                { testo:"🔢 42", corretta:true },
                { testo:"🔢 32", corretta:false },
                { testo:"🔢 52", corretta:false }
            ]},

            { domanda:"Quanto fa 100 - 45?", opzioni:[
                { testo:"🔢 55", corretta:true },
                { testo:"🔢 65", corretta:false },
                { testo:"🔢 45", corretta:false }
            ]},

            { domanda:"Se hai 20 euro e ne spendi 8, quanti te ne restano?", opzioni:[
                { testo:"💶 12", corretta:true },
                { testo:"💶 10", corretta:false },
                { testo:"💶 14", corretta:false }
            ]},

            { domanda:"Come si chiama la scatola dove i bambini mettono le monete risparmiate?", opzioni:[
                { testo:"🐷 Salvadanaio", corretta:true },
                { testo:"👛 Portafoglio", corretta:false },
                { testo:"🔒 Cassaforte", corretta:false }
            ]},

            { domanda:"Cosa significa \"fare un prestito\"?", opzioni:[
                { testo:"💵 Ricevere soldi da restituire più avanti", corretta:true },
                { testo:"🎁 Regalare soldi per sempre", corretta:false },
                { testo:"🍀 Trovare soldi per terra", corretta:false }
            ]},

            { domanda:"Quanto fa 8 x 7?", opzioni:[
                { testo:"🔢 56", corretta:true },
                { testo:"🔢 54", corretta:false },
                { testo:"🔢 64", corretta:false }
            ]},

            { domanda:"Se dividi 40 euro tra 5 amici in parti uguali, quanto riceve ciascuno?", opzioni:[
                { testo:"💶 8 euro", corretta:true },
                { testo:"💶 5 euro", corretta:false },
                { testo:"💶 10 euro", corretta:false }
            ]},

            { domanda:"Come si chiama la carta di plastica che si usa al posto dei contanti?", opzioni:[
                { testo:"💳 Bancomat/Carta di credito", corretta:true },
                { testo:"🪪 Carta d'identità", corretta:false },
                { testo:"🧻 Carta igienica", corretta:false }
            ]},

            { domanda:"Cosa significa \"budget\"?", opzioni:[
                { testo:"📝 Un piano per gestire quanto si spende e si risparmia", corretta:true },
                { testo:"🍰 Un tipo di dolce", corretta:false },
                { testo:"🎲 Un gioco da tavolo", corretta:false }
            ]},

            { domanda:"Quanto fa la metà di 50?", opzioni:[
                { testo:"🔢 25", corretta:true },
                { testo:"🔢 20", corretta:false },
                { testo:"🔢 30", corretta:false }
            ]},

            { domanda:"Cosa succede ai risparmi lasciati in banca nel tempo, di solito?", opzioni:[
                { testo:"📈 Possono crescere un po' con gli interessi", corretta:true },
                { testo:"👻 Spariscono sempre", corretta:false },
                { testo:"🪨 Diventano sassi", corretta:false }
            ]},

            { domanda:"Come si chiama chi lavora allo sportello di una banca?", opzioni:[
                { testo:"🏦 Impiegato bancario", corretta:true },
                { testo:"📮 Postino", corretta:false },
                { testo:"🚦 Vigile", corretta:false }
            ]},

            { domanda:"Quanto fa 9 x 9?", opzioni:[
                { testo:"🔢 81", corretta:true },
                { testo:"🔢 72", corretta:false },
                { testo:"🔢 91", corretta:false }
            ]},

            { domanda:"Se risparmi 5 euro a settimana, quanti avrai dopo 4 settimane?", opzioni:[
                { testo:"💶 20 euro", corretta:true },
                { testo:"💶 15 euro", corretta:false },
                { testo:"💶 25 euro", corretta:false }
            ]},

            { domanda:"Come si chiama il posto sicuro in banca dove si custodiscono oggetti di valore?", opzioni:[
                { testo:"🔒 Cassaforte", corretta:true },
                { testo:"🚪 Armadio", corretta:false },
                { testo:"🎒 Zaino", corretta:false }
            ]},

            { domanda:"Quanto fa 120 diviso 4?", opzioni:[
                { testo:"🔢 30", corretta:true },
                { testo:"🔢 40", corretta:false },
                { testo:"🔢 20", corretta:false }
            ]},

            { domanda:"Cosa conviene fare con una parte della propria paghetta?", opzioni:[
                { testo:"💰 Risparmiarla", corretta:true },
                { testo:"💸 Spenderla subito tutta", corretta:false },
                { testo:"🗑️ Perderla", corretta:false }
            ]},

            { domanda:"Quanto fa 6 + 6 + 6?", opzioni:[
                { testo:"🔢 18", corretta:true },
                { testo:"🔢 16", corretta:false },
                { testo:"🔢 20", corretta:false }
            ]}

        ]

    },


    parco: {

        nome:"Parco",

        emoji:"🌳",

        livello:0,

        punteggio:0,

        migliore:0,

        missione:"Rispondi al quiz sulla natura e l'ambiente.",

        domande:[

            { domanda:"Come si chiama il processo con cui le piante usano la luce per nutrirsi?", opzioni:[
                { testo:"🌿 Fotosintesi", corretta:true },
                { testo:"🔥 Combustione", corretta:false },
                { testo:"🧊 Congelamento", corretta:false }
            ]},

            { domanda:"Come si chiama la parte della pianta che assorbe l'acqua dal terreno?", opzioni:[
                { testo:"🌱 Radici", corretta:true },
                { testo:"🍃 Foglie", corretta:false },
                { testo:"🌸 Fiori", corretta:false }
            ]},

            { domanda:"Cosa producono i fiori che attira le api?", opzioni:[
                { testo:"🍯 Il nettare", corretta:true },
                { testo:"💨 Il fumo", corretta:false },
                { testo:"🧊 Il ghiaccio", corretta:false }
            ]},

            { domanda:"In quale stagione cadono di più le foglie dagli alberi?", opzioni:[
                { testo:"🍂 Autunno", corretta:true },
                { testo:"☀️ Estate", corretta:false },
                { testo:"❄️ Inverno", corretta:false }
            ]},

            { domanda:"Cosa dobbiamo fare per non danneggiare la natura in un parco?", opzioni:[
                { testo:"🚮 Non buttare rifiuti a terra", corretta:true },
                { testo:"🌿 Strappare le piante", corretta:false },
                { testo:"😱 Spaventare gli animali", corretta:false }
            ]},

            { domanda:"Come si chiama l'insieme di piante e animali che vivono in un ambiente naturale?", opzioni:[
                { testo:"🌎 Ecosistema", corretta:true },
                { testo:"🏢 Condominio", corretta:false },
                { testo:"🏪 Negozio", corretta:false }
            ]},

            { domanda:"Quale gas producono le piante e che noi respiriamo?", opzioni:[
                { testo:"💨 Ossigeno", corretta:true },
                { testo:"☁️ Anidride carbonica", corretta:false },
                { testo:"🎈 Azoto", corretta:false }
            ]},

            { domanda:"Come si chiama un albero che non perde le foglie in inverno?", opzioni:[
                { testo:"🌲 Sempreverde", corretta:true },
                { testo:"🍂 Caduco", corretta:false },
                { testo:"🥀 Secco", corretta:false }
            ]},

            { domanda:"Cosa dovremmo fare con i rifiuti riciclabili trovati al parco?", opzioni:[
                { testo:"♻️ Metterli nel cestino giusto per il riciclo", corretta:true },
                { testo:"🚮 Lasciarli a terra", corretta:false },
                { testo:"🔥 Bruciarli", corretta:false }
            ]},

            { domanda:"Quale animaletto raccoglie il polline dai fiori?", opzioni:[
                { testo:"🐝 Ape", corretta:true },
                { testo:"🦈 Squalo", corretta:false },
                { testo:"🐋 Balena", corretta:false }
            ]},

            { domanda:"In quale stagione sbocciano di più i fiori?", opzioni:[
                { testo:"🌸 Primavera", corretta:true },
                { testo:"❄️ Inverno", corretta:false },
                { testo:"🍂 Autunno", corretta:false }
            ]},

            { domanda:"Cosa serve alle piante, insieme a luce e acqua, per crescere bene?", opzioni:[
                { testo:"🌱 Terreno con nutrienti", corretta:true },
                { testo:"🧴 Plastica", corretta:false },
                { testo:"🏜️ Sabbia bollente", corretta:false }
            ]},

            { domanda:"Come si chiama un piccolo corso d'acqua naturale che scorre in un parco?", opzioni:[
                { testo:"💧 Ruscello", corretta:true },
                { testo:"🛣️ Autostrada", corretta:false },
                { testo:"🚶 Marciapiede", corretta:false }
            ]},

            { domanda:"Perché è importante piantare nuovi alberi?", opzioni:[
                { testo:"🌍 Aiutano ad avere aria pulita", corretta:true },
                { testo:"❌ Non servono a niente", corretta:false },
                { testo:"🌥️ Fanno solo ombra", corretta:false }
            ]},

            { domanda:"Come si chiama raccogliere insieme la spazzatura per pulire un parco?", opzioni:[
                { testo:"🚮 Raccolta rifiuti collettiva", corretta:true },
                { testo:"✊ Sciopero", corretta:false },
                { testo:"🏃 Gara di corsa", corretta:false }
            ]},

            { domanda:"Quale animale scava tane sotto terra nei parchi?", opzioni:[
                { testo:"🦫 Talpa", corretta:true },
                { testo:"🐬 Delfino", corretta:false },
                { testo:"🐟 Pesce", corretta:false }
            ]},

            { domanda:"Come si chiama il momento in cui un seme comincia a crescere?", opzioni:[
                { testo:"🌱 Germogliare", corretta:true },
                { testo:"🥀 Appassire", corretta:false },
                { testo:"🦋 Volare", corretta:false }
            ]},

            { domanda:"Cosa dovremmo fare se troviamo un animaletto ferito al parco?", opzioni:[
                { testo:"🆘 Avvisare un adulto", corretta:true },
                { testo:"🙈 Ignorarlo", corretta:false },
                { testo:"🎒 Portarlo a scuola di nascosto", corretta:false }
            ]},

            { domanda:"Che colore hanno di solito le foglie in primavera ed estate?", opzioni:[
                { testo:"🟢 Verde", corretta:true },
                { testo:"🔵 Blu", corretta:false },
                { testo:"🔴 Rosso", corretta:false }
            ]},

            { domanda:"Perché è importante non spaventare gli animali nel parco?", opzioni:[
                { testo:"🐿️ Per rispettare la fauna selvatica", corretta:true },
                { testo:"🍀 Perché portano sfortuna", corretta:false },
                { testo:"❌ Non è importante", corretta:false }
            ]}

        ]

    },


    zoo: {

        nome:"Zoo",

        emoji:"🦁",

        livello:0,

        punteggio:0,

        migliore:0,

        missione:"Rispondi al quiz sugli animali del mondo.",

        domande:[

            { domanda:"Qual è l'animale più grande della Terra?", opzioni:[
                { testo:"🐋 Balenottera azzurra", corretta:true },
                { testo:"🐘 Elefante", corretta:false },
                { testo:"🦒 Giraffa", corretta:false }
            ]},

            { domanda:"Quale animale ha una proboscide lunga?", opzioni:[
                { testo:"🐘 Elefante", corretta:true },
                { testo:"🦁 Leone", corretta:false },
                { testo:"🐯 Tigre", corretta:false }
            ]},

            { domanda:"Quale animale è famoso per i colori vivaci e per imitare le voci?", opzioni:[
                { testo:"🦜 Pappagallo", corretta:true },
                { testo:"🐧 Pinguino", corretta:false },
                { testo:"🦅 Aquila", corretta:false }
            ]},

            { domanda:"Dove vivono principalmente i pinguini?", opzioni:[
                { testo:"🧊 In zone fredde come l'Antartide", corretta:true },
                { testo:"🏜️ Nel deserto", corretta:false },
                { testo:"🌴 Nella giungla", corretta:false }
            ]},

            { domanda:"Quale animale ha il corpo a strisce e assomiglia a un cavallo?", opzioni:[
                { testo:"🦓 Zebra", corretta:true },
                { testo:"🐴 Cavallo", corretta:false },
                { testo:"🫏 Asino", corretta:false }
            ]},

            { domanda:"Quale grande felino ha strisce nere e arancioni?", opzioni:[
                { testo:"🐯 Tigre", corretta:true },
                { testo:"🦁 Leone", corretta:false },
                { testo:"🐆 Ghepardo", corretta:false }
            ]},

            { domanda:"Quale animale è il più veloce sulla terraferma?", opzioni:[
                { testo:"🐆 Ghepardo", corretta:true },
                { testo:"🐘 Elefante", corretta:false },
                { testo:"🐢 Tartaruga", corretta:false }
            ]},

            { domanda:"Quale animale porta i cuccioli in un marsupio sulla pancia?", opzioni:[
                { testo:"🦘 Canguro", corretta:true },
                { testo:"🐼 Panda", corretta:false },
                { testo:"🦁 Leone", corretta:false }
            ]},

            { domanda:"Quale animale mangia principalmente bambù?", opzioni:[
                { testo:"🐼 Panda", corretta:true },
                { testo:"🦁 Leone", corretta:false },
                { testo:"🦈 Squalo", corretta:false }
            ]},

            { domanda:"Quale grande animale ha un corno sul naso?", opzioni:[
                { testo:"🦏 Rinoceronte", corretta:true },
                { testo:"🦌 Cervo", corretta:false },
                { testo:"🐕 Cane", corretta:false }
            ]},

            { domanda:"Quale grande scimmia è famosa per la sua forza?", opzioni:[
                { testo:"🦍 Gorilla", corretta:true },
                { testo:"🦘 Canguro", corretta:false },
                { testo:"🐴 Cavallo", corretta:false }
            ]},

            { domanda:"Quale rettile molto lungo striscia senza zampe?", opzioni:[
                { testo:"🐍 Serpente", corretta:true },
                { testo:"🦎 Lucertola", corretta:false },
                { testo:"🐢 Tartaruga", corretta:false }
            ]},

            { domanda:"Quale animale marino ha otto tentacoli?", opzioni:[
                { testo:"🐙 Polpo", corretta:true },
                { testo:"🐬 Delfino", corretta:false },
                { testo:"🦈 Squalo", corretta:false }
            ]},

            { domanda:"Quale animale ha il collo più lungo tra tutti gli animali terrestri?", opzioni:[
                { testo:"🦒 Giraffa", corretta:true },
                { testo:"🐘 Elefante", corretta:false },
                { testo:"🦛 Ippopotamo", corretta:false }
            ]},

            { domanda:"Quale grande animale africano vive spesso nei fiumi?", opzioni:[
                { testo:"🦛 Ippopotamo", corretta:true },
                { testo:"🦁 Leone", corretta:false },
                { testo:"🦢 Struzzo", corretta:false }
            ]},

            { domanda:"Quale uccello non vola ma corre velocissimo?", opzioni:[
                { testo:"🦤 Struzzo", corretta:true },
                { testo:"🦅 Aquila", corretta:false },
                { testo:"🐦 Passero", corretta:false }
            ]},

            { domanda:"Quale animale ha un guscio duro in cui può ritirarsi?", opzioni:[
                { testo:"🐢 Tartaruga", corretta:true },
                { testo:"🐍 Serpente", corretta:false },
                { testo:"🦎 Lucertola", corretta:false }
            ]},

            { domanda:"Come si chiama il gruppo di leoni che vive insieme?", opzioni:[
                { testo:"🦁 Branco", corretta:true },
                { testo:"🐦 Stormo", corretta:false },
                { testo:"🐝 Sciame", corretta:false }
            ]},

            { domanda:"Quale animale marino è un mammifero, non un pesce?", opzioni:[
                { testo:"🐬 Delfino", corretta:true },
                { testo:"🦈 Squalo", corretta:false },
                { testo:"🐟 Tonno", corretta:false }
            ]},

            { domanda:"Quale animale ha le ali ma è un mammifero, non un uccello?", opzioni:[
                { testo:"🦇 Pipistrello", corretta:true },
                { testo:"🐦 Passero", corretta:false },
                { testo:"🦋 Farfalla", corretta:false }
            ]}

        ]

    },


    osservatorio: {

        nome:"Osservatorio",

        emoji:"🔭",

        livello:0,

        punteggio:0,

        migliore:0,

        missione:"Rispondi al quiz sullo spazio e le stelle.",

        domande:[

            { domanda:"Quanti pianeti ci sono nel Sistema Solare?", opzioni:[
                { testo:"🪐 8", corretta:true },
                { testo:"🪐 9", corretta:false },
                { testo:"🪐 7", corretta:false }
            ]},

            { domanda:"Qual è il pianeta più grande del Sistema Solare?", opzioni:[
                { testo:"🪐 Giove", corretta:true },
                { testo:"🌍 Terra", corretta:false },
                { testo:"🔴 Marte", corretta:false }
            ]},

            { domanda:"Come si chiama la nostra galassia?", opzioni:[
                { testo:"🌌 Via Lattea", corretta:true },
                { testo:"🌌 Andromeda", corretta:false },
                { testo:"⭐ Orione", corretta:false }
            ]},

            { domanda:"Cosa illumina la Terra di giorno?", opzioni:[
                { testo:"☀️ Il Sole", corretta:true },
                { testo:"🌙 La Luna", corretta:false },
                { testo:"⭐ Una stella lontana", corretta:false }
            ]},

            { domanda:"Perché vediamo brillare la Luna di notte?", opzioni:[
                { testo:"🌕 Riflette la luce del Sole", corretta:true },
                { testo:"💡 Produce luce propria", corretta:false },
                { testo:"❌ Non si sa", corretta:false }
            ]},

            { domanda:"Come si chiama chi studia le stelle e lo spazio?", opzioni:[
                { testo:"🔭 Astronomo", corretta:true },
                { testo:"🔬 Biologo", corretta:false },
                { testo:"📜 Storico", corretta:false }
            ]},

            { domanda:"Quanto tempo impiega circa la Terra a girare intorno al Sole?", opzioni:[
                { testo:"📅 Un anno", corretta:true },
                { testo:"📅 Un giorno", corretta:false },
                { testo:"📅 Un mese", corretta:false }
            ]},

            { domanda:"Quanto tempo impiega circa la Terra a girare su se stessa?", opzioni:[
                { testo:"📅 Un giorno", corretta:true },
                { testo:"📅 Un anno", corretta:false },
                { testo:"📅 Un'ora", corretta:false }
            ]},

            { domanda:"Come si chiama una grande esplosione di una stella alla fine della sua vita?", opzioni:[
                { testo:"💥 Supernova", corretta:true },
                { testo:"🌑 Eclissi", corretta:false },
                { testo:"☄️ Meteora", corretta:false }
            ]},

            { domanda:"Cosa indossano gli astronauti per uscire nello spazio?", opzioni:[
                { testo:"🧑‍🚀 Tuta spaziale", corretta:true },
                { testo:"🧥 Impermeabile", corretta:false },
                { testo:"🩳 Costume da bagno", corretta:false }
            ]},

            { domanda:"Come si chiama il veicolo che porta le persone nello spazio?", opzioni:[
                { testo:"🚀 Razzo/navicella spaziale", corretta:true },
                { testo:"🚢 Sottomarino", corretta:false },
                { testo:"🚂 Treno", corretta:false }
            ]},

            { domanda:"Quale pianeta è famoso per i suoi grandi anelli?", opzioni:[
                { testo:"🪐 Saturno", corretta:true },
                { testo:"🔴 Marte", corretta:false },
                { testo:"☿️ Mercurio", corretta:false }
            ]},

            { domanda:"Cosa vediamo cadere nel cielo notturno che sembra una \"stella cadente\"?", opzioni:[
                { testo:"☄️ Una meteora", corretta:true },
                { testo:"🪐 Un pianeta", corretta:false },
                { testo:"☁️ Una nuvola", corretta:false }
            ]},

            { domanda:"Quale pianeta è il più vicino al Sole?", opzioni:[
                { testo:"☿️ Mercurio", corretta:true },
                { testo:"🔵 Nettuno", corretta:false },
                { testo:"🌍 Terra", corretta:false }
            ]},

            { domanda:"Come si chiama il fenomeno quando la Luna copre il Sole?", opzioni:[
                { testo:"🌑 Eclissi solare", corretta:true },
                { testo:"🌕 Eclissi lunare", corretta:false },
                { testo:"🌈 Aurora", corretta:false }
            ]},

            { domanda:"Quale strumento si usa per osservare le stelle da vicino?", opzioni:[
                { testo:"🔭 Telescopio", corretta:true },
                { testo:"🔬 Microscopio", corretta:false },
                { testo:"🔎 Binocolo da caccia", corretta:false }
            ]},

            { domanda:"Come si chiama un gruppo di stelle che forma una figura riconoscibile?", opzioni:[
                { testo:"⭐ Costellazione", corretta:true },
                { testo:"🌌 Galassia", corretta:false },
                { testo:"☁️ Nebulosa", corretta:false }
            ]},

            { domanda:"Qual è il pianeta più lontano dal Sole nel Sistema Solare?", opzioni:[
                { testo:"🔵 Nettuno", corretta:true },
                { testo:"♀️ Venere", corretta:false },
                { testo:"🔴 Marte", corretta:false }
            ]},

            { domanda:"Cosa sono gli asteroidi?", opzioni:[
                { testo:"🪨 Piccoli corpi rocciosi che orbitano nello spazio", corretta:true },
                { testo:"⭐ Stelle piccolissime", corretta:false },
                { testo:"🪐 Pianeti giganti", corretta:false }
            ]},

            { domanda:"Chi è stato il primo uomo a camminare sulla Luna?", opzioni:[
                { testo:"🧑‍🚀 Neil Armstrong", corretta:true },
                { testo:"🔬 Isaac Newton", corretta:false },
                { testo:"🧪 Albert Einstein", corretta:false }
            ]}

        ]

    },


    aeroporto: {

        nome:"Aeroporto",

        emoji:"✈️",

        livello:0,

        punteggio:0,

        migliore:0,

        missione:"Rispondi al quiz sui viaggi e i paesi del mondo.",

        domande:[

            { domanda:"Chi guida un aereo?", opzioni:[
                { testo:"👨‍✈️ Il pilota", corretta:true },
                { testo:"🚂 Il macchinista", corretta:false },
                { testo:"⚓ Il capitano di nave", corretta:false }
            ]},

            { domanda:"Cosa serve controllare prima di salire su un aereo, insieme al biglietto?", opzioni:[
                { testo:"🛂 Il documento d'identità/passaporto", corretta:true },
                { testo:"🩳 Il pigiama", corretta:false },
                { testo:"❌ Niente", corretta:false }
            ]},

            { domanda:"Come si chiama il luogo dove atterrano e decollano gli aerei?", opzioni:[
                { testo:"🛫 Aeroporto", corretta:true },
                { testo:"🚉 Stazione", corretta:false },
                { testo:"⚓ Porto", corretta:false }
            ]},

            { domanda:"Quale paese ha come capitale Parigi?", opzioni:[
                { testo:"🇫🇷 Francia", corretta:true },
                { testo:"🇩🇪 Germania", corretta:false },
                { testo:"🇪🇸 Spagna", corretta:false }
            ]},

            { domanda:"Quale paese ha come capitale Roma?", opzioni:[
                { testo:"🇮🇹 Italia", corretta:true },
                { testo:"🇫🇷 Francia", corretta:false },
                { testo:"🇬🇷 Grecia", corretta:false }
            ]},

            { domanda:"Quale paese ha come capitale Madrid?", opzioni:[
                { testo:"🇪🇸 Spagna", corretta:true },
                { testo:"🇵🇹 Portogallo", corretta:false },
                { testo:"🇮🇹 Italia", corretta:false }
            ]},

            { domanda:"Quale paese ha come capitale Tokyo?", opzioni:[
                { testo:"🇯🇵 Giappone", corretta:true },
                { testo:"🇨🇳 Cina", corretta:false },
                { testo:"🇰🇷 Corea", corretta:false }
            ]},

            { domanda:"Quale paese ha come capitale Londra?", opzioni:[
                { testo:"🇬🇧 Regno Unito", corretta:true },
                { testo:"🇮🇪 Irlanda", corretta:false },
                { testo:"🏴 Scozia", corretta:false }
            ]},

            { domanda:"Cosa fanno gli assistenti di volo durante un viaggio in aereo?", opzioni:[
                { testo:"🧑‍✈️ Aiutano e assistono i passeggeri", corretta:true },
                { testo:"✈️ Guidano l'aereo", corretta:false },
                { testo:"🎫 Vendono biglietti del treno", corretta:false }
            ]},

            { domanda:"Cosa si mette nella stiva dell'aereo durante il volo?", opzioni:[
                { testo:"🧳 I bagagli", corretta:true },
                { testo:"🧑 I passeggeri", corretta:false },
                { testo:"👨‍✈️ I piloti", corretta:false }
            ]},

            { domanda:"Quale continente si trova a sud dell'Europa, oltre il Mediterraneo?", opzioni:[
                { testo:"🌍 Africa", corretta:true },
                { testo:"🌏 Asia", corretta:false },
                { testo:"🌏 Oceania", corretta:false }
            ]},

            { domanda:"Qual è il paese più popoloso del mondo, tra questi?", opzioni:[
                { testo:"🇨🇳 Cina", corretta:true },
                { testo:"🇮🇹 Italia", corretta:false },
                { testo:"🇵🇹 Portogallo", corretta:false }
            ]},

            { domanda:"Cosa indica il fuso orario quando si vola tra paesi lontani?", opzioni:[
                { testo:"🕒 Che l'ora locale può essere diversa", corretta:true },
                { testo:"⏰ Che l'aereo è sempre in ritardo", corretta:false },
                { testo:"❌ Niente", corretta:false }
            ]},

            { domanda:"Quale documento serve per identificarsi quando si viaggia all'estero?", opzioni:[
                { testo:"🛂 Passaporto", corretta:true },
                { testo:"📄 Pagella", corretta:false },
                { testo:"🧾 Scontrino", corretta:false }
            ]},

            { domanda:"Come si chiama la zona dove si aspetta prima di salire sull'aereo?", opzioni:[
                { testo:"🚪 Gate/sala d'imbarco", corretta:true },
                { testo:"🏫 Aula", corretta:false },
                { testo:"🍳 Cucina", corretta:false }
            ]},

            { domanda:"Qual è il continente più popolato del mondo?", opzioni:[
                { testo:"🌏 Asia", corretta:true },
                { testo:"🌍 Europa", corretta:false },
                { testo:"🌏 Oceania", corretta:false }
            ]},

            { domanda:"Quale lingua si parla principalmente in Brasile?", opzioni:[
                { testo:"🇧🇷 Portoghese", corretta:true },
                { testo:"🇪🇸 Spagnolo", corretta:false },
                { testo:"🇮🇹 Italiano", corretta:false }
            ]},

            { domanda:"Quale oceano si attraversa volando dall'Europa all'America?", opzioni:[
                { testo:"🌊 Oceano Atlantico", corretta:true },
                { testo:"🌊 Oceano Pacifico", corretta:false },
                { testo:"🌊 Mar Mediterraneo", corretta:false }
            ]},

            { domanda:"Come si chiama chi guida gli aerei a terra in sicurezza dalla torre di controllo?", opzioni:[
                { testo:"🗼 Controllore di volo", corretta:true },
                { testo:"🚂 Macchinista", corretta:false },
                { testo:"🚉 Capostazione", corretta:false }
            ]},

            { domanda:"Quale paese è famoso per i canguri e i koala?", opzioni:[
                { testo:"🇦🇺 Australia", corretta:true },
                { testo:"🇨🇦 Canada", corretta:false },
                { testo:"🇪🇬 Egitto", corretta:false }
            ]}

        ]

    }


};
