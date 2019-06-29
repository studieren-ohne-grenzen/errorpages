export default `
uniform sampler2D texturesBird[ 9 ];

varying vec2 vUV;
varying mat2 vUVRot;
varying float vFrameId;
varying vec2 v_reference;

uniform vec3 color1;
uniform vec3 color2;
uniform vec3 color3;

void main() {
    vec2 uv = 0.9 * vec2( 1.0 / 11.0 ) * ( gl_PointCoord - 0.5 ) * vUVRot + vUV;
    int id = int( vFrameId );
    vec4 col;
    if ( id == 0 ) { col = texture2D( texturesBird[ 0 ], uv ); }
    else if ( id == 1 ) { col = texture2D( texturesBird[ 1 ], uv ); }
    else if ( id == 2 ) { col = texture2D( texturesBird[ 2 ], uv ); }
    else if ( id == 3 ) { col = texture2D( texturesBird[ 3 ], uv ); }
    else if ( id == 4 ) { col = texture2D( texturesBird[ 4 ], uv ); }
    else if ( id == 5 ) { col = texture2D( texturesBird[ 5 ], uv ); }
    else if ( id == 6 ) { col = texture2D( texturesBird[ 6 ], uv ); }
    else if ( id == 7 ) { col = texture2D( texturesBird[ 7 ], uv ); }
    else if ( id == 8 ) { col = texture2D( texturesBird[ 8 ], uv ); }

    if (int(v_reference.x / 0.3) == 0) {
      gl_FragColor = vec4(color1, col.a);
    }else if (int(v_reference.x / 0.3) == 1) {
        gl_FragColor = vec4(color2, col.a);
    }else if (int(v_reference.x / 0.3) == 2) {
        gl_FragColor = vec4(color3, col.a);
    }
}
`;
