let valor = document.querySelector("#valor");
let dv =document.querySelector("#value");
let cajita=document.querySelector("#cajita");
//div 
//let es variable global, se reconocen dentro de esa función y dentro de otras

valor.oninput=()=>{ //evento oninput

let n=parseInt(valor.value);
  dv.innerHTML=n;
  cajita.style.width=n+"px";
  cajita.style.height=n+"px";
}