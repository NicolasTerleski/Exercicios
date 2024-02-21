// Preciso validar se o usuário digitou um número

export function validar(num1, num2, num3){
	
	if (isNaN(num1)){
		return num1;
	} else if (isNaN(num2)){
		return num2;
	} else if (isNaN(num3)){
		return num3;
	} else {
		return true;
	}
	// if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number'){
	// 	return true;
	// } else {
	// 	return false;
	// }
}
