/*
Complementar os módulos criado em aula implementando mais três funções conforme abaixo:

-Uma função para multiplicação de 2 números passados por parâmetros;

-Uma função para divisão de 2 números passados por parâmetros;

-Uma função para verificar se um número passado por parâmetro é par ou ímpar;

Seguir a mesma padronização e exemplos aplicados em aula.
 */

console.log('-------------------------------- :/ --------------------------------');

const soma = function (a, b) {
    return a + b;
};  

const subtracao = function (a, b) {
    return a - b;
};

const multiplicação = function (a, b ) {
    return a * b;
};
  
  const divisao = function (a, b) {
    if (b === 0) {
      return "Não é possível dividir por zero.";
    }
    return a / b;
  }
  
  const verificarParOuImpar = function (a) {
    if (a % 2 === 0) {
      return "Par";
    } else {
      return "Ímpar";
    }
  }

module.exports = {
    soma,
     subtracao,
      multiplicação,
      divisao,
      verificarParOuImpar,
}