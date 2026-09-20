/* ========================================
   MENÚ MÓVIL
======================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");

});


/* ========================================
   CERRAR MENÚ AL PULSAR UN ENLACE
======================================== */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");

    });

});


/* ========================================
   ANIMACIONES AL HACER SCROLL
======================================== */

const animatedElements = document.querySelectorAll(
    ".section-label, .section h2, .about-text, " +
    ".project, .mini-project, " +
    ".daw-projects, .daw-project-featured, .daw-mini-project, " +
    ".skill, .education-item, .contact"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});


/* ========================================
   AÑO AUTOMÁTICO DEL FOOTER
======================================== */

const footerYear = document.querySelector(".footer p");

if (footerYear) {

    footerYear.textContent =
        `© ${new Date().getFullYear()} [TU NOMBRE]`;

}

/* ========================================
   CAMBIO DE IDIOMA
======================================== */

const languageToggle = document.querySelector("#language-toggle");

if (languageToggle) {

    languageToggle.addEventListener("click", () => {

        const select = document.querySelector(
            ".gtranslate_wrapper select"
        );

        if (!select) {
            console.log("No se encontró el selector de GTranslate.");
            return;
        }

        const currentLanguage = select.value;

        const newLanguage =
            currentLanguage === "es|en"
                ? "es|es"
                : "es|en";

        console.log("Cambiando de", currentLanguage, "a", newLanguage);

        select.value = newLanguage;

        select.dispatchEvent(
            new Event("change", {
                bubbles: true
            })
        );

        languageToggle.textContent =
            newLanguage === "es|en"
                ? "🇪🇸 ES"
                : "🇬🇧 EN";

    });

}

/* ========================================
   CAMBIO DE TEMA
======================================== */

const themeToggle = document.querySelector("#theme-toggle");

function getDefaultTheme() {
    const hour = new Date().getHours();

    // Claro: 07:00 - 18:59
    // Oscuro: 19:00 - 06:59
    return hour >= 7 && hour < 19 ? "light" : "dark";
}

function applyTheme(theme) {
    document.documentElement.classList.toggle(
        "light-theme",
        theme === "light"
    );

    if (themeToggle) {
        themeToggle.textContent =
            theme === "light" ? "🌙" : "☀️";
    }
}

const savedTheme = localStorage.getItem("theme");
const currentTheme = savedTheme || getDefaultTheme();

applyTheme(currentTheme);

if (themeToggle) {
    themeToggle.addEventListener("click", () => {

        const newTheme =
            document.documentElement.classList.contains("light-theme")
                ? "dark"
                : "light";

        applyTheme(newTheme);

        localStorage.setItem("theme", newTheme);
    });
}

