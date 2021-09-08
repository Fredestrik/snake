export class Color {
  constructor(mono=0) {
    this.r = mono;
    this.g = mono;
    this.b = mono;
  }

  get() {
    return [this.r, this.g, this.b];
  }
}

