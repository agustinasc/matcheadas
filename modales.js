////// MODAL BIENVENID@

swal({
    title: "Bienvenid@s!",
    text: `Objetivo:
        Juntar verticalmente u horizontalmente tres o mas emojis iguales. 
    Lo puedes hacer, seleccionando un emoji y luego clickeando en otro emoji adyacente para poder intercambiarlos de lugar.
    
    Al alinearlos, se eliminarán e irás sumando puntos. Tenes 30 segundos para alinear la máxima cantidad posible.
    
    Controles:
        -Click izquierdo: selección.
        -Enter o Espaciado: selección.
        -Flechas o WASD: movimiento e intercambio.`,
});



/////// MODAL NIVELES


    // const seleccionNivel = () => {
    //     swal ({
    //     title:'Nuevo juego!',
    //     text: 'Selecciona una dificultad',
    //     buttons: {
    //         facil: {
    //             text: 'Fácil',
    //             value: 'facil',
    //         },
    //         normal: {
    //             text: 'Normal',
    //             value: 'normal',
    //         },
    //         dificil: {
    //             text: 'Difícil',
    //             value: 'dificil',
    //         },
    //     },
    //     closeOnClickOutside: false,
    //     closeOnEsc: false,
    // })
    // .then(
    //     (value)=>{
    //         switch (value) {
    //             case 'facil':
    //                 level = 9;
    //                 break;

    //            case 'normal':
    //                level = 8;
    //                break;

    //           case 'dificil':
    //               level = 7;
    //               break;
    //               default:
    //         }
    //         crearTablero(level)
    //     })
    //   }

    //   const gameOver = () =>{
    //     swal({
    //         title: '¡Juego Terminado!',
    //         text: Puntaje Final: 0,
    //         buttons: {
    //             juegoNuevo: {
    //                 text: 'Nuevo Juego',
    //                 value: 'nuevoJuego'
    //             },
    //             reestablecer:{
    //                 text:'Reiniciar',
    //                 value: 'reiniciar'
    //             }
    //         },

    //     })
    //     .then((value) => {
    //         switch (value) {
    //             case 'nuevoJuego':
    //                 seleccionNivel();
    //                 break;
    //                 case 'reiniciar':
    //                     crearTablero(level);
    //                     break;
    //                 }
    //             });
    //             stopTimer();

    //         };

    

