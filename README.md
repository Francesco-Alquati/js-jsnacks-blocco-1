Ciao ragazzi,
nome repo di oggi: js-jsnacks-blocco-1
SNACK 1:
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
SNACK 2:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell'array
SNACK 3:
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
BONUS:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Create una sotto-cartella per ogni jsnack e riportate la consegna all'inizio del file js.
La struttura dei file dovrebbe essere la seguente:
`jsnack1 (cartella)
- index.html
- script.js
jsnack2 (cartella)
- index.html
- script.js`
e così via

Suddivido i problemi in sottoproblemi 

Snack 1

1 - Creo un input nel file html
2 - Creo un button per la ricerca
3 - In js creo un array con la lista degli invitati che possono partecipare
4 - In js recupero il button per la ricerca e gli applico una funcion al click
5 - Nella function recupero il valore inserito nel campo input dall'utente
6 - Nella function Ciclo l'array e confronto il nome dell'utente con quelli nell'array
7 - Se il nome è presente nell'array stampo "Benvenuto alla festa"
7.1 - Se il nome non è presente nell'array stampo "Non sei stato invitato"

Snack 2

1 - Creo un array vuoto
2 - Creo un input e un bottone nel DOM 
3 - Creo una const per richiamare il bottone dal DOM
4 - Creo una variabile contatore
5 - Aggiungo un evento click al bottone
6 - Richiamo l'input dal DOM
7 - Creo un if per il contatore che aumenta ogni volta che il bottone viene premuto fino a 6 volte
8 - Creo un if per inserire nell'array solo numeri dispari inseriti dall'utente

Snack 3

1 - Creo un input e un bottone nel DOM 
2 - Creo una variabile per la somma
3 - Creo una const per richiamare il bottone dal DOM
4 - Aggiungo un evento click al bottone
5 - Richiamo l'input dal DOM
6 - Dichiaro il mio array e con il metodo split divido il numero di 4 cifre in 4 elementi dell'array
7 - Assegno alla variabile somma la somma dei 4 elementi presenti nell'Array
