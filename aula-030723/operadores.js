const num1 = 5;
const num2 = 8;
const num3 = 4.5;

/*
    Operadores aritméticos
    + Adição
    - Subtração
    * Multiplicação
    / Divisão
    ** Exponenciação
    % resto da divisão
*/

let result;
result = num1 + num2; // 13 
console.log(result);

result = num1 + num2; // -3
console.log(result);

result = num1 * num2; // 40
console.log(result);

result = num1 / num2; // 0.625
console.log(result);

result = num1 ** num2; // 390625
console.log(result);

result = num2 % num3; // 3.5 (pois estamos trabalhando com valores reais, implicitamente está sendo convertido o resultado, normalmente o operador módulo retornaria um resto inteiro, semelhante a divisão com resto inteiro.)
console.log(result);

result = num2 % num1; // 8 / 5 -> resto: 3
console.log(result); // aqui como estamos trabalhando com inteiros, resto é inteiro.