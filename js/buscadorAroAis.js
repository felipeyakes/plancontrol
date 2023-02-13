const aroAisOffices = [
    {aroAisOff: "SABE - AEROPARQUE", aroAisTelNumber: "(011)4514-1513", aroAisEmail: "acaer@eana.com.ar", aroAisInfo: "Oficina H24"},
    {aroAisOff: "SAZB - BAHIA BLANCA", aroAisTelNumber: "(0291)4860300", aroAisEmail: "acbca@eana.com.ar", aroAisInfo: "Oficina H24"},
    {aroAisOff: "SAVC - COMODORO RIVADAVIA", aroAisTelNumber: "(02970)4549439", aroAisEmail: "accrv@eana.com.ar", aroAisInfo: "Oficina H24"},
    {aroAisOff: "SACO - CORDOBA", aroAisTelNumber: "(0351)4751404", aroAisEmail: "accba@eana.com.ar", aroAisInfo: "Oficina H24"},
    {aroAisOff: "SAEZ - EZEIZA", aroAisTelNumber: "(011)44802330", aroAisEmail: "aceze@eana.com.ar", aroAisInfo: "Oficina H24"},
    {aroAisOff: "SAZM - MAR DEL PLATA", aroAisTelNumber: "(0223)5015359", aroAisEmail: "acmdp@eana.com.ar", aroAisInfo: "Oficina H24"},
    {aroAisOff: "SAME - MENDOZA", aroAisTelNumber: "(0261)4487486", aroAisEmail: "acdoz@eana.com.ar", aroAisInfo: "Oficina H24"},
    {aroAisOff: "SADP - PALOMAR", aroAisTelNumber: "(011)60064271", aroAisEmail: "acpal@eana.com.ar", aroAisInfo: "Oficina H24"},
    {aroAisOff: "SARE - RESISTENCIA", aroAisTelNumber: "(0362)4487758", aroAisEmail: "acsis@eana.com.ar", aroAisInfo: "Oficina H24"},
    {aroAisOff: "SAAR - ROSARIO", aroAisTelNumber: "(0341)155038804", aroAisEmail: "acros@eana.com.ar", aroAisInfo: "Oficina H24"},
    {aroAisOff: "SADF - SAN FERNANDO", aroAisTelNumber: "(011)4580-0261", aroAisEmail: "acfdo@eana.com.ar", aroAisInfo: "Oficina H24"},
    {aroAisOff: "SAZS - BARILOCHE", aroAisTelNumber: "(0294)4405029", aroAisEmail: "acbar@eana.com.ar", aroAisInfo: "Oficina HJ y/o a Requerimiento"},
    {aroAisOff: "SARI - IGUAZU", aroAisTelNumber: "(03757)420595", aroAisEmail: "acigu@eana.com.ar", aroAisInfo: "Oficina HJ y/o a Requerimiento"},
    {aroAisOff: "SADM - MORON", aroAisTelNumber: "(011)46279402", aroAisEmail: "acmor@eana.com.ar", aroAisInfo: "Oficina HJ y/o a Requerimiento"},
    {aroAisOff: "SAZN - NEUQUEN", aroAisTelNumber: "(0299)4440104", aroAisEmail: "acneu@eana.com.ar", aroAisInfo: "Oficina HJ y/o a Requerimiento"}
]

const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultados')
resultado.innerHTML = `<p class="no-resultAroAis">Debés escribir como mínimo 3 caracteres para iniciar la búsqueda.</p>`;


const filtrar = () => {
    resultado.innerHTML = ``;

    if (formulario.value.trim().length < 3) {
    resultado.innerHTML = `<p class="no-resultAroAis">Debés escribir como mínimo 3 caracteres para iniciar la búsqueda.</p>`;
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
