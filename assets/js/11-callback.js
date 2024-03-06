/* ------------------------------ CALLBACK ------------------------------------- */

// Un callback (fonction de rappel) est une fonction qui est passée en tant qu'argument dans une autre fonction

// fonction add
const add = function(x,y){
    return x+y
}

// fonction multiply
const multiply = function(x,y){
    return x*y
}

// fonction divide
const divide = function(x,y){
    return x/y
}

function mathematique(x,y,callback){
    return callback(x,y);
}

const res = mathematique(12,89, function(a,b){
    return a * 5 + b * 9;
});
console.log(res);

// Une fonction peut prendre en paramètre une autre fonction
// Cela permet de la rendre personnalisable
function display(callback){
    callback();
}

const hello = function (){
    console.log('Salut tout le monde')
}

display(hello);











// const displayArray = function (string){
//     console.log(string)
// }

// function forEachPerso 