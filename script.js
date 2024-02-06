var elementos = document.querySelectorAll('.player-options div > img');
const enemyOpt = document.querySelectorAll('.enemy-options div');
var infoResultado = document.querySelector('.info');
var playerOpt, inimigoOpt, resultado;
var jogado = false;

function resetOpacityPlayer(){
    for(var i=0; i<elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
};

function resetInimigo(){
    for(var i = 0; i < enemyOpt.length; i++){
        enemyOpt[i].childNodes[0].style.opacity = 0.3;
    }
};

function validarVitoria(){
    if(playerOpt == 'paper'){
        if(inimigoOpt == 'paper'){
            resultado = 'Draw!'
        }else if(inimigoOpt == 'scissor'){
            resultado = 'You lost!';
        }else if(inimigoOpt == 'rock'){
            resultado = 'You win!';
        }
    }
    if(playerOpt == 'rock'){
        if(inimigoOpt == 'paper'){
            resultado = 'You lost!'
        }else if(inimigoOpt == 'scissor'){
            resultado = 'You win!';
        }else if(inimigoOpt == 'rock'){
            resultado = 'Draw!';
        }
    }
    if(playerOpt == 'scissor'){
        if(inimigoOpt == 'paper'){
            resultado = 'You win!'
        }else if(inimigoOpt == 'scissor'){
            resultado = 'Draw!';
        }else if(inimigoOpt == 'rock'){
            resultado = 'You lost!';
        }
    }
    setTimeout(()=>{
        infoResultado.innerHTML = `
            <h3>${resultado}</h3>
            <button onclick="resetarJogo()" class="bi bi-arrow-counterclockwise"></button>
        `}, 1000);
    jogado = true;
}

function inimigoJogar(){
    let rand = Math.floor(Math.random()*3);
    resetInimigo();
    for(var i = 0; i<enemyOpt.length; i++){
        if(i == rand){
            enemyOpt[i].childNodes[0].style = "transition: 1s";
            enemyOpt[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOpt[i].childNodes[0].getAttribute('opt');
        }
    }
    validarVitoria();
}

for(var i=0; i<elementos.length; i++){
    elementos[i].addEventListener('click', (t)=>{
        if(!jogado){
            resetOpacityPlayer();
            t.target.style = "transition: 1s";
            t.target.style.opacity = 1;
            playerOpt = t.target.getAttribute('opt');
            setTimeout(()=>{
                inimigoJogar();
            },500)
        }
    })
}

function resetarJogo(){
    resetInimigo();
    resetOpacityPlayer();
    infoResultado.innerHTML = '';
    jogado = false;
}