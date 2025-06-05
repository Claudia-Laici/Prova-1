function saluta(nome){
    console.log("Ciao " + nome + "!");
}

saluta("Giulia");

function print(stampa){
    console.log(stampa);
}

print("Hello, World!");

print("Ciao, Mondo!");

function raddoppia(a){
    return a * 2;
}

console.log(raddoppia(5)); // Stampa 10
console.log(raddoppia(10)); // Stampa 20
console.log(raddoppia(15)); // Stampa 30

let animale = ["cane", "gatto", "coniglio"];

console.log(animale.length); // Stampa 3

for (let i = 0; i < animale.length; i++) {
    console.log(animale[i]);
}

//Esercizio 1
// Scrivi una funziona con un valore di default che stampa (console.log)
// il saluto in una lingua specifica

//se lingua === EN stampa "Hello"
//se lingua === IT stampa "Ciao"

function salutoConLingua(lingua = "EN") {
    if (lingua === "EN") {
        console.log("Hello");
    } else if (lingua === "IT") {
        console.log("Ciao");
    } else {
        console.log("Lingua non supportata");
    }
}

salutoConLingua(); // Stampa "Hello"



//Esercizio 2
// Crea una funzione eseguiOperazione(a, b, operazione)
// dove operazione è una funzione (ad esempio somma, sottrazione,)


function somma(a, b) {
    return a + b; 
}

function sottrazione(a, b) {
    return a - b;
}

function eseguiOperazione(a, b, operazione) {
    return operazione(a, b);
}

console.log(eseguiOperazione(5, 3, somma)); // Stampa 8
console.log(eseguiOperazione(5, 3, sottrazione)); // Stampa 2

// Esercizio 3
// scrivi queste funzioni usando arrow funcition

const salutoConLingua2 = (lingua = "IT") => {
    if (lingua === "EN") {
        console.log("Hello");
    } else if (lingua === "IT") {
        console.log("Ciao");
    }
};

salutoConLingua2(); // Stampa "Ciao"




const somma1 = (a, b) => a + b;

const sottrazione1 = (a, b) => a - b;

const eseguiOperazione1 = (a, b, operazione) => operazione(a, b);

console.log(eseguiOperazione1(10, 4, somma1)); // Stampa 14
console.log(eseguiOperazione1(10, 7, sottrazione1)); // Stampa 3