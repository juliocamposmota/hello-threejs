import * as THREE from 'three';
import { ring } from './ring';
import { titleCanvas } from './title-canvas';
import { titleCSS2D, titleRenderer } from './title-css2d';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, (window.innerWidth / window.innerHeight), 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.domElement.style.width = "100vw";
renderer.domElement.style.height = "100vh";

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube= new THREE.Mesh(geometry, material);

scene.add(cube);
scene.add(ring);
scene.add(titleCanvas);
ring.add(titleCSS2D);

camera.position.z = 5;
cube.position.x = -1;
ring.position.x = 1;
titleCanvas.position.set(-1.5, 2.6, 0.3);

function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  ring.rotation.x += 0.01;
  ring.rotation.y += 0.01;

  renderer.render(scene, camera);
  titleRenderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
