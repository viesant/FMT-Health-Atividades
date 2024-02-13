const [diaNascimento, mesNascimento, anoNascimento] = prompt(
  "Digite sua data de aniversario [dd/mm/aaaa]"
).split("/");

const anoAtual = new Date().getFullYear();
const mesAtual = new Date().getMonth() + 1;
const diaAtual = new Date().getDate();

let anos = anoAtual - anoNascimento;

if (mesAtual < mesNascimento) {
  anos--;
} else if (mesAtual == mesNascimento) {
  if (diaAtual < diaNascimento) {
    anos--;
  } else if (diaAtual == diaNascimento) {
    console.log("Feliz aniversário!");
  }
}

console.log("Você tem " + anos + " anos!");
