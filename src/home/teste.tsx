import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Configuração da cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Controles para movimentação da câmera
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 2, 5);
controls.update();

// Luz ambiente e direcional
const light = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(light);
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 10, 5);
scene.add(dirLight);

// Criando o cachorro com formas geométricas
const dog = new THREE.Group();

// Corpo
const bodyGeometry = new THREE.BoxGeometry(2, 1, 1);
const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x8B5A2B });
const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
dog.add(body);

// Cabeça
const headGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
const head = new THREE.Mesh(headGeometry, bodyMaterial);
head.position.set(1.2, 0.4, 0);
dog.add(head);

// Olhos
const eyeGeometry = new THREE.SphereGeometry(0.1);
const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
leftEye.position.set(1.4, 0.6, 0.3);
rightEye.position.set(1.4, 0.6, -0.3);
dog.add(leftEye, rightEye);

// Focinho
const noseGeometry = new THREE.SphereGeometry(0.15);
const noseMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
const nose = new THREE.Mesh(noseGeometry, noseMaterial);
nose.position.set(1.5, 0.3, 0);
dog.add(nose);

// Pernas
const legGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.8);
const legMaterial = new THREE.MeshStandardMaterial({ color: 0x8B5A2B });
const legs = [];
for (let i = 0; i < 4; i++) {
    legs[i] = new THREE.Mesh(legGeometry, legMaterial);
    legs[i].position.set(i < 2 ? 0.7 : -0.7, -0.5, i % 2 === 0 ? 0.4 : -0.4);
    dog.add(legs[i]);
}

// Cauda
const tailGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1);
const tail = new THREE.Mesh(tailGeometry, bodyMaterial);
tail.position.set(-1, 0.3, 0);
tail.rotation.z = Math.PI / 4;
dog.add(tail);

scene.add(dog);

// Animação do cachorro pulando
let clock = new THREE.Clock();
function animate() {
    requestAnimationFrame(animate);
    
    let time = clock.getElapsedTime();
    dog.position.y = Math.abs(Math.sin(time * 2)) * 0.5; // Pula suavemente
    tail.rotation.x = Math.sin(time * 3) * 0.2; // Mexe o rabo
    
    renderer.render(scene, camera);
}

animate();
export default Teste ();