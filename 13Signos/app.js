let dia=document.querySelector("#dia");
let vdia=document.querySelector("#vdia");
let mes=document.querySelector(".form-select");
let fecha=document.querySelector("#fecha");
let sp=document.querySelector("spinner");

vdia.innerHTML=dia.value;

dia.oninput=()=>{
    vdia.innerHTML = dia.value;
    let d = parseInt(dia.value);
    let m = mes.value;
    fecha.innerHTML = d + " de " + m;
   
    if ((m === "Marzo" && d >= 21 && d <= 31) || (m === "Abril" && d >= 1 && d <= 20)) {
        spinner.innerHTML="<img src='aries.png' width=350>";
     }
 
     if ((m === "Abril" && d >= 21 && d <= 31) || (m === "Mayo" && d >= 1 && d <= 20)) {
         spinner.innerHTML="<img src='tauro.png' width=350>";
     }
 
     if ((m === "Mayo" && d >= 21 && d <= 31) || (m === "Junio" && d >= 1 && d <= 20)) {
       spinner.innerHTML="<img src='geminis.png' width=350>";
     }
 
     if ((m === "Junio" && d >= 21 && d <= 31) || (m === "Julio" && d >= 1 && d <= 20)) {
         spinner.innerHTML="<img src='cancer.png' width=350>";
     }
 
     if ((m === "Julio" && d >= 21 && d <= 31) || (m === "Agosto" && d >= 1 && d <= 20)) {
      spinner.innerHTML="<img src='leo.png' width=350>";
     }
 
     if ((m === "Agosto" && d >= 21 && d <= 31) || (m === "Septiembre" && d >= 1 && d <= 20)) {
         spinner.innerHTML="<img src='virgo.png' width=350>";
     }
 
     if ((m === "Septiembre" && d >= 21 && d <= 31) || (m === "Octubre" && d >= 1 && d <= 20)) {
         spinner.innerHTML="<img src='libra.png' width=350>";
     }
 
     if ((m === "Octubre" && d >= 21 && d <= 31) || (m === "Noviembre" && d >= 1 && d <= 20)) {
         spinner.innerHTML="<img src='escorpio.png' width=350>";
     }
 
     if ((m === "Noviembre" && d >= 21 && d <= 31) || (m === "Diciembre" && d >= 1 && d <= 20)) {
         spinner.innerHTML="<img src='sagitario.png' width=350>";

     }
 
     if ((m === "Diciembre" && d >= 21 && d <= 31) || (m === "Enero" && d >= 1 && d <= 20)) {
         spinner.innerHTML="<img src='capricornio.png' width=350>";
     }
     if ((m === "Enero" && d >= 21 && d <= 31) || (m === "Febrero" && d >= 1 && d <= 20)) {
         spinner.innerHTML="<img src='acuario.png' width=350>";
     }
     if ((m === "Febrero" && d >= 21 && d <= 31) || (m === "Marzo" && d >= 1 && d <= 20)) {
         spinner.innerHTML="<img src='piscis.png' width=350>";  
     }

     spinner.style.transform="rotateY(-180deg)";
     spinner.style.transition="all 0.5s linear";
     spinner.style.transformStyle="preserve-3d";
     spinner.style.backfaceVisibility="hidden";

     setTimeout(()=>{
        spinner.style.transform="rotate(0deg)";
        spinner.style.transition="all 0.5s linear";
     }, 250);
}




    
mes.onchange = () => {
    vdia.innerHTML = dia.value;
    let d = parseInt(dia.value);
    let m = mes.value;
    fecha.innerHTML = d + " de " + m;


    if ((m === "Marzo" && d >= 21 && d <= 31) || (m === "Abril" && d >= 1 && d <= 20)) {
        spinner.innerHTML="<img src='aries.png' width=350>";
     }
 
     if ((m === "Abril" && d >= 21 && d <= 31) || (m === "Mayo" && d >= 1 && d <= 20)) {
         spinner.innerHTML="<img src='tauro.png' width=350>";
     }
 
     if ((m === "Mayo" && d >= 21 && d <= 31) || (m === "Junio" && d >= 1 && d <= 20)) {
       spinner.innerHTML="<img src='geminis.png' width=350>";
     }
 
     if ((m === "Junio" && d >= 21 && d <= 31) || (m === "Julio" && d >= 1 && d <= 20)) {
         spinner.innerHTML="<img src='cancer.png' width=350>";
     }
 
     if ((m === "Julio" && d >= 21 && d <= 31) || (m === "Agosto" && d >= 1 && d <= 20)) {
      spinner.innerHTML="<img src='leo.png' width=350>";
     }
 
     if ((m === "Agosto" && d >= 21 && d <= 31) || (m === "Septiembre" && d >= 1 && d <= 20)) {
         spinner.innerHTML="<img src='virgo.png' width=350>";
     }
 
     if ((m === "Septiembre" && d >= 21 && d <= 31) || (m === "Octubre" && d >= 1 && d <= 20)) {
         spinner.innerHTML="<img src='libra.png' width=350>";
     }
 
     if ((m === "Octubre" && d >= 21 && d <= 31) || (m === "Noviembre" && d >= 1 && d <= 20)) {
         spinner.innerHTML="<img src='escorpio.png' width=350>";
     }
 
     if ((m === "Noviembre" && d >= 21 && d <= 31) || (m === "Diciembre" && d >= 1 && d <= 20)) {
         spinner.innerHTML="<img src='sagitario.png' width=350>";

     }
 
     if ((m === "Diciembre" && d >= 21 && d <= 31) || (m === "Enero" && d >= 1 && d <= 20)) {
         spinner.innerHTML="<img src='capricornio.png' width=350>";
     }
     if ((m === "Enero" && d >= 21 && d <= 31) || (m === "Febrero" && d >= 1 && d <= 20)) {
         spinner.innerHTML="<img src='acuario.png' width=350>";
     }
     if ((m === "Febrero" && d >= 21 && d <= 31) || (m === "Marzo" && d >= 1 && d <= 20)) {
         spinner.innerHTML="<img src='piscis.png' width=350>";  
     }

     spinner.style.transform="rotateY(-180deg)";
     spinner.style.transition="all 0.5s linear";
     spinner.style.transformStyle="preserve-3d";
     spinner.style.backfaceVisibility="hidden";

     setTimeout(()=>{
        spinner.style.transform="rotate(0deg)";
        spinner.style.transition="all 0.5s linear";
     }, 250);
}