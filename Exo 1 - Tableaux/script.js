/*                EXERCICE TABLEAU
 * Declare un tableau vide names 
 * Ajouter "vincent", "Paul", et "Arthur" dans le tableau via la methode push
 * Pour chaque element du tableau
 * Ajouter a la fin "va a la peche"
 * Afficher chaque element 
 */

let names=[]; // Créer un tableau vide
names.push("Vincent","Paul","Arthur"); // Ajoute les noms au tableau

names.forEach(nom => { // Pour chaque nom dans le tableau, on rajouet à ce nom le texte
    nom+=" va à la pêche";
    console.log(nom);
});
