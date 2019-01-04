/**
 * Specifies a tilted cube which rotates.
 *
 * @author "Your Name"
 * @this {TiltedCube}
 */
class TiltedCube extends Geometry {
  /**
   * Constructor for TiltedCube.
   *
   * @constructor
   * @returns {TiltedCube} Geometric object created
   */
  constructor(size, centerX, centerY) {
    super();
    this.centerX = centerX;
    this.centerY = centerY;
    this.rotateAngle = 0.0;
    this.generateCubeVertices(size, centerX, centerY);

    // Recommendations: Might want to tilt your cube at 30 degrees relative to
    // the z-axis here. Pretty good tilt that lets us see that it's a cube.
  }

  /**
   * Generates the vertices of TiltedCube. Just a regular cube.
   *
   * @private
   */
  generateCubeVertices(size, centerX, centerY) {
    
    for (let i=0; i < 36; i++) {
      this.vertices[i] = new Vertex(); //Create 6 vertices each of (x,y) vertex
    }


    this.vertices[0].points = [centerX - size, centerY + size, size ];
    this.vertices[1].points = [centerX - size, centerY - size, size];
    this.vertices[2].points = [centerX + size, centerY - size, size];
    this.vertices[3].points = [centerX + size, centerY + size, size];
    this.vertices[4].points = [centerX - size, centerY - size, size];
    this.vertices[5].points = [centerX + size, centerY + size, size];

    this.vertices[6].points = [centerX - size, centerY - size, -size];
    this.vertices[7].points = [centerX - size, centerY + size, -size];
    this.vertices[8].points = [centerX + size, centerY + size, -size];
    this.vertices[9].points = [centerX + size, centerY - size, -size];
    this.vertices[10].points = [centerX - size, centerY - size, -size];
    this.vertices[11].points = [centerX + size, centerY + size, -size];

    this.vertices[12].points = [centerX - size, centerY - size, -size];
    this.vertices[13].points = [centerX - size, centerY + size, -size];
    this.vertices[14].points = [centerX - size, centerY + size, size];
    this.vertices[15].points = [centerX - size, centerY - size, -size];
    this.vertices[16].points = [centerX - size, centerY - size, size];
    this.vertices[17].points = [centerX - size, centerY + size, size];

    this.vertices[18].points = [centerX + size, centerY - size, -size];
    this.vertices[19].points = [centerX + size, centerY + size, -size];
    this.vertices[20].points = [centerX + size, centerY + size, size];
    this.vertices[21].points = [centerX + size, centerY - size, -size];
    this.vertices[22].points = [centerX + size, centerY - size, size];
    this.vertices[23].points = [centerX + size, centerY + size, size];

    this.vertices[24].points = [centerX - size, centerY - size, -size];
    this.vertices[25].points = [centerX + size, centerY - size, -size];
    this.vertices[26].points = [centerX + size, centerY - size, size];
    this.vertices[27].points = [centerX - size, centerY - size, -size];
    this.vertices[28].points = [centerX - size, centerY - size, size];
    this.vertices[29].points = [centerX + size, centerY - size, size];

    this.vertices[30].points = [centerX - size, centerY + size, -size];
    this.vertices[31].points = [centerX + size, centerY + size, -size];
    this.vertices[32].points = [centerX + size, centerY + size, size];
    this.vertices[33].points = [centerX - size, centerY + size, -size];
    this.vertices[34].points = [centerX - size, centerY + size, size];
    this.vertices[35].points = [centerX + size, centerY + size, size];

     this.color = [rgba[0], rgba[1], rgba[2], 1.0];

    // Recommendations: Might want to generate your cube vertices so that their
    // x-y-z values are combinations of 1.0 and -1.0. Allows you to scale the
    // the cube to your liking better.
  }

  /**
   * Updates the animation of the TiltedCube. Should make it rotate.
   */
  updateAnimation() {
    
    let translateToOrigin = new Matrix4();
    let rotateAboutOrigin = new Matrix4();
    let translateBack = new Matrix4();

    this.rotateAngle =  (this.rotateAngle + 5) % 365;

    translateToOrigin.setTranslate(-this.centerX, -this.centerY, 0.0); //translate back to origin
    rotateAboutOrigin.setRotate(this.rotateAngle, 30.0, 30.0, 1.0); //spin about z-axis
    translateBack.setTranslate(this.centerX, this.centerY, 0.0);  //translate back to mouse point

    this.modelMatrix = rotateAboutOrigin.multiply(translateToOrigin); 
    this.modelMatrix = translateBack.multiply(this.modelMatrix);

    // Recommendations: Do not simply apply a rotation matrix. Doing so will
    // cause your cube to spin in a circle around the axis you've chosen.
    //
    // Keep in mind that no rendering should be done here. updateAnimation()'s
    // purpose is to update the geometry's modelMatrix and any other variables
    // related to animation. It should be the case that after I call
    // updateAnimation() I should be able to call render() elsewhere and have my
    // geometry complete a frame of animation.
  }
}
