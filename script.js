// Esperar a que cargue el DOM antes de usar botones
document.addEventListener("DOMContentLoaded", () => {
document.getElementById("btnSuma").addEventListener("click", sumarTres);
document.getElementById("btnCuadrado").addEventListener("click", calcularCuadrado);
document.getElementById("btnPromedio").addEventListener("click", calcularPromedio);
document.getElementById("btnConversion").addEventListener("click", convertirMetros);
document.getElementById("btnComparar").addEventListener("click", compararValores);
document.getElementById("btnLimpiar").addEventListener("click", limpiarPantalla);
});

const pantalla = document.getElementById("display");

// 🔸 Suma de tres valores
function sumarTres() {
const n1 = parseFloat(document.getElementById("num1").value) || 0;
const n2 = parseFloat(document.getElementById("num2").value) || 0;
const n3 = parseFloat(document.getElementById("num3").value) || 0;
const resultado = n1 + n2 + n3;
pantalla.textContent = `La suma de los valores es: ${resultado}`;
}

// 🔸 Cuadrado de un número
function calcularCuadrado() {
const num = parseFloat(document.getElementById("numCuadrado").value);
if (isNaN(num)) return alerta("Por favor ingresa un número válido");
const resultado = num ** 2;
pantalla.textContent = `El cuadrado de ${num} es: ${resultado}`;
}

// 🔸 Promedio de calificaciones
function calcularPromedio() {
const nombre = document.getElementById("nombre").value.trim();
const n1 = parseFloat(document.getElementById("nota1").value);
const n2 = parseFloat(document.getElementById("nota2").value);
const n3 = parseFloat(document.getElementById("nota3").value);

if (!nombre || isNaN(n1) || isNaN(n2) || isNaN(n3)) {
return alerta("Por favor completa todos los campos");
}

const promedio = ((n1 + n2 + n3) / 3).toFixed(2);
pantalla.textContent = `El promedio de ${nombre} es: ${promedio} puntos.`;
}

// 🔸 Conversión de metros
function convertirMetros() {
const metros = parseFloat(document.getElementById("metros").value);
if (isNaN(metros)) return alerta("Por favor ingresa un valor en metros");
const cm = metros * 100;
const km = metros / 1000;
pantalla.textContent = `${metros} metros equivalen a ${cm} cm y ${km} km.`;
}

// 🔸 Comparación de valores
function compararValores() {
const a = parseFloat(document.getElementById("valorA").value);
const b = parseFloat(document.getElementById("valorB").value);
if (isNaN(a) || isNaN(b)) return alerta("Ingresa ambos números");
if (a === b) return (pantalla.textContent = "Los números no pueden ser iguales");

const mayor = a > b ? a : b;
const menor = a < b ? a : b;
const diferencia = Math.abs(a - b);
pantalla.textContent = `El número mayor es ${mayor}, el menor es ${menor}, y la diferencia es ${diferencia}.`;
}

// 🔸 Limpiar pantalla
function limpiarPantalla() {
pantalla.textContent = "Resultado aquí...";
}

// 🔸 Alerta visual en pantalla
function alerta(msg) {
pantalla.textContent = "⚠️ " + msg;
}


