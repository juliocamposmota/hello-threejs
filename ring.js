import * as THREE from "three";

const geometry = new THREE.RingGeometry(0.5, 0.8, 12);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

export const ring = new THREE.Mesh(geometry, material);
