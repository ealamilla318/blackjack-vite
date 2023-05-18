

/**
 * Selecciona la carta de la parte superior del deck activo
 * @param {Array<String>} deck 
 * @returns {String} retorna una carta aleatoria del deck
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}

/**
 * Convierte una carta a su valor numerico
 * @param {String} carta 
 * @returns {Integer} retorna el valor numerico de una carta
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}

/**
 * Funcion para generar la imagen que tendra esa carta
 * @param {String} card 
 * @returns {HTMLImageElement} imagen de la carta
 */
export const imageCard = (carta) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}

