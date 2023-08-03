// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

function useTheMethodReverse() {
  // Tableau numéro 1
  console.log("1. Tableau avec l'odre croissant");

  const numbers0 = [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950];  
  console.log('Array numbers 0: ', numbers0);

  console.log("1.2 Tableau avec l'ordre décroissant");
  const reverseArrayNumbers0 = numbers0.reverse(); 
  console.log('Array numbers 0: ', reverseArrayNumbers0);


  // TABLEAU NUMERO 2
  console.log("2. Tableau avec l'odre croissant");

  const numbers1 = [1000, 1050, 2000, 2050, 3000, 3050, 4000, 4050, 5000, 5050, 6000, 6050, 7000, 7050, 8000, 8050, 9000, 9050];
  console.log('Array numbers 1: ', numbers1); 

  console.log("2.1 Tableau avec l'ordre décroissant");
  const reverseArrayNumbers1 = numbers1.reverse(); 
  console.log('Array numbers 0: ', reverseArrayNumbers0);
}
useTheMethodReverse(); // call the function 