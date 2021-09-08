import { Color } from "./color.js";
import { BLOCK_SIZE } from "./utils.js";

export class Fruit {
  constructor({x=100, y=100, color="red"} = {}) {
      do {
      this.x = Math.round(random(0,39))*10;
      this.y = Math.round(random(0,29))*10;
      } while (window.snake.collide(this.x, this.y));
      this.color = color;
      console.log(`Fruit created at ${this.x}, ${this.y}`)
  }

  draw() {
      fill(0,100,10);
      rect(this.x, this.y, BLOCK_SIZE, BLOCK_SIZE);
  }
}