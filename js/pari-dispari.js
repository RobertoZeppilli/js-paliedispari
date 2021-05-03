// 2 - Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// 1. creo una funzione per generare un numero random scelto dal pc
function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 2. creo una funzione per stabilire se la somma di due numeri sia pari o dispari
function evenOdd(num1, num2) {
    if ((num1 + num2) % 2 == 0) {
        return num1 + num2;
    } else {
        return num1 + num2;
    }
}

// 3. chiedo all'utente di scegliere pari o dispari
var sceltaUtente = prompt("Scegli pari o dispari!");
document.getElementById("pari-dispari").innerHTML = sceltaUtente
// console.log("Hai scelto: " + sceltaUtente);

// 4. poi chiedo all'utente di scegliere un numero compreso tra 1 e 5
var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5!"));
document.getElementById("numero-utente").innerHTML = numeroUtente
// console.log("Il tuo numero:", numeroUtente);

// 5. creo una variabile in cui chiamo la funzione numeroRandom() inserendo come argomenti 1 e 5
var numeroPc = numeroRandom(1, 5);
document.getElementById("numero-pc").innerHTML = numeroPc;
// console.log("Il numero del pc:", numeroPc);

// // 6. stabilisco la somma tra i due numeri, e se quella somma sia pari o dispari
var somma = evenOdd(numeroUtente, numeroPc);
// console.log(somma);
document.getElementById("somma").innerHTML = somma;
// console.log("La somma dei due numeri è:", somma);


// 7. decreto il vincitore
var check = false;

if (sceltaUtente == "pari" && somma % 2 == 0 || sceltaUtente == "dispari" && somma % 2 == 1) {
    check = true;
}

if (check == true) {
    document.getElementById("vincitore").innerHTML = "Hai vinto!";
    document.getElementById("vincitore").style.color = "green";
    // console.log("Hai vinto!");
} else {
    document.getElementById("vincitore").innerHTML = "Hai perso!";
    document.getElementById("vincitore").style.color = "red";
    // console.log("Hai perso!");
}


