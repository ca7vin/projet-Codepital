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
        switch (depart) {
            case docteur:
                docteur.cabinet.splice(docteur.cabinet.indexOf(this.nom), 1);
                arrivee.personnes.push(this)
                break;
            case pharmacie:
                pharmacie.personnes.splice(pharmacie.personnes.indexOf(this), 1);
                arrivee.personnes.push(this);
                break;
        }
        console.log(`${this.nom} se déplace de ${depart} à ${arrivee}`)
    }
    takeCare() {

    }
    payer(target) {
        switch (target) {
            case docteur:
                this.argent -= 50;
                docteur.argent += 50;
                console.log(`${this.nom} paye sa consultation au ${docteur.nom}`)
                break;
            case pharmacie:
                switch (this.traitement) {
                    case "ctrl+maj+f":
                        console.log(`${this.nom} est atteint de ${this.maladie} et a demande ${this.traitement}`)
                        if (this.argent >= 60) {
                            console.log(`${this.nom} a assez d'argent pour acheter son traitement et le paye`)
                            this.argent -= 60
                            pharmacie.argent += 60
                            this.poche.push("ctrl+maj+f")
                            console.log(`${this.nom} reçoit ${this.traitement}`)
                        } else {
                            console.log(`${this.nom} n'a pas assez d'argent pour payer son traitement`)
                            cimetiere.personnes.push(this)
                            pharmacie.personnes.splice(pharmacie.personnes.indexOf(this), 1)
                            console.log(`${this.nom} meurt de ${this.maladie} et est transporté au ${cimetiere.nom}`)
                            this.etatSante = "mort"
                        }
                        break;

                    case "saveOnFocusChange":
                        console.log(`${this.nom} est atteint de ${this.maladie} et a demande ${this.traitement}`)
                        if (this.argent >= 100) {
                            console.log(`${this.nom} a assez d'argent pour acheter son traitement et le paye`)
                            this.argent -= 100
                            pharmacie.argent += 100
                            this.poche.push("saveOnFocusChange")
                            console.log(`${this.nom} reçoit ${this.traitement}`)
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
                            pharmacie.argent += 35
                            this.poche.push("checkLinkRelation")
                            console.log(`${this.nom} reçoit ${this.traitement}`)
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
                            pharmacie.argent += 40
                            this.poche.push("Ventoline")
                            console.log(`${this.nom} reçoit ${this.traitement}`)
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
                            pharmacie.argent += 20
                            this.poche.push("f12+doc")
                            console.log(`${this.nom} reçoit ${this.traitement}`)
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




