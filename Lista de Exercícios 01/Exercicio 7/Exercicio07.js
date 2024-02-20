
console.log(sum);function calculateFatorial(num) {
  let fatorial = 1;
  for (let i = 1; i <= num; i++) {
		fatorial *= i;
  }
  return fatorial;
}

let num = prompt("Digite um número para calcular o fatorial: ");
console.log(`O fatorial de ${num} é: ${calculateFatorial(num)}`);
