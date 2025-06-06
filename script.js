document.addEventListener('DOMContentLoaded', () => {
    const botonRomantico = document.querySelector('.boton-romantico');

    if (botonRomantico) {
        botonRomantico.addEventListener('click', () => {
            alert('no hace nada todavia amorcito, intentalo en otro momento');
        });

        // (El resto de tu código JavaScript existente para los efectos hover)
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
