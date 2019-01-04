/**
 * Specifies a circle which moves randomly.
 *
 * @author "Your Name"
 * @this {RandomCircle}
 */
class RandomCircle extends Circle {
  /**
   * Constructor for RandomCircle.
   *
   * @constructor
   * @param {Number} radius The radius of the random circle being constructed
   * @param {Integer} segements The number of segments composing the circle
   * @param {Number} centerX The x-position of the circle being constructed
   * @param {Number} centerY The y-position of the circle being constructed
   * @returns {RandomCircle} RandomCircle object created
   */
  constructor(radius, segments, centerX, centerY) {
    super(radius,segments, centerX, centerY);
    // this.centerX = centerX;
    // this.centerY = centerY;
    this.randomX = Math.sin(Math.random() * 2 * Math.PI) * 0.01;
    this.randomY = Math.cos(Math.random() * 2 * Math.PI) * 0.01;
    this.frameCount = 0;

    // Recomendations: You're going to need a few variables to keep track of
    // information relevant to your animation. For example, a circle is going
    // to need a variable to keep track of the direction the circle is moving.
  }

  /**
   * Updates random circle's animation. Changes modelMatrix into a translation
   * matrix translating into a random direction.
   */
  updateAnimation() {
    if (this.frameCount == 60) {
      this.frameCount = 0;
      let delta = Math.random() * 2 * Math.PI;
      this.randomX = Math.sin(delta) * 0.01;
      this.randomY = Math.cos(delta) * 0.01;
    } else {
      this.frameCount++;
    }

    //Keep circle within x-boundaries
    if (this.x > 1-this.size || this.x < -1+this.size) this.randomX = -this.randomX;
   // Keep circle within y-boundaries
    if (this.y > 1-this.size || this.y < -1+this.size) this.randomY = -this.randomY;

    this.x += this.randomX;
    this.y += this.randomY;

    this.modelMatrix.setTranslate(this.x, this.y, 0.0);

    // Recomendations: Refer to README.txt for more detalied recommendations
    //
    // Keep in mind that no rendering should be done here. updateAnimation()'s
    // purpose is to update the geometry's modelMatrix and any other variables
    // related to animation. It should be the case that after I call
    // updateAnimation() I should be able to call render() elsewhere and have my
    // geometry complete a frame of animation.
  }

}
