let rojo=document.querySelector("#rojo");
let verde=document.querySelector("#verde");
let azul=document.querySelector("#azul");

let vrojo=document.querySelector("#vrojo");
let vverde=document.querySelector("#vverde");
let vazul=document.querySelector("#vazul");

let rgb=document.querySelector("#rgb");
let hexad=document.querySelector("#hexad");
let cu=document.querySelector("#cu");


vrojo.innerHTML = rojo.value;
vverde.innerHTML = verde.value;
vazul.innerHTML = azul.value;

rojo.oninput = () => { colores() };
verde.oninput = () => { colores() };
azul.oninput = () => { colores() };

const colores = () => {
    let r = parseInt(rojo.value);
    let v = parseInt(verde.value);
    let a = parseInt(azul.value);
    let valor;
    vrojo.innerHTML = r;
    vverde.innerHTML = v;
    vazul.innerHTML = a;
    
    
    rgb.innerHTML="RGB("+r+","+v+","+a+");";
    
    cu.style.backgroundColor = "rgb("+r+","+v+","+a+")";
  
  hexad.innerHTML="#"+convertirhexa(r)+convertirhexa(v)+convertirhexa(a);
}

function convertirhexa(valor) {
  let hexa=(valor>16)?valor.toString(16).toUpperCase():"0"+valor.toString(16).toUpperCase();
  return hexa;
}
