// *** Inserisco la parola 
const word = prompt("Inserisci la tua parola");


// Inverto la parola
let invertWord = reverseWord(word);

// Controllo che la parola inserita sia uguale al contrario
let isPalindromo = false;

if(word == invertWord) {
    isPalindromo = true;
}

// Stampo il risultato
if(isPalindromo) {
    alert("la parola è palindroma");
} else {
    alert("la parola non è palindroma");
}

// Funzione che calcola che inverte la mia parola
function reverseWord(word) {
    let risultato = "";

    for (let i = word.length-1; i >= 0; i--) {
        risultato += word[i];    
    }

    return risultato;
}