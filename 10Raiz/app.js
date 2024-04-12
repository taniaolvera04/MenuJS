let num=document.querySelector("#num");
let vnumero=document.querySelector("#vnumero");
let borrar=document.querySelector("#borrar");
let raiz=document.querySelector("#raiz");

vnumero.innerHTML=num.value;

num.oninput=()=>{
  
  vnumero.innerHTML=num.value;
  let vn=parseFloat(num.value);
  let r=Math.sqrt(vn).toFixed(2);
  raiz.innerHTML=r;
}


borrar.onclick=()=>{
  raiz.innerHTML="";
}
