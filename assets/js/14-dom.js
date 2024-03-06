/* ------------------------------ MANIPULATION DU DOM ------------------------------------- */

/*
    Le DOM (Document Object Model) en Javascript est une représentation en mémoire d'un document HTML chargé par le navigateur
    Le DOM represente chaque élément du document comme un objet Javascript qui peut etre manipulé et modifié a travers le code Javascript
*/

// ? La methode getElementById()
const mainTitle = document.getElementById('main-title')
mainTitle.style.color = 'red'
console.log(mainTitle)

/*
    ? La methode getElementByTagName()
    getElementByTagName renvoie une HTMLCollection sur laquelle on pourra itérer avec la boucle for(){}
*/
const paragraphes = document.getElementsByTagName('p')
for ( let i=0; i<paragraphes.length; i++){
    paragraphes[i].style.color = 'green'
}

/*
    ? La methode getElementByClassName()
    getElementByClassName renvoie une HTMLCollection sur laquelle on pourra itérer avec la boucle for(){}
*/

const title = document.getElementsByClassName('title')
console.log(title);
for( let i=0; i<title.length; i++){
    title[i].style.backgroundColor = 'purple'
}

/*
    ? La methode 'querySelector()
    
*/

const cssProperties = document.querySelector('#title')
cssProperties.style.fontSize = '30px'

/*
    ? La methode 'querySelectorAll()
    
*/

const para = document.querySelectorAll('div p')
console.log(para)
for(let paragraphe of para ){
    paragraphe.style.textDecoration = "underline"
}

para.forEach(function(paragraphe){
    paragraphe.style.textDecoration = "underline"
})

// Selectionner tous les elements qui ont la class txt-uppercase
// Tous les mettre en majuscule

const majuscule = document.querySelectorAll('.majuscule')
console.log(majuscule)
for(let maj of majuscule){
    maj.style.textDecoration = 'uppercase'
}