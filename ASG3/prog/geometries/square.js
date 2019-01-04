/**
 * Specifies a Square. A subclass of Geometry.
 *
 * @author "Jacquelene"
 * @this {Square}
 */
class Square extends Geometry {
  /**
   * Constructor for Square.
   *
   * @constructor
   * @param {Number} size The size of the square drawn
   * @param {Number} centerX The center x-position of the square
   * @param {Number} centerY The center y-position of the square
   */
  constructor(size, centerX, centerY) {
    super(centerX, centerY);
    this.generateSquareVertices(size, centerX, centerY);
  }

  /**
   * Generates the vertices of the square.
   *
   * @private
   * @param {Number} size The size of the square drawn
   * @param {Number} centerX The center x-position of the square
   * @param {Number} centerY The center y-position of the square
   */
  generateSquareVertices(size, centerX, centerY) {
    for (let i=0; i < 4; i++) {
      this.vertices[i] = new Vertex(); //Create 6 vertices each of (x,y) vertex
    }
    //Vertices will vary depending on point size (offset)
    //Top Triangle
    this.vertices[0].points = [ centerX - size , centerY + size, 0 ]; //top left     |````,`
    this.vertices[1].points = [ centerX - size, centerY - size, 0 ]; //bottom left  |  ,` 
    this.vertices[2].points = [ centerX + size, centerY - size, 0 ]; //bottom right 
    this.vertices[3].points = [ centerX + size, centerY + size, 0 ]; //top right     |,` 
    // // //Bottom Triangle
    // this.vertices[3].points = [ centerX - size, centerY - size ]; //bottom left        ,`|
    // this.vertices[4].points = [ centerX + size, centerY + size ]; //top right         `  |
    // this.vertices[3].points = [ centerX + size, centerY - size ]; //bottom right   ,`,,,,|
    //Assign color
    this.color = [rgba[0], rgba[1], rgba[2], 1.0];

    
  }
}
