const suma=()=>{ 
    let n1=parseFloat(document.querySelector("#num1").value);
    
  let n2=parseFloat(document.querySelector("#num2").value);
  let sum=n1+n2;
  let res=document.querySelector("#res");
  
  if(isNaN(sum)){
  res.innerHTML="<h3>"+0+"</h3>";
  }else{
   res.innerHTML="<h3>"+sum+"</h3>";
  }
  }
