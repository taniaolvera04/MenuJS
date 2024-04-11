var n=1;
var input=document.querySelector("#numero");
var tabla=document.querySelector("#tabla");

input.oninput=()=>{
  n=parseInt(input.value);
  document.querySelector("#vnumero").innerHTML=n;
}

document.querySelector("#ver").onclick=()=>{
  let table = "<table class='table'>";
  for(i=1; i<=10; i++){
    table+="<tr><td>"+n+"</td><td></td><td>"+i+"</td><td>=</td><td>"+(n*i)+"</td></tr>";
  }
  table+="</table>";
  tabla.innerHTML=table;
}
document.querySelector("#borrar").onclick=()=>{
  tabla.innerHTML="";
}
