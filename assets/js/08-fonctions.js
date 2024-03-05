/* ------------------------------ FONCTIONS ------------------------------------- */

/*
    Une fonction est un bloc de code réutilisablequi peut etre appelé a partir d'autres parties de votre code pour effectuer une tache spécifique.
    Les fonctions sont un moyen utile de segmenter votre code en taches plus petites et plus faciles a gerer,
    elles permettent de réutiliser le meme code plusieurs fois sans avoir a le copier coller.
*/

// Déclaration de fonction
function hello(firstname,lastname){
    console.log("Bonjour " + firstname + " " + lastname)
}

hello('Amit Nicolas','ROIG MENDA')

// Déclarer une fonction qui prends 3 parametres
    // Declare une variable TVA à 20%
    // Elle multiplie les 3 nombres et la TVA

    // Appellez la fonction 

// function tva(x,y,z){
//     const tva = 0.2
//     const result = x*y*z*tva
//     return result
// }

// const resultat = tva(10,20,30)
// console.log(resultat)

// Il est possible de sauvegarder une fonction dans une variable
// On les appelle les fonctions anonymes

const math = function(x,y){
    return x*y;
};

const res = math(10,2)
console.log(res)

// fonction addition 

// function add(x,y) {
//     let result = x+y
//     return result
// }

// let resultat = add(10,50)
// console.log(resultat)

const add = function(x,y){
    return x + y
}
const resultat = add(10,50)
console.log(resultat)

// arrow function (fonction fléché)
// Nouvelle syntaxe introduite avec ES6 (2015)
const divide = (x,y)=>{
    return x/y
}
const division = divide(10,2)
console.log(division)

// const arrow = (x) =>{
//  return x*2
// }

// Il existe des façons encore plus concise d'écrire les fonctions fléchés
const arrow = x => x * 2;
const r = arrow(45)
console.log(r)

// Creer une fonction fléché helloYou avec un parametre qui affiche bonjour + PRENOM

const helloYou = (name) => {
    const message = `Bonjour, ${name}`
    return message
}
const message = helloYou('Amit')
console.log(message);

// Demander a l'utilisateur de rentrer un nombre
// Creer une fonction qui prend en parametre un nombre
// Et qui affiche dans la console si le nombre est pair ou impair (modulo)
// Appeler la fonction en lui passant le nombre 5 en parametre
// Appeler la fonction en lui passant le nombre 256 en parametre

// const question = prompt("Rentre un nombre")
// const nombre = x => {

//     if (x % 2 == 0){
//         console.log("Le nombre est pair")
        
//     }else {
//         console.log("Le nombre est impair")
//     }
// }
    
// nombre(question)

// Declarer une variable qui contient un nombre
// Si le nombre est divisible par 3, afficher dans un alert 'Fizz'
// Si le nombre est divisible par 5, afficher dans un alert 'Buzz'
// Si le nombre est divisible par 3 et 5, afficher dans un alert 'FizzBuzz'
// Sinon afficher dans un alert le nombre

// let nombre = prompt("Donne moi un nombre")

// if (nombre % 3 === 0 && nombre % 5 === 0) {
//     alert('FizzBuzz');
// } else if (nombre % 3 === 0) {
//     alert('Fizz');
// } else if (nombre % 5 === 0) {
//     alert('Buzz');
// } else {
//     alert(nombre);
// }

// Transformer en fonction le jeu du fizzbuzz



let nombre = prompt("Donne moi un nombre")
function fizzbuzz(x){

    if (x % 3 === 0 && x % 5 === 0) {
        alert('FizzBuzz');
    } else if (x % 3 === 0) {
        alert('Fizz');
    } else if (x % 5 === 0) {
        alert('Buzz');
    } else {
        alert(x);
    }
}

fizzbuzz(nombre)