var mijnauto = {
    kleur: "blauw",
    merk: "Ford",
    snelheid: 0,
    
    gasgeven : function () {
        this.snelheid += 5;
        console.log(this.snelheid)
    },
    toeteren : function () {
        console.log("toet!")
    }
}

mijnauto.toeteren();
mijnauto.gasgeven();