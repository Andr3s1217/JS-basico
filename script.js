// Funciones que realizan los cálculos de los cinco ejercicios.

// Comprueba que un campo tenga un valor numérico válido.
function obtenerNumero(id) {
    const campo = document.getElementById(id);
    const valor = campo.value.trim();

    if (valor === "" || !Number.isFinite(Number(valor))) {
        campo.focus();
        return null;
    }

    return Number(valor);
}

// 1. Suma los tres números ingresados y presenta el total.
function sumarTres() {
    const a = obtenerNumero("suma1");
    const b = obtenerNumero("suma2");
    const c = obtenerNumero("suma3");

    if (a === null || b === null || c === null) {
        document.getElementById("resultadoSuma").textContent =
            "Por favor, ingresa los tres números.";
        return;
    }

    const suma = a + b + c;
    document.getElementById("resultadoSuma").textContent =
        `La suma de los valores ingresados es: ${suma}.`;
}

// 2. Eleva el número ingresado a la potencia de dos.
function calcularCuadrado() {
    const numero = obtenerNumero("numeroCuadrado");

    if (numero === null) {
        document.getElementById("resultadoCuadrado").textContent =
            "Por favor, ingresa un número válido.";
        return;
    }

    const cuadrado = numero ** 2;
    document.getElementById("resultadoCuadrado").textContent =
        `El cuadrado de ${numero} es: ${cuadrado}.`;
}

// 3. Calcula el promedio de tres calificaciones y muestra el nombre.
function calcularPromedio() {
    const nombre = document.getElementById("nombreEstudiante").value.trim();
    const nota1 = obtenerNumero("nota1");
    const nota2 = obtenerNumero("nota2");
    const nota3 = obtenerNumero("nota3");
    const resultado = document.getElementById("resultadoPromedio");

    if (nombre === "" || nota1 === null || nota2 === null || nota3 === null) {
        resultado.textContent = "Ingresa el nombre y las tres calificaciones.";
        return;
    }

    // En este ejercicio se consideran calificaciones de 0 a 100.
    const notas = [nota1, nota2, nota3];
    if (notas.some(nota => nota < 0 || nota > 100)) {
        resultado.textContent = "Cada calificación debe estar entre 0 y 100.";
        return;
    }

    const promedio = (nota1 + nota2 + nota3) / 3;
    resultado.textContent =
        `El promedio de ${nombre} es: ${promedio.toFixed(2)} puntos.`;
}

// 4. Convierte los metros ingresados a centímetros y kilómetros.
function convertirMetros() {
    const metros = obtenerNumero("metros");

    if (metros === null || metros < 0) {
        document.getElementById("resultadoMetros").textContent =
            "Ingresa una cantidad válida de metros (igual o mayor que cero).";
        return;
    }

    const centimetros = metros * 100;
    const kilometros = metros / 1000;

    document.getElementById("resultadoMetros").textContent =
        `${metros} metros equivalen a ${centimetros.toLocaleString("es-PA")} centímetros y ${kilometros} kilómetros.`;
}

// 5. Determina el mayor, el menor y la diferencia entre dos números.
function compararValores() {
    const a = obtenerNumero("valor1");
    const b = obtenerNumero("valor2");
    const resultado = document.getElementById("resultadoComparacion");

    if (a === null || b === null) {
        resultado.textContent = "Por favor, ingresa los dos números.";
        return;
    }

    const mayor = Math.max(a, b);
    const menor = Math.min(a, b);
    const diferencia = Math.abs(a - b);

    if (a === b) {
        resultado.textContent =
            `Ambos números son iguales (${a}) y la diferencia es 0.`;
    } else {
        resultado.textContent =
            `El número mayor es ${mayor}, el menor es ${menor}, y su diferencia es ${diferencia}.`;
    }
}
