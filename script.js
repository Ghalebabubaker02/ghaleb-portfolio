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

/* ====== Animation Base ====== */
@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* كل بوست يبدأ مخفي */
.insta-card {
  opacity: 0;
  transform: translateY(30px);
  transition: transform 0.4s ease, opacity 0.4s ease;
}

/* عند تحميل الصفحة — أول 3 بوستات تظهر */
.insta-card.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ===== Hover Effect ===== */
.insta-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 15px 35px rgba(0,0,0,0.4);
  transition: 0.3s ease;
}

/* ===== عند Show More — نعطي Reveal متتالي ===== */
.reveal-seq {
  animation: fadeUp 0.7s ease forwards;
}
