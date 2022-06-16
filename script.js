// Creazione del ciclo per stampare in console numeri da 1 a 100
for (let i = 1; i < 101; i++) {
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
}