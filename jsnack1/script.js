// CREO IL MIO ARRAY DI EMAIL
const guests = ["Francesco", "Francesca", "Mario", "Maria", "Daniele", "Daniela", "Leonardo", "Riccardo"];

// RECUPERO IL PULSANTE DAL DOM
const button = document.getElementById('search');

button.addEventListener('click', function (){

    // RECUPERO IL VALORE INSERITO NEL CAMPO INPUT
    let user_name = document.getElementById('user-name').value;
    
    // DEFINISCO UNA VARIABILE FLAG
    let check_name = false;

    // CICLO L'ARRAY   
    for (i = 0; i < guests.length; i++){
    // CONFRONTO IL NOME INSERITO DALL'UTENTE CON QUELLI PRESENTI NELL'ARRAY E AGGIORNO LA VARIABILE FLAG
        if( guests[i].toLowerCase() === user_name.toLowerCase() ){
            check_name = true;
        }
    }
    if(check_name){
        console.log(`${user_name} Benvenuto alla festa`);
    }
    else{
        console.log(`${user_name} Non sei stato invitato`);
    }
    
})

