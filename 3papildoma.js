"use strict";


// 3. Susikurti objektą "Klientas".
// Kintamieji:
// vardas
// pavarde
// asmens kodas
// prisijungimo data
// adresas
// elpastas.

// Sukurti 200 "Klientas" objektų masyvą. "Klientas" duomenis užpildyti savo nuožiūrą.
// Visą "Klientas" objektų masyvą atvaizduoti lentelėje <table>.


// 1 klientas

let klientai = [];

document.querySelector('.sukurti2').addEventListener("click", function(){

    for(let i=0; i<200; i++) {
        let klientas = {
            vardas: "vardas",
            pavarde: "pavarde",
            asmensKodas: "asmensKodas",
            prisijungimoData: "2014-05-21",
            adresas: "adresas",
            elpastas: "pastas@pastas.lt",
        
            pakeisk: function(sarasoNumeris) {
                this.vardas = "vardas"+sarasoNumeris;
                this.pavarde = "pavarde"+sarasoNumeris;
                this.asmensKodas = "asmensKodas"+sarasoNumeris;
                this.prisijungimoData = "2014-05-21"+sarasoNumeris;
                this.adresas = "2014-adresas-21"+sarasoNumeris;
                this.elpastas = "pastas@pastas.lt"+sarasoNumeris;
                
            }
        }
        
        klientai.push(klientas);
        klientas.pakeisk(i);
    }

    console.log(klientai);


    for(let i = 0; i< klientai.length; i++) {
        //sukurti eilute
        //prikabinti prie eilutes stulpeli
        //prie lenteles turiu prikabinti eilute su stulpeliu

        let tr;
        tr = document.createElement('tr');
        
        let td;
        td = document.createElement('td');  
        td.innerHTML = klientai[i]["vardas"]

        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = klientai[i]["pavarde"]

        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = klientai[i]["asmensKodas"]

        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = klientai[i]["prisijungimoData"]

        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = klientai[i]["adresas"]

        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = klientai[i]["elpastas"]

        tr.appendChild(td);

        document.querySelector(".klientai").appendChild(tr);
    }
});

// console.log(klientai[10]["vardas"]);