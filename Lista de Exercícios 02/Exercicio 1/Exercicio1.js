function verificarParImpar(num) {
  if (num % 2 === 0) {
    return 'par';
  } else if (num % 2 === 1) { // Se não for par
    return 'ímpar';
  } else {
		return 'um valor inválido';
	}
}

console.log(`Seu número é ${verificarParImpar(parseInt(prompt('Digite um número: ')))}`);
