// Dichiaro le costanti e le associo a dei prompt a schermo
const userName = prompt("Inserisci il tuo nome");
const userLastname = prompt("Inserisci il tuo cognome");
const userFavcolor = prompt("Inserisci il tuo colore preferito");

// Dichiaro la variabile htmlElement e la associo all'oggeto #user-psw

let htmlElement = document.getElementById("user-psw");

/*  Richiamo in pagina con una stringa di codice la variabile htmlElement che è composta
 da una concatenazione delle costanti dichiarate */

htmlElement.innerHTML = `${userName}${userLastname}${userFavcolor}21 
`;
