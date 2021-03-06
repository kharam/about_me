"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar-dark");
  } else {
    navbar.classList.remove("navbar-dark");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove("open");
  scrollIntoView(link);
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// Make home slowly fade to transparaent as the window scrools down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Handle Click on "contact me" button
const contactButton = document.querySelector(".home__contact");
contactButton.addEventListener("click", (event) => {
  const scrollTo = document.querySelector("#contact");
  scrollIntoView("#contact");
});

// show arrow up button when scrolling down
document.addEventListener("scroll", () => {
  const arrowUp = document.querySelector(".arrow-up");
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// When arrow up button is clicked
const arrowUpBtn = document.querySelector(".arrow-up");
arrowUpBtn.addEventListener("click", () => {
  scrollIntoView("#home");
});

// Project
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.closest("button").dataset.filter;
  if (filter == null) {
    return;
  }

  //My work, remove selection from previous
  const active = document.querySelector(".category__btn.selected");
  active.classList.remove("selected");
  e.target.closest("button").classList.add("selected");

  projectContainer.classList.add("animation-out");

  setTimeout(() => {
    projects.forEach((project) => {
      // console.log(project);
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("animation-out");
  }, 300);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
