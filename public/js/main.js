
// ## Description du doctor
// >Le doctor lui reçoit les patients dans son cabinet. Tout d'abord il les diagnostiques puis se fait payé avant de préscrire un traitement. Attention le doctor fait à chaque fois sortir le patient de son cabinet avant de prendre le suivant. Dans son cabinet il y a son chat de race sphynx pour garder un environemment stérile. Son chat miaule toutes les deux secondes dans la console(bonus). La consultation coûte 50€. Les patients son dans un état de traitement avant de sortir du cabinet.

// |nom|argent|cabinet et salle d'attente|diagnostique|patienTIn|patientOut
// |---|---|---|---|---|---|
// |Debugger|0|[chat]

// ### Grille des diagnostiques
// |maladie|traitement|
// |---|---|
// |mal indenté|`ctrl+maj+f`|
// |unsave|`saveOnFocusChange`|
// |404|`CheckLinkRelation`|
// |azmatique|`Ventoline`|
// |syntaxError|`f12+doc`|

// ## La pharmacie
// >Les patients iront par après à la pharmacie et recevront leur traitement s'ils ont assez d'argent. Dans le cas ou ils ont assez d'argent ils seront alors en bonne santé sinon ils seront mort et il faudra alors les pousser dans un cimetière.

// ### Tarif des traitements
// |Traitement|prix|
// |---|---|
// |`ctrl+maj+f`|60€
// |`saveOnFocusChange`|100€
// |`CheckLinkRelation`|35€
// |`Ventoline`|40€
// |`f12+doc`|20€

// # Vérification
// >Grâce à votre débugger suivé à la trace l'évolution de chacun de vos patients. Vérifier bien qu'il quitte à chaque fois la salle d'attente avant d'entrer dans le cabinet et qu'ils sortent bien du cabinet avant de laisser quelqu'un d'autre entré.

/* IMPORTS */
import { Patients } from "./class.js";

/* PATIENTS */
let marcus = new Patients("Marcus", "mal indenté", 100, [], "malade", "")
let optimus = new Patients("Optimus", "unsave", 200, [], "malade", "")
let sangoku = new Patients("Sangoku", "404", 80, [], "malade", "")
let darthVader = new Patients("DarthVader", "azmatique", 110, [], "malade", "")
let semicolon = new Patients("Semicolon", "syntaxError", 60, [], "malade", "")

/* MAISON */
let maison = {
    nom: "maison",
    personnes: [],
}

/* CIMETIERE */
let cimetiere = {
    nom: "cimetiere",
    personnes: [],
}

/* PHARMACIE */
let pharmacie = {
    nom: "pharmacie",
    personnes: [],
    traitements: ["Ventoline", "f12+doc", "checkLinkRelation", "saveOnFocusChange", "ctrl+maj+f"],
    argent: 150
}

/* DOCTEUR */
let docteur = {
    nom: "docteur Paul",
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
            diaTarget.payer(docteur)
            diaTarget.etatSante = "traitement"
        } else {
            console.log(`${diaTarget.nom} n'a pas assez d'argent et ne peut pas payer sa consultation`)
            diaTarget.etatSante = "mort"
            cimetiere.personnes.push(diaTarget)
            docteur.cabinet.splice(docteur.cabinet.indexOf(diaTarget), 1)
            console.log(`${diaTarget.nom} meurt de ${diaTarget.maladie} et est transporté au ${cimetiere.nom}`)
        }
    },
    patientIn(target) {
        if (docteur.cabinet.length > 0) {
            console.log(`${this.nom} appelle ${target.nom}`)
            docteur.cabinet.push(target)
            docteur.salleAttente.splice(docteur.salleAttente.indexOf(target), 1)
        } else {
            console.log(`Il reste encore ${target.nom} dans le cabinet !`)
        }
    },
    patientOut(target) {
        docteur.salleAttente.push(target);
        docteur.cabinet.splice(docteur.cabinet.indexOf(target), 1)
        console.log(`${this.nom} a finit sa consultation et fait sortir ${target.nom}`)
    }
}