const aroAisOffices = [
    {aroAisOff: "SABE - AEROPARQUE", aroAisTelNumber: "(011)4514-1513", aroAisEmail: "acaer@eana.com.ar", aroAisInfo: "Oficina H24"},
    {aroAisOff: "SAZB - BAHIA BLANCA", aroAisTelNumber: "(0291)4860300", aroAisEmail: "acbca@eana.com.ar", aroAisInfo: "Oficina H24"},
    {aroAisOff: "SAVC - COMODORO RIVADAVIA", aroAisTelNumber: "(02970)4549439", aroAisEmail: "accrv@eana.com.ar", aroAisInfo: "Oficina H24"},
    {aroAisOff: "SACO - CORDOBA", aroAisTelNumber: "(0351)4751404", aroAisEmail: "accba@eana.com.ar", aroAisInfo: "Oficina H24"},
    {aroAisOff: "SAEZ - EZEIZA", aroAisTelNumber: "(011)44802330", aroAisEmail: "aceze@eana.com.ar", aroAisInfo: "Oficina H24"}
]

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado')

const filtrar = ()=>{
    // console.log(formulario.value);
    resultado.innerHTML = ``;

    const texto = formulario.value.toLowerCase();
    for(let aroAisOffice of aroAisOffices){
        let aroAisOff = aroAisOffice.aroAisOff.toLowerCase();
        if(aroAisOff.indexOf(texto) !== -1){
            resultado.innerHTML += `<li>${aroAisOffice.aroAisOff}</li>`
        }
    }
    
    if(resultado.innerHTML === ``){
        resultado.innerHTML += `<li>Oficina ARO AIS no encontrada</li>`
    }
}

boton.addEventListener('click', filtrar)
