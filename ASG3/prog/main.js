//**** Global variables ****
//Main
let canvas;
let gl;
let scene;
//Event Handeler
let flag; //Checks for a mouse drag event
let g_points; //The array for mouse click positions
let g_colors; //The array to store the color of each point
let g_sizes; //The array to store the sizes of each point
let point_size; //default point size
let rgba; 
let point_shape;
let segments; //number of segments for circle
/**
 * Function called when the webpage loads.
 */


function main() {

  //********************** CANVAS **********************
  //Retrieve <canvas> element from driver.html
	canvas = document.getElementById('my-canvas');
  if(!canvas) {
    console.log('Failed to retrieve the <canvas> element') ;
    return ;
  }
	//Get rendering context for WebGL
  gl = getWebGLContext(canvas);
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL');
    return;
  }
  scene = new Scene(gl);
  scene.render();
  //********************** SHADERS **********************
	//Initialize shaders
	if ( !initShaders(gl, ASSIGN1_VSHADER, ASSIGN1_FSHADER)) {
		console.log('Failed to initialize shaders.');
		return;
	}

  //Color for clearing canvas
  gl.clearColor(0.0, 0.0, 0.0, 1.0);

   //Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);

  //********************** VARIABLES **********************

  let x;
  let y;
  flag = false; //flag for drag event
  point_shape = 1; //0-square   1-triangle    2-circle
  segments = 5; //default circle draw
  g_points = []; //The array for mouse click positions
  g_colors = []; //The array to store the color of each point
  g_sizes = []; //The array to store the sizes of each point
  point_size = 10; //default point size
  rgba = [1.0, 0.0, 0.0, 1.0]; //default red color


  //Initialize Event Handelers
  initEventHandelers();

  tick();


}
