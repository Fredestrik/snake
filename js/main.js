import { Color } from "./color.js";
import { Fruit } from "./fruit.js";
import { WIDTH, HEIGHT} from "./utils.js"
import { state } from "./gameState.js"



let score = null;

window.setup = function () {
    var canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent("sketch-holder");
    frameRate(5);
    state.setup();

    score = select("#score");
    console.log("setup");

}

window.draw = function () {
    background(...Color.fromColor("black").get());

    state.freeFruit.draw();
    state.snake.draw();

    if(state.freeFruit.x == state.snake.x && state.freeFruit.y == state.snake.y) {
        state.snake.length+=1;
        state.freeFruit = new Fruit();
        score.html(`Score : ${state.snake.length - 1}`);
    }

    if (!state.game_over) state.snake.move();
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
    }
}


console.log("hello le snake");
