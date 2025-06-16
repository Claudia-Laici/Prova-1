// studenti di esempio
const studenti = [
{ nome: "Mario Rossi", voto: 8, presente: true },
{ nome: "Luigi Bianchi", voto: 5, presente: false },
{ nome: "Anna Verdi", voto: 9, presente: true },
{ nome: "Beatrice Neri", voto: 6, presente: true },
{ nome: "Carlo Blu", voto: 4, presente: true },
{ nome: "Davide Rosa", voto: 7, presente: false },
{ nome: "Elena Gialli", voto: 10, presente: true },
{ nome: "Federico Viola", voto: 3, presente: false },
{ nome: "Giorgia Azzurra", voto: 8, presente: true },
{ nome: "Lorenzo Marrone", voto: 2, presente: false },
{ nome: "Martina Rosa", voto: 6, presente: true },
{ nome: "Simone Nero", voto: 5, presente: true }
];
const btn = document.getElementById('run');
const out = document.getElementById('output');


// funzione per mostrare output
function log(titolo, dato) {
const h4 = document.createElement('h4');
const pre = document.createElement('pre');
h4.textContent = titolo;
pre.textContent = JSON.stringify(dato, null, 2);
out.append(h4, pre);
}

btn.addEventListener('click', () => {
out.innerHTML = '';

// operatore ternario
// condizione ? se vero : se falso
const studente = studenti[0]; // prendi l'intero oggetto
studente.voto >= 6 ? log('Promosso', studente) : log('Bocciato', studente);

//spread operator
let tuttiStudenti = [...studenti, { nome: "Giovanni Bianchi", voto: 8, presente: true }, { nome: "Lorena Bluastri", voto: 4, presente: false }];
log('tutti studenti', tuttiStudenti);

//rest operator
function raggruppaNomi (...nomi){
     
    let gruppo = [];
    for (let i = 0; i < nomi.length; i++){
        gruppo.push(nomi[i]);
    }
    return gruppo;
    
 }

 log("Nomi studenti", `Nomi studenti: ${raggruppaNomi(...studenti.map((studente) => studente.nome))}`);


//map()
const studentiFormattati = tuttiStudenti.map(
  (studente) => `${studente.nome}: (${studente.voto})`
)
log("Studenti formattati", studentiFormattati);


//filter()
const presenti = tuttiStudenti.filter((studente) => studente.presente);
log("Studenti presenti", presenti);


//forEach()
const ul = document.createElement("ul");
tuttiStudenti.forEach((studente) => {
  const li = document.createElement("li");
  const icona = studente.presente ? "✔️" : "❌";
  li.textContent = `${studente.nome}: ${icona}`;
  ul.appendChild(li);
});
out.appendChild(ul);


//destructuring
function presentaStudente({ nome, voto, presente }) {
  return `Ciao, sono ${nome}, ho preso ${voto} e sono ${presente ? "presente" : "assente"}.`;
}
const presentazioni = tuttiStudenti.map(presentaStudente);
log("Presentazioni studenti", presentazioni);



//form per rimuovere uno studente
const form = document.createElement("form");
const input = document.createElement("input");
const button = document.createElement("button");
button.textContent = "Rimuovi studente";
form.appendChild(input);
form.appendChild(button);
out.appendChild(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Aggiorna l'array originale (solo una volta!)
  tuttiStudenti = tuttiStudenti.filter(
    (studente) => studente.nome.toLowerCase() !== input.value.toLowerCase()
  );

  // Mostra il nuovo array
  log("Studenti aggiornati", tuttiStudenti);

  // Pulisci il campo input
  input.value = "";
});

//creo classi css per studenti promossi o bocciati
studenti.forEach((studente) => {
  const div = document.createElement('div');
  div.textContent = `${studente.nome} - Voto: ${studente.voto}`;
  
  // Ternario diretto in classList.toggle()
  div.classList.toggle('promosso', studente.voto >= 6); // creo classe promosso per css
  div.classList.toggle('bocciato', studente.voto < 6); // creo classe bocciato per css
  
  out.appendChild(div);
});

});