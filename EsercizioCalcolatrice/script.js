function calcola() {
  const n1 = parseFloat(document.getElementById("n1").value);
  const n2 = parseFloat(document.getElementById("n2").value);
  let risultato;

  if (isNaN(n1) || isNaN(n2)) {
    document.getElementById("risultato").textContent =
      "Inserisci numeri validi";
    return;
  }

  switch (operazione) {
    case "somma":
      risultato = n1 + n2;
      break;
    case "sottrazione":
      risultato = n1 - n2;
      break;
    case "moltiplicazione":
      risultato = n1 * n2;
      break;
    case "divisione":
      if (n2 === 0) {
        alert("Non puoi dividere per 0");
        return;
      } else {
        risultato = n1 / n2;
      }
      break;
    default:
      risultato = "Operazione non valida";
      break;
  }

  document.getElementById("risultato").textContent = `Risultato: ${risultato}`;
}
