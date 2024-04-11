let dv1 = document.querySelector("#vancho");
let dv3 = document.querySelector("#vanchob");
let dv2 = document.querySelector("#valto");
let dv4 = document.querySelector("#vradius");
let dv5 = document.querySelector("#vrotate");
let vtrx= document.querySelector("#vtrx");
let vtry= document.querySelector("#vtry");
let vsc= document.querySelector("#vsc");
let vsox= document.querySelector("#vsox");
let vsoy= document.querySelector("#vsoy");
let vtas= document.querySelector("#vtas");
let vcos= document.querySelector("#vcos");



let ancho = document.querySelector("#ancho");
let alto =document.querySelector("#alto");
let colorf =document.querySelector("#colorf");
let anchob =document.querySelector("#anchob");
let colorb =document.querySelector("#colorb");
let tipob =document.querySelector("#tipob");
let cajita=document.querySelector("#cajita");
let radius=document.querySelector("#radius");
let translatex=document.querySelector("#trx");
let translatey=document.querySelector("#tr");
let sc=document.querySelector("#sc");
let rotate=document.querySelector("#rotate");
let sox= document.querySelector("#sox");
let soy= document.querySelector("#soy");
let tas= document.querySelector("#tas");
let cos= document.querySelector("#cos");


ancho.oninput=()=>{ dibujar()}
alto.oninput=()=>{ dibujar()}
anchob.oninput=()=>{ dibujar()}
colorb.onchange=()=>{dibujar()}
colorf.onchange=()=>{dibujar()}
tipob.oninput=()=>{dibujar()}
radius.oninput=()=>{ dibujar()}
rotate.oninput=()=>{ dibujar()}
translatey.oninput=()=>{dibujar()}
translatex.oninput=()=>{ dibujar()}
sc.oninput=()=>{ dibujar()}
sox.oninput=()=>{ dibujar()}
soy.oninput=()=>{ dibujar()}
tas.oninput=()=>{ dibujar()}
cos.oninput=()=>{ dibujar()}


const dibujar=()=>{
 let a=parseInt(ancho.value);
let al=parseInt(alto.value);
let ab=parseInt(anchob.value);
let r=parseInt(radius.value);
let c1=colorf.value;
let c2=colorb.value;
let tipo=tipob.value;
let x = parseInt(translatex.value);
let y = parseInt(translatey.value);
let s = parseFloat(sc.value);
let ro=parseInt(rotate.value);
let sx=sox.value;
let sy=soy.value;
let ts=tas.value;
let cs=cos.value;
let transformacion = `translateX(${x}px) translateY(${y}px) scale(${s})`;


vtrx.innerHTML=x;
vtry.innerHTML=y;
vancho.innerHTML=a;
valto.innerHTML=al;
vanchob.innerHTML=ab;
vradius.innerHTML=r;
vrotate.innerHTML=ro;
vsox.innerHTML=sx;
vsoy.innerHTML=sy;
vtas.innerHTML=ts;
vsc.innerHTML=s;



cajita.style.width=a+"px";
cajita.style.height=al+"px";
cajita.style.borderWidth=ab+"px";
cajita.style.backgroundColor=c1;
cajita.style.borderColor=c2;
cajita.style.borderStyle=tipo;
cajita.style.borderRadius=r+"%";
cajita.style.transform = transformacion;
cajita.style.rotate=ro+"deg";
cajita.style.boxShadow = `${sx}px ${sy}px ${ts}px ${cs}`;
}
