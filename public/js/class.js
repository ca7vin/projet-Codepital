import { cimetiere, pharmacie, docteur, maison } from "./main.js";



export class Patients {
    constructor(nom, maladie, argent, poche, etatSante, traitement) {
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
        this.traitement = traitement;
    }
    goTo(depart, arrivee) {
        if (this.etatSante === "mort") {
            console.log(`${this.nom} est ${this.etatSante}`)
        } else {
            switch (depart.nom) {
                case "docteur":
                    depart.cabinet.splice(depart.cabinet.indexOf(this.nom), 1);
                    arrivee.personnes.push(this)
                    break;
                case "pharmacie":
                    depart.personnes.splice(depart.personnes.indexOf(this), 1);
                    arrivee.personnes.push(this);
                    break;
            }
            console.log(`${this.nom} se déplace de ${depart.nom} à ${arrivee.nom}`)
        }
    }
    takeCare() {
        if (this.poche.lenght > 0) {
            console.log(`${this.nom} prend son ${this.traitement}et est guéri`)
            this.etatSante = "En bonne santé"
            console.log(`${this.nom} est maintenant en ${this.etatSante}`)
        } else {
            console.log(`${this.nom} n'avait pas de traitement`)
        }
    }
    payer(target) {
        switch (target.nom) {
            case "docteur":
                this.argent -= 50;
                target.argent += 50;
                console.log(`${this.nom} paye sa consultation au ${target.nom} et il lui reste ${this.argent}`)
                break;
            case "pharmacie":
                switch (this.traitement) {
                    case "ctrl+maj+f":
                        console.log(`${this.nom} est atteint de ${this.maladie} et a demande ${this.traitement}`)
                        if (this.argent >= 60) {
                            console.log(`${this.nom} a assez d'argent pour acheter son traitement et le paye`)
                            this.argent -= 60
                            target.argent += 60
                            this.poche.push("ctrl+maj+f")
                            console.log(`${this.nom} reçoit ${this.traitement} et il lui reste ${this.argent}`)
                        } else {
                            console.log(`${this.nom} n'a pas assez d'argent pour payer son traitement`)
                            cimetiere.personnes.push(this)
                            target.personnes.splice(target.personnes.indexOf(this), 1)
                            console.log(`${this.nom} meurt de ${this.maladie} et est transporté au ${cimetiere.nom}`)
                            this.etatSante = "mort"
                        }
                        break;

                    case "saveOnFocusChange":
                        console.log(`${this.nom} est atteint de ${this.maladie} et a demande ${this.traitement}`)
                        if (this.argent >= 100) {
                            console.log(`${this.nom} a assez d'argent pour acheter son traitement et le paye`)
                            this.argent -= 100
                            target.argent += 100
                            this.poche.push("saveOnFocusChange")
                            console.log(`${this.nom} reçoit ${this.traitement} et il lui reste ${this.argent}`)
                        } else {
                            console.log(`${this.nom} n'a pas assez d'argent pour payer son traitement`)
                            cimetiere.personnes.push(this)
                            pharmacie.personnes.splice(pharmacie.personnes.indexOf(this), 1)
                            console.log(`${this.nom} meurt de ${this.maladie} et est transporté au ${cimetiere.nom}`)
                            this.etatSante = "mort"
                        }
                        break;

                    case "checkLinkRelation":
                        console.log(`${this.nom} est atteint de ${this.maladie} et a demande un traitement ${this.traitement}`)
                        if (this.argent >= 35) {
                            console.log(`${this.nom} a assez d'argent pour acheter son traitement et le paye`)
                            this.argent -= 35
                            target.argent += 35
                            this.poche.push("checkLinkRelation")
                            console.log(`${this.nom} reçoit ${this.traitement} et il lui reste ${this.argent}`)
                        } else {
                            console.log(`${this.nom} n'a pas assez d'argent pour payer son traitement`)
                            cimetiere.personnes.push(this)
                            pharmacie.personnes.splice(pharmacie.personnes.indexOf(this), 1)
                            console.log(`${this.nom} meurt de ${this.maladie} et est transporté au ${cimetiere.nom}`)
                            this.etatSante = "mort"
                        }
                        break;

                    case "Ventoline":
                        console.log(`${this.nom} est atteint de ${this.maladie} et a demande ${this.traitement}`)
                        if (this.argent >= 40) {
                            console.log(`${this.nom} a assez d'argent pour acheter son traitement et le paye`)
                            this.argent -= 40
                            target.argent += 40
                            this.poche.push("Ventoline")
                            console.log(`${this.nom} reçoit ${this.traitement} et il lui reste ${this.argent}`)
                        } else {
                            console.log(`${this.nom} n'a pas assez d'argent pour payer son traitement`)
                            cimetiere.personnes.push(this)
                            pharmacie.personnes.splice(pharmacie.personnes.indexOf(this), 1)
                            console.log(`${this.nom} meurt de ${this.maladie} et est transporté au ${cimetiere.nom}`)
                            this.etatSante = "mort"
                        }
                        break;

                    case "f12+doc":
                        console.log(`${this.nom} est atteint de ${this.maladie} et a demande ${this.traitement}`)
                        if (this.argent >= 20) {
                            console.log(`${this.nom} a assez d'argent pour acheter son traitement et le paye`)
                            this.argent -= 20
                            target.argent += 20
                            this.poche.push("f12+doc")
                            console.log(`${this.nom} reçoit ${this.traitement} et il lui reste ${this.argent}`)
                        } else {
                            console.log(`${this.nom} n'a pas assez d'argent pour payer son traitement`)
                            cimetiere.personnes.push(this)
                            pharmacie.personnes.splice(pharmacie.personnes.indexOf(this), 1)
                            console.log(`${this.nom} meurt de ${this.maladie} et est transporté au ${cimetiere.nom}`)
                            this.etatSante = "mort"
                        }
                        break;
                }
                break;
        }
    }
}




