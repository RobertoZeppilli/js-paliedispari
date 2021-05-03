// 1 - Palindroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 1. creo la funzione "ePalindroma" per chiedere: il primo argomento è uguale al secondo? allora la parola è palindroma. I due argomenti sono diversi? Allora non è palindroma.
function ePalindroma(par, inv) {

    if (par == inv) {
        console.log(par + " è palindroma");
        return true;
    } else {
        console.log(par + " non è palindroma");
        return false;
    }

}

// 2. chiedo la parola all'utente.
var parola = prompt("Inserisci una parola!");

// 2.1 Faccio in modo che la parola inserita dall'utente sia capitalizzata
parola = parola[0].toUpperCase() + parola.toLowerCase().slice(1);

// 3. inizializzo la variabile che conterrà la parola inserita dall'utente ma al contrario.
var parolaInversa;

// 4. Con .split("") trasformo la parola inserita dall'utente in un array.
var arrayParola = parola.split("");

// 5. con .reverse() l'array è al contrario.
var arrayInverso = arrayParola.reverse();

// 6. con .join('') unisco tutti gli elementi dell'array al contrario trasformandolo in stringa, inserendo il tutto nella variabile inizializzata in precedenza, ottenendo quindi il contrario della parola inserita dall'utente.
var parolaInversa = arrayInverso.join('');

// 7. Faccio in modo che anche la parolaInversa sia capitalizzata
parolaInversa = parolaInversa[0].toUpperCase() + parolaInversa.toLowerCase().slice(1);
// 8. chiamo la funzione "ePalindroma" creata in precedenza che mi dirà se la parola inserita dall'utente sia o meno palindroma.
var palindroma = ePalindroma(parola, parolaInversa);








