const suma=()=>{ 
    //función flechita (arrow function)
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
  
  
  
  
  const resta=()=>{ 
    
    let n1=parseFloat(document.querySelector("#num1").value);
    
  let n2=parseFloat(document.querySelector("#num2").value);
  
  let rest=n1-n2;
  
  
  if(isNaN(rest)){
    res.innerHTML="<h3>"+0+"</h3>";
  }else{
    res.innerHTML="<h3>"+rest+"</h3>";
  }
  }
  
  
  
  const multi=()=>{ 
    
    let n1=parseFloat(document.querySelector("#num1").value);
    
  let n2=parseFloat(document.querySelector("#num2").value);
  
  let mult=n1*n2;
  
  
  if(isNaN(mult)){
    res.innerHTML="<h3>"+0+"</h3>";
  }else{
    res.innerHTML="<h3>"+mult+"</h3>";
  }
  }
  
  
  
  const division=()=>{ 
    
    let n1=parseFloat(document.querySelector("#num1").value);
    
  let n2=parseFloat(document.querySelector("#num2").value);
  
  let div=n1/n2;
  
  
  if(isNaN(div)){
    res.innerHTML="<h3>"+0+"</h3>";
  }else{
    res.innerHTML="<h3>"+div+"</h3>";
  }
  }
  
  const por=()=>{ 
    
    let n1=parseFloat(document.querySelector("#num1").value);
    
  let n2=parseFloat(document.querySelector("#num2").value);
  
  let po=n1%n2;
  
  
  if(isNaN(po)){
    res.innerHTML="<h3>"+0+"</h3>";
  }else{
    res.innerHTML="<h3>"+po+"</h3>";
  }
  }
  
  
  const potencia=()=>{ 
    
    let n1=parseFloat(document.querySelector("#num1").value);
    
  let n2=parseFloat(document.querySelector("#num2").value);
  
  let pot=Math.pow(n1,n2);
  
  
  if(isNaN(pot)){
    res.innerHTML="<h3>"+0+"</h3>";
  }else{
    res.innerHTML="<h3>"+pot+"</h3>";
  }
  }
  
  
  const del=()=>{ 
    
    document.querySelector("#num1").value="";
  
  document.querySelector("#num2").value="";
  document.querySelector("#res").innerHTML="";
  }