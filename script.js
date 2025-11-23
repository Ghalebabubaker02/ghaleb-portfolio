/* =========================================
   Smooth Scroll for Hero Button
========================================= */
document.querySelector(".scroll-btn").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#portfolio").scrollIntoView({ behavior: "smooth" });
});

/* =========================================
   Services Animation on Scroll
========================================= */
const serviceBoxes = document.querySelectorAll(".service-box");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.2 }
);

serviceBoxes.forEach((box) => observer.observe(box));

/* =========================================
   ParticlesJS Loader
========================================= */
document.addEventListener("DOMContentLoaded", function () {
    const particles = document.createElement("script");
    particles.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";

    particles.onload = function () {
        particlesJS("particles-js", {
            particles: {
                number: { value: 90 },
                color: { value: "#ff1e1e" },
                shape: { type: "circle" },
                opacity: { value: 0.4 },
                size: { value: 3 },
                move: { speed: 2 },
            },
            interactivity: {
                events: {
                    onhover: { enable: true, mode: "repulse" },
                },
            },
            retina_detect: true,
        });
    };

    document.body.appendChild(particles);
});

/* =========================================
   Story Viewer System (Instagram-style)
========================================= */
const stories = {
    editing: ["videos/edit1.mp4", "videos/edit2.mp4"],
    clients: ["videos/client1.mp4", "videos/client2.mp4"],
    gear: ["videos/gear1.mp4"],
    bts: ["videos/bts1.mp4"],
};

let currentStory = null;
let currentIndex = 0;

const storyViewer = document.getElementById("story-viewer");
const storyVideo = document.getElementById("story-video");
const storyProgress = document.querySelector(".story-progress");

/* Open highlight */
document.querySelectorAll(".highlight-item").forEach((item) => {
    item.addEventListener("click", () => {
        currentStory = item.dataset.story;
        currentIndex = 0;
        openStory();
    });
});

/* Open story player */
function openStory() {
    storyViewer.style.display = "flex";
    playStory();
}

/* Load & play story */
function playStory() {
    const src = stories[currentStory][currentIndex];
    storyVideo.src = src;
    storyVideo.play();

    storyProgress.style.transitionDuration = "5s";
    storyProgress.style.width = "100%";

    storyVideo.onended = () => nextStory();
}

/* Next video */
function nextStory() {
    currentIndex++;
    if (currentIndex >= stories[currentStory].length) {
        closeStory();
        return;
    }
    storyProgress.style.width = "0%";
    setTimeout(playStory, 100);
}

/* Close story */
document.querySelector(".close-story").addEventListener("click", closeStory);

function closeStory() {
    storyViewer.style.display = "none";
    storyVideo.pause();
    storyProgress.style.width = "0%";
}
