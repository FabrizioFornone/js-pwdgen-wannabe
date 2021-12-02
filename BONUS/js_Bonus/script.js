// Dichiarazione delle costanti

const firstquestion = prompt('Come si chiama il creatore della Webpage?');

const secondquestion = prompt("Come lo definiresti?");

// Assegno la variabile answer4you ad #output

let answer4you = document.getElementById("output");

// Stampo in pagina

answer4you.innerHTML = `Lo sai che ${firstquestion} è un grandissimo ${secondquestion}?`;