import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';


const render_place = document.querySelector('.canvas_place');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(3, render_place.clientWidth / render_place.clientHeight, 10, 1300);
camera.position.set(100, 100, 500);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(render_place.clientWidth, render_place.clientHeight);
renderer.setClearColor(0x141414, 1);

const loader = new GLTFLoader();
let object;


// Under Light
// const directionalLight5 = new THREE.DirectionalLight(0xffffff, 1);

// directionalLight5.position.set(0, 300, 200);

const ambientLight = new THREE.AmbientLight( 0x404040, 2 ); // soft white light
scene.add( ambientLight );


// const directionalLightHelper5 = new THREE.DirectionalLightHelper(directionalLight5);

// scene.add(directionalLight5);

// scene.add(directionalLightHelper5);

const pointLight = new THREE.PointLight( 0x404040, 15, 100 );
pointLight.position.set( 0, 50, 0 );
scene.add( pointLight );


// Load a glTF resource
loader.load('3D_model/3/scene.gltf', function (gltf) {
    object = gltf.scene;
    object.position.set(-10, -5, 20)
    scene.add(object);

    // Set up orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0;

},
);
renderer.setSize(render_place.clientWidth, render_place.clientHeight);
render_place.appendChild(renderer.domElement);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
