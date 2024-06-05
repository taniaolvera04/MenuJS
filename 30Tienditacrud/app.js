var productos = JSON.parse(localStorage.getItem("productos")) || [];
var precios = JSON.parse(localStorage.getItem("precios")) || [];
var categorias = JSON.parse(localStorage.getItem("categorias")) || [];
var carrito = JSON.parse(localStorage.getItem("carrito")) || [];

var aNombre = document.getElementById("aNombre");
var cCategoria = document.getElementById("cCategoria");
var aPrecio = document.getElementById("aPrecio");
var selectCategoria = document.getElementById("selectCategoria");
var aCategoria = document.getElementById("aCategoria");

const guardarLocal = () => {
    localStorage.setItem("productos", JSON.stringify(productos));
    localStorage.setItem("precios", JSON.stringify(precios));
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

const cargarTodo = () => {
    cargarCategoria();
    cargarCarrito();

    // Verificar si se han actualizado las categorías
    const categoriasActualizadas = localStorage.getItem("categoriasActualizadas");
    if (categoriasActualizadas === "true") {
        cargarCarrito(); // Recargar el carrito desde el almacenamiento local
        localStorage.removeItem("categoriasActualizadas"); // Borrar el indicador de categorías actualizadas
    }

    imprimirP();
};


const cargarCarrito = () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || []; 
};

const imprimirP = () => {
    
    let divCarrito = document.getElementById("carrito");
    let tablaHTML = `<table class="table w-100 m-auto">
        <tr>
            <td>NOMBRE</td>
            <td>PRECIO</td>
            <td>CATEGORIA</td>
            <td>ACTION</td>
        </tr>`;

    carrito.forEach((item, index) => {
        tablaHTML += `
            <tr>  
                <td>${item.producto}</td>            
                <td>$${item.precio}.00</td>  
                <td>${item.categoria}</td>                   
                <td>
                    <button class="btn btn-danger" onclick="eliminarP(${index})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                        </svg>
                    </button>
                    <button class="btn btn-info" onclick="mostrarP(${index})" data-bs-toggle="modal" data-bs-target="#editProducto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                        </svg>
                    </button>
                </td>
            </tr>`;
    });
    divCarrito.innerHTML = tablaHTML;
};

const imprimirC = () => {
    let divCarrito = document.getElementById("categorias");
    let tablaHTML = `<table class="table w-100 m-auto">
          <tr>
          <td>CATEGORIA</td>
          <td>ACTION</td>
          </tr>`;

    categorias.forEach((categoria, index) => {
        tablaHTML += `
            <tr>  
                <td>${categoria}</td>                           
                <td>
                    <button class="btn btn-danger" onclick="eliminarC(${index})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                        </svg>
                    </button>
                    <button class="btn btn-info" onclick="mostrarC(${index})" data-bs-toggle="modal" data-bs-target="#editCategoria">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                        </svg>
                    </button>
                </td>
            </tr>`;
    });
    divCarrito.innerHTML = tablaHTML;
};

const agregarProducto = () => {
    let nombre = aNombre.value;
    let precio = aPrecio.value;
    let categoria = cCategoria.value;

    if (nombre.trim() === '' || precio.trim() === '' || categoria.trim() === '') {
        Swal.fire("Por favor, completa todos los campos", "", "warning");
        return;
    }

    let item = { producto: nombre, precio: precio, categoria: categoria }; 
    carrito.push(item);

    // Agregar el producto al arreglo de productos
    productos.push(nombre);

    // Agregar el precio al arreglo de precios
    precios.push(precio);

    // Guardar los cambios en el almacenamiento local
    guardarLocal();

    imprimirP();
    
    aNombre.value = '';
    aPrecio.value = '';
    cCategoria.selectedIndex=0;
};

const eliminarP = (index) => {
    Swal.fire({
        title: "¿Estás seguro de eliminar este producto?",
        showDenyButton: true,
        confirmButtonText: "Si, eliminar",
        denyButtonText: "No estoy seguro"
    }).then((result) => {
        if (result.isConfirmed) {
            carrito.splice(index, 1);
            productos.splice(index, 1);
            precios.splice(index, 1);
            guardarLocal();
            imprimirP();
            Swal.fire("El producto ha sido eliminado", "", "success");
        }
    });
};

var indiceP; 
function mostrarP(index) {
    indiceP = index;
    var producto = carrito[index];

    document.getElementById("eNombre").value = producto.producto;
    document.getElementById("ePrecio").value = producto.precio;

    var categoriaSelect = document.getElementById("ceCategoria");

    categoriaSelect.innerHTML = "";

    categorias.forEach((categoria, i) => {
        var option = document.createElement("option");
        option.value = categoria;
        option.text = categoria;
        categoriaSelect.appendChild(option);
    });

    // Establecer la nueva categoría como seleccionada
    categoriaSelect.value = producto.categoria;
}

const editarP = () => {
    var producto = carrito[indiceP]; 
    producto.producto = document.getElementById("eNombre").value;
    producto.precio = document.getElementById("ePrecio").value;
    producto.categoria = document.getElementById("ceCategoria").value;

    carrito[indiceP] = producto;

    // Actualizar producto y precio en los arrays
    productos[indiceP] = producto.producto;
    precios[indiceP] = producto.precio;

    localStorage.setItem("carrito", JSON.stringify(carrito));
    guardarLocal(); // Actualizar localStorage para productos y precios

    imprimirP(); 
};

const agregarCategoria = () => {
    let categoria = aCategoria.value;
    categorias.push(categoria);
    guardarLocal();
    localStorage.setItem("categorias", JSON.stringify(categorias));
    imprimirC();
    
    aCategoria.value = "";
};

const eliminarC = (index) => {
    Swal.fire({
        title: "¿Estás seguro de eliminar esta categoría?",
        showDenyButton: true,
        confirmButtonText: "Si, eliminar",
        denyButtonText: "No estoy seguro"
    }).then((result) => {
        if (result.isConfirmed) {
            categorias.splice(index, 1);
            guardarLocal();
            localStorage.setItem("categorias", JSON.stringify(categorias));
            imprimirC();
            Swal.fire("La categoría ha sido eliminada", "", "success");
        }
    });
};

var indiceC; 
function mostrarC(index) {
    indiceC = index;
    var categoria = categorias[index];
    document.getElementById("eCategoria").value = categoria;
}

const editC = () => {
    var nuevaCategoria = document.getElementById("eCategoria").value;

    // Obtener la categoría antigua
    var categoriaAntigua = categorias[indiceC];

    // Actualizar la categoría en el arreglo de categorías
    categorias[indiceC] = nuevaCategoria;

    // Actualizar la categoría en el arreglo de productos del carrito
    carrito.forEach(producto => {
        if (producto.categoria === categoriaAntigua) {
            producto.categoria = nuevaCategoria;
        }
    });

    // Guardar las categorías actualizadas en el almacenamiento local
    localStorage.setItem("categorias", JSON.stringify(categorias));
    // Guardar el carrito actualizado en el almacenamiento local
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Recargar la página para reflejar los cambios
    window.location.reload(); // Esto recargará la página completa
};





const cargarCategoria = () => {
    categorias = JSON.parse(localStorage.getItem("categorias")) || [];
    const selectCategoria = document.getElementById("selectCategoria");
    const selectCategoriaM = document.getElementById("cCategoria");
    let options = "";
    categorias.forEach((categoria) => {
        options += `<option value="${categoria}">${categoria.toUpperCase()}</option>`;
    });
    selectCategoria.innerHTML = options;
    selectCategoriaM.innerHTML = options; 
};

