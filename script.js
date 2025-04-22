document.addEventListener('DOMContentLoaded', () => {
    const botonNoche = document.getElementById('botonNoche');
    const botonDia = document.getElementById('botonDia');
    const contenedorOriginal = document.querySelector('.contenedor');
    const nocheEstrellada = document.getElementById('nocheEstrellada');
    const body = document.body;

    if (botonNoche && contenedorOriginal && nocheEstrellada && botonDia) {
        botonNoche.addEventListener('click', () => {
            contenedorOriginal.classList.add('oculto');
            nocheEstrellada.classList.remove('oculto');
            body.classList.add('modo-noche');
        });

        botonDia.addEventListener('click', () => {
            contenedorOriginal.classList.remove('oculto');
            nocheEstrellada.classList.add('oculto');
            body.classList.remove('modo-noche');
        });
    }

    // (El resto de tu código JavaScript existente para los efectos hover)
    const botonRomantico = document.querySelector('.boton-romantico');
    if (botonRomantico) {
        botonRomantico.addEventListener('mouseover', () => {
            botonRomantico.style.transform = 'scale(1.03)';
            botonRomantico.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
        });

        botonRomantico.addEventListener('mouseout', () => {
            botonRomantico.style.transform = 'scale(1)';
            botonRomantico.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.15)';
        });
    }

    const imagenContenedor = document.querySelector('.imagen-contenedor');
    if (imagenContenedor) {
        imagenContenedor.addEventListener('mouseover', () => {
            imagenContenedor.style.animationPlayState = 'paused';
            imagenContenedor.classList.add('hovered');
        });

        imagenContenedor.addEventListener('mouseout', () => {
            imagenContenedor.style.animationPlayState = 'running';
            imagenContenedor.classList.remove('hovered');
        });
    }
});
