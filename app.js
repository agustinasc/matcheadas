let gridBoard = document.getElementById('grid-board');
const imag = document.querySelectorAll('img')
const nivelFacil = document.getElementById('nivel-facil')
const nivelMedio = document.getElementById('nivel-medio')
const nivelDificil = document.getElementById('nivel-dificil')

const emojis = ['🌞', '🥥', '😎', '🐬', '🌡', '🏝' ];
let level = 8;
const squares = [];
// const emojis = [
//     'red',
//     'yellow',
//     'orange',
//     'purple',
//     'green',
//     'blue'
// ];

//--------- CREANDO LA GRILLA

// const creatBoard = () =>{
//     gridBoard.innerHTML = '';
//     for (let i = 0; i < level; i++) {
    //         for (let j = 0; j < level; j++) {
        //             console.log(i,j)
//            const newp = document.createElement("p");
//            newp.innerHTML = emojis[getRandomNum(6,0)];
//             gridBoard.appendChild(newp);
//         }
        
//     }
// }

const creatBoard = () => {
    for (let i = 0; i < level*level; i++) {
        const square = document.createElement("p");
        square.setAttribute('draggable', true);
        square.setAttribute('id', i);
        let randomEmoji = Math.floor(Math.random() * emojis.length);
        //console.log(randomEmoji)
        //console.log(emojis[randomEmoji])
        square.innerHTML = emojis[randomEmoji];
        gridBoard.appendChild(square);
        squares.push(square);
    }
}
creatBoard();

//--------- OBTENIENDO EL NUMERO Y EMOJI RANDOM

// const getRandomNum = (max, min) =>{
//     return Math.floor(Math.random() * (max - min) + min);
// };
// const ramdom = getRandomNum(0, 6);
// const getEmoji = console.log(`posicion: ${ramdom}`, emojis[ramdom])


    ////----------------NIVELES--------------------//

// const changeLevel = () =>{
//     //level += 1 ;
//     gridBoard.style.width = `${70 * level}px`;
//     //     //console.log(level)
//     twemoji.parse(document.body);
// }

// nivelFacil.addEventListener('click', ()=>{
//     level = 6;
//     changeLevel();
//     creatBoard();
//     twemoji.parse(document.body);
// })

// nivelMedio.addEventListener('click', ()=>{
//     level = 7;
//     changeLevel();
//     creatBoard();
//     // gridBoard.style.width = `${70 * level}px`;
//     twemoji.parse(document.body);
// });

// nivelDificil.addEventListener('click', ()=>{
//     level = 8;
//     changeLevel();
//     creatBoard();
//     twemoji.parse(document.body);
// })


// ------------TWEMOJI (no hay que eliminarlo)

twemoji.parse(document.body);


// gridBoard.innerHTML = emojis;

// var div = document.createElement('div');
// div.textContent = 'I \u2764\uFE0F emoji!';
// document.body.appendChild(div);


// var img = div.querySelector('img');
