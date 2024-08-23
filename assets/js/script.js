// Header active when scroll down to 100px
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// Toggle navbar
const navbar = document.getElementById("navbar");
const navOpen = document.querySelector(".nav-open-btn");
navOpen.onclick = () => {
  navbar.classList.toggle("active");
};

document.querySelector(".nav-close-btn").onclick = () => {
  navbar.classList.remove("active");
};

document.addEventListener("click", (e) => {
  if (!navOpen.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
