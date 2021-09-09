import { Color } from "./color.js";
import { Fruit } from "./fruit.js";
import { WIDTH, HEIGHT} from "./utils.js"
import { state } from "./gameState.js"



let score = null;
let img;

window.setup = function () {
    var canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent("sketch-holder");
    frameRate(5);
    state.setup();

    score = select("#score");

    img = loadImage('game-over.jpg');
    console.log("setup");

}

window.draw = function () {
    background(...Color.fromColor("black").get());

    state.freeFruit.draw();
    state.snake.draw();

    if(state.freeFruit.x == state.snake.x && state.freeFruit.y == state.snake.y) {
        state.snake.length+=1;
        state.freeFruit = new Fruit();
        score.html(`Score : ${state.snake.length > 4 ? state.snake.length - 1 : '⌀'}`);
    }

    if (!state.game_over) state.snake.move();
    else image(img, 125,50,150,150);
}

window.keyPressed = function () {
    switch (keyCode) {
        case UP_ARROW:
            state.snake.turn("up");
            break;
        case DOWN_ARROW:
            state.snake.turn("down");
            break;
        case LEFT_ARROW:
            state.snake.turn("left");
            break;
        case RIGHT_ARROW:
            state.snake.turn("right");
            break;
        case ESCAPE:
            state.setup(); score.html(`Score : ⌀`);
            break;
    }
}


console.log("hello le snake");
