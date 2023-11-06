const evenOrOdd = prompt("Pari o Dispari?");
const userNumber = Number(prompt("Scegli un numero da 1 a 5"));
const computerNumber = Math.floor(Math.random() * 5) +1;
const total = userNumber + computerNumber;



function result() {
    
console.log(`Pari o Dispari?: ${evenOrOdd}`);
console.log(`Il tuo numero è: ${userNumber}`);
console.log(`Il numero del computer è: ${computerNumber}`);
console.log(`Risultato: ${total}`);
}


function pariOrDispari(numero) {
    let risultato;

    if(numero % 2 == 0) {
        risultato = "pari";
    } else {
        risultato = "dispari";
    }

     return risultato;
}

let risultato = pariOrDispari(total);

if (risultato == "pari" && evenOrOdd == "pari") {
    result();
    console.log("You Win!")
} else if (risultato == "dispari" && evenOrOdd == "dispari") {
    result();
    console.log("You Win!")
}else {
    result();
    console.log("You Lose!") 
}


