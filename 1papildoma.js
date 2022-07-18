"use strict";

// 1.Parduotuvėje pardavėja graža g pirkejui nori atiduoti 100,50,20,10,5 euru banknotais ir 2 ir 1 eurais monetomis.
// Apskaičiuoti, kiek ir kokio nominalo banknotų ir monetų pardavėja turės atiduoti pirkėjui.


function skaiciuokBanknotus() {
    const container = document.querySelector('.rezultatas4');
    container.replaceChildren();
    let g;
    g = parseInt(document.querySelector("#graza").value);

    let simtasKiek = parseInt(g/100); //kiek bus 100eur banknotu
    g = g % 100;// 429 % 100 = 29
    let penkiasdesimtKiek = parseInt(g/50); // 29/50 = 0.6 ~ 0
    g = g % 50; // 29 % 50 = 29
    let dvidesimtKiek = parseInt(g/20); //29/20 = 1,4 ~ 1
    g = g % 20;// 29 % 20 = 9
    let desimtKiek = parseInt(g/10); // 9/10 = 0
    g = g % 10;// 9 % 10 = 9
    let penkiKiek = parseInt(g/5); // 9/5 = 1. ~ 1
    g = g % 5; // 9 % 5 = 4
    let duKiek = parseInt(g/2)// 4/2 = 2;
    let vienasKiek= g % 2; //2%2 = 0

    let masyvas = [simtasKiek, penkiasdesimtKiek, dvidesimtKiek, desimtKiek, penkiKiek,duKiek, vienasKiek];

    document.querySelector('.rezultatas4').innerHTML+="100 kupiūrų kiekis = "+masyvas[0]+"<br>";
    document.querySelector('.rezultatas4').innerHTML+="50 kupiūrų kiekis = "+masyvas[1]+"<br>";
    document.querySelector('.rezultatas4').innerHTML+="20 kupiūrų kiekis = "+masyvas[2]+"<br>";
    document.querySelector('.rezultatas4').innerHTML+="10 kupiūrų kiekis = "+masyvas[3]+"<br>";
    document.querySelector('.rezultatas4').innerHTML+="5 kupiūrų kiekis = "+masyvas[4]+"<br>";
    document.querySelector('.rezultatas4').innerHTML+="2 monetų kiekis = "+masyvas[5]+"<br>";
    document.querySelector('.rezultatas4').innerHTML+="1 monetų kiekis = "+masyvas[6]+"<br>";
    console.log(masyvas); 
}

document.querySelector("#skaiciuoti").addEventListener("click", skaiciuokBanknotus);