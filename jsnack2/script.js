// CREO L'ARRAY VUOTO
let array = [];

// RICHIAMO IL BOTTONE DAL DOM
const btn = document.getElementById('button');

// CREO UNA VARIABILE CONTATORE
let count = 0;

// RICHIAMO IL CONTATORE DAL DOM
let disp = document.getElementById("display");

// APPLICO UNA FUNZIONE AL BOTTONE
btn.addEventListener('click' ,function (){

    // RICHIAMO L'INPUT DAL DOM
    let text = document.getElementById('input').value;
  
    // CREO UNA CONDIZIONE PER POTER INSERIRE SOLO 6 VOLTE UN NUMERO
    if(count <= 5){
        count++;
        disp.innerHTML = count;

        // SE IL NUMERO è DISPARI LO INSERISCO NELL'ARRAY
        if (text % 2 != 0){
            text = document.getElementById('input').value;
            array.push(text);
            console.log(array)
            document.getElementById("input").value = "";
        }   
        // SE IL NUMERO è PARI NON LO AGGIUNGO NELL'ARRAY
        else{
            document.getElementById("input").value = "";
            console.log(array)
        }

    }
    // AZZERO IL CONTATORE E SVUOTO L'ARRAY
    else{
        count = 0;
        disp.innerHTML = count;
        array = [];
        console.log(array)
    }
})


// SOLUZIONE CICLO PROMPT

// CREO ARRAY
let numbers = [];

// ESEGUO UN CICLO DI 6 ITERAZIONI
for(let i = 0; i<6; i++) {
    // PERMETO L'INSERIMENTO DEL NUMERO DA PARTE DELL'UTENTE
    let num = prompt('Inserisci un numero');

    // VERIFICO SE IL NUMERO è DISPARI
    if (num % 2 != 0){
        //INSERISCO IL NUMERO NELL'ARRAY
        numbers.push(num);
    }
}
// MOSTRO L'ARRAY
console.log(numbers);