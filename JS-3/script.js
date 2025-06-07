let colori =["rosso", "verde","blu"]

for (let colore of colori){
    console.log(`Il colore è: ${colore}`);
}

let persona ={
    nome: "Mario",
    eta: 30,
}

for (let chiave in persona){
    console.log(`${chiave}: ${persona[chiave]} `);
}