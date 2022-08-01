"use strict";

const burgerBoxContainer = document.querySelector(".burger-box-container");
const headerNav = document.querySelector(".header-nav");
const topBurger = document.querySelector(".top");
const middleBurger = document.querySelectorAll(".middle");
const bottomBurger = document.querySelector(".bottom");
const ctaBtn = document.querySelector(".cta-btn");
const bottomContentBoxes = document.querySelectorAll(
  ".hero-container-bottom-content-boxes"
);
const prevBtn = document.querySelector(".hero-container-bottom-content-prev");
const nextBtn = document.querySelector(".hero-container-bottom-content-next");

// Open Nav Menu Function
const openNavMenu = () => {
  headerNav.classList.toggle("showNav");
  topBurger.classList.toggle("removeTopBottom");
  bottomBurger.classList.toggle("removeTopBottom");
  middleBurger[0].classList.toggle("rotateMiddleOne");
  middleBurger[1].classList.toggle("rotateMiddleTwo");
};

// click Event to Toggle Nav
burgerBoxContainer.addEventListener("click", () => {
  openNavMenu();
});

// Media Query for Nav
const mediaQueryDesktopMin = window.matchMedia("(min-width: 1280px)");

if (!mediaQueryDesktopMin.matches === true) {
  // Position Each Slide
  bottomContentBoxes.forEach((b, i) => {
    b.style.transform = `translateX(${100 * i}%)`;
  });
}

// Set Counters and Time
let currentSlide = 0;
let maxSlide = bottomContentBoxes.length;
let time = 3500;

// Move Each Slide Left Function
const moveSlideLeft = () => {
  bottomContentBoxes.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
  });
};

// AutoPlay Slide Function
const autoSlidePlay = () => {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  moveSlideLeft();
};

// Next Button Function
nextBtn.addEventListener("click", () => {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  moveSlideLeft();
});

// Prev Button Function
prevBtn.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = 0;
  } else {
    currentSlide--;
  }

  moveSlideLeft();
});

// Set Interval for Loop of AutoPlay Slider
const moveThis = () => {
  setInterval(autoSlidePlay, time);
};

if (!mediaQueryDesktopMin.matches === true) {
  // AutoPlay Slider on Refresh
  window.onload = moveThis;
} else {
  headerNav.style.transform = "translateX(0vw)";
}
