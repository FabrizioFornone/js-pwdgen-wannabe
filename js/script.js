const userName = prompt("Inserisci il tuo nome");
const userLastname = prompt("Inserisci il tuo cognome");
const userFavcolor = prompt("Inserisci il tuo colore preferito");

let htmlElement = document.getElementById('user-psw');
htmlElement.innerHTML = `${userName}${userLastname}${userFavcolor}21 
`;
