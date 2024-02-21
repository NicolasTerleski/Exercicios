import { maior } from './maior.js'
import { meio } from './meio.js'
import { menor } from './menor.js'

export function ordenar (num1, num2, num3) {
		// Vou fazer um código que passa por uma lista de 3 números
		// E então re-ordenar a lista onde, num1 é o maior, num2 o do meio
		// E num3 o menor.
		let novaLista = []

		novaLista.push(maior(num1, num2, num3));
		novaLista.push(meio(num1, num2, num3));
		novaLista.push(menor(num1, num2, num3));
	
		return novaLista
}
