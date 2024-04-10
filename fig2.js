let dv1 = document.querySelector("#vancho");
let dv3 = document.querySelector("#vanchob");
let dv2 = document.querySelector("#valto");
let dv4 = document.querySelector("#vradius");
let dv5 = document.querySelector("#vrotate");
let dv6= document.querySelector("#vcs");



let ancho = document.querySelector("#ancho");
let alto =document.querySelector("#alto");


let colorf =document.querySelector("#colorf");

let anchob =document.querySelector("#anchob");


let colorb =document.querySelector("#colorb");

let tipob =document.querySelector("#tipob");
let cajita=document.querySelector("#cajita");
let radius=document.querySelector("#radius");
let rotate=document.querySelector("#rotate");


let cs=document.querySelector("#cs");








ancho.oninput=()=>{ dibujar()}
alto.oninput=()=>{ dibujar()}
anchob.oninput=()=>{ dibujar()}
colorb.onchange=()=>{dibujar()}
colorf.onchange=()=>{dibujar()}
tipob.oninput=()=>{dibujar()}
radius.oninput=()=>{ dibujar()}
rotate.oninput=()=>{ dibujar()}

cs.oninput=()=>{dibujar()}




const dibujar=()=>{
 let a=parseInt(ancho.value);
let al=parseInt(alto.value);
let ab=parseInt(anchob.value);
let r=parseInt(radius.value);
let c1=colorf.value;
let c2=colorb.value;
let tipo=tipob.value;
let ro=parseInt(rotate.value);

let co=cs.value;


console.log(c1);

console.log("Ancho: ", a);
console.log("Alto: ", al);
console.log("Ancho de Borde: ", ab);
console.log("TIpo borde: ", tipo);
console.log("Radius: ", r);

vancho.innerHTML=a;
valto.innerHTML=al;
vanchob.innerHTML=ab;
vradius.innerHTML=r;
vrotate.innerHTML=ro;




cajita.style.width=a+"px";
cajita.style.height=al+"px";
cajita.style.borderWidth=ab+"px";
cajita.style.backgroundColor=c1;
cajita.style.borderColor=c2;
cajita.style.borderStyle=tipo;
cajita.style.borderRadius=r+"%";
cajita.style.rotate=ro+"deg";

cajita.style.box.shadow=co;

}

let tx=document.querySelector("#transx");
let vtx=document.querySelector("#vtx");