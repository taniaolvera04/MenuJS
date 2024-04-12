let mxn=document.querySelector("#mxn");
let pe=document.querySelector("#pe");
let borrar=document.querySelector("#borrar");
let usd=document.querySelector("#usd");

pe.innerHTML="$"+(mxn.value)+ "    MXN";

mxn.oninput=()=>{
  
 pe.innerHTML="$"+(mxn.value)+ "   MXN";
  let vn=parseFloat(mxn.value);
  let r=(vn*16.65).toFixed(2);
  usd.innerHTML="$" +r + "   USD";
}


borrar.onclick=()=>{
  usd.innerHTML="";
}
