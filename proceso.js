//LÓGICA DE CÁLCULO Y VALIDACIÓN DE FORMULARIO
document.getElementById("notas").addEventListener("submit", function(e){
    e.preventDefault(); // Evita que el formulario recargue la página

    // determinados del peso de cada corte
    const PESO_C1 = 0.33;
    const PESO_C2 = 0.33;
    const PESO_C3 = 0.34;

    // Peticion de las notas del 1er y 2do corte
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const notaMinimaDeseada = 3.0; 

    // Cálculo de la contribución acumulada de los primeros dos cortes
    const contribucionCortesPrevios = (nota1 * PESO_C1) + (nota2 * PESO_C2);

    // Fórmula para la nota mínima en el 3er corte (Nota3)
    const notaMinima = (notaMinimaDeseada - contribucionCortesPrevios) / PESO_C3;

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.style.fontWeight = "bold";

    if(notaMinima > 5){
        // Caso 1: Imposible pasar
        resultadoDiv.textContent = `¡Imposible! Necesitarías ${notaMinima.toFixed(2)}, lo cual es mayor a 5.0. 😭`;
    } else if(notaMinima <= 0){
        // Caso 2: Ya pasaste (promedio mínimo asegurado)
        const notaFinalAsegurada = contribucionCortesPrevios;
        resultadoDiv.textContent = `¡Ya pasaste! Con sacar 0.0 en el 3er corte, tu nota final sería ${(notaFinalAsegurada).toFixed(2)} o más. 🎉`;
    } else {
        // Caso 3: Nota mínima requerida (entre 0.01 y 5.0)
        resultadoDiv.textContent = `Necesitas al menos ${notaMinima.toFixed(2)} en el 3er corte para pasar con 3.0. ¡Esfuerzate! 📚`;
    }
});


// FUNCIÓN PARA LIMPIAR/BORRAR NOTAS
document.getElementById("limpiar").addEventListener("click", function() {
    // 1. Resetear los campos del formulario
    document.getElementById("notas").reset(); 
    
    // 2. Limpiar el div de resultados
    document.getElementById("resultado").textContent = ""; 
    document.getElementById("resultado").style.fontWeight = "normal";
});



// LÓGICA DE INICIO Y TRANSICIÓN DE PANTALLAS
// =========================================================
document.addEventListener('DOMContentLoaded', function() {
    const botonIniciar = document.getElementById('iniciar-calculadora');
    const pantallaInicio = document.getElementById('pantalla-inicio');
    const calculadoraPrincipal = document.getElementById('calculadora-principal');

    if (botonIniciar && pantallaInicio && calculadoraPrincipal) {
        botonIniciar.addEventListener('click', function() {
            // Oculta la pantalla de inicio
            pantallaInicio.classList.add('oculto');
            
            // Muestra la calculadora principal
            calculadoraPrincipal.classList.remove('oculto');
        });
    }
});