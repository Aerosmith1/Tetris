import Game from './src/game.js';
import View from './src/view.js';

const game = new Game();
const root=document.querySelector('#root');

const view = new View (root ,480,600 ,20,15);


window.game=game;
window.view = view;

document.addEventListener('keydown', event=>{

    switch(event.keyCode){

        case 37: //left 
        game.movePieceLeft();
        view.renderplayfield(game.getState());
        break;

        case 38: //up
        game.rotatePiece();
        view.renderplayfield(game.getState());
        break;

        case 39: //right
        game.movePieceright();
        view.renderplayfield(game.getState());
        break;

        case 40: //down
        game.movePiecedown();
        view.renderplayfield(game.getState());
        break;
        
    }


})

view.renderplayfield(game.getState());