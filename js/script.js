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