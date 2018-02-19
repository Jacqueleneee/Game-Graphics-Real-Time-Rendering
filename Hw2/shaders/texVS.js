	var texVS = `//Three.js gives us these automatically when a perspective camera is bound to the renderer
	uniform mat4 modelMatrix;
	uniform mat4 viewMatrix;
      	uniform mat4 projectionMatrix;

     	attribute vec3 position;
	attribute vec2 uv;

	varying vec2 vUV;

	void main() {
        	vec4 position = viewMatrix * modelMatrix * vec4(position, 1.0);
	   	vUV = uv;
        	gl_Position = projectionMatrix * position; 
     	 }` ;