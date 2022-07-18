"use strict";

// 2. Susikurti objektą "Trikampis".
// Objektas turi priimti du kintamuosius: a, b, c kraštines.
// Sukurti metodus, kurie skaičiuoja plotą, perimetrą, pusperimetrį, bei kiekvieną iš trikampio kampų.
// Informaciją išvesti į <p> žymę.


let trikampis = {
    a: 0,
    b: 0,
    c: 0,

    skPlota:function(a,b,c){
        this.a = Math.abs(a);
        this.b = Math.abs(b);
        this.c = Math.abs(c);
        let p = (this.a + this.b + this.c)/2;
        let plotas = 0;
        
        if(this.a+this.b>this.c && this.c+this.b>this.a  && this.a+this.c>this.b) {
            // S = Math.Sqrt(p(p-a)(p-b)(p-c))
            //p = puse perimtro(pusperimetris)
            plotas = Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c));
            return plotas;
        } else {
            return "Trikampio sudaryti negalima";
        }

    },
    skPerimetra:function(a,b,c){
        this.a = Math.abs(a);
        this.b = Math.abs(b);
        this.c = Math.abs(c);
        let perimetras = 0;

        if(this.a+this.b>this.c && this.c+this.b>this.a  && this.a+this.c>this.b) {
            perimetras = this.a + this.b + this.c;
            return perimetras;
        } else {
            return "Trikampio sudaryti negalima";
        }
    },
    skPusperimetri:function(a,b,c){
        this.a = Math.abs(a);
        this.b = Math.abs(b);
        this.c = Math.abs(c);
        let pusperimetris = 0;

        if(this.a+this.b>this.c && this.c+this.b>this.a  && this.a+this.c>this.b) {
            pusperimetris = (this.a + this.b + this.c)/2;
            return pusperimetris;
        } else {
            return "Trikampio sudaryti negalima";
        }
    },
    skKampus:function(a,b,c){
        this.a = Math.abs(a);
        this.b = Math.abs(b);
        this.c = Math.abs(c);
        let a_kampas, b_kampas, c_kampas;
        let kampai=[];

        if(this.a+this.b>this.c && this.c+this.b>this.a  && this.a+this.c>this.b) {
            a_kampas= Math.round(10*(Math.acos((this.b * this.b + this.c * this.c - this.a * this.a)/(2*this.c *this.b))* (180 / Math.PI)))/10;
            b_kampas= Math.round(10*(Math.acos((this.c * this.c + this.a * this.a - this.b * this.b)/(2*this.c *this.a))* (180 / Math.PI)))/10;
            c_kampas=180-a_kampas-b_kampas;
            kampai.push(a_kampas, b_kampas, c_kampas);
            return kampai;
        } else {
            return "Trikampio sudaryti negalima";
        }
    },
}


document.querySelector('.trkbutton').addEventListener("click", function() {

    const container = document.querySelector('.trkp');
    container.replaceChildren();

    let a = document.querySelector(".a1").value;
    let b = document.querySelector(".b1").value;
    let c = document.querySelector(".c1").value;

    trikampis.skKampus(a,b,c);
    document.querySelector('.trkp').innerHTML+="plotas = "+trikampis.skPlota(a,b,c)+"<br>";
    document.querySelector('.trkp').innerHTML+="perimetras = "+trikampis.skPerimetra(a,b,c)+"<br>";
    document.querySelector('.trkp').innerHTML+="Pusperimetris = "+trikampis.skPusperimetri(a,b,c)+"<br>";
    document.querySelector('.trkp').innerHTML+="Kampai a,b,c (laipsniais) = "+ trikampis.skKampus(a,b,c);
});