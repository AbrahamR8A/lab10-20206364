function crearmarcosemilla(x){

    const contenedor1 = document.getElementById("contenedor1");

    contenedor1.innerHTML = "";

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
    contenedor1.appendChild(marco);
}

crearmarcosemilla(2);