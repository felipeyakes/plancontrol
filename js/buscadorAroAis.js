const aroAisOffices = [
    {aroAisOff: "SABE - AEROPARQUE", aroAisTelNumber: "(011)4514-1513", aroAisEmail: "acaer@eana.com.ar", aroAisInfo: "Oficina H24"},
    {aroAisOff: "SAZB - BAHIA BLANCA", aroAisTelNumber: "(0291)4860300", aroAisEmail: "acbca@eana.com.ar", aroAisInfo: "Oficina H24"},
    {aroAisOff: "SAVC - COMODORO RIVADAVIA", aroAisTelNumber: "(02970)4549439", aroAisEmail: "accrv@eana.com.ar", aroAisInfo: "Oficina H24"},
    {aroAisOff: "SACO - CORDOBA", aroAisTelNumber: "(0351)4751404", aroAisEmail: "accba@eana.com.ar", aroAisInfo: "Oficina H24"},
    {aroAisOff: "SAEZ - EZEIZA", aroAisTelNumber: "(011)44802330", aroAisEmail: "aceze@eana.com.ar", aroAisInfo: "Oficina H24"}
]

const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultados')
resultado.innerHTML = `<p class="no-resultAroAis">Debes escribir como mínimo 3 caracteres para iniciar la búsqueda.</p>`;


const filtrar = () => {
    resultado.innerHTML = ``;

    if (formulario.value.trim().length < 3) {
    resultado.innerHTML = `<p class="no-resultAroAis">Debes escribir como mínimo 3 caracteres para iniciar la búsqueda.</p>`;
    } else {
        let contador = 0;
        const texto = formulario.value.toLowerCase();
        for (let aroAisOffice of aroAisOffices) {
        let aroAisOff = aroAisOffice.aroAisOff.toLowerCase();
    if (aroAisOff.indexOf(texto) !== -1) {
        contador++;
        resultado.innerHTML += `<li>${aroAisOffice.aroAisOff}</li>`
        resultado.innerHTML += `<p class="tel-aroAis">Teléfono: ${aroAisOffice.aroAisTelNumber}</p>`
        resultado.innerHTML += `<p class="email-aroAis">Email: ${aroAisOffice.aroAisEmail}</p>`
        resultado.innerHTML += `<p class="info-aroAis">Información: ${aroAisOffice.aroAisInfo}</p>`
    }
    }

    if (contador === 0 && formulario.value.length >= 3) {
    resultado.innerHTML = `<p class="no-resultAroAis">No se encontraron oficinas ARO/AIS.</p>`;
    }
    }
}

formulario.addEventListener('input', filtrar);
