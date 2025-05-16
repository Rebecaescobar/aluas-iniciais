// EX 1 
let primeiroNumero = 12;
let segundoNumero = 2;
let operacao = "+";

switch (operacao) {
  case "+":
    console.log(
      `O resultado da soma é de ${primeiroNumero} + ${segundoNumero}`
    );
    break;
  case "-":
    console.log(
      `O resultado da subtração é de ${primeiroNumero} - ${segundoNumero}`
    );
    break;
  case "*":
    console.log(
      `O resultado da multiplicação é de ${primeiroNumero * segundoNumero}`
    );
    break;
  case "/":
    console.log(
      `O resultado da divisão é de ${primeiroNumero / segundoNumero}`
    );
    break;

  default:
    console.log(`Operação inválida`);
    break;
}

// EX 2
let num = 4;
if ((num = 0)) {
  console.log(`Esse numero é igual a 0`);
} else if (num < 0) {
  console.log(`Esse numerro é megativo`);
} else if (num > 0) {
  console.log(`Esse numero é positivo`);
}

// EX 3
let idade = 40;
if (idade > 20) {
  console.log(`Voce ja pode votar`);
} else {
  console.log(`Voce nao pode votar`);
}

// EX 4 
let a = 40;
let b = 20;

if(a > 10) {
    console.log(`O número ${a} é maior que 20`);
}
if (a <10) {
    console.log(`O número ${a} é menor que 10`);
}
if (b < 10) {
    console.log(`O número ${b} é maior que 10`);
}
if (b < 10) {
    console.log(` O número ${b} é menor que 10`);
}

// EX 5
for (let i = 0; i <= 10, i++) {
    console.log(i);
}

// EX 6 
let soma = 0;
for (let i= 0; i <= 5;i++) {
    soma += i;
}
console.log (`O total da soma é ${soma}`);


// EX 7

