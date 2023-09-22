/*         EXERCICE WHILE
 * Declarer une variable a qui est egale à 3
 * tant que a est plus petit que 9 
 * incremente a de 1
 * si a est egal à 8 on arrete la boucle 
 * si a est egal à 7 on revient au debut de la boucle 
 * on console log(a)
 */

let a = 3; // Définition de la variable
while(a<9){ // Tant que a est inférieur à 9
    a++ // On incrémente a de 1
    if(a==7){ // On fait les vérifications
        continue
    }
    if(a==8){
        break
    }
    console.log(a);
}