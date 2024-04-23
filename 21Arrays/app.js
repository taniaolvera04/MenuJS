var btnAdd=document.getElementById("btnAdd");
var btnDel=document.getElementById("btnDel");
var items=document.getElementById("items");
var unshift=document.getElementById("un");
var shift=document.getElementById("shi");
var index=document.getElementById("btnIndex");
var splice=document.getElementById("splice");

 var miarray=new Array();

splice.onclick=async()=>{

  const {value: pos}=await Swal.fire({
    title: "SPLICE",
    input: "text",
    inputLabel: "¿Qué posición inicial?",
    showCancelButton: true,
    inputValidator: (value)=>{
      if(!value){
        return "Ingresa valor válido";
      }
    }
  });    



const {value: n}=await Swal.fire({
  title:"SPLICE",
  input: "text",
  inputLabel: "¿Cuántos valores?",
  showCancelButton: true,
  inputValidator: (value)=>{
    if(!value){
      return "Ingresa valor válido";
    }
  }
});

  try{
    miarray.splice(pos,n);
    imprimirArray();
  }catch(error){
    Swal.fire({
      title: "SPLICE",
      text: "No se pudo eliminar",
      icon:"error"
    });
  }
}




index.onclick=()=>{
  let pos=miarray.indexOf(parseInt(document.getElementById("index").value));
  Swal.fire({
    title: "ARRAY",
    text: "Posición: "+pos,
    icon:"success"
  })
}


 shift.onclick=()=>{
  n=parseInt(document.getElementById("item").value);
  miarray.shift(n);
  imprimirArray()
}


unshift.onclick=()=>{
  n=parseInt(document.getElementById("item").value);
  miarray.unshift(n);
  imprimirArray()
}

const imprimirArray=()=>{
  let x="";
  for(let i=0; i<miarray.length; i++){
    x+=`<h3>${miarray[i]}</h3>`;
  }
  items.innerHTML=x;
}


btnAdd.onclick=()=>{
  var n=parseInt(document.getElementById("item").value);
  miarray.push(n);
  var nums="";
  for(var i=0; i<miarray.length; i++){
    nums+="<h2>"+miarray[i]+"</h2>";
  }
  items.innerHTML=nums;


  
  btnDel.onclick=()=>{
    var n=parseInt(document.getElementById("item").value);
  miarray.pop(n);
  var nums="";
  for(var i=0; i<miarray.length; i++){
    nums+="<h2>"+miarray[i]+"</h2>";
  }
  items.innerHTML=nums;

  }
}
