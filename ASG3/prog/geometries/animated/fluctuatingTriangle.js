/**
 * Specifies a triangle which fluctuates in size (grows and shrinks).
 *
 * @author "Your Name"
 * @this {FluctuatingTriangle}
 */
class FluctuatingTriangle extends Triangle {
  /**
   * Constructor for FluctuatingTriangle.
   *
   * @constructor
   * @param {Number} size The size of the triangle drawn
   * @param {Number} centerX The center x-position of the triangle
   * @param {Number} centerY The center y-position of the triangle
   */
  constructor(size, centerX, centerY) {
    super(size, centerX, centerY);
    this.centerX = centerX;
    this.centerY = centerY;
    this.startTime = Date.now();

    // Recomendations: You're going to need a few variables to keep track of
    // information relevant to your animation. For example, to what amount your
    // triangle is currently scaled at.
  }

  /**
   * Updates the animation for FluctuatingTriangle. Grows and shrinks the
   * triangle in size.
   */
  updateAnimation() {
    let translateToOrigin = new Matrix4();
    let scaleTriangle = new Matrix4();
    let translateBack = new Matrix4();
    let delta = (Date.now() - this.startTime) / 1000
    let scaleSize= .5 * Math.sin(delta) + 1.5;

    this.scaleSize =  this.scaleSize - Math.sin(100);

    translateToOrigin.setTranslate(-this.centerX, -this.centerY, 0.0);
    scaleTriangle.scale(scaleSize,  scaleSize, 0.0);
    translateBack.setTranslate(this.centerX, this.centerY, 0.0);

    this.modelMatrix = scaleTriangle.multiply(translateToOrigin);
    this.modelMatrix = translateBack.multiply(this.modelMatrix);


    // Recomendations: How much the triangle grows an shrinks is up to you.
    // Might want to shrink it to x.50 at it's smallest point and x1.50 at it's
    // largest point.
    //
    // Keep in mind that no rendering should be done here. updateAnimation()'s
    // purpose is to update the geometry's modelMatrix and any other variables
    // related to animation. It should be the case that after I call
    // updateAnimation() I should be able to call render() elsewhere and have my
    // geometry complete a frame of animation.
  }
}
