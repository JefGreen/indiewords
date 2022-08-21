/** This class is used to represent letters on the board */
export class Letter {
  x: number;
  y: number;
  width: number;
  height: number;
  value: string;

  /** This is the letter constructor
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   * @param {string} value
   * */
  constructor(
      x: number,
      y: number,
      width: number,
      height: number,
      value: string,
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.value = value;
  };

  /** The 'draw' function is use to draw a letter on the board.
   * @param {CanvasRenderingContext2D} ctx
   * */
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.font = '20px Georgia';
    ctx.fillText(this.value, this.x, this.y);
  };
}
