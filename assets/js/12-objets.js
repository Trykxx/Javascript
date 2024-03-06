/* ------------------------------ OBJETS ------------------------------------- */

// Les objets sont des structures de données complexes qui permettent de stocker des valeurs et des fonctions ensemble

const person ={
    firstName : 'Amit Nicolas',
    lastName : 'Roig Menda',
    age : 22,
    formation : ['algorithmique','html','git','javascript'],
    job : {
        name : 'formateur',
        hour : 35
    },
    getIdentity : function(){
        return "Je m'appelle Amit Nicolas Roig Menda"
    }
}

// Pour accéder a la propriété d'un objet
console.log(person.getIdentity())

// Creer un objet car
// model => 'audi'
// année => '2010'
// couleur => 'red'
// options => tableau => sieges chaffants, vitre electrique
// moteur => objet => cylindre, nombre de chevaux 
// description => fonction => 'je suis une audi sortie en 2010

const car ={
    model : 'audi',
    year : 2010,
    color : 'red',
    options : ['sieges chauffants','vitre electrique'],
    engine : {
        cylindre : 10,
        chevaux : 900
    },
    description : function(){
        return `Je suis une ${this.model} sortie en ${this.year}`
    }
}

console.log(car.model)
console.log(car.options[0])
console.log(car.description())

// On peut également accéder a une propriete d'un objet grace aux crochets et a sa clé en guise de valeur
console.log(car['model'])

// Pour pouvoir boucler sur un objet il faut utiliser for(...in...){} car les objets sont des énumérables
for(let key in car ){
    console.log(car[key]);
}