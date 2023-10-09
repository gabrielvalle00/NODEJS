/*
Complementar os módulos criado em aula implementando mais três funções conforme abaixo:

-Uma função para multiplicação de 2 números passados por parâmetros;

-Uma função para divisão de 2 números passados por parâmetros;

-Uma função para verificar se um número passado por parâmetro é par ou ímpar;

Seguir a mesma padronização e exemplos aplicados em aula.
 */

const funcoes = require ('./funcoes')

let a = 10, b = 20, c = 3, d = 5;

let resSoma = funcoes.soma(a, 3);
let resSub = funcoes.subtracao(b, c);
let resMult = funcoes.multiplicação(d, a);
let resDiv = funcoes.divisao(b, c);
let resVer = funcoes.verificarParOuImpar(a);

console.log(`A soma dos valores é ${resSoma}`);
console.log(`A subtração dos valores é ${resSub}`);
console.log(`A multiplicação dos valores é ${resMult}`);
console.log(`A Divisão dos valores é ${resDiv}`);
console.log(`Seu numero é ${resVer}`);
