//Crea un array di numeri e usa for...of per sommarli tutti.

let array = [1, 2, 3, 4, 5, 16, 8, 17, 9, 10];

let somma = 0;

for (let numero of array) {
    somma += numero;
}

console.log(somma);

//Esercizio 1 — Aggiungi due colori e rimuovi l’ultimo

let colori = ["rosso", "verde", "blu"]; 

colori.push("giallo" , "arancione");
colori.pop();

console.log(colori);

//Esercizio 2 — Verifica se "verde" è presente e stampa indice

console.log(colori.includes("verde"));
console.log(colori.indexOf("verde"));

console.log(colori);

//Esercizio 3 — Cambia il colore in seconda posizione

colori[1] = "fucsia";

console.log(colori);

//Esercizio 4 — Rimuovi il primo elemento e stampa l’array aggiornato

colori.shift();

console.log(colori);
