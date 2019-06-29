export default `
attribute vec2 reference;
attribute float frameId;

uniform sampler2D texturePosition;
uniform sampler2D textureVelocity;

varying vec2 vUV;
varying mat2 vUVRot;
varying float vFrameId;
varying vec2 v_reference;

uniform float time;

void main() {
    v_reference = reference;

    vec3 pos = texture2D( texturePosition, reference ).xyz;
    vec3 vel = normalize( texture2D( textureVelocity, reference ).xyz );

    vec4 mvPos = modelViewMatrix * vec4( pos, 1.0 );

    gl_PointSize = 20.0 * ( 800.0 / -mvPos.z );

    vUV = vec2( vel.x * 0.5 + 0.5, vel.y * 0.5 + 0.5 );
    vUV = floor( vUV * 11.0 ) / 11.0 + 0.5 / 11.0;
  // TODO: better movement later
    vUVRot = mat2( 1, 0, 0, 1 );

    vFrameId = floor( mod( frameId + time * 0.5, 9.0 ) );
    gl_Position = projectionMatrix * mvPos;
}
`;
