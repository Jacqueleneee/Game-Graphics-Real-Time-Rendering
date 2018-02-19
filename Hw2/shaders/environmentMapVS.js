var environmentMapVS = `uniform mat4 modelMatrix;
	uniform mat4 viewMatrix;
      	uniform mat4 projectionMatrix;

	uniform vec3 cameraPosition;
	
     	attribute vec3 position; 
     	attribute vec3 normal; 

	varying vec3 vI;
	varying vec3 vWorldNormal;

	void main() {
  		vec4 mvPosition = viewMatrix * modelMatrix * vec4( position, 1.0 );
  		vec4 worldPosition = modelMatrix * vec4( position, 1.0 );

  		vWorldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );

  		vI = worldPosition.xyz - cameraPosition;

  		gl_Position = projectionMatrix * mvPosition;
	}`;