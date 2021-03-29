//--------- DECLARANDO VARIBLAES ------//
let gridBoard = document.getElementById('grid-board');
const imag = document.querySelectorAll('img');
const clock = document.getElementById('clock');
const nivelFacil = document.getElementById('nivel-facil');
const nivelMedio = document.getElementById('nivel-medio');
const nivelDificil = document.getElementById('nivel-dificil');
const reiniciar = document.getElementById('reiniciar');

const emojis = ['🌞', '🥥', '😎', '🐬', '🌡', '🏝' ];
let level = 8;
let gridRow = []; 


//--------- CREANDO LA GRILLA ---------//

const creatBoard = () =>{
    gridBoard.innerHTML = '';
    for (let i = 0; i < level; i++) {
        gridRow[i] = [];
            for (let j = 0; j < level; j++) {
                    //console.log(i,j)
           const newp = document.createElement("p");
           newp.setAttribute("id", `${i} , ${j}`)
           let value = emojis[getRandomNum(6,0)];
           gridRow[i][j] = value;
           newp.innerHTML = value;
            gridBoard.appendChild(newp);
        }
        
    }
    clickEmoji();
}

// --------- OBTENIENDO EL NUMERO Y EMOJI RANDOM ----------//

const getRandomNum = (max, min) =>{
    return Math.floor(Math.random() * (max - min) + min);
};
const ramdom = getRandomNum(0, 6);
const getEmoji =console.log(`posicion: ${ramdom}`, emojis[ramdom]);



//---------------- NIVELES --------------------//

const changeLevel = () =>{
    //level += 1 ;
    gridBoard.style.width = `${70 * level}px`;
    //     //console.log(level)
    twemoji.parse(document.body);
}

nivelFacil.addEventListener('click', ()=>{
    level = 6;
    changeLevel();
    creatBoard();
    twemoji.parse(document.body);
})

nivelMedio.addEventListener('click', ()=>{
    level = 7;
    changeLevel();
    creatBoard();
    // gridBoard.style.width = `${70 * level}px`;
    twemoji.parse(document.body);
});

// nivelDificil.addEventListener('click', ()=>{
//     level = 8;
//     changeLevel();
//     creatBoard();
//     twemoji.parse(document.body);
// })


////------------ EVENTO PARA CLICKEAR EMOJIS -------------//


const clickEmoji = () =>{
    const elem = document.getElementsByTagName("p");

    for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener('click', (elem)=>{
            console.log(elem)
        });
        
    }
}
creatBoard();


/////////---------ENCONTRANDO LOS MATCHES -------////////////
//---------- FILAS ------------------//


// ------------TIMER  ------------------//
let process;
let timeGame = 5;


reiniciar.addEventListener('click', ()=>{

    clearInterval(process);
    //clock.innerHTML = 0;
    
    process = setInterval(() => {
        if(timeGame > 0){
            clock.innerHTML = timeGame
            timeGame --;
        }else{
            gameOver()
            return
        }
        
    }, 1000);

})


// ------------TWEMOJI (no hay que eliminarlo)

twemoji.parse(document.body);


