/* ------------------------------ CALLBACK ------------------------------------- */

// Un callback (fonction de rappel) est une fonction qui est passée en tant qu'argument dans une autre fonction


// fonction add
// fonction divide
// fonction multiply

const add = function(x,y){
    return x+y
}

const multiply = function(x,y){
    return x*y
}

const divide = function(x,y){
    return x/y
}

// Une fonction peut prendre en paramètre
function display(callback){
    callback();
}











// const displayArray = function (string){
//     console.log(string)
// }

// function forEachPerso 