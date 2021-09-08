import { Color } from "./color.js";
import { BLOCK_SIZE } from "./utils.js";
import { state } from "./gameState.js"

export class Fruit {
  constructor({color="red"} = {}) {
      do {
      this.x = Math.round(random(0,39))*10;
      this.y = Math.round(random(0,29))*10;
      } while (state.snake.collide(this.x, this.y));
      this.color = Color.fromColor("green");
      console.log(`Fruit created at ${this.x}, ${this.y}`)
  }

  draw(){
      fill(...this.color.get());
      rect(this.x, this.y, BLOCK_SIZE, BLOCK_SIZE);
  }
}