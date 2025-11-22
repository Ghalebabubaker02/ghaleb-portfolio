
// =============================
// AGGRESSIVE CINEMATIC JS FINAL
// =============================

// HERO APPEAR
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero-content");
    if (hero) {
        setTimeout(() => {
            hero.style.opacity = "1";
            hero.style.transform = "translateY(0)";
        }, 300);
    }
});

// SERVICES ANIMATION ON SCROLL
const boxes = document.querySelectorAll(".service-box");

const obs = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  },
  { threshold:0.2 }
);

boxes.forEach(b => obs.observe(b));

// =============================
// PARTICLES.JS LOADER
// =============================
document.addEventListener("DOMContentLoaded", function(){
  const particles = document.createElement("script");
  particles.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
  particles.onload = function(){
    particlesJS("particles-js",{
      "particles":{
        "number":{"value":90},
        "color":{"value":"#ff1e1e"},
        "shape":{"type":"circle"},
        "opacity":{"value":0.4},
        "size":{"value":3},
        "move":{"speed":2}
      },
      "interactivity":{"events":{"onhover":{"enable":true,"mode":"repulse"}}},
      "retina_detect":true
    });
  };
  document.body.appendChild(particles);
});
