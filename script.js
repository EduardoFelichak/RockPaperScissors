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
    if(playerOpt == 'papel'){
        if(inimigoOpt == 'papel'){
            resultado = 'Empate!'
        }else if(inimigoOpt == 'tesoura'){
            resultado = 'Perdeu!';
        }else if(inimigoOpt == 'pedra'){
            resultado = 'Venceu!';
        }
    }
    if(playerOpt == 'pedra'){
        if(inimigoOpt == 'papel'){
            resultado = 'Perdeu!'
        }else if(inimigoOpt == 'tesoura'){
            resultado = 'Venceu!';
        }else if(inimigoOpt == 'pedra'){
            resultado = 'Empate!';
        }
    }
    if(playerOpt == 'tesoura'){
        if(inimigoOpt == 'papel'){
            resultado = 'Venceu!'
        }else if(inimigoOpt == 'tesoura'){
            resultado = 'Empate!';
        }else if(inimigoOpt == 'pedra'){
            resultado = 'Perdeu!';
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