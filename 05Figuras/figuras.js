let dv1 = document.querySelector("#vancho");
let dv3 = document.querySelector("#vanchob");
let dv2 = document.querySelector("#valto");

let ancho = document.querySelector("#ancho");
let alto =document.querySelector("#alto");


let colorf =document.querySelector("#colorf");

let anchob =document.querySelector("#anchob");


let colorb =document.querySelector("#colorb");

let tipob =document.querySelector("#tipob");
let cajita=document.querySelector("#cajita");



ancho.oninput=()=>{ dibujar()}
alto.oninput=()=>{ dibujar()}
anchob.oninput=()=>{ dibujar()}
colorb.onchange=()=>{dibujar()}
colorf.onchange=()=>{dibujar()}
tipob.oninput=()=>{dibujar()}


const dibujar=()=>{
 let a=parseInt(ancho.value);
let al=parseInt(alto.value);
let ab=parseInt(anchob.value);
let c1=colorf.value;
let c2=colorb.value;
let tipo=tipob.value;


console.log(c1);

console.log("Ancho: ", a);
console.log("Alto: ", al);
console.log("Ancho de Borde: ", ab);


vancho.innerHTML=a;
valto.innerHTML=al;
vanchob.innerHTML=ab;
cajita.style.width=a+"px";
cajita.style.height=al+"px";
cajita.style.borderWidth=ab+"px";
cajita.style.backgroundColor=c1;
cajita.style.borderColor=c2;
cajita.style.borderStyle=tipo;

}