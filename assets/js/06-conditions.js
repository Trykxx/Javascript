/* ------------------------------ INSTRUCTIONS CONDITIONNELLES ------------------------------------- */

// Les opérateurs de comparaison (==, ===, !=, !==, >, >=, <, <=)

// Declarer une constante condition, vous lui donnez en valeur un nombre

// Verifier si ce nombre est superieur ou egal a 18 si c'est le cas affichez vous etes majeur


// Si la condition est vraie (truthy), le bloc d'instruction est éxécuté
// Sinon, il est ignoré
const condition = 18

if (condition >= 18) {
    console.log("Vous etes majeur")
}

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

// Demandez un nombre

// if ce nombre est égal a 12
// verifiez avec == ===

// let response = prompt("Donne moi un nombre")

// // === verifie a la fois la valeur et le type des valeurs comparés (opérandes)
// if (response === 12) {
//     console.log("Vrai")
// }else { console.log("Faux")}

// Demandez a l'utilisateur son animal préféré
// Si c'est un chien 
    // Vous etes quelqu'un de bien 
// Si c'est un chat 
    // Quelle drole d'idee
// Si c'est un poisson rouge
    // Je ne veux plus parler avec toi
// sinon
    // Je n'ai pas compris la reponse

let animal = prompt("Quel est ton animal préféré ?")

// if (animal === 'chien') {
//     console.log("Vous etes quelqu'un de bien")
// }else if ( animal === 'chat'){
//     console.log("Quelle drôle d'idée")
// }else if (animal === 'poisson rouge'){
//     console.log("Je ne veux plus parler avec toi")
// }else{ console.log("Je n'ai pas compris la réponse")}

switch (animal){
    case "chien":
        console.log("Vous etes quelqu'un de bien");
        break;
    case "chat":
        console.log("Quelle drôle d'idée");
        break;
    case "poisson rouge":
        console.log("Je ne veux plus parler avec toi");
        break;
    default:
        console.log("Je n'ai pas compris la réponse")
}