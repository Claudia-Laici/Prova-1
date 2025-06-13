//**Esercizio 2.1: Selezioni multiple**


// 1. Selezionare tutti gli elementi <a> nella pagina
console.log("=== 1. Tutti gli elementi <a> ===");
const tuttiLink = document.querySelectorAll('a');
console.log(`Numero di link trovati: ${tuttiLink.length}`);
console.log("Link trovati:", tuttiLink);

// Mostriamo anche il contenuto e href di ogni link
tuttiLink.forEach((link, index) => {
    console.log(`Link ${index + 1}: "${link.textContent}" -> ${link.href}`);
});

// 2. Contare quanti paragrafi ci sono
console.log("\n=== 2. Conteggio paragrafi ===");
const paragrafi = document.querySelectorAll('p');
console.log(`Numero di paragrafi: ${paragrafi.length}`);

// Mostriamo anche il contenuto di ogni paragrafo
paragrafi.forEach((p, index) => {
    console.log(`Paragrafo ${index + 1}: "${p.textContent}"`);
});

// 3. Trovare tutti gli elementi che hanno un attributo data-id
console.log("\n=== 3. Elementi con attributo data-id ===");
const elementiConDataId = document.querySelectorAll('[data-id]');
console.log(`Numero di elementi con data-id: ${elementiConDataId.length}`);

// Mostriamo gli elementi e i loro valori data-id
elementiConDataId.forEach((elemento, index) => {
    console.log(`Elemento ${index + 1}: "${elemento.textContent}" (data-id: ${elemento.getAttribute('data-id')})`);
});

// 4. Selezionare solo i link che portano a sezioni interne (href inizia con #)
console.log("\n=== 4. Link interni (href inizia con #) ===");
const linkInterni = document.querySelectorAll('a[href^="#"]');
console.log(`Numero di link interni: ${linkInterni.length}`);

// Mostriamo i link interni
linkInterni.forEach((link, index) => {
    console.log(`Link interno ${index + 1}: "${link.textContent}" -> ${link.href}`);
});

