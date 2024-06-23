// inicializador / condición / modificador

// for (let i = 0; i < 10; i += 1) {
// 	console.log(i);
// }

// console.log("otra cosa");

// let x = 12; // si quiero sumarle 10
// x = x + 10;
// x += 10;

// let y = 15;
// y = y + 1;
// Y += 1;
// y++; // es un modificador matemático que solo se usa si suma 1

//ejercicio

let numero = prompt("ingresa un numero");
// mostrar la tabla de multiplicar
numero = Number(numero);
// console.log(typeof numero);

for (let i = 1; i <= 10; i++) {
	// let texto = numero + "*" + i + "=" + numero * i;
	let texto = `${numero}*${i}=${numero * i}`; // es lo mismo de arriba usando template literals
	console.log(texto);
}

//template literals
//acentos graves `` bastic
