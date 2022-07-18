"use strict";

// 4. Sukurti objektą "Elementas". Kintamieji:
// pradzios_zyme - HTML žymės pradžios žymė. Pvz.: <div>
// pabaigos_zyme - HTML žymės pabaigos žymė. Pvz.: </div>
// elemento_klases - HTML žymės klasės, masyvas.
// turinys - gali būti tekstas, skaičius, taip pat kitas HTML elementas.

// Objektui sukurti paleidimo metodą, kurio metu perduodami kintamieji pradzios_zyme, pabaigos_zyme, elemento_klases, turinys,.
// Objekte sukurti metodą, kuris perduodamą informaciją į objektą atvaizduoja dizaine.
// Pvz.:
// elementas.atvaizduok("<div>",["container", "raudonas"], "<p>labas</p><br>", "</div>" ) - dizaine turi būti atvaizduojamas
// <div class="container raudonas">
// <p>labas</p><br>
// </div>

document.querySelector('.sukurtidiva').addEventListener("click", function(){

    let elementas = {
        pradzios_zyme: "",
        pabaigos_zyme: "",
        elemento_klases: "",
        turinys: "",

        paleisk: function(pradzios_zyme, elemento_klases, turinys, pabaigos_zyme ) {
            this.pradzios_zyme = pradzios_zyme;
            this.pabaigos_zyme = pabaigos_zyme;
            this.elemento_klases = elemento_klases;
            this.turinys = turinys;
            // console.log(this.elemento_klases);
        },

        atvaizduok: function(pradzios_zyme, elemento_klases, turinys, pabaigos_zyme) {

            this.pradzios_zyme = pradzios_zyme;
            this.pabaigos_zyme = pabaigos_zyme;
            this.elemento_klases = elemento_klases;
            this.turinys = turinys;

            let atvElementas = "";
            atvElementas += "<"+this.pradzios_zyme + " ";


            
            if(this.elemento_klases.length > 0) {
                atvElementas += "class='";
                for(let i=0; i<this.elemento_klases.length; i++) {
                    console.log(this.elemento_klases[i]);
                    atvElementas += this.elemento_klases[i] + " ";
                }
                atvElementas += "'>"; 
            } else {
                atvElementas += ">"; 
            }


            atvElementas += this.turinys;
            atvElementas += this.pabaigos_zyme;

            console.log(atvElementas);
            // atvElementas = "<div><p>labas</p><br></div>";
            document.querySelector('.rezultatas4p').innerHTML = atvElementas;
        }

    }

    elementas.atvaizduok("div", ['labas'], "<p>sugeneruotas Elementas</p><br>", "</div>")
    // elementas.atvaizduok();
});