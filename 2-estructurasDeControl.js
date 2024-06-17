// Una respuesta a una pregunta

let n1 = 12;
let n2 = "12";

// console.log(n1 > n2); //false
// console.log(n1 < n2); //true
// console.log(n1 >= n2); //false
// console.log(n1 <= n2); //true
// console.log(n1 == n2); //comparación simple
// console.log(n1 === n2); //comparación estricta
// console.log(n1 != n2); //comparación de la distinción simple
// console.log(n1 !== n2); //comparación de la distinción estricta

let esCasado = true;

// console.log(esCasado === false);
// console.log(esCasado !== false);

// let nombre = prompt("ingresa tu nombre");
// let edad = Number(prompt("ingresa tu edad"));
//Un sistema para una app wb que puedan sacar entradas a un recital

//tiene que ser mayor de edad  -->18 o mas

// console.log("incio");

// if (edad >= 18) {
// 	console.log("gracias por tu compra"); //bloque de código
// } else {
// 	console.log("debes ser mayor de 18"); //bloque de código
// }

// console.log("fin");

let estaLogueado = false;

if (estaLogueado) {
	console.log("tienes acceso");
} else {
	console.log(" no tienes acceso");
}

// 18 o + --> puedo entrar
// 13 o + --> puedo entrar con un adulto
// -13  --> no  puedo entrar

// let edad = 11;

// if (edad >= 18) {
// 	console.log("puede entrar");
// } else if (edad >= 13) {
// 	console.log("puede entrar con un adulto");
// } else {
// 	console.log("no puede entrar");
// }

// 18 o + --> puedo entrar
// -18 o + y vengo con  un adulto --> puedo entrar
// -18  --> no  puedo entrar

let edad = 17;
let siVieneConUnAdulto = true;

if (edad >= 18) {
	console.log("puede entrar");
} else if (edad < 18 && siVieneConUnAdulto) {
	console.log("puede entrar con el adulto");
} else {
	console.log("no puede entrar");
}

//Operadores lógicos
// and --> && --> evaluar que ambas condiciones se cumplan
// or --> || --> evaluar que al menos una condición se cumpla

console.log(true || true || false || true);

//el operador and se queda con el primer falsy o con el ultimo true

let x = true && true && false && true && false && true;
console.log(x);
//el operador or se queda con el primer truthy o con el ultimo falsy

let y = false || false || "" || false || false;
console.log(y);

// ""---> falsy
// 0--->falsy
// "fsdf"--->truthy
// 125--->truthy
