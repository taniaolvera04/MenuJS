let va = document.querySelector("#va");
let vb = document.querySelector("#vb");
let vc = document.querySelector("#vc");

let ca = document.querySelector("#ca");
let cb = document.querySelector("#cb");
let cc = document.querySelector("#cc");

let r = document.querySelector("#r");

va.innerHTML = ca.value;
vb.innerHTML = cb.value;
vc.innerHTML = cc.value;

ca.oninput = () => { calcular() };
cb.oninput = () => { calcular() };
cc.oninput = () => { calcular() };

const calcular = () => {
    let a = parseFloat(ca.value);
    let b = parseFloat(cb.value);
    let c = parseFloat(cc.value);

    va.innerHTML = a;
    vb.innerHTML = b;
    vc.innerHTML = c;

    let factor = Math.pow(b, 2) - (4 * a * c);

    if (factor === 0) {
        let x = (-b) / (2 * a);
        r.innerHTML = "x= " + x;
    } else if (factor > 0) {
        let x1 = (-b + Math.sqrt(factor)) / (2 * a);
        let x2 = (-b - Math.sqrt(factor)) / (2 * a);
        r.innerHTML = "x1= " + x1 + "<br>" + "x2= " + x2;
    } else {
        r.innerHTML = "No hay solución";
    }
}


calcular();
