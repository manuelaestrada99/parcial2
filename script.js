// Esperar a que el contenido esté cargado
document.addEventListener("DOMContentLoaded", function() {

// Suma de tres valores
document.getElementById("btnSuma").addEventListener("click", function() {
const a = parseFloat(document.getElementById("suma1").value);
const b = parseFloat(document.getElementById("suma2").value);
const c = parseFloat(document.getElementById("suma3").value);
if (isNaN(a) || isNaN(b) || isNaN(c)) {
document.getElementById("resultadoSuma").textContent = "Por favor, ingrese los tres valores.";
return;
}
const total = a + b + c;
document.getElementById("resultadoSuma").textContent = `La suma de los valores constantes es: ${total}`;
});

// Cuadrado de un número
document.getElementById("btnCuadrado").addEventListener("click", function() {
const num = parseFloat(document.getElementById("numCuadrado").value);
if (isNaN(num)) {
document.getElementById("resultadoCuadrado").textContent = "Ingrese un número válido.";
return;
}
const cuadrado = num * num;
document.getElementById("resultadoCuadrado").textContent = `El cuadrado de ${num} es: ${cuadrado}`;
});

// Promedio de calificaciones
document.getElementById("btnPromedio").addEventListener("click", function() {
const nombre = document.getElementById("nombre").value.trim();
const n1 = parseFloat(document.getElementById("nota1").value);
const n2 = parseFloat(document.getElementById("nota2").value);
const n3 = parseFloat(document.getElementById("nota3").value);

if (!nombre || isNaN(n1) || isNaN(n2) || isNaN(n3)) {
document.getElementById("resultadoPromedio").textContent = "Complete todos los campos correctamente.";
return;
}

const promedio = ((n1 + n2 + n3) / 3).toFixed(2);
document.getElementById("resultadoPromedio").textContent = `El promedio de ${nombre} es: ${promedio} puntos.`;
});

// Conversión de unidades
document.getElementById("btnConversion").addEventListener("click", function() {
const metros = parseFloat(document.getElementById("metros").value);
if (isNaN(metros)) {
document.getElementById("resultadoConversion").textContent = "Ingrese un valor en metros.";
return;
}
const cm = metros * 100;
const km = metros / 1000;
document.getElementById("resultadoConversion").textContent = `${metros} metros equivalen a ${cm} centímetros y ${km} kilómetros.`;
});

// Comparación de dos valores
document.getElementById("btnComparar").addEventListener("click", function() {
const v1 = parseFloat(document.getElementById("valor1").value);
const v2 = parseFloat(document.getElementById("valor2").value);
if (isNaN(v1) || isNaN(v2)) {
document.getElementById("resultadoComparacion").textContent = "Ingrese dos números válidos.";
return;
}
if (v1 === v2) {
document.getElementById("resultadoComparacion").textContent = "Los números no deben ser iguales.";
return;
}
const mayor = v1 > v2 ? v1 : v2;
const menor = v1 < v2 ? v1 : v2;
const diferencia = Math.abs(v1 - v2);
document.getElementById("resultadoComparacion").textContent = `El número mayor es ${mayor}, el menor es ${menor}, y su diferencia es ${diferencia}.`;
});

});
