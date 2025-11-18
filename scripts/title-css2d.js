import { CSS2DObject, CSS2DRenderer } from "three/examples/jsm/Addons.js";

const titleRenderer = new CSS2DRenderer();

titleRenderer.setSize(window.innerWidth, window.innerHeight);
titleRenderer.domElement.style.position = 'absolute';
titleRenderer.domElement.style.top = '0px';
titleRenderer.domElement.style.width = "100vw";
titleRenderer.domElement.style.height = "100vh";
document.body.appendChild(titleRenderer.domElement);

const titleH1 = document.createElement('h1');
titleH1.textContent = 'Hello ThreeJS ';
titleH1.style.color = '#dddddd';

const titleSpan = document.createElement('span');
titleSpan.textContent = '(with css2drenderer)';
titleSpan.style.fontSize = '0.6em';
titleSpan.style.color = '#bbbbbb';

titleH1.appendChild(titleSpan);

const titleCSS2D = new CSS2DObject(titleH1);
titleCSS2D.position.set(0, 1, 0);

export { titleRenderer, titleCSS2D };
