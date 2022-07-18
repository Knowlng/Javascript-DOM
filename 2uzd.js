"use strict";

// 2. Pasinaudodami ciklu, sukurkite funkciją, kuri traukia kvadratinę šaknį iš skaičiaus.


function SakniesTraukimas() {

    const container = document.querySelector('#rezultatas2');
    container.replaceChildren();


    const square = (n, i, j) => {
        let mid = (i + j) / 2;
        let mul = mid * mid;
        if ((mul === n) || (Math.abs(mul - n) < 0.00001)){
           return mid;
        }else if (mul < n){
           return square(n, mid, j);
        }else{
           return square(n, i, mid);
        }
     }
    
     const findSqrt = num => {
        let i = 1;
        const found = false;
        while (!found){
            if(num <= 0) {
                return "Įveskite teigiamą skaičių";
            }
           else if (i * i === num){
              return i;
           }else if (i * i > num){
              let res = square(num, i - 1, i);
              return res;
           };
           i++;
        }
     }

    document.querySelector('#rezultatas2').innerHTML=findSqrt(parseFloat(document.querySelector("#input2").value));
}

document.querySelector("#rasti2").addEventListener("click", SakniesTraukimas);

// P.S. Bandžiau pats rašyti, bet nepavyko. Kodą radau internete, suprantu kaip veikia, bet pats manau neišmąstyčiau tokio sprendimo kol kas :).
// source: https://www.tutorialspoint.com/square-root-function-without-using-math-sqrt-in-javascript 