var waterFS = `precision mediump float;
	
      varying float noiseVal;
      varying float noiseVal2;


      void main()	{

        vec3 color = vec3( 1.0 * ( 1.0 - (3.0 * noiseVal) ), 0.0, 1.0 );
        vec3 color2 = vec3( 0.0, 0.0, (noiseVal2*5.0) );
  
        gl_FragColor = vec4( color.r, color2.g, 1.0, 1.0 );        

			}`;