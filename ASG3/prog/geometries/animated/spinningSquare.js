/**
 * Specifies a square which spins realtive to its center.
 *
 * @author "Your Name"
 * @this {SpinningSquare}
 */
class SpinningSquare extends Square {
  /**
   * Constructor for SpinningSquare.
   *
   * @constructor
   * @param {Number} size The size of the square drawn
   * @param {Number} centerX The center x-position of the square
   * @param {Number} centerY The center y-position of the square
   * @returns {SpinningSquare} SpinningSquare object created
   */
  constructor(size, centerX, centerY) {
    super(size, centerX, centerY);
    this.centerX = centerX;
    this.centerY = centerY;
    this.rotateAngle = 0.0;

    // Recomendations: You're going to need a few variables to keep track of
    // information relevant to your animation. For example, a square is going
    // to need a variable to keep track of its centerX and centerY position.
  }

  /**
   * Updates the animation for spinning square. Rotates the square by spinAngle
   * relative to its center.
   */
  updateAnimation() {
    console.log("x: " + this.centerX + "     y: " + this.centerY);
    let translateToOrigin = new Matrix4();
    let rotateAboutOrigin = new Matrix4();
    let translateBack = new Matrix4();

    this.rotateAngle =  (this.rotateAngle + 5) % 365;

    translateToOrigin.setTranslate(-this.centerX, -this.centerY, 0.0); //translate back to origin
    rotateAboutOrigin.setRotate(this.rotateAngle, 0.0, 0.0, 1.0); //spin about z-axis
    translateBack.setTranslate(this.centerX, this.centerY, 0.0);  //translate back to mouse point

    this.modelMatrix = rotateAboutOrigin.multiply(translateToOrigin); 
    this.modelMatrix = translateBack.multiply(this.modelMatrix);
    //
    // Keep in mind that no rendering should be done here. updateAnimation()'s
    // purpose is to update the geometry's modelMatrix and any other variables
    // related to animation. It should be the case that after I call
    // updateAnimation() I should be able to call render() elsewhere and have my
    // geometry complete a frame of animation.
  }
}
