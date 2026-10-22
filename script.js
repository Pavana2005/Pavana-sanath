
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll("#navMenu a");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
        menuBtn.setAttribute("aria-expanded", "true");
    } else {
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
    }
});

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

document.getElementById("year").textContent = new Date().getFullYear();
