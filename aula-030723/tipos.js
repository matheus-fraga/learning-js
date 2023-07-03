// Tipagem estática -> O tipo da variável é definido  de acorodo com o seu tipo
// Tipagem dinâmica -> O tipo da variável é definido de acordo com seu valor (JavaScript, Python)

let variavel = 22;
console.log( typeof variavel); //number

variavel = "Prof. Gabriel"; // string
console.log(typeof variavel);

variavel = true; // boolean
console.log(typeof variavel);

variavel = { nome: 'Gabriel', idade: 21}; // object
console.log(variavel);

variavel = [1, 2, 3, 4, 5]; // vector (um vetor também é um objeto)
console.log(variavel);

variavel = function () { //function
    return 1;
};
console.log(typeof variavel);

variavel = undefined; // indefinido
console.log(variavel); // undefined

variavel = null; //nullo
console.log(); // null

variavel = NaN; // Not a number (numero)
console.log(typeof variavel); // NaN

console.log (0/0); // imprime NaN, pois não é um número 0/0.
