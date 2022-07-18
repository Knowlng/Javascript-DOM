"use strict";

// 3. Sukurkite funkciją, kuri mygtuko paspaudimu, sukuria div elementą su klase "elementas-{index}". {index} = elemento numeris

let masyvas1 = [];
let i=0;

function SukurtiDiv() {
   
    let newDiv;
    i=i+1;
    masyvas1.push(i);
    newDiv = document.createElement('div');
    newDiv.classList.add('elementas-'+masyvas1[i-1]);
    document.querySelector('.rezultatas3').appendChild(newDiv);
}




document.querySelector(".sukurti3").addEventListener("click", SukurtiDiv);