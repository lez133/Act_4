document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");
    const body = document.body;

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        body.classList.toggle("menu-open"); 
    });
});
