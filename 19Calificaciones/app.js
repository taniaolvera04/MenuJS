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

let progressStartValue = 50,
    speed = 100;

progressValue.textContent = `${progressStartValue}%`;

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
    let progressEndValue = 50 + (r - 5) * 10;

    if (r >= 5 && r <= 5.9) {
        circularProgress.style.background = `conic-gradient(#ff3b3b ${progressEndValue * 3.6}deg, #ededed 0deg)`;
        progressValue.style.color = "#ff3b3b";
    } else if (r >= 6 && r <= 7.4) {
        circularProgress.style.background = `conic-gradient(#ffac40 ${progressEndValue * 3.6}deg, #ededed 0deg)`;
        progressValue.style.color = "#ffac40";
    } else if (r >= 7.5 && r <= 8.9) {
        circularProgress.style.background = `conic-gradient(#ffea2b ${progressEndValue * 3.6}deg, #ededed 0deg)`;
        progressValue.style.color = "#ffea2b";
    } else if (r >= 9 && r <= 10) {
        circularProgress.style.background = `conic-gradient(#75ff81 ${progressEndValue * 3.6}deg, #ededed 0deg)`;
        progressValue.style.color = "#75ff81";
    }

    progressValue.textContent = `${progressEndValue}%`;
};

promedio();

let inputs = document.querySelectorAll('input[type="range"]');
inputs.forEach(input => {
    input.addEventListener('input', promedio);
});

