"use strict";

// 1. Sukurkite funkciją, kurią iškvietus, masyvą galima papildyti norimu elementu.
// Informacija paimama iš input laukelio. Funkcija iškviečiama paspaudus mygtuką.


let masyvas = [];

function masyvoPildymas() {
    let elementas;
    elementas = document.querySelector("#input1").value;

    masyvas.push(elementas);
    document.querySelector("#rezultatas1").innerHTML = masyvas;

}

document.querySelector("#prideti1").addEventListener("click", masyvoPildymas);