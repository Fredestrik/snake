import { Fruit } from "./fruit.js";
import { Snake } from "./snake.js";

export class GameState{
  constructor(){
    this.game_over = false;
    this.snake = null;
    this.freeFruit = null;
  }

  setup(){
    this.game_over = false;
    this.snake = new Snake();
    this.freeFruit = new Fruit();
  }
}

export const state = new GameState();