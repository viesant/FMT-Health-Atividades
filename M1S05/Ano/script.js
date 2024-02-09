// const aniversario = prompt("Digite sua data de aniversario [dd/mm/aaaa]").split(
const [diaNascimento, mesNascimento, anoNascimento] = prompt("Digite sua data de aniversario [dd/mm/aaaa]").split("/");

const anoAtual = new Date().getFullYear();
const mesAtual = new Date().getMonth() + 1;
const diaAtual = new Date().getDate();

let anos = anoAtual - anoNascimento;
let meses = mesAtual - mesNascimento;
let dias = diaAtual - diaNascimento;

if (meses < 0) {
  anos--;
} else if (meses == 0) {
  if (dias < 0) {
    anos--;
  } else if (dias == 0) {
    console.log("Feliz aniversário!");
  }
}

console.log("Você tem " + anos + " anos!");

