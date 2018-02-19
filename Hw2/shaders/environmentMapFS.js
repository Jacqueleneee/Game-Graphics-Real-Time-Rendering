var environmentMapFS = `    precision mediump float;

    uniform samplerCube envMap;

    varying vec3 vI, vWorldNormal;

    void main() {
        vec3 reflection = reflect( vI, vWorldNormal );
        vec4 envColor = textureCube( envMap, vec3( -reflection.x, reflection.yz ) );
        gl_FragColor = vec4(envColor);
    }`;