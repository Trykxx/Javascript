/* ------------------------------ CONCATENATION ------------------------------------- */

// CONCATENATION : Afficher du texte et des variables
// Declarer des variables 
// age, prenom, nom de famille, adresse, formation, organisme de formation

// Recuperer dans une variable le message 
// Je m'appelle NOM PRENOM j'ai AGE ans et je suis en formation FORMATION a ORGANISME 

const age = 22;
const firstname = "Amit Nicolas";
const lastname = "Roig Menda";
const adress = "3 rue des alpes";
const formation = "Developpement Web"
const organisme = "Doranco";

let information="Je m'appelle " + firstname + " " + lastname + " " + "j'ai " + age + " ans" + " et je suis en formation " + formation + " a " + organisme 

information = 'Je m\'appelle ' + firstname + ' ' + lastname + ' ' + 'j\'ai ' + age + ' ans' + ' et je suis en formation ' + formation + ' a ' + organisme 

// Template literals `` (ou littéraux de gabarits) permet l'interpolation (interpretation de javascript au sein d'une chaine de caractères)
information = `Je m'appelle ${firstname} ${lastname} j'ai ${age} ans et je suis en formation ${formation} a ${organisme}`

console.log(information)