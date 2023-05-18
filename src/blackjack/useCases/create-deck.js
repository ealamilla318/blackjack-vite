import {shuffle} from 'underscore';



/**
 * Funcion para generar una deck ordenado aleatoramente
 * @param {Array<String>} tipos  ejemplo:['C','D','H','S'];
 * @param {Array<String>} especiales ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tipos,especiales) => {
    let deck = [];
    if(!tipos && tipos.length < 0 ){
        throw new Error('debes de insertar los tipos de carta')
    }

    if(!especiales && especiales.length < 0 ){
        throw new Error('debes de insertar los tipos especiales de carta')
    }

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = shuffle( deck );
    return deck;
}

