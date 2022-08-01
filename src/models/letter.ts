

class Letter {
  constructor(x: number, y: number, width: number, height: number) {
    this.x = x,
    this.y = y,
    this.width = width,
    this.height = height
  }

  draw(ctx: Context) {
    ctx.beginPath();
    ctx.font = "20px Georgia";
    ctx.fillText("Hello World!", 10, 50);
  }
}
