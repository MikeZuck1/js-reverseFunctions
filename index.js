// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;
// Création d'une fonction sans paramètre(s)
function useTheMethodReverse() {
  // Tableau numéro 1
  console.log("1. Tableau avec l'odre croissant"); // Doit imprimer : 1. Tableau avec l'odre croissant
  // le tableau 'numbers0' prend des chiffres compris entre 100 et 950 dans un ordre chronologique  
  const numbers0 = [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950];  
  console.log('Array numbers 0: ', numbers0); // affiche Array numbers 0:
  // Array numbers 0:  [
  // 100, 150, 200, 250, 300,
  // 350, 400, 450, 500, 550,
  // 600, 650, 700, 750, 800,
  // 850, 900, 950
  // ]

  // CETTE PARTIE DU CODE INVERSE LE TABLEAU PRINCIPALE (numbers0) 
  console.log("1.2 Tableau avec l'ordre décroissant"); // Doit imprimer : 1.2 Tableau avec l'ordre décroissant
  const reverseArrayNumbers0 = numbers0.reverse(); // Je crée une variable 'reverseArrayNumbers0' en lui attribuant comme valeur le tableau 'numbers0' et la methode .reverse() afin d'inverser le tableau 'numbers0'    
  console.log('Array numbers 0: ', reverseArrayNumbers0); // Doit imprimer : "Array numbers 0:" => Et le tableau à partir de la ligne 25
  // Doit imprimer : 
  // Array numbers 0:  [
  // 950, 900, 850, 800, 750, 
  // 700, 650, 600, 550, 500,
  // 450, 400, 350, 300, 250,
  // 200, 150, 100
  // ]

  // TABLEAU NUMERO 2
  console.log("2. Tableau avec l'odre croissant"); // Doit imprimer : 2. Tableau avec l'odre croissant
  // le tableau 'numbers1' prend des chiffres compris entre 1000 et 9050
  const numbers1 = [1000, 1050, 2000, 2050, 3000, 3050, 4000, 4050, 5000, 5050, 6000, 6050, 7000, 7050, 8000, 8050, 9000, 9050];
  console.log('Array numbers 1: ', numbers1); // Doit imprimer : Array numbers 1: 
  // Doit imprimer :
  // Array numbers 1:  [
  // 1000, 1050, 2000, 2050,
  // 3000, 3050, 4000, 4050,
  // 5000, 5050, 6000, 6050,
  // 7000, 7050, 8000, 8050,
  // 9000, 9050
  // ]

  // CETTE PARTIE DU CODE INVERSE LE TABLEAU PRINCIPALE (numbers1) 
  console.log("2.1 Tableau avec l'ordre décroissant"); // Doit imprimer : 2.1 Tableau avec l'ordre décroissant
  const reverseArrayNumbers1 = numbers1.reverse(); //  Je crée une variable 'reverseArrayNumbers1' en lui attribuant comme valeur le tableau 'numbers1' et la methode .reverse() afin d'inverser le tableau 'numbers1'    
  console.log('Array numbers 1: ', reverseArrayNumbers0); // Doit imprimer : "Array numbers 0:" => Et le tableau à partir de la ligne 25
  // Doit imprimer : 
  // Array numbers 1:  [
  // 9050, 9000, 8050, 8000,
  // 7050, 7000, 6050, 6000,
  // 5050, 5000, 4050, 4000,
  // 3050, 3000, 2050, 2000,
  // 1050, 1000
  // ]
}
useTheMethodReverse(); // appel la fonction 
