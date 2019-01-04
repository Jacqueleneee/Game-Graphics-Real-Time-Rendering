// Basic Vertex Shader that receives position and size for each vertex (point).
var ASSIGN1_VSHADER =
  'attribute vec4 a_Position;\n' + //Attribute variable prepared within shade
  'attribute float a_PointSize;\n' + 
  'uniform mat4 u_ModelMatrix;\n' + 
  'void main() {\n' +
  '  gl_Position = u_ModelMatrix * a_Position;\n' + // Finished prep for shader to get data from outside for varying position/size
  '  gl_PointSize = a_PointSize;\n' +                    // Set the point size
  '}\n';

// Basic Fragment Shader that receives a single one color (point).
var ASSIGN1_FSHADER =
  'precision mediump float;\n' + //Specifies range and precision of variables
  'uniform vec4 u_FragColor;\n' + 
  'void main() {\n' +
  '  gl_FragColor = u_FragColor;\n' + // Set the point color to whatever is passed from JS
  '}\n';
