var texFS = `	precision mediump float;

	uniform sampler2D tex;
	varying vec2 vUV;

      	void main() {

		vec4 c = texture2D(tex, vUV);
        	//gl_FragColor = vec4(vUV.xy, 0.0, 1.0);
        	gl_FragColor = vec4(c.rgb, 1.0);
	}`;