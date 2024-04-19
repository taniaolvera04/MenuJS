let eco=document.querySelector("#eco");
let ing=document.querySelector("#ing");
let fis=document.querySelector("#fis");
let calc=document.querySelector("#calc");
let mod=document.querySelector("#mod");

let veco=document.querySelector("#veco");
let ving=document.querySelector("#ving");
let vfis=document.querySelector("#vfis");
let vcalc=document.querySelector("#vcalc");
let vmod=document.querySelector("#vmod");
let cal=document.querySelector("#cal");

veco.innerHTML=eco.value;
ving.innerHTML=ing.value;
vfis.innerHTML=fis.value;
vcalc.innerHTML=calc.value;
vmod.innerHTML=mod.value;

eco.oninput=()=>{promedio()};
ing.oninput=()=>{promedio()};
fis.oninput=()=>{promedio()};
calc.oninput=()=>{promedio()};
mod.oninput=()=>{promedio()};

const promedio = () => {
    let e = parseInt(eco.value);
    let i = parseInt(ing.value);
    let fi = parseInt(fis.value);
    let c = parseInt(calc.value);
    let m = parseInt(mod.value);

    veco.innerHTML=e;
    ving.innerHTML=i;
    vfis.innerHTML=fi;
    vcalc.innerHTML=c;
    vmod.innerHTML=m;
    
    let r=parseFloat((e+i+fi+c+m)/5);
    cal.innerHTML=r;

}

    // Función para actualizar el progreso
    function updateProgress() {
        var eco = document.getElementById('eco').value;
        // Calcula el promedio de las otras materias de manera similar

        // Calcula el promedio total
        var average = (parseInt(eco) /* + sumar otras materias */) / 1; // Cambia el divisor según el número de materias

        // Actualiza el valor del porcentaje mostrado
        var progressPercent = document.getElementById('progressPercent');
        progressPercent.innerText = average;

        var progress = document.getElementById("progress");
        var circumference = 2 * Math.PI * 90; // Circunferencia del círculo
        var offset = circumference * (1 - average / 100); // Cálculo del desplazamiento
        // Actualiza el atributo 'stroke-dashoffset' para mostrar el nuevo progreso
        progress.setAttribute("stroke-dashoffset", offset);
    }