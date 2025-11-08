/* ======= 1. SUMA DE TRES VALORES =======
Suma tres valores constantes definidos en el programa. */
function sumarTresValores() {
const a = 10, b = 15, c = 19; // Valores constantes
const suma = a + b + c;
document.getElementById("resultado1").textContent =
`La suma de los valores constantes (${a}, ${b}, ${c}) es: ${suma}`;
}

/* ======= 2. CUADRADO DE UN NÚMERO =======
Calcula el cuadrado del número ingresado por el usuario. */
function calcularCuadrado() {
const num = Number(document.getElementById("numeroCuadrado").value);
if (isNaN(num)) {
document.getElementById("resultado2").textContent = "Por favor, ingrese un número válido.";
return;
}
const resultado = num ** 2;
document.getElementById("resultado2").textContent =
`El cuadrado de ${num} es: ${resultado}`;
}

/* ======= 3. PROMEDIO DE CALIFICACIONES =======
Calcula el promedio de tres calificaciones de un estudiante. */
function calcularPromedio() {
const nombre = document.getElementById("nombreEstudiante").value.trim();
const n1 = Number(document.getElementById("nota1").value);
const n2 = Number(document.getElementById("nota2").value);
const n3 = Number(document.getElementById("nota3").value);

if (!nombre || isNaN(n1) || isNaN(n2) || isNaN(n3)) {
document.getElementById("resultado3").textContent = "Complete todos los campos correctamente.";
return;
}

const promedio = ((n1 + n2 + n3) / 3).toFixed(2);
document.getElementById("resultado3").textContent =
`El promedio de ${nombre} es: ${promedio} puntos.`;
}

/* ======= 4. CONVERSIÓN DE UNIDADES =======
Convierte metros a centímetros y kilómetros. */
function convertirMetros() {
const metros = Number(document.getElementById("metros").value);
if (isNaN(metros)) {
document.getElementById("resultado4").textContent = "Ingrese un valor válido en metros.";
return;
}
const cm = metros * 100;
const km = metros / 1000;
document.getElementById("resultado4").textContent =
`${metros} metros equivalen a ${cm} centímetros y ${km} kilómetros.`;
}

/* ======= 5. COMPARACIÓN DE DOS VALORES =======
Determina cuál número es mayor y muestra la diferencia. */
function compararValores() {
const v1 = Number(document.getElementById("valor1").value);
const v2 = Number(document.getElementById("valor2").value);

if (isNaN(v1) || isNaN(v2)) {
document.getElementById("resultado5").textContent = "Por favor, ingrese dos números válidos.";
return;
}

if (v1 === v2) {
document.getElementById("resultado5").textContent =
"Los números no deben ser iguales.";
return;
}

const mayor = v1 > v2 ? v1 : v2;
const menor = v1 > v2 ? v2 : v1;
const diferencia = Math.abs(v1 - v2);
document.getElementById("resultado5").textContent =
`El número mayor es ${mayor}, el menor es ${menor}, y su diferencia es ${diferencia}.`;
}

