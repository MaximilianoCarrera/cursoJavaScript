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

// let numero = prompt("ingresa un numero");
// // mostrar la tabla de multiplicar
// numero = Number(numero);
// // console.log(typeof numero);

// for (let i = 1; i <= 10; i++) {
// 	// let texto = numero + "*" + i + "=" + numero * i;
// 	let texto = `${numero}*${i}=${numero * i}`; // es lo mismo de arriba usando template literals
// 	console.log(texto);
// }

//template literals
//acentos graves `` bastic

let nombre = "pepe";
let apellido = "perez";

//console.log hola pepe perez como estas?

console.log("hola " + nombre + " " + apellido + " como estas?");
console.log(`hola ${nombre} ${apellido} como estas?`);

// for (let i = 10; i >= 5; i--) {
// 	console.log(i);
// }

//Ejercicio: Números pares e impares en un rango
//Escribe un programa en JavaScript que recorra un rango de números
//dados por el usuario e imprima si cada uno es par o impar

//Requisitos
//El programa debe pedir al usuario que ingrese dos números: el numero de inicio
//y el numero de fin.
//el programa debe usar un ciclo for para recorrer todos los números
// desde inicio a fin
//dentro de cada numero el programa debe  verificar si el numero es par o impar
//el programa debe imprimir cada numero junto con un mensaje que indique si es par o impar

// let inicio = Number(prompt("ingresa un numero inicial"));
// let fin = Number(prompt("ingresa el numero final"));

// if (inicio <= fin && fin - inicio <= 100) {
// 	for (i = inicio; i <= fin; i++) {
// 		let res =
// 			i % 2 === 0 ? `el ${i}es un numero par` : `el ${i}es un numero impar`;
// 		console.log(res);
// 	}
// } else {
// 	alert("el codeigo va a explotar");
// }

//WHILE

// let i = 1;

// while (i <= 10) {
// 	console.log(i);
// 	i++;
// }

// let palabra = "juancito";

// while (palabra !== "pepe") {
// 	// es distinto de !==
// 	console.log(palabra);
// 	palabra = prompt("ingresa palabra");
// }
// DO WHILE

// mostrar números desde A hasta B
// mostrar al menos una vez el console.log

let a = 4;
let b = 7;

do {
	console.log(a);
	a++;
} while (a <= b);
