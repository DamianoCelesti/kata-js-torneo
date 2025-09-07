const fighters = [
    {
        name: 'Freezer',
        power: 8000
    },
    {
        name: 'Vegeta',
        power: 8500
    },
    {
        name: 'Crilin',
        power: 500
    },
    {
        name: 'Mr Satan',
        power: 50
    },
    {
        name: 'Junior',
        power: 6000
    },
    {
        name: 'Goku',
        power: 9001
    },
    {
        name: 'Tensing',
        power: 450
    },
    {
        name: 'Videl',
        power: 300
    },
    {
        name: 'Bulma',
        power: 20
    },
    {
        name: 'C-18',
        power: 7800
    },
    {
        name: 'Gohan',
        power: 8900
    },
    {
        name: 'Trunks',
        power: 1250
    }
];

const weapons = [
    {
        name: "Ventaglio della Musa",
        power: 15
    },
    {
        name: "Scouter",
        power: 30
    },
    {
        name: "Bastone Roshi",
        power: 60
    },
    {
        name: "Fagioli Magici",
        power: 70
    },
    {
        name: "Katana di Yajirobei",
        power: 85
    },
    {
        name: "Spada del Dragone Azzurro",
        power: 115
    },
    {
        name: "Armatura Saiyan",
        power: 145
    },
    {
        name: "Cannone da braccio",
        power: 170
    },
    {
        name: "Nuvola d'oro",
        power: 200
    },
    {
        name: "Bastone Nyoi",
        power: 220
    },
    {
        name: "Spada Z",
        power: 235
    },
    {
        name: "Orecchini Potara",
        power: 250
    }
];





const assegnazioneArmi = fighters.map(fighter => {
    const indiceRandom = Math.floor(Math.random() * weapons.length)

    const armaScelta = weapons.splice(indiceRandom, 1)[0]

    const unionePower = fighter.power + armaScelta.power
    return {
        name: fighter.name,
        power: unionePower,
        weapon: armaScelta.name

    }
})


console.log("Fase 1 - assegnazione armi;", assegnazioneArmi);


const allenamento = assegnazioneArmi.map(fighter => {
    const moltiplicatore = Math.floor(Math.random() * 100) + 1
    return {
        name: fighter.name,
        weapon: fighter.weapon,
        power: fighter.power * moltiplicatore
    }
})

console.log("Fase 2 - allenamento;", allenamento)



const qualificazione = allenamento.filter(fighter => fighter.power >= 2000)

console.log("Fase 3 - qualificazione", qualificazione);


if (qualificazione.length % 2 !== 0) {
    qualificazione.push({
        name: "robot",
        weapon: "laser",
        power: 4000
    })
    console.log("partecipanti dispari aggiunto un concorrente all'ultimo secondo");

}


//console.log(qualificazione.length);


const vincitori = []


for (let i = 0; i < qualificazione.length; i = i + 2) {
    let partecipanteCasa = qualificazione[i]
    let partecipanteOspite = qualificazione[i + 1]

    if (partecipanteCasa.power >= partecipanteOspite.power) {
        vincitori.push(partecipanteCasa)
    } else {
        vincitori.push(partecipanteOspite)
    }
}


console.log("Fase 4 - tutti i vincitori del torneo", vincitori);


const premiazione = [...vincitori]

const podio = premiazione.sort((a, b) => b.power - a.power).slice(0, 3)


console.log("Fase 5 - i vincitori sono", podio);
