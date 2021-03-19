let gridBoard = document.getElementById('grid-board');


const emojis = ['🌞', '🥥', '😎', '🐬', '🌡', '🏝' ];

//--------- CREANDO LA GRILLA

const creatBoard = () =>{
    for (let i = 0; i < emojis.length; i++) {
        for (let j = 0; j < emojis.length; j++) {
            console.log(i,j)
           const newp = document.createElement("p");
           newp.innerHTML = emojis[getRandomNum(6,0)];
            gridBoard.appendChild(newp);
        }
        
    }
}

//--------- OBTENIENDO EL NUMERO Y EMOJI RANDOM
const getRandomNum = (max, min) =>{
    return Math.floor(Math.random() * (max - min) + min);
};
const ramdom = getRandomNum(0, 6);

const getEmoji = console.log(`posicion: ${ramdom}`, emojis[ramdom])

creatBoard();

// ------------TWEMOJI

twemoji.parse(document.body);


// gridBoard.innerHTML = emojis;

// var div = document.createElement('div');
// div.textContent = 'I \u2764\uFE0F emoji!';
// document.body.appendChild(div);


// var img = div.querySelector('img');
