// CREO UNA VARIABILE PER LA SOMMA
let somma = 0;

// RICHIAMO IL CONTATORE DAL DOM
let btn = document.getElementById("calculate");

// APPLICO UNA FUNZIONE AL BOTTONE
btn.addEventListener('click' ,function (){

    // RICHIAMO L'INPUT DAL DOM
    let num = document.getElementById('number').value;

    // CREO L'ARRAY
    const array = num.split("");
    
    
    for(let i = 0; i < array.length; i++){
        
        const intero = array[i]; 
        somma += parseInt(intero);
    }
    console.log( "La somma è " + somma);
})

