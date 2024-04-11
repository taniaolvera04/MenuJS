var spinner =document.querySelector("#spinner");
document.querySelector("#btnVer").onclick=()=>{
  spinner.innerHTML="<img src='spin.gif'>";
  setTimeout(()=>{
    spinner.innerHTML="<h1>¡HOLA!</h1>";
  },2000);
}
