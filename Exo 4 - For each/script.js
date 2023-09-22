"use strict";

let users = ["Stéphanie","Gaïa", "Etienne", "Michel", "Roberto", "Julie"]; // Création du tableau

function countCharacter(value) { // Création d'une fonction qui retourne la longueur d'une valeur
    return value.length;
}

users.forEach(user => { // Pour chaque valeur du tableau
    if (countCharacter(user) > 5) { // Si son nombre de caractères est supérieur à 5
        console.log("c'est un prénom long de plus de 5 lettres.");
    } else { // Sinon
        console.log("ce n'est pas du tout un prénom long.");
    }
})