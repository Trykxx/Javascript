/* ------------------------------ TABLEAUX ------------------------------------- */

/* 
    un tableau (array) est un type de données qui peut contenir plusieurs éléments
    on peut créér un tableau en utilisant des crochets [] et en y insérant les éléments séparés par une virgule
*/

// const tableau = []

const monthOfYear = ['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre']

// On peut acceder a un element du tableau en utilisant son index numérique
// L'index du premier élément est toujours 0
console.log(monthOfYear[0], monthOfYear[11])

// Pour connaitre la longueur d'un element nous pouvons utiliser la propriété .length
function tableau(){
    for (let i=0; i< monthOfYear.length; i++)
    console.log(monthOfYear[i])
}

tableau()