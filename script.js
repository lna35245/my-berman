document.addEventListener('DOMContentLoaded', () => {
    const botonSi = document.getElementById('si');
    const botonNo = document.getElementById('no');
    const mensajeSi = document.getElementById('mensaje-si');
    const mensajeNo = document.getElementById('mensaje-no');
    const botonPensarMas = document.getElementById('pensar-mas');

    botonSi.addEventListener('click', () => {
        document.getElementById('pregunta').classList.add('oculto');
        mensajeSi.classList.remove('oculto');
    });

    botonNo.addEventListener('click', () => {
        document.getElementById('pregunta').classList.add('oculto');
        mensajeNo.classList.remove('oculto');
    });

    if (botonPensarMas) {
        botonPensarMas.addEventListener('click', () => {
            mensajeNo.classList.add('oculto');
            document.getElementById('pregunta').classList.remove('oculto');
        });
    }
});
