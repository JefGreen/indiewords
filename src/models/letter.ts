export class Letter {
  constructor(x: number, y: number, width: number, height: number, value: string) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.value = value;
  }

  draw(ctx: Context) {
    ctx.beginPath();
    ctx.font = "20px Georgia";
    ctx.fillText(this.value, this.x, this.y);
  }
}
