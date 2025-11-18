import * as THREE from 'three';
import { makeLabelCanvas } from './make-canvas-title';

const canvas = makeLabelCanvas(32, 'Hello ThreeJS (with canvas texture)');

const texture = new THREE.CanvasTexture(canvas);
texture.minFilter = THREE.LinearFilter;
texture.wrapS = THREE.ClampToEdgeWrapping;
texture.wrapT = THREE.ClampToEdgeWrapping;

const material = new THREE.MeshBasicMaterial({
  map: texture,
  side: THREE.DoubleSide,
  transparent: true,
});

const geometry = new THREE.PlaneGeometry(canvas.width / 100, canvas.height / 100);
const titleCanvas = new THREE.Mesh(geometry, material);

export { titleCanvas };
