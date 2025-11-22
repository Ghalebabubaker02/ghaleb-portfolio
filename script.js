document.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });

});
const showMoreBtn = document.getElementById("showMoreBtn");
const instaWrapper = document.querySelector(".insta-wrapper");
const instaGradient = document.querySelector(".insta-gradient");

showMoreBtn.addEventListener("click", () => {
    instaWrapper.style.maxHeight = "5000px";
    instaGradient.style.opacity = "0";
    showMoreBtn.style.display = "none";
});
