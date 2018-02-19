var skyboxFS = `precision mediump float;
		
		uniform samplerCube tCube;
		varying vec3 vWorldPosition;

		void main() {
			//vec3 color = vec3( 1.0 * ( 1.0 - (3.0 * noiseVal) ), 0.0, 0.0 );

			gl_FragColor = textureCube( tCube, vec3(  vWorldPosition ) );
		}`;