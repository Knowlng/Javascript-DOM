"use strict";

// 1. Susikurti objektą "Kvadratas".
// Objektas turi priimti du kintamuosius: a ir b kraštines.
// Sukurti du metodus, kurie skaičiuoja kvadrato plotą, perimetrą, įstrižainės ilgį.
// Informaciją išvesti į <p> žymę.

// Papildoma: a ir b kintamieji apibrežia kvadratą pikseliais. Pagal įvestas reikšmes į input, HTML nubraižomas kvadrato objektas.


let kvadratas = {
    a: 0,
    b: 0,

    skPlota: function(a, b){
        this.a = Math.abs(a);
        this.b = Math.abs(b);

        if(this.a == 0 || this.b == 0){
            return 0;
        } else {
            let plotas = this.a * this.b;
            return plotas;
        }
    },

    skPerimetra: function(a, b){
        this.a = Math.abs(a);
        this.b = Math.abs(b);

        if(this.a == 0 || this.b == 0){
            return 0;
        } else {
            let perimetras = this.a *2+ this.b*2;
            return perimetras;
        }
    },

    skIstrizaine: function(a, b){
        this.a = Math.abs(a);
        this.b = Math.abs(b);

        if(this.a == 0 || this.b == 0){
            return 0;
        }  else {
            let istrizaine = Math.round(10*(this.a*Math.sqrt(2)))/10;
            return istrizaine;
        }
    },
    drawsq:function(a,b) {
        this.a = Math.abs(a);
        this.b = Math.abs(b);

        if(this.a == 0 || this.b == 0){
            return 0;
        }  else {
            let kvadratelis = document.createElement('div');
            kvadratelis.setAttribute('style', "height:"+this.b+"px");
            kvadratelis.style.border = "black solid 1px";
            kvadratelis.style.width = this.a+"px";
            document.querySelector('.draw-sq').appendChild(kvadratelis);
        }

    },
}

document.querySelector('.kvbutton').addEventListener("click", function() {
    
    const container = document.querySelector('.kvp');
    container.replaceChildren();
    const container2 = document.querySelector('.draw-sq');
    container2.replaceChildren();

    let a = document.querySelector(".a").value;
    let b = document.querySelector(".b").value;

    document.querySelector('.kvp').innerHTML+="plotas = "+kvadratas.skPlota(a,b)+"<br>";
    document.querySelector('.kvp').innerHTML+="perimetras = "+kvadratas.skPerimetra(a,b)+"<br>";
    document.querySelector('.kvp').innerHTML+="įstrižainė = "+kvadratas.skIstrizaine(a,b)+"<br>";
    kvadratas.drawsq(a,b);






});
