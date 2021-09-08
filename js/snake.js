import { Color } from "./color.js";
import { BLOCK_SIZE, WIDTH, HEIGHT } from "./utils.js";

export class Snake {
  constructor({ x = 0, y = 0, dir = "right", color = 255 } = {}) {
      this.x = x;
      this.y = y;
      this.dir = dir;
      this.turn(this.dir)
      this.color = new Color(100);

      this.speed = BLOCK_SIZE;
      this.length = 4;
      this.tail = [];
      this.dir_lock = false;
  }

  draw() {
      fill(...this.color.get());
      rect(this.x, this.y, BLOCK_SIZE, BLOCK_SIZE);
      //console.log(this.tail)
      this.tail.forEach(square =>
          rect(square.x, square.y, BLOCK_SIZE, BLOCK_SIZE)
      )
      this.dir_lock = false;
  }

  move() {
      if(this.tail.length <= this.length) this.tail.push({x:this.x, y:this.y})
      if(this.tail.length > this.length) this.tail.shift();

      if(this.collide(this.x + this.dirX * this.speed, this.y + this.dirY * this.speed)) {
          this.speed = 0;
          this.color = 120;
          game_over = true
          return;
      }
      else {
          this.x += this.dirX * this.speed;
          this.y += this.dirY * this.speed;
      }

      if (this.x >= WIDTH) this.x = 0;
      else if (this.x < 0) this.x = WIDTH;

      if (this.y >= HEIGHT) this.y = 0;
      else if (this.y < 0) this.y = HEIGHT;

      //console.log(this.x, this.y, this.collide(this.x, this.y))

      
  }

  turn(dir) {
      if(this.dir_lock) return;
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
      this.dir=dir;
      this.dir_lock = true;
  }

  collide(x, y) {
      let r = false
      this.tail.forEach(square =>
          { if (square.x == x && square.y == y) r=true; }
      )
      return r;
  }
}