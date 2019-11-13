//prova se è correttamente collegato
// alert('Questa è una prova!')

/*ES:
1. chiedere attraverso prompt [nome][cognome][colorePreferito]
2. generare psw formata da [nome][cognome][colorePreferito]19
3. visualizzarla a schermo
*/
var name = prompt('Inserisci il tuo nome:');
var surname = prompt('Inserisci il tuo cognome:');
var bestColor = prompt('Inserisci il tuo colore preferito:');
console.log(name + surname + bestColor);
document.getElementById('show_password').innerHTML = name + surname + bestColor + '19';
document.getElementById('container').setAttribute('class','visible');
