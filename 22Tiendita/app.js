var productos=["Kinder","Pepper","Takis","Vuala","Yakult"];
var precios=[23, 18, 17, 20, 7];

var selectProductos=document.getElementById("productos");
var imgProductos=document.getElementById("imgProducto");
var precioProductos=document.getElementById("precioProductos");

var carrito=new Array();

const cargarProductos=()=>{
    let optionProductos="";
    productos.forEach((producto)=>{
        optionProductos+=`<option value="${producto}">${producto.toUpperCase()}</option>`;
    })
    selectProductos.innerHTML=optionProductos;
    cargarPrecio();
}                   

selectProductos.onchange=()=>{
    cargarPrecio();
}
    
const cargarPrecio=()=>{
    imgProductos.src=`productos/${selectProductos.value.toLowerCase()}.png`;
    precioProductos.innerHTML=`$ ${precios[selectProductos.selectedIndex]}`;
    posProducto=selectProductos.selectedIndex;
}



agregarCarrito.onclick=()=>{
    let divcarrito=doccument.getElementById("carrito");
    let item=new Array();
    item.push(posProducto);
    item.push(posProducto);
    carrito.push(item);
}