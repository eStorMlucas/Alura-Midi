'use strict';

const ListaTeclas = document.querySelectorAll(`.tecla`);

function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log(`Elemento não encontrado ou seletor inválido`);
    }
}

for (let contador = 0; contador < ListaTeclas.length; contador++) {
    const tecla = ListaTeclas[contador]; 
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {
        if(evento.code === `Enter`) {
            tecla.classList.add(`ativa`);        
        } 
    }
    
    tecla.onkeyup = function() { 
        tecla.classList.remove(`ativa`);
    } 
}
