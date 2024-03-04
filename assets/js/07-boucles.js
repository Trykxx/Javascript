/* ------------------------------ BOUCLES ------------------------------------- */

// Les boucles sont des structures permettant d'executer plusieurs fois des instructions

// Ecrire un programme qui demande a l'utilisateur de saisir un nombre entier entre 1 et 10
// Si la reponse n'est pas entre 1 et 10, afficher le message devait etre compris entre 1 et 10
// Le programme doit ensuite dessinner un sapin de Noel composé d'etoiles (*)

let calcul = prompt("Veuillez saisir un nombre entre 1 et 10")

if(calcul >=1 && calcul<=10) {
    let stars = "*"
    for(let i=0; i<calcul; i=i+1){
        console.log(stars)
    stars = stars + "*"
    }
}else {
    console.log("Le numéro doit etre compris entre 1 et 10")
}
    
    