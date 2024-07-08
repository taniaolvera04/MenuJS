
var vh=document.getElementById("vh");
var va=document.getElementById("va");

var sb=document.getElementById("sb");
var cb=document.getElementById("cb");
var an=document.getElementById("an");
var pt=document.getElementById("pt");
var ef=document.getElementById("ef");
var tp=document.getElementById("tp");


var is=document.getElementById("is");
var ss=document.getElementById("ss");
var af=document.getElementById("af");
var si=document.getElementById("si");
var tre=document.getElementById("tre");


var sn=document.getElementById("sn");


var cargo=document.getElementById("cargo");
var horas=document.getElementById("horas");
var anti=document.getElementById("anti");

cargo.onchange=()=>{
    salario();
}

horas.onclick=()=>{
vh.innerHTML=(horas.value);
salario();
}

anti.onclick=()=>{
    va.innerHTML=(anti.value);
    salario();
}
    
const salario=()=>{
    let c = cargo.value;
    let h=horas.value;
    let a=anti.value;
    let canasta;
    let ant;
    let pun;
    let efi;
    let per;

    let i;
    let s;
    let f;
    let n;
let de;

let sa;

    if(c==="secretaria"){
        let salario=(100*h);
        sb.innerHTML=salario.toFixed(2);
        canasta=(salario*0.05);
        cb.innerHTML=canasta.toFixed(2);
        ant=(50*a);
        an.innerHTML=ant.toFixed(2);
        pun=(salario*0.03);
        pt.innerHTML=pun.toFixed(2);
        efi=(salario*1.5)/100;
        ef.innerHTML=efi.toFixed(2);
        per=(salario+canasta+ant+pun+efi)
        tp.innerHTML=per.toFixed(2);
        i=salario*0.16;
        is.innerHTML=i.toFixed(2);
        s=(salario*4.6)/100;
        ss.innerHTML=s.toFixed(2);
        f=(salario*0.02);
        af.innerHTML=f.toFixed(2);
        n=salario*0.01;
        si.innerHTML=n.toFixed(2);
        de=(i+s+f+n);
        tre.innerHTML=de.toFixed(2);
        sa=per-de;
        sn.innerHTML=sa.toFixed(2);

    }
    if(c==="gerente"){
        let salario=(200*h);
        sb.innerHTML=salario.toFixed(2);
        canasta=(salario*0.05);
        cb.innerHTML=canasta.toFixed(2);
        ant=(50*a);
        an.innerHTML=ant.toFixed(2);
        pun=(salario*0.03);
        pt.innerHTML=pun.toFixed(2);
        efi=(salario*1.5)/100;
        ef.innerHTML=efi.toFixed(2);
        per=(salario+canasta+ant+pun+efi)
        tp.innerHTML=per.toFixed(2);
        i=salario*0.16;
        is.innerHTML=i.toFixed(2);
        s=(salario*4.6)/100;
        ss.innerHTML=s.toFixed(2);
        f=(salario*0.02);
        af.innerHTML=f.toFixed(2);
        n=salario*0.01;
        si.innerHTML=n.toFixed(2);
        de=(i+s+f+n);
        tre.innerHTML=de.toFixed(2);
        sa=per-de;
        sn.innerHTML=sa.toFixed(2);
    }
    if(c==="cajero"){
        let salario=(120*h);
        sb.innerHTML=salario.toFixed(2);
        canasta=(salario*0.05);
        cb.innerHTML=canasta.toFixed(2);
        ant=(50*a);
        an.innerHTML=ant.toFixed(2);
        pun=(salario*0.03);
        pt.innerHTML=pun.toFixed(2);
        efi=(salario*1.5)/100;
        ef.innerHTML=efi.toFixed(2);
        per=(salario+canasta+ant+pun+efi)
        tp.innerHTML=per.toFixed(2);
        i=salario*0.16;
        is.innerHTML=i.toFixed(2);
        s=(salario*4.6)/100;
        ss.innerHTML=s.toFixed(2);
        f=(salario*0.02);
        af.innerHTML=f.toFixed(2);
        n=salario*0.01;
        si.innerHTML=n.toFixed(2);
        de=(i+s+f+n);
        tre.innerHTML=de.toFixed(2);
        sa=per-de;
        sn.innerHTML=sa.toFixed(2);
    }
}
