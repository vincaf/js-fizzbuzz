// Creazione del ciclo per stampare in console numeri da 1 a 100
for (let i = 1; i < 101; i++) {

    // Inizializzazione della variabile per il box contente i numeri. Nuovo elemento div vuoto.
    const numberBox = document.createElement('div')

    // Al div vuoto si aggiungono due classi: col-2 e box
    numberBox.classList.add('col-2', 'box', 'align-middle');

    // Condizioni per il valore da stampare in console
    if ((i % 3) && (i % 5) == 0) {
        console.log("FizzBuzz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else{
        console.log(i);
    }

    // All'interno del div viene inserito "i"
    numberBox.innerHTML = i;

    // Scrittura in pagina
    document.getElementById("wrapperBox").appendChild(numberBox);
}