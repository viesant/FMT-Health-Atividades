const numero = Number(prompt("digite um numero"));
const raiz = Number(prompt("digite uma raiz"));
let result = numero;
let array = [];
// console.log(numero);
// console.log(raiz);

// console.log(result)
// for (let i = 0; i<9; i++){
//     result += raiz;
//     console.log(result)
// }

let i = 0;
do {
  array.push(result);
  result += raiz;
  i++;
} while (i < 10);
console.log(array);
document.getElementById("numero").innerText = "Número: " + numero;
document.getElementById("raiz").innerText = "Raiz: " + raiz;
document.getElementById("array").innerText = "Array: " + array;
document.getElementById("array length").innerText =
  "Array length: " + array.length;
