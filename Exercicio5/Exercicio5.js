let valores = [] 
// Aqui ele cria uma matriz/array/biblioteca
// Enfim, uma lista

let contador = Number(prompt("Quantidade de valores a serem inseridos:")); 
// Pedindo para o usuário informar a quantidade de valores

for(let i = 1; i <= contador; i++){
		let valor = prompt("Digite o valor " + i + ":"); 
		// Pedindo para o usuário inserir cada valor
		// E então ele insere cada valor na lista valores
		valores.push(Number(valor));
};

let resultado = 0;
let i = 0;

while (i < contador){
	

	// Ele soma no resultado os valores dados anteriormente
	resultado += valores[i];
	console.log(resultado+" "+valores[i]);

	// Ele incrementa 1 no valor de i, 
	// até que chegue na quantidade de valores recebidos
	i++;
}

console.log("A média dos valores é: " + resultado/contador);

/* Por que usei uma lista? Ela recebe pode receber vários valores,
E além disso, cada valor é armazenado em uma posição diferente.

Por exemplo, no [0] está o número 14, etc.*/
