/* ------------------------------ BOUCLES ------------------------------------- */

// Les boucles sont des structures permettant d'executer plusieurs fois des instructions

/* 
    La principale différence entre 'for' et 'while' :
    'for' est généralement utilisé lorsque le nombre d'itérations est connu à l'avance 
    'while' est utilisé lorsque lorsque le nombre d'itérations est inconnu à l'avance et dépend d'une condition spécifique
*/

// Boucle for(){...}
// Boucle for qui affiche les nombres de 10 a 20

// for (let i=10; i<=20; i=i+2) {
//    console.log(i)
// }

// // Boucle while(){...}
// // Afficher les nombres pairs de 10 à 20

// let i = 10;
// while(i<=20) {
// console.log(i)
//    i=i+2
// }
    
// Demandez un nombre a l'utilisateur, tant que ce nombre n'est pas le bon dites le nombre est plus grand ou le nombre est plus petit

let response = prompt("Devine le nombre")
while (response !=20){
    if (response < 20) {
        response = prompt("Plus grand")
    }else {
        response = prompt("Plus petit")
    }
} 

    
    












// Ecrire un programme qui demande a l'utilisateur de saisir un nombre entier entre 1 et 10
// Si la reponse n'est pas entre 1 et 10, afficher le message devait etre compris entre 1 et 10
// Le programme doit ensuite dessinner un sapin de Noel composé d'etoiles (*)

// let calcul = prompt("Veuillez saisir un nombre entre 1 et 10")

// if(calcul >=1 && calcul<=10) {
//     let stars = "*"
//     for(let i=0; i<calcul; i=i+1){
//         console.log(stars)
//     stars = stars + "*"
//     }
// }else {
//     console.log("Le numéro doit etre compris entre 1 et 10")
// }
    
    