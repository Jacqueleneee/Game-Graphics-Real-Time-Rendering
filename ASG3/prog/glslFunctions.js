/**
 * Sends data to a uniform variable expecting a matrix value.
 *
 * @private
 * @param {Array} val Value being sent to uniform variable
 * @param {String} uniformName Name of the uniform variable recieving data
 */
 function sendUniformMatToGLSL(val, uniformName) {
  // Get storage location of uniform mat4 form GLSL (GLSL --> JS)
  let u_variable = gl.getUniformLocation(gl.program, uniformName); //(progObj, varName)
  if (u_variable < 0) {
    console.log('Fail to get the storage location of ' + uniformName);
    return;
  }
  gl.uniformMatrix4fv(u_variable, false, val);
}

/**
 * Sends a float value to the specified uniform variable within GLSL shaders.
 * Prints an error message if unsuccessful.
 *
 * @param {float} val The float value being passed to uniform variable
 * @param {String} uniformName The name of the uniform variable
 JAVASCRIPT CODE TO GLSL
 */ 
function sendUniformFloatToGLSL(val, uniformName) {
  // Get storage location of uniform float from GLSL (GLSL --> JS)
  let u_variable = gl.getUniformLocation(gl.program, uniformName);
  if (u_variable < 0) {
    console.log('Fail to get the storage location of ' + uniformName);
    return;
  }
  gl.uniform1f(u_variable, val);
}

/**
 * Sends an JavaSript array (vector) to the specified uniform variable within
 * GLSL shaders. Array can be of length 2-4.
 *
 * @param {Array} val Array (vector) being passed to uniform variable
 * @param {String} uniformName The name of the uniform variable
 */
function sendUniformVec4ToGLSL(val, uniformName) {
  // Get storage location of uniform vec4 form GLSL (GLSL --> JS)
  let u_variable = gl.getUniformLocation(gl.program, uniformName); //(progObj, varName)
  if (u_variable < 0) {
    console.log('Fail to get the storage location of ' + uniformName);
    return;
  }
  // Pass val to atribute variable
  switch(val.length) {
    case 2:
      gl.uniform2fv(u_variable, val) ;
      break ;
    case 3:
      gl.uniform3fv(u_variable, val) ;
      break ;
    case 4:
      gl.uniform4fv(u_variable, val) ;
      break ;
    default:
      console.log('ERROR: Array is not length 2-4');
      return;

  }
  
}

/**
 * Sends data to an attribute variable using a buffer.
 *
 * @private
 * @param {Float32Array} data Data being sent to attribute variable
 * @param {Number} dataCount The amount of data to pass per vertex
 * @param {String} attribName The name of the attribute variable
 */
function sendAttributeBufferToGLSL(data, dataCount, attributeName) {
  // 1. Create a buffer object
  let vertexBuffer = gl.createBuffer();
  if (!vertexBuffer) {
    console.log('Failed to create a buffer object');
    return -1;
  }

  // 2. Bind the buffer object to a target
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  //Write data into the buffer object
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
  // Get storage location of attribute float from GLSL (GLSL --> JS)
  let a_variable = gl.getAttribLocation(gl.program, attributeName);
  if (a_variable < 0) {
    console.log('Fail to get the storage location of ' + attributeName);
    return -1;
  }
  //Assign the buffer object to attribute variable
  gl.vertexAttribPointer(a_variable, 3, gl.FLOAT, false, 0, 0); //2 components for vertex (x,y)

  // 3. Enable the buffer for use
  gl.enableVertexAttribArray(a_variable);
  return dataCount;
}

/**
 * Draws the current buffer loaded. Buffer was loaded by sendAttributeBufferToGLSL.
 *
 * @param {Integer} pointCount The amount of vertices being drawn from the buffer.
 */
function tellGLSLToDrawCurrentBuffer(pointCount) {
  //Use Triangles to draw every shape (Fan because dont know how to make circle with TRIANGLE)
   gl.drawArrays(gl.TRIANGLE_FAN, 0, pointCount);

}




