const buildings = {

    biblioteca: {

        nome:"Biblioteca",

        emoji:"📚",

        livello:0,

        punteggio:0,

        migliore:0,

        missione:"Rispondi al quiz sugli animali.",

        domande:[

            {
                domanda:"Quale animale è un mammifero?",
                opzioni:[
                    { testo:"🐟 Pesce", corretta:false },
                    { testo:"🐶 Cane", corretta:true },
                    { testo:"🐦 Aquila", corretta:false }
                ]
            },

            {
                domanda:"Quale animale vive nell'acqua?",
                opzioni:[
                    { testo:"🦁 Leone", corretta:false },
                    { testo:"🐬 Delfino", corretta:true },
                    { testo:"🐔 Gallina", corretta:false }
                ]
            },

            {
                domanda:"Quale animale sa volare?",
                opzioni:[
                    { testo:"🐸 Rana", corretta:false },
                    { testo:"🐦 Passero", corretta:true },
                    { testo:"🐢 Tartaruga", corretta:false }
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
            }

        ]

    }

};
