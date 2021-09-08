export class Color {
  constructor(r=0, g=0, b=0) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  get() {
    return [this.r, this.g, this.b];
  }

  static fromNumber(x=0){
    return new Color(x,x,x);
  }

  static fromColor(color="white"){
    switch(color){
      case "black" : return new Color(0,0,0);
      case "white" : return new Color(255,255,255);
      case "green" : return new Color(0,100,10);
    }
  }
}
