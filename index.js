// Es.1: Elenca e descrivi i principali datatype in Javascript:
// 1.String 2.Boolean 3.Undefined 4.Null:
// 1.String: la stringa è un testo, composto da lettere e/o numeri e/o spazi, di lunghezza variabile a partire da zero,
// che va necessariamente scritto all'interno di simboli come virgolette, apostrofo di diversa tipologia, per essere considerato tale.
// Anche le virgolette poste senza nulla al loro interno si conserano una stringa, ma vuota.
// 2.Boolean: è un qualcosa che definisce una funzione logica la cui risultante può essere esclusivamente 
// vero o falso corrispondenti a SI e NO.
// 3.Undefined: è un valore che ogni variabile possiede prima ancora di aver specificato e/o definito il
// contenuto di essa; sostanzialmente un dato Undefined è un valore non ancora definito.
// 4.Null: è un valore che ogni variabile può assumere ogni qual volta contiene qualcosa ma che successivamente
// viene svuotata.

//Es.2 somma 12 e 20.
let a = 12
let b = 20
let somma = a+b
console.log (somma)


//Es.3 
let x = 12

//Es.4 
let name = "Giulia"

//Es.5
let sottrazione = 4 - x
console.log (4-x)

//Es.6
let me = {
    nome: "Giulia",
    cognome: "Vaccaro",
    hobby: "fotografia"
}

//Es.7 Crea due variabii e verifica l'eguaglianza e la diseguaglianza (Suggerimento: utilizza .toLowerCase)
let name1 = "john"
let name2 = "John"
console.log(name1 === name2);
console.log(name1.toLowerCase === name2.toLowerCase);
