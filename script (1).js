// === TYPEWRITER EFFECT ===
document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector("h1");
    if (title) {
        const text = title.textContent;
        title.textContent = "";
        let i = 0;

        function type() {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(type, 100); // speed
            }
        }
        type();
    }
});

// === GLITCH EFFECT ON HEADERS ===
function glitchText(element) {
    const original = element.textContent;
    let glitchInterval;

    element.addEventListener("touchstart", () => {
        glitchInterval = setInterval(() => {
            element.textContent = original
                .split("")
                .map(char => Math.random() > 0.8
                    ? String.fromCharCode(33 + Math.random() * 94)
                    : char)
                .join("");
        }, 80);
    });

    element.addEventListener("touchend", () => {
        clearInterval(glitchInterval);
        element.textContent = original;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll("h1, h2");
    headers.forEach(h => glitchText(h));
});

// === MATRIX BACKGROUND ===
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = -1;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const letters = "FSOCIETYISTHEBESTSOCIETYEUEJEGEVHH196$";
const fontSize = 14;
let columns, drops;

function initMatrix() {
    columns = canvas.width / fontSize;
    drops = Array.from({ length: columns }).fill(1);
}
initMatrix();

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#808080"; // blood red
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(drawMatrix, 50);


const messages = [
    "Hacking the system(never mess with FSOCIETY)...",
    "UNCOVERING truth...",
    "fsociety is ALWAYS watching.",
    "Knowledge is power."
];
setInterval(() => {
    const msg = messages[Math.floor(Math.random() * messages.length)];
    console.log("%c" + msg, "color:#808080; font-weight:bold; font-size:16px;");
}, 5000);


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("button, a").forEach(btn => {
        btn.addEventListener("touchstart", () => {
            if (navigator.vibrate) navigator.vibrate(100);
            btn.classList.add("shake");
            setTimeout(() => btn.classList.remove("shake"), 300);
        });
    });
});
const commands = [
    "BLACKHYDRA IS WATCHING",
    "UNCOVERING the TRUTH",
    "NIGGERS ARE GAY...",
    "access granted"
];

document.addEventListener("click", (e) => {
    const cmd = document.createElement("div");
    cmd.textContent = commands[Math.floor(Math.random() * commands.length)];
    cmd.style.position = "absolute";
    cmd.style.left = e.pageX + "px";
    cmd.style.top = e.pageY + "px";
    cmd.style.color = "#808080";
    cmd.style.fontFamily = "monospace";
    document.body.appendChild(cmd);

    setTimeout(() => cmd.remove(), 1500);
});
document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    const main = document.getElementById("main-content");

    // Create Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    intro.appendChild(renderer.domElement);

    // Globe (sphere)
    const globeGeometry = new THREE.SphereGeometry(2, 32, 32);
    const globeMaterial = new THREE.MeshBasicMaterial({ color: 0x808080, wireframe: true });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // Knife (just a long box orbiting)
    const knifeGeometry = new THREE.BoxGeometry(0.1, 0.1, 3);
    const knifeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const knife = new THREE.Mesh(knifeGeometry, knifeMaterial);
    scene.add(knife);

    camera.position.z = 6;

    let angle = 0;
    function animate() {
        requestAnimationFrame(animate);

        // Rotate globe
        globe.rotation.y += 0.01;

        // Knife orbit
        angle += 0.02;
        knife.position.x = Math.cos(angle) * 3;
        knife.position.y = Math.sin(angle) * 3;

        renderer.render(scene, camera);
    }
    animate();

    // After 4s → replace with FSOCIETY text
    setTimeout(() => {
        intro.innerHTML = `<h1 style="
            color:#808080;
            font-family:monospace;
            font-size:3em;
            text-align:center;
            margin-top:40vh;
        ">BLACKHYDRA</h1>`;
    }, 4000);

    // After 6s → hide intro, show site
    setTimeout(() => {
        intro.style.display = "none";
        main.style.display = "block";
    }, 6000);
});