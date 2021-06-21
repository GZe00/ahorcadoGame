
const data = require('./functions/words');
const chance = require('./functions/manDraw');

const prompt = require("prompt-sync")({ sigint: true });

// Ahorcado Game v1.0.0
//Objetivo: Desarrollar el juego del ahorcado y jugar mediante consola para esta primera
//          versión, más adelante, se deasrrollará el mimso juego pero en un entorno web
//          con animaciones e imagenes interactivas
// Selección de nivel:
// Fácil: Palabras cortas
// Medio: Palabras medianas
// Dificíl: Palabras largas
// console.log('Game stared');

// -------------------------------------------------------------------------------------------------------------------
// -----------------------------------------    Obtener una palabra nueva    -----------------------------------------

// const main = () => data.data();

// let word = main();

// console.log(word);
// -------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------
// ----------------------------------    Ejemplo de prompt introducir nombre    --------------------------------------

// const name = prompt("What is your name?:> ");
// console.log(`Hey there ${name}`);

// -------------------------------------------------------------------------------------------------------------------
// ----------------------------------    Dibujado por consola el ahorcado    -----------------------------------------

// console.log(chance.draw(7));

let flag = true;
let i = 0;

while (flag){
    console.log(i);
    const name = prompt("Exit? Y = yes N = not: ");
    if(name == 'Y') flag = false;
    i++;
}