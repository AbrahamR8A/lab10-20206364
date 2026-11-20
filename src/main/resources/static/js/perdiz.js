const colores = ["#FFFFFF", "#22C55E", "#FACC15", "#FB923C", "#EF4444", "#991B1B"];

function pintarCelda(celda) {
    const nivel = Number(celda.textContent);
    celda.style.backgroundColor = colores[nivel];
    celda.style.color = nivel >= 4 ? "#FFFFFF" : "#000000";
}

document.querySelectorAll(".celda").forEach(pintarCelda);

function crearmarco(x){

    const contenedor = document.getElementById("contenedor");

    contenedor.innerHTML = "";

    const marco = document.createElement("div");
    marco.id = "marco";
    marco.classList.add("d-inline-flex", "flex-column", "gap-1", "bg-black", "p-1");

    for(let f = 0; f < x; f++){
        const fila = document.createElement("div");
        fila.classList.add("d-flex", "gap-1");      // celdas una al lado de otra

        for (let c = 0; c < x; c++){
            const celda = document.createElement("div");

            celda.classList.add("bg-white", "p-3");
            fila.appendChild(celda);                // celda dentro de fila
        }

        marco.appendChild(fila);                   // fila dentro de marco
    }

    // se inserta en la página y se vuelve visible
    contenedor.appendChild(marco);
}

crearmarco(5);