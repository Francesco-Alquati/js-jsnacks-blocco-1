// CREO UNA VARIABILE PER LA SOMMA
let somma = 0;

// RICHIAMO IL CONTATORE DAL DOM
let btn = document.getElementById("calculate");

// APPLICO UNA FUNZIONE AL BOTTONE
btn.addEventListener('click' ,function (){

    // RICHIAMO L'INPUT DAL DOM
    let number = document.getElementById('number').value;
    
    // CREO L'ARRAY
    const array = number.split("");
    console.log(array);
    
})