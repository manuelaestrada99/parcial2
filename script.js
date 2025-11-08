// 🔹 Suma de tres valores
function sumarTres() {
const n1 = parseFloat(document.getElementById("num1").value);
const n2 = parseFloat(document.getElementById("num2").value);
const n3 = parseFloat(document.getElementById("num3").value);
const resultado = n1 + n2 + n3;
document.getElementById("resultadoSuma").textContent =
"La suma de los valores constantes es: " + resultado;
}

// 🔹 Cuadrado de un número
function calcularCuadrado() {
const num = parseFloat(document.getElementById("numCuadrado").value);
const resultado = num * num;
document.getElementById("resultadoCuadrado").textContent =
"El cuadrado de " + num + " es: " + resultado;
}

// 🔹 Promedio de calificaciones
function calcularPromedio() {
const nombre = document.getElementById("nombre").value;
const n1 = parseFloat(document.getElementById("nota1").value);
const n2 = parseFloat(document.getElementById("nota2").value);
const n3 = parseFloat(document.getElementById("nota3").value);
const promedio = ((n1 + n2 + n3) / 3).toFixed(2);
document.getElementById("resultadoPromedio").textContent =
"El promedio de " + nombre + " es: " + promedio + " puntos";
}

// 🔹 Conversión de metros
function convertirMetros() {
const metros = parseFloat(document.getElementById("metros").value);
const cm = metros * 100;
const km = metros / 1000;
document.getElementById("resultadoConversion").textContent =
metros +
" metros equivalen a " +
cm +
" centímetros y " +
km +
" kilómetros.";
}

// 🔹 Comparación de dos valores
function compararValores() {
const a = parseFloat(document.getElementById("valorA").value);
const b = parseFloat(document.getElementById("valorB").value);

if (a === b) {
document.getElementById("resultadoComparacion").textContent =
"Los números no pueden ser iguales.";
return;
}

const mayor = a > b ? a : b;
const menor = a < b ? a : b;
const diferencia = Math.abs(a - b);

document.getElementById("resultadoComparacion").textContent =
"El número mayor es " +
mayor +
", el menor es " +
menor +
", y su diferencia es " +
diferencia +
".";
}

