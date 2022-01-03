export class Patients {
    constructor(nom, maladie, argent, poche, etatSante, traitement){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
        this.traitement = traitement;
    }
    goTo(depart,arrivee){
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
    takeCare(){

    }
    payer(){

    }
}




