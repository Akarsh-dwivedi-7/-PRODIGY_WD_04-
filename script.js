// Navbar Toggle for Mobile
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Typing Effect
const words = ["Web Developer", "Software Engineer", "UI/UX Designer", "Freelancer"];
let wordIndex = 0;
let letterIndex = 0;
const typingElement = document.getElementById("typing");

function type() {
    if (letterIndex < words[wordIndex].length) {
        typingElement.innerHTML += words[wordIndex][letterIndex];
        letterIndex++;
        setTimeout(type, 150);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (letterIndex > 0) {
        typingElement.innerHTML = words[wordIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(erase, 100);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    }
}

type();

const toggleBtn = document.getElementById("dark-mode-toggle");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});
