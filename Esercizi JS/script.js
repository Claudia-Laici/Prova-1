//1. 🔢 Crea una funzione `quadrato(numero)` che restituisce il quadrato del numero.

function quadrato(numero) {
    return numero * numero;
}
console.log(quadrato(5)); // Stampa 25


//2. 👥 Crea un array `nomi = ["Anna", "Luca", "Marco"]` e stampali tutti in maiuscolo.

let nomi = ["Anna", "Luca", "Marco" ,"Giulia", "Francesco"];

nomi.forEach(function(nome) {
    console.log(nome.toUpperCase());
});



//3. 🎓 Crea un oggetto `studente` con proprietà: nome, corso, votoFinale e stampa:
let studente = {
    nome: "Mario",
    corso: "Informatica",
    votoFinale: 28,
    presentazione: function() {
        console.log(`Ciao mi chiamo ${this.nome} frequento il corso di ${this.corso} e il mio voto finale è ${this.votoFinale}.`);
    }
};

studente.presentazione(); // Stampa: Ciao mi chiamo Mario frequento il corso di Informatica e il mio voto finale è 28.


//Usa uno switch per stampare il nome del mese in base a un numero da 1 a 12.

let mese = 13; // Esempio di mese

switch (mese) { 
    case 1:
        console.log("Gennaio");
        break;
    case 2:
        console.log("Febbraio");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Aprile");
        break;
    case 5:
        console.log("Maggio");
        break;
    case 6:
        console.log("Giugno");
        break;
    case 7:
        console.log("Luglio");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Settembre");
        break;
    case 10:
        console.log("Ottobre");
        break;
    case 11:
        console.log("Novembre");
        break;
    case 12:
        console.log("Dicembre");
        break;
    default:
        console.log("Numero non valido. Inserisci un numero da 1 a 12.");
}

//scrivi una condizione che stampi ok per uscire solo se l'utente è maggiorenne e non ammalato.

let eta = 20;

let isSick = false;

if (eta >= 18 && !isSick) {
    console.log("OK per uscire");
} else {
    console.log("Non puoi uscire");
}


//Scrivi una funzione che controlli se un numero è pari o dispari.

function controllaPariDispari(numero){

    if(numero % 2 === 0){
        console.log(`${numero} è un numero pari.`);
    } else {
        console.log(`${numero} è un numero dispari.`);
    }

}
controllaPariDispari(30); // Stampa: 10 è un numero pari.
controllaPariDispari(13);  // Stampa: 7 è un numero dispari.


var quantita = [12, 34, 45, 7, 19];
var totale = 0;
var indice;
for (indice in quantita) {
	totale = totale +  quantita[indice];
}
console.log(`Il totale è: ${totale}`);