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
const hiddenPosts = document.querySelectorAll(".hidden-posts .instagram-media");

showMoreBtn.addEventListener("click", () => {

    // افتح القسم كامل
    instaWrapper.style.maxHeight = "5000px";

    // شيل الغطاء
    instaGradient.style.opacity = "0";

    // اخفي الزر
    showMoreBtn.style.display = "none";

    // فعّل تحميل الريلات
    hiddenPosts.forEach(post => {
        const link = post.getAttribute("data-link");
        post.setAttribute("data-instgrm-permalink", link);
    });

    // إعادة تحميل سكربت إنستغرام
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);
});
