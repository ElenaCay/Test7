function calcolaConto() {
    let libri = document.querySelectorAll('input[type=checkbox]:checked');

    let totale = document.getElementById("totaleConto");

    if (libri.length == 0)
        return;

    totale.innerText = '';
    let importoTotale = 0;
    for (let i = 0; i < libri.length; i++) {
        let nome = libri[i].name + "_";
        let numeroCopie = document.getElementsByName(nome)
        let prezzo = parseFloat(libri[i].value)
        if (parseInt(numeroCopie[0].value) != 1) {
            importoTotale += (prezzo*parseInt(numeroCopie[0].value));
        } else {
            importoTotale += prezzo;
        }
    }

    totale.innerText = "Totale: " + importoTotale + " €";
}

function confermaIscrizione() {
    let nome = document.getElementById("nome");
    let cognome = document.getElementById("cognome");
    let email = document.getElementById("email");
    let frequenza = document.getElementById("frequenza");

    let message = 'Iscrizione avvenuta con successo! La mail arriverà all\'indirizzo' + email.value + ' alla frequenza ' + frequenza.value + 'al Sig./Sig.ra '+ nome.value + cognome.value;

    alert("Ciao");
    let answer = confirm(message);
}