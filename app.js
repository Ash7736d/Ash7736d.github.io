// Your 3D logic using Three.js goes here

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// Create a plane with a black and white material
const geometry = new THREE.PlaneGeometry(10, 10, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide }); // white color
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

// Set background color to black
renderer.setClearColor(0x000000);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

animate();
