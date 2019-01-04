/**
 * Specifies a WebGL scene.
 *
 * @author "Jacquelene Pham"
 * @this {Scene}
 */
class Scene {
  /**
   * Constructor for Scene.
   *
   * @constructor
   */
  constructor(gl) { //(gl) , add clear buffer & clear color
    this.geometries = []; // Geometries being drawn on canvas
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  }

  /**
   * Adds the given geometry to the the scene.
   *
   * @param {Geometry} geometry Geometry being added to scene
   */
  addGeometry(geometry) {
    this.geometries.push(geometry);
  }

  /**
   * Clears all the geometry within the scene.
   */
  clearGeometry() {
    this.geometries = [];
    this.render();

  }

  /**
   * Updates the animation for each geometry in geometries.
   */
  updateAnimation() {
    let len = this.geometries.length;
    for (let i=0; i<len; i++) {
      this.geometries[i].updateAnimation();

    }

    // Recomendations: No rendering should be done here. Your Geometry objects
    // in this.geometries should update their animations themselves through
    // their own .updateAnimation() methods.
  }

  /**
   * Renders all the Geometry within the scene.
   */
  render() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    let len = this.geometries.length;
   // console.log("Length " + len);
    //Iterate through all geometries in the scene and render them
    for (let i=0; i<len; i++) {
      this.geometries[i].render();
    }
  }
}
