// Variables y tipos de datos primitivos

let nombre = "pepe";
let apellido = "perez";

// alert(nombre);
// alert(apellido);

console.log(nombre);
// console.log(apellido);

const documento = "1212121212"; // ----> se pone como dato number en el caso que no lo opere matemáticamente.
// a diferencia de let al const no se le puede modificar el valor o nos dara un error

nombre = "juancito"; //cambiando el valor de la variable pepe
console.log(nombre);

let edadDeLaPersona = 31;
console.log(edadDeLaPersona);

// let numero = prompt("por favo ingresar un numero");
// console.log(numero);

// let precio = 12.5;
// let nombreDeUsuario = prompt("por favor inicia sesion con tu nombre");

// console.log("hola " + nombreDeUsuario + " como estas?");

let n1 = Number(prompt("ingresar el primer numero")); // agregando el number convierto el string a numero.
let n2 = Number(prompt("ingresar el segundo numero"));

let total = n1 + n2;
console.log(total);

// let x = "12";
// console.log(x);
// parseInt(x);
// console.log(x);

// boolean ----> booleanos

console.log(n1 > n2);
