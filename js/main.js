const WIDTH = 400;
const HEIGHT = 300;
const BLOCK_SIZE = 10;

let snake = null;
let freeFruit = null;

class Snake {
    constructor({ x = 0, y = 0, dirX = 1, dirY = 0, color = "yellow" } = {}) {
        this.x = x;
        this.y = y;
        this.dirX = dirX;
        this.dirY = dirY;
        this.color = color;

        this.speed = BLOCK_SIZE;
        this.length = 2;
        this.tail = [];
    }

    draw() {
        fill(255);
        rect(this.x, this.y, BLOCK_SIZE, BLOCK_SIZE);
        //console.log(this.tail)
        this.tail.forEach(square =>
            rect(square.x, square.y, BLOCK_SIZE, BLOCK_SIZE)
        )
    }

    move() {
        if(this.tail.length <= this.length) this.tail.push({x:this.x, y:this.y})
        if(this.tail.length > this.length) this.tail.shift();

        this.x += this.dirX * this.speed;
        this.y += this.dirY * this.speed;

        if (this.x >= WIDTH) this.x = 0;
        else if (this.x < 0) this.x = WIDTH;

        if (this.y >= HEIGHT) this.y = 0;
        else if (this.y < 0) this.y = HEIGHT;
    }

    dir(dir) {
        switch (dir) {
            case "up":
                if (this.dir == "down") return;
                this.dirX = 0;
                this.dirY = -1;
                break;
            case "down":
                if (this.dir == "up") return;
                this.dirX = 0;
                this.dirY = 1;
                break;
            case "left":
                if (this.dir == "right") return;
                this.dirX = -1;
                this.dirY = 0;
                break;
            case "right":
                if (this.dir == "left") return;
                this.dirX = 1;
                this.dirY = 0;
                break;
        }
    }
}

class Fruit {
    constructor({x=100, y=100, color="red"} = {}) {
        this.x = Math.round(random(0,40))*10;
        this.y = Math.round(random(0,30))*10;
        this.color = color;
    }

    draw() {
        fill(0,100,10);
        rect(this.x, this.y, BLOCK_SIZE, BLOCK_SIZE);
    }
}

function setup() {
    createCanvas(WIDTH, HEIGHT);
    frameRate(5);

    snake = new Snake();
    freeFruit = new Fruit();

}

function draw() {
    background(0);

    freeFruit.draw();
    snake.draw();

    if(freeFruit.x == snake.x && freeFruit.y == snake.y) {
        snake.length+=1;
        freeFruit = new Fruit();
    }

    snake.move();
}

function keyPressed() {
    switch (keyCode) {
        case UP_ARROW:
            snake.dir("up");
            break;
        case DOWN_ARROW:
            snake.dir("down");
            break;
        case LEFT_ARROW:
            snake.dir("left");
            break;
        case RIGHT_ARROW:
            snake.dir("right");
            break;
    }
}

console.log("hello le snake");
