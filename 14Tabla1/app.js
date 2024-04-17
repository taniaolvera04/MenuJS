let fi=document.querySelector("#fi");
let vfi=document.querySelector("#vfi");
let co=document.querySelector("#co");
let vco=document.querySelector("#vco");
let ta=document.querySelector("#ta");


vfi.innerHTML = fi.value;
vco.innerHTML = co.value;

fi.oninput = () => { editar() }
co.oninput = () => { editar() }

const editar = () => {
    let f= parseInt(fi.value);
    let c= parseInt(co.value);

    vfi.innerHTML=f;
    vco.innerHTML=c;

    tabla(f, c);
}

const tabla = (fi, co) => {
    let table= '';

    for (let i = 0;  i < fi;  i++) {
        table += '<tr>';
        for (let j = 0; j < co; j++) {
            table += '<td></td>';
        }
        table += '</tr>';
    }

    ta.innerHTML = table;
};