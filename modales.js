


//------ MODAL NIVELES ------//////


const selectLevel = () => {
    swal ({
        title:'Nuevo juego!',
        text: 'Selecciona un nivel',
        buttons: {
            facil: {
                text: 'Fácil',
                value: 'facil',
            },
            normal: {
                text: 'Normal',
                value: 'normal',
            },
            dificil: {
                text: 'Difícil',
                value: 'dificil',
            },
        },
    //     closeOnClickOutside: false,
    //     closeOnEsc: false,
    })
    .then(
        (value)=>{
            switch (value) {
                case 'facil':
                    level = 9;
                    break;

               case 'normal':
                   level = 8;
                   break;

              case 'dificil':
                  level = 7;
                  break;
                  default:
            }
            creatBoard(level)

        })
        
}
    


//---------------- MODAL BIENVENID@ -----------//

const wecolmeModal = () =>{

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
        buttons: {
                aJugar: {
                text: 'A jugar!',
                value: 'toGame',
                }
        },    
    })

    .then(
        (value)=>{
            switch (value) {
                case 'toGame':
                    selectLevel();
                    timerRestart(timeGame)
                    break;
                    default:
            }
            
        })
    stopTimer();
};

wecolmeModal();

    //------- JUEGO TERMINADO ---------//

const gameOver = () => {
    swal("Juego Terminado", {
        buttons: {
            newGame: {
                text: "Nuevo Juego",
                value: "newGame"
            },

            reIniciar: {
                text: "Reiniciar",
                value: "reIniciar",
            }
        },

    
    })
    .then(
        (value) => {
                switch (value) {
                    case 'newGame':
                        selectLevel();
                        timerRestart(timeGame);
                        break;

                    case 'reIniciar':
                        creatBoard(level);
                        timerRestart(timeGame);
                        break;
                        default:
                }
        });
    }

    

    
