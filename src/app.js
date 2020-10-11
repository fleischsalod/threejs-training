var scene = new THREE.Scene();
scene.background = new THREE.Color( 0x666666 );
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var pivot = new THREE.Group();
var bigCube = new THREE.Mesh(new THREE.BoxGeometry(3.199,3.199,3.199), new THREE.MeshBasicMaterial({color: 0x000000}))
scene.add( pivot );
pivot.add( bigCube );

var cubeGeometry = new THREE.BoxGeometry();
var cubeMaterial = new THREE.MeshBasicMaterial({vertexColors: THREE.FaceColors});
cubeGeometry.faces[0].color.setHex(0x00ff00);
cubeGeometry.faces[1].color.setHex(0x00ff00);
cubeGeometry.faces[2].color.setHex(0x0000ff);
cubeGeometry.faces[3].color.setHex(0x0000ff);
cubeGeometry.faces[4].color.setHex(0xff0000);
cubeGeometry.faces[5].color.setHex(0xff0000);
cubeGeometry.faces[6].color.setHex(0xffa500);
cubeGeometry.faces[7].color.setHex(0xffa500);
cubeGeometry.faces[10].color.setHex(0xffff00);
cubeGeometry.faces[11].color.setHex(0xffff00);

function createCube(x, y, z) {
    cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
    cube.position.x = x;
    cube.position.y = y;
    cube.position.z = z;
    return cube;
}

for (let z = -1.1; z <= 1.1; z+=1.1) {
    for (let y = -1.1; y <= 1.1; y+=1.1) {
        for (let x = -1.1; x <= 1.1; x+=1.1) {
            var cube = createCube(x, y, z);
            pivot.add(cube);
        }
    }
}

camera.position.set( 0, 0, 5 );
camera.lookAt( 0, 0, 0 );

var animate = function () {
    requestAnimationFrame( animate );
    pivot.rotation.x += 0.01;
    pivot.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();
//renderer.render(scene, camera);