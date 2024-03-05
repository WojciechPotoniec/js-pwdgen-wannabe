/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23 */


let userName = prompt("Qual è il tuo nome?");
let userSurname = prompt("Qual è il tuo cognome?");
let favColor = prompt("Che colore ti piace?");
let number = prompt("qual è il tuo numero preferito?");

let message = `${userName}${userSurname}${favColor}${number}`;

document.getElementById("password").innerHTML = message;
console.log(message);

// let message = userName + userSurname + favColor + number;
