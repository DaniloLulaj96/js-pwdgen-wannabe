//chiesto nome e inserito in variabile
const first_name= prompt('insert your first name')
//chiesto cognome e inserito in variabile
const last_name= prompt('insert your last name')
//chiesto colore e inserito in variabile
const favourite_color= prompt('insert your favorite color')

//controllare corretto funzionamento in console
console.log(first_name);
console.log(last_name);
console.log(favourite_color);

//creazione dichiarazione Password 
const password= `${first_name}${last_name}${favourite_color}23`
//controllo funzionamneto in console
console.log(password)

//mostrare password a schermo
document.getElementById('show_password').innerHTML = password 