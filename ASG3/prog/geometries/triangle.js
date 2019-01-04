/**
 * Specifies a Triangle. A subclass of Geometry.
 *
 * @author "Jacquelene"
 * @this {Triangle}
 */
class Triangle extends Geometry {
  /**
   * Constructor for Triangle.
   *
   * @constructor
   * @param {Number} size The size of the triangle drawn
   * @param {Number} centerX The center x-position of the triangle
   * @param {Number} centerY The center y-position of the triangle
   */
  constructor(size, centerX, centerY) {
    super();
    this.generateTriangleVertices(size, centerX, centerY);


    // Recommendations: Remember that Triangle is a subclass of Geometry.
    // "super" keyword can come in handy when minimizing code reuse.
  }

  /**
   * Generates the vertices of the Triangle.
   *
   * @private
   * @param {Number} size The size of the triangle drawn
   * @param {Number} centerX The center x-position of the triangle
   * @param {Number} centerY The center y-position of the triangle
   */
  generateTriangleVertices(size, centerX, centerY) {


   // Create the three vertices (class Vertex) for the triangle
    for (let i=0; i < 3 ; i++) {
      this.vertices[i] = new Vertex();
    }
    //Vertices will vary depending on point size (offset)
    this.vertices[0].points = [centerX, centerY + size, 0.0]; //top vertex
    this.vertices[1].points = [centerX - size, centerY - size, 0.0]; //left vertex
    this.vertices[2].points = [centerX + size, centerY - size, 0.0]; //right vertex

    this.color = [rgba[0], rgba[1], rgba[2], 1.0];
    // console.log("Top" + this.vertices[0].point);
    // console.log("Left" + this.vertices[1].point);
    // console.log("Right" + this.vertices[2].point);
  }
}
