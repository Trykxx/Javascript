/* ------------------------------ FONCTIONS SUR LES TABLEAUX ------------------------------------- */

// Creer un tableau d'animaux ('chat','chien','tigre','lion','requin','panda')
const animals = ['chat','chien','tigre','lion','requin','panda' ]

// ? Attention la plupart des methodes modifient le tableau de depart

// Ajouter un ou plusieurs elements a la fin d'un tableau 
// Renvoie la nouvelle longueur du tableau 
const ajout = animals.push('dauphin','loup')
console.log(ajout)

// Supprime le dernier élément du tableau
// Renvoie l'element supprimé
const suppr = animals.pop()
console.log(suppr)

// Ajouter un ou plusieurs éléments au debut du tableau 
const rere = animals.unshift('girafe','elephant')
console.log(rere)

// Supprimer le premier élément du tableau 
// Renvoie l'element supprimé
const suppression = animals.shift()
console.log(suppression)

// Réorganiser le tableau de la fin vers le début 
animals.reverse()
console.log(animals)

// Modifier ou Ajouter ou Supprimer un élément dans un tableau
// Ajouter un 'raton laveur' en deuxième position
animals.splice(1, 0, 'raton laveur')
console.log(animals)

// Modifier chien en aigle
animals.splice(6, 1,'aigle')
console.log(animals)

// Supprimer
animals.splice(2,1)
console.log(animals)

// Declarer un tableau contenant ('Paris','Berlin','Rome','Moscou','Londres','Madrid')
/*
    Creer une fonction qui prend en parametre un tableau:
        Retire Madrid
        Ajoute au debut Vienne
        Rome devient Alger
        Retourne la taille du tableau
*/

const villes = ['Paris','Berlin','Rome','Moscou','Londres','Madrid']
console.log(villes)

villes.splice(5,1)
console.log(villes)

villes.unshift('Vienne')
console.log(villes)

villes.splice(3,1,'Alger')
console.log(villes)

console.log(villes.length)