let sum = 0; // variável para armazenar a soma das notas
let contagem = 0; // variável para contar o número de notas
let nota = 0; // variável para armazenar cada nota fornecida pelo usuário

while (nota !== -1) { // enquanto nota fornecida não for -1 (indicando fim da entrada de notas)
  nota = parseFloat(prompt("Digite a nota (digite -1 para sair): ")); // solicita ao usuário que digite a nota
  if (nota !== -1) { // se a nota fornecida não for -1
    sum += nota; // soma a nota fornecida ao total
    contagem++; // incrementa o contador de notas
  }
}

let media = sum / contagem; // calcula a média das notas
console.log(`A média das notas é: ${media}`); // exibe a média das notas
