let fi = document.querySelector("#fi");
let vfi = document.querySelector("#vfi");
let co = document.querySelector("#co");
let vco = document.querySelector("#vco");
let ta = document.querySelector("#ta");
let c1 = document.querySelector("#c1");
let c2 = document.querySelector("#c2");

vfi.innerHTML = fi.value;
vco.innerHTML = co.value;

fi.oninput = () => { editar() };
co.oninput = () => { editar() };
c1.onchange = () => { editar() };
c2.onchange = () => { editar() };

const editar = () => {
    let f = parseInt(fi.value);
    let c = parseInt(co.value);

    vfi.innerHTML = f;
    vco.innerHTML = c;

    tabla(f, c);
}

const tabla = (fi, co) => {
    let table = '';

    for (let o = 0; o < fi; o++) {
        let rowColor = o % 2 === 0 ? c1.value : c2.value; 
        table += `<tr style="background-color: ${rowColor};">`;

        for (let p = 0; p < co; p++) {
            table += '<td></td>';
        }
        table += '</tr>';
    }

    ta.innerHTML = table;
};
