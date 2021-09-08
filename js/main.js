import { Color } from "./color.js";
import { Snake } from "./snake.js";
import { Fruit } from "./fruit.js";
import { WIDTH, HEIGHT} from "./utils.js"

window.snake = null;
window.freeFruit = null;
window.game_over = false


window.setup = function () {
    createCanvas(WIDTH, HEIGHT);
    frameRate(5);
    console.log("setup")

    window.snake = new Snake();
    window.freeFruit = new Fruit();

}

window.draw = function () {
    background(0);

    window.freeFruit.draw();
    window.snake.draw();

    if(window.freeFruit.x == window.snake.x && window.freeFruit.y == window.snake.y) {
        window.snake.length+=1;
        window.freeFruit = new Fruit();
    }

    if (!window.game_over) window.snake.move();
}

window.keyPressed = function () {
    switch (keyCode) {
        case UP_ARROW:
            window.snake.turn("up");
            break;
        case DOWN_ARROW:
            window.snake.turn("down");
            break;
        case LEFT_ARROW:
            window.snake.turn("left");
            break;
        case RIGHT_ARROW:
            window.snake.turn("right");
            break;
    }
}

console.log("hello le snake");
