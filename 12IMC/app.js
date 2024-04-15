let peso=document.querySelector("#peso");
let vpeso=document.querySelector("#vpeso");   
let altura=document.querySelector("#altura");
let valtura=document.querySelector("#valtura");
let imc=document.querySelector("#imc");
let spinner=document.querySelector("#spinner");
let tabla=document.querySelector("#tabla");

let f1=document.querySelector("#f1");
let f2=document.querySelector("#f2");
let f3=document.querySelector("#f3");
let f4=document.querySelector("#f4");
let f5=document.querySelector("#f5");
let f6=document.querySelector("#f6");


vpeso.innerHTML=peso.value + " kg";


peso.oninput=()=>{
  vpeso.innerHTML=peso.value + " kg";
  
    spinner.innerHTML="<img src='sp.gif' width=80>"
  
  setTimeout(()=>{
  
  let a=parseFloat(altura.value);
  let p=peso.value;
  let al=a/100;
  console.log(al);
  let i=(p/Math.pow(al, 2)).toFixed(2);
  
  imc.innerHTML=i+ " kg/m²";
  spinner.innerHTML = ""; 
  
f1.style.transform="scale(1)";
f1.style.boxShadow = "none";

f2.style.transform="scale(1)";
f2.style.boxShadow = "none";

f3.style.transform="scale(1)";
f3.style.boxShadow = "none";

f4.style.transform="scale(1)";
f4.style.boxShadow = "none";

f5.style.transform="scale(1)";
f5.style.boxShadow = "none";

f6.style.transform="scale(1)";
f6.style.boxShadow = "none";




if(i<18.5){
  f1.style.transform="scale(1.2)";
  f1.style.boxShadow="5px 0 5px black"
}

if(i>=18.5 && i<=24.5){
  f2.style.transform="scale(1.2)";
  f2.style.boxShadow="5px 0 5px black"
}

if(i>=25 && i<=29.9){
  f3.style.transform="scale(1.2)";
  f3.style.boxShadow="5px 0 5px black"
}

if(i>=30 && i<=34.9){
  f4.style.transform="scale(1.2)";
  f5.style.boxShadow="5px 0 5px black"
}

if(i>=35 && i<=39.9){
  f5.style.transform="scale(1.2)";
  f5.style.boxShadow="5px 0 5px black"
} 

if(i>=40){
  f6.style.transform="scale(1.2)";
  f6.style.boxShadow="5px 0 5px black"
}

  },1500);
}




valtura.innerHTML=altura.value + " cm";



altura.oninput=()=>{
  valtura.innerHTML=altura.value + " cm";
  
  spinner.innerHTML="<img src='sp.gif' width=80>"
  
  setTimeout(()=>{
  
  let a=parseFloat(altura.value);
  let p=peso.value;
  let al=a/100;
  console.log(al);
  let i=(p/Math.pow(al, 2)).toFixed(1);
  
  imc.innerHTML=i+ " kg/m²";
  spinner.innerHTML = ""; 
  
f1.style.transform="scale(1)";
f1.style.boxShadow = "none";

f2.style.transform="scale(1)";
f2.style.boxShadow = "none";

f3.style.transform="scale(1)";
f3.style.boxShadow = "none";

f4.style.transform="scale(1)";
f4.style.boxShadow = "none";

f5.style.transform="scale(1)";
f5.style.boxShadow = "none";

f6.style.transform="scale(1)";
f6.style.boxShadow = "none";

if(i<18.5){
  f1.style.transform="scale(1.2)";
  f1.style.boxShadow="5px 0 5px black"
}

if(i>=18.5 && i<=24.5){
  f2.style.transform="scale(1.2)";
  f2.style.boxShadow="5px 0 5px black"
}

if(i>=25 && i<=29.9){
  f3.style.transform="scale(1.2)";
  f3.style.boxShadow="5px 0 5px black"
}

if(i>=30 && i<=34.9){
  f4.style.transform="scale(1.2)";
  f5.style.boxShadow="5px 0 5px black"
}

if(i>=35 && i<=39.9){
  f5.style.transform="scale(1.2)";
  f5.style.boxShadow="5px 0 5px black"
} 

if(i>=40){
  f6.style.transform="scale(1.2)";
  f6.style.boxShadow="5px 0 5px black"
}


  }, 1500);

}




             
