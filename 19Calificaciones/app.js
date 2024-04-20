let eco = document.querySelector("#eco");
let ing = document.querySelector("#ing");
let fis = document.querySelector("#fis");
let calc = document.querySelector("#calc");
let mod = document.querySelector("#mod");

let veco = document.querySelector("#veco");
let ving = document.querySelector("#ving");
let vfis = document.querySelector("#vfis");
let vcalc = document.querySelector("#vcalc");
let vmod = document.querySelector("#vmod");


let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

    veco.innerHTML = eco.value;
    ving.innerHTML = ing.value;
    vfis.innerHTML = fis.value;
    vcalc.innerHTML = calc.value;
    vmod.innerHTML = mod.value;

eco.oninput = () => { promedio(); };
ing.oninput = () => { promedio(); };
fis.oninput = () => { promedio(); };
calc.oninput = () => { promedio(); };
mod.oninput = () => { promedio(); };

const promedio = () => {
    let e = parseInt(eco.value);
    let i = parseInt(ing.value);
    let fi = parseInt(fis.value);
    let c = parseInt(calc.value);
    let m = parseInt(mod.value);

    veco.innerHTML = e;
    ving.innerHTML = i;
    vfis.innerHTML = fi;
    vcalc.innerHTML = c;
    vmod.innerHTML = m;

    let r = parseFloat((e + i + fi + c + m) / 5);

    let progressStartValue = (r * 10)-1, 
        progressEndValue = Math.min(100, progressStartValue), 
        speed = 100;

    let progress = setInterval(() => {
        progressStartValue++;
        progressValue.textContent = `${Math.min(progressStartValue, 100)}%`; 

        if (r >=5 && r<= 5.9) {
            circularProgress.style.background = `conic-gradient(#ff3b3b ${Math.min(progressStartValue * 3.6, 360)}deg, #ededed 0deg)`;
        progressValue.style.color="#ff3b3b";
        } 
        if(r>=6 && r<=7.4){
            circularProgress.style.background = `conic-gradient(#ffac40 ${Math.min(progressStartValue * 3.6, 360)}deg, #ededed 0deg)`;
            progressValue.style.color="#ffac40";
        }
        if(r>=7.5 && r<=8.9){
            circularProgress.style.background = `conic-gradient(#ffea2b ${Math.min(progressStartValue * 3.6, 360)}deg, #ededed 0deg)`; 
            progressValue.style.color="#ffea2b";
        }
        if(r>=9 && r<=10){
            circularProgress.style.background = `conic-gradient(#75ff81 ${Math.min(progressStartValue * 3.6, 360)}deg, #ededed 0deg)`;
            progressValue.style.color="#75ff81";
        }
        if (progressStartValue >= progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
};
