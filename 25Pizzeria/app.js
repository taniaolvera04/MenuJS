var tipos = JSON.parse(localStorage.getItem("tipos")) || [];
var tamanos = JSON.parse(localStorage.getItem("tamanos")) || [];
var precios = JSON.parse(localStorage.getItem("precios")) || [];


var carrito = JSON.parse(localStorage.getItem("carrito")) ||[];


var selectTipo = document.getElementById("tipo");
var selectTamano = document.getElementById("tamano");
var costo = document.getElementById("costo");
var inputCantidad = document.getElementById("inputCantidad");
var vcantidad = document.getElementById("vcantidad");

var addPedido = document.getElementById("addPedido");


var posPizza = -1;
var cantidadPizza = 0;
var totalp = 0;
var cambio = 0;



const cargarTodo = () => {
    cargarTipo();
    cargarTC();
    imprimirPedido();
};

selectTamano.onchange = () => {
    cargarPrecio();
}


const cargarPrecio = () => {
    costo.innerHTML = `$ ${precios[selectTamano.selectedIndex]}`;
    posPizza = selectTamano.selectedIndex;
}


inputCantidad.oninput = () => {
    vcantidad.innerHTML = inputCantidad.value;
    cantidadPizza = parseInt(inputCantidad.value);
}


const addTipo = () => {
    let tipoPizza = document.getElementById('tipoPizza').value;
    tipos.push(tipoPizza);
    
guardarLocal();
    
    cargarTipo();
}


const cargarTipo = () => {
    let optionTipo = "";
    tipos.forEach((tipo) => {
        optionTipo += `<option value="${tipo}">${tipo.toUpperCase()}</option>`;
    });
    selectTipo.innerHTML = optionTipo;
}


const addTC = () => {
    let tamanoPizza = document.getElementById('tamanoPizza').value;
    let costoPizza = document.getElementById('costoPizza').value;

    tamanos.push(tamanoPizza);
    precios.push(costoPizza);
  guardarLocal();
    
    cargarTC();
}


const cargarTC = () => {
    let optionTamano = "";
    tamanos.forEach((tamano, index) => {
        optionTamano += `<option value="${tamano}">${tamano.toUpperCase()}</option>`;
        costo.innerHTML = "$" + precios[index];
    });
    selectTamano.innerHTML = optionTamano;
}


addPedido.onclick = () => {
    cantidadPizza = parseInt(inputCantidad.value);
    posPizza = selectTamano.selectedIndex;

    if (checarPizza(posPizza, cantidadPizza)) {
        imprimirPedido();
    } else {
        let item = {
            tipo: tipos[selectTipo.selectedIndex],
            tamano: tamanos[posPizza],
            precio: precios[posPizza],
            cantidad: cantidadPizza
        };
        carrito.push(item);
        imprimirPedido();
        guardarLocal();
    }
}


const checarPizza = (pos, cant) => {
    let x = false;
    carrito.forEach(item => {
        if (item.tamano === tamanos[pos]) {
            item.cantidad += cant;
            x = true;
        }
    });
    return x;
}


const imprimirPedido = () => {
    let total = 0;
    let divCarrito = document.getElementById("carrito");

    let tablaHTML = `<table class="table w-100 m-auto">
        <tr>
        <td>PIZZA</td>
        <td>TAMAÑO</td>
        <td>CANTIDAD</td>
        <td>PRECIO</td>
        <td>IMPORTE</td>
        <td>*</td>
        </tr>`;
    carrito.forEach((item, index) => {
        tablaHTML += `
            <tr>  
               <td>${item.tipo.toUpperCase()}</td>        
               <td>${item.tamano.toUpperCase()}</td>    
               <td>${item.cantidad}</td>            
               <td>$${item.precio}.00</td>        
               <td>$${item.precio * item.cantidad}.00</td>             
            <td><button class="btn btn-danger" onclick="eliminarPedido(${index})"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
    </svg></button></td>
            </tr>`;
        total += parseFloat(item.precio) * item.cantidad;
        totalp = total;
    });
    tablaHTML += `
    <tr>
    <td></td>
    <td></td>
    <td><h3>TOTAL</h3></td>
    <td><h3>$${total}.00</h3></td>
    <td><button onclick="pagarPedido()" class="btn btn-primary">PAGAR</button></td>
    </tr>`;
    divCarrito.innerHTML = tablaHTML;
}


const eliminarPedido = (index) => {
    Swal.fire({
        title: "¿Estás seguro de eliminar esta orden?",
        showDenyButton: true,
        confirmButtonText: "Si, eliminar",
        denyButtonText: "No estoy seguro"
    }).then((result) => {
        if (result.isConfirmed) {
            carrito.splice(index, 1);
            imprimirPedido();
            guardarLocal();
            Swal.fire("La orden ha sido eliminada", "", "success");
        }
    });
}


const pagarPedido = () => {
    Swal.fire({
        title: 'Total a Pagar  $' + totalp,
        input: 'text',
        inputPlaceholder: 'Ingrese el total a pagar $' + totalp,
        showCancelButton: true,
        confirmButtonText: 'Pagar',
        cancelButtonText: 'Cancelar'
        
    }).then((result) => {
        if (result.isConfirmed) {
            const pago = result.value;
            if (pago >= totalp) {
                let cambio = pago - totalp;
                Swal.fire({
                    title: "GRACIAS POR TU COMPRA",
                    text: "Tu cambio es de : $" + cambio,
                    icon: "success"
                });
                desaparecerPedido();
            } else {
                Swal.fire({
                    title: "Ingresa una cantidad válida",
                    text: "Inténtalo de nuevo",
                    icon: "error"
                });
            }
        }
    });
}


const desaparecerPedido = () => {
    carrito = [];
    document.getElementById("carrito").innerHTML = "";
    guardarLocal();
}


const guardarLocal=()=>{
    localStorage.setItem("tipos", JSON.stringify(tipos));
    localStorage.setItem("tamanos", JSON.stringify(tamanos));
    localStorage.setItem("precios", JSON.stringify(precios));
    localStorage.setItem("carrito", JSON.stringify(carrito));
}