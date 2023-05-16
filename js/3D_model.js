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

// left right light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
const directionalLight3 = new THREE.DirectionalLight(0xffffff, 1);
const directionalLight4 = new THREE.DirectionalLight(0xffffff, 0.3);

// Under Light
const directionalLight5 = new THREE.DirectionalLight(0xffffff, 0.5);
const directionalLight6 = new THREE.DirectionalLight(0xffffff, 0.5);


directionalLight.position.set(600, 300, 1000);
directionalLight2.position.set(-600, 300, 1000);
directionalLight3.position.set(600, 300, -1000);
directionalLight4.position.set(-600, 300, -1000);

directionalLight5.position.set(0, 300, 200);
directionalLight6.position.set(0, 300, -200);


// const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight);
// const directionalLightHelper2 = new THREE.DirectionalLightHelper(directionalLight2);
// const directionalLightHelper3 = new THREE.DirectionalLightHelper(directionalLight3);
// const directionalLightHelper4 = new THREE.DirectionalLightHelper(directionalLight4);

// const directionalLightHelper5 = new THREE.DirectionalLightHelper(directionalLight5);
// const directionalLightHelper6 = new THREE.DirectionalLightHelper(directionalLight6);

scene.add(directionalLight);
scene.add(directionalLight2);
scene.add(directionalLight3);
scene.add(directionalLight4);

scene.add(directionalLight5);
scene.add(directionalLight6);


// scene.add(directionalLightHelper);
// scene.add(directionalLightHelper2);
// scene.add(directionalLightHelper3);
// scene.add(directionalLightHelper4);

// scene.add(directionalLightHelper5);
// scene.add(directionalLightHelper6);


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