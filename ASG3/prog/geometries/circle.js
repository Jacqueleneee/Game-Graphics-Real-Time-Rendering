/**
 * Specifies a Circle. A subclass of Geometry.
 *
 * @author "Jacquelene"
 * @this {Circle}
 */
class Circle extends Geometry {
  /**
   * Constructor for Circle.
   *
   * @constructor
   * @param {Number} radius The radius of the circle being constructed
   * @param {Integer} segments The number of segments composing the circle
   * @param {Number} centerX The central x-position of the circle
   * @param {Number} centerY The central y-position of the circle
   */
  constructor(radius, segments, centerX, centerY) {
    super();
    this.x = centerX;
    this.y = centerY;
    this.size=radius;
    this.generateCircleVertices(radius,segments, centerX, centerY)

  }

  /**
   * Generates the vertices of the Circle.
   *
   * @private
   * @param {Number} radius The radius of the circle being constructed
   * @param {Integer} segments The number of segments composing the circle
   * @param {Number} centerX The central x-position of the circle
   * @param {Number} centerY The central y-position of the circle
   */
  generateCircleVertices(radius, segments, centerX, centerY) {
    let doublePi = 2 * Math.PI;
    for (let i=0; i <= segments+2; i++) {
      this.vertices[i] = new Vertex();
      this.vertices[i].points = [ centerX + (radius * Math.cos(i*doublePi/segments)) ,
                                  centerY + (radius * Math.sin(i*doublePi/segments)), 0.0  ];
    }
    this.color = [rgba[0], rgba[1], rgba[2], 1.0]
  }
}
