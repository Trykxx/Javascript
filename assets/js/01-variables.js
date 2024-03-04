/* ------------------------------VARIABLES ------------------------------------- */

// ? NB: les noms des variables sont sensibles a la casse
// On fait la différence entre les majuscules et les minuscules

// DECLARATION de variable
let uneVariable;
let UNEVARIABLE;

// AFFECTATION d'une variable (donne une valeur a la variable)
uneVariable = "Je suis une variable"

// Les deux peuvent se faire en meme temps
let hello = "Hello, world!"
hello=uneVariable

console.log(hello)

// Le mot clé const permet de déclarer une constante
// Vous ne pouvew pas modifier une constante (on dit qu'elle est immuable)
// "const" va garantir que la valeur ne soit pas modifié tout au long de l'éxécution du script

const constante = "Je suis une constante"
constante = "autre chose"

// Le mot clé var permet aussi de déclarer des variables
// C'est une pratique désuète (c'était la seule façon avant 2015)
var past = "Je suis dépassé"
