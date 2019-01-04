/**
 * Specifies a geometric object.
 *
 * @author "Your Name Here"
 * @this {Geometry}
 */
class Geometry {
  /**
   * Constructor for Geometry.
   *
   * @constructor
   */
  constructor(centerX, centerY) {
    this.vertices = []; // Vertices array holds V ertex Object points (x,y,z) --> vertex.js
    this.color = [];  // The color of your geometric object - holds vec4[i] = [r,g,b,a]
    this.modelMatrix = new Matrix4(); // Model matrix applied to geometric object
    this.modelMatrix.setIdentity();
    this.centerX = centerX;
    this.centerY = centerY;
  }

  /**
   * Renders this Geometry within your webGL scene.
   */
  render() {
    //Point color
    let g_color = [this.color[0], this.color[1], this.color[2], 1.0];
    let len = this.vertices.length;
    let point_set = [];
    let xy;
    for (let i=0; i < len; i++) {
      xy = this.vertices[i].points;
      point_set.push(xy); //point_set = [ [x1,y1], [x2,y2], [x3,y3] ]
    }
    let g_points = point_set.flat(); //subarray are now concatenated
    g_points= new Float32Array(g_points);

    
    let bufferObj= sendAttributeBufferToGLSL(g_points, len, 'a_Position'); //concatenate sub-arrays into one
    if (bufferObj < 0){ //returns -1 if coudlnt buffer vertices
        console.log("Failed to create buffer for vertices");
        return;
    }
    sendUniformVec4ToGLSL(g_color, 'u_FragColor');
    sendUniformMatToGLSL(this.modelMatrix.elements, 'u_ModelMatrix');

    tellGLSLToDrawCurrentBuffer(len); 

    
    //Error Print Statements
    // console.log("g_color: " + g_color);
     //console.log("this.vertices[]: " + this.vertices);
    // console.log("this.vertices.point: " + this.vertices[1].points);
    // console.log("PointSet: " + point_set);
  
  }

  /**
   * Responsible for updating the geometry's modelMatrix for animation.
   * Does nothing for non-animating geometry.
   */
  updateAnimation() {
    return;

    // NOTE: This is just in place so you'll be able to call updateAnimation()
    // on geometry that don't animate. No need to change anything.
  }  
}
