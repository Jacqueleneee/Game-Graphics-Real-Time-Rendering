

/**************************
 * Responsible for initializing buttons, sliders, radio buttons, etc. present
 * within your HTML document.
 **************************/
function initEventHandelers() {
  // Clear Button
  document.getElementById("clear-btn").onclick = function () { clearCanvas() };
  // Click the canvas (down, move, up)
  canvas.addEventListener('mousedown', function(ev) {displayPoint(ev, 'down')});
  canvas.addEventListener('mouseup', function(ev) {displayPoint(ev, 'up')});
  canvas.addEventListener('mousemove', function(ev) {displayPoint(ev, 'move')});
  // Check Size Slider
  document.getElementById("size-btn").onchange = function() { changePointSize(this.value) };
  // Check Color Sliders
  document.getElementById("red-btn").onchange = function() { changePointColor(this.value, 0)};
  document.getElementById("green-btn").onchange = function() { changePointColor(this.value, 1)};
  document.getElementById("blue-btn").onchange = function() { changePointColor(this.value, 2 )};
  // Shape Buttons & Slider
  document.getElementById("squares-btn").onclick = function() { point_shape=0 };
  document.getElementById("triangles-btn").onclick = function() { point_shape=1 };
  document.getElementById("circles-btn").onclick = function() { point_shape=2 };
  document.getElementById("segment-btn").onchange = function() { segments = this.value};
  // Animated Shape Buttons
  document.getElementById("squares-spin-btn").onclick = function() { point_shape=3 };
  document.getElementById("triangles-pulse-btn").onclick = function() { point_shape=4 };
  document.getElementById("circles-random-btn").onclick = function() { point_shape=5 };
  document.getElementById("cube-tilt-btn").onclick = function() { point_shape=6 }; 
  // Upload OBJ File
  document.getElementById("obj-btn").onclick = function() { 
        let readFile = new FileReader();
    let objFile = document.getElementById('obj-file').files[0];
     readFile.readAsText(objFile);
    readFile.onloadend = function() {
      shape = new rotatingObject(readFile.result);
      console.log("Shape: " + shape);
      scene.addGeometry(shape);

   
    }
  }; 


}

/**************************
 * Decide if point should be displayed from mouse event
 **************************/
function displayPoint(ev, mouseEvent) {
  if (mouseEvent=='down') {
    flag = true;
    //Calculate mouse position
    changePointPosition(ev); 
    //Click point can be displayed
    click(ev);
  }
  if (mouseEvent == 'up') { flag=false;}
  if (mouseEvent == 'move') {
    if (flag) { //If mouse is moving AND mouse is held down
      //Calculate mouse position
      changePointPosition(ev);
      //Click point can be displayed
      click(ev);
    }
  }
}

/**************************
 * Calculate mouse position - after deciding if point should be displayed
 **************************/
function changePointPosition(ev) {
  x = ev.clientX; // x-coord of mouse pointer
  y = ev.clientY; //y-coord of mouse pointer
  let rect = ev.target.getBoundingClientRect(); //Gets position of canvas
  x = ( (x-rect.left) - canvas.width/2 ) / (canvas.width/2); // (transformation of orig of canvas-->webgl canvas)
  y = ( canvas.height/2 - (y-rect.top) ) / (canvas.height/2);
  //Send coord-information to HTML
  sendTextToHTML('coord-descrip', x, y);
}


/**************************
 * Handles click features (
**************************/
function click(ev) {
  //Create shape selected
  let shape;
  switch(point_shape) {
    case 0:
     shape = new Square(point_size/100, x, y);
      break;
    case 1: 
      shape = new Triangle(point_size/100, x, y);
      break;
    case 2:
      shape = new Circle(point_size/100, segments, x, y);
      break;
    case 3:
      shape = new SpinningSquare(point_size/100, x, y);
      break;
    case 4:
      shape = new FluctuatingTriangle(point_size/100, x, y);
      break;
    case 5:
      shape = new RandomCircle(point_size/100, segments, x, y)
      break;
    case 6:
      shape = new TiltedCube(point_size/100, x, y);
      break;
    case 7:
      let readFile = new FileReader();
      let objFile = document.getElementById('obj-file').files[0];
      readFile.readAsText(objFile);
      readFile.onloadend = function() {
      shape = new rotatingObject(readFile.result);
      console.log("In case: " + shape);
      }
      break;

  }
  //Add Shape to scene
  scene.addGeometry(shape);
  //Render the scene with all shapes

  //scene.render();
}

/**************************
 * Renders the scene on the HTML canvas - (get rendering context for WebGL)
 **************************/


/**************************
 * Clears the HTML canvas.
 **************************/
function clearCanvas() {
  //Clear data from point array
  scene.clearGeometry();
}


/**************************
 * Changes the size of the points drawn on HTML canvas.
 **************************/
function changePointSize(size) {
  point_size = size;
}

/**************************
 * Changes the color of the points drawn on HTML canvas.
 *
 * @param {float} color Color value from 0.0 to 1.0.
 **************************/
function changePointColor(color, pos) {
  rgba[pos] = color;  
}





