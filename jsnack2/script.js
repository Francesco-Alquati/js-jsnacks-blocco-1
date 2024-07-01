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

})


