let vfila = document.querySelector("#vfila");
    let vcolumna = document.querySelector("#vcolumna");
    let fila = document.querySelector("#fila");
    let columna = document.querySelector("#columna");
    let tabla = document.querySelector("#tabla");

    vfila.innerHTML = fila.value;
    vcolumna.innerHTML = columna.value;

    fila.oninput = () => { editar() }
    columna.oninput = () => { editar() }

    const editar = () => {
        let f = parseInt(fila.value);
        let c = parseInt(columna.value);

        vfila.innerHTML = f;
        vcolumna.innerHTML = c;

        Tabla(f, c);
    }

    const Tabla = (filas, columnas) => {
        let tablaHTML = '';

        for (let i = 0; i < filas; i++) {
            tablaHTML += '<tr>';
            for (let j = 0; j < columnas; j++) {
                tablaHTML += '<td></td>';
            }
            tablaHTML += '</tr>';
        }

        tabla.innerHTML = tablaHTML;
    };

