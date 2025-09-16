const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const btn = document.querySelector(".btn");
const links = document.querySelectorAll(".nav-links a");
const logo = document.querySelector(".nav-logo a");

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    btn.classList.toggle("active");
});

// Close menu when a link is clicked
links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        btn.classList.remove("active");
    });
});

// Close menu when logo is clicked
logo.addEventListener("click", () => {
    navLinks.classList.remove("active");
    btn.classList.remove("active");
});

const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show button when scrolling down
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "flex";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

// Scroll smoothly to top when clicked
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

