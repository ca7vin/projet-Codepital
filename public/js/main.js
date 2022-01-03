
/* IMPORTS */
import { Patients } from "./class.js";

/* CAT */
let chat = {
    nom: "Arnold",
    miauler() {
        console.log('MIAOUUUUUUUUUUUUUUUUU');
    }
}
/* PATIENTS */
let marcus = new Patients("Marcus", "mal indenté", 100, [], "malade", "")
let optimus = new Patients("Optimus", "unsave", 200, [], "malade", "")
let sangoku = new Patients("Sangoku", "404", 80, [], "malade", "")
let darthVader = new Patients("DarthVader", "azmatique", 110, [], "malade", "")
let semicolon = new Patients("Semicolon", "syntaxError", 60, [], "malade", "")

/* MAISON */
export let maison = {
    nom: "maison",
    personnes: [],
}

/* CIMETIERE */
export let cimetiere = {
    nom: "cimetiere",
    personnes: [],
}

/* PHARMACIE */
export let pharmacie = {
    nom: "pharmacie",
    personnes: [],
    traitements: ["Ventoline", "f12+doc", "checkLinkRelation", "saveOnFocusChange", "ctrl+maj+f"],
    argent: 150
}

/* DOCTEUR */
export let docteur = {
    nom: "docteur",
    argent: 350,
    cabinet: [],
    salleAttente: [marcus, optimus, sangoku, darthVader, semicolon],
    diagnostique(diaTarget) {
        console.log(`${this.nom} examine ${diaTarget.nom} pour lui donner un diagnostic`)
        switch (diaTarget.maladie) {
            case "mal indenté":
                diaTarget.traitement = "ctrl+maj+f"
                console.log(`${diaTarget.nom} est mal indenté et a besoin de ${diaTarget.traitement}`)
                break;
            case "unsave":
                diaTarget.traitement = "saveOnFocusChange"
                console.log(`${diaTarget.nom} est unsave et a besoin de ${diaTarget.traitement}`)
                break;
            case "404":
                diaTarget.traitement = "checkLinkRelation"
                console.log(`${diaTarget.nom} est en 404 et a besoin de ${diaTarget.traitement}`)
                break;
            case "azmatique":
                diaTarget.traitement = "Ventoline"
                console.log(`${diaTarget.nom} est azmatique et a besoin de ${diaTarget.traitement}`)
                break;
            case "syntaxError":
                diaTarget.traitement = "f12+doc"
                console.log(`${diaTarget.nom} est atteint de syntaxError et a besoin de ${diaTarget.traitement}`)
        }
        console.log(`${this.nom} attend son paiement avant de vous donner votre prescription`)
        if (diaTarget.argent >= 50) {
            diaTarget.payer(this)
            diaTarget.etatSante = "traitement"
            console.log(`${diaTarget.nom} est en ${diaTarget.etatSante}`)
        } else if (diaTarget.argent < 50) {
            console.log(`${diaTarget.nom} n'a pas assez d'argent et ne peut pas payer sa consultation`)
            diaTarget.etatSante = "mort"
            cimetiere.personnes.push(diaTarget)
            this.cabinet.splice(this.cabinet.indexOf(diaTarget), 1)
            console.log(`${diaTarget.nom} meurt de ${diaTarget.maladie} et est transporté au ${cimetiere.nom}`)
        }
    },
    patientIn(target) {
        console.log(`${this.nom} appelle ${target.nom}`)
        docteur.cabinet.push(target)
        docteur.salleAttente.splice(docteur.salleAttente.indexOf(target), 1)
    },
    patientOut(target) {
        docteur.salleAttente.push(target);
        docteur.cabinet.splice(docteur.cabinet.indexOf(target), 1)
        console.log(`${this.nom} a finit sa consultation et fait sortir ${target.nom}`)
    }
}

console.log(`la salle d'attente du docteur contient : ${docteur.salleAttente.map(patient => patient.nom)}`)


// DEBUGGER

let patients = [marcus, optimus, darthVader, sangoku, semicolon]


const main = async () => {
    for (let i = 0; i < patients.length; i++) {

        let promise = new Promise(resolve => {
            docteur.patientIn(patients[i])
            docteur.diagnostique(patients[i])
            docteur.patientOut(patients[i])
            patients[i].goTo(docteur, pharmacie)
            patients[i].payer(pharmacie)
            patients[i].takeCare()
            patients[i].goTo(pharmacie, maison)
            setTimeout(() => {
                chat.miauler()
                resolve()
            }, 4000)
        })

        await promise.then()
    }
}

main()