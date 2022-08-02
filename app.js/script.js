"use strict";

const burgerBoxContainer = document.querySelector(".burger-box-container");
const headerNav = document.querySelector(".header-nav");
const headerNavLi = document.querySelectorAll(".header-li");
const topBurger = document.querySelector(".top");
const middleBurger = document.querySelectorAll(".middle");
const bottomBurger = document.querySelector(".bottom");
const ctaBtn = document.querySelector(".cta-btn");
const bottomContentBoxes = document.querySelectorAll(
  ".hero-container-bottom-content-boxes"
);
const prevBtn = document.querySelector(".hero-container-bottom-content-prev");
const nextBtn = document.querySelector(".hero-container-bottom-content-next");
const menuSlides = document.querySelectorAll(".menu-slides");
const cateringSlides = document.querySelectorAll(".catering-slides");

// Media Query for Nav
const mediaQueryDesktopMin = window.matchMedia("(min-width: 1280px)");

// Open Nav Menu Function
const openNavMenu = () => {
  headerNav.classList.toggle("showNav");
  topBurger.classList.toggle("removeTopBottom");
  bottomBurger.classList.toggle("removeTopBottom");
  middleBurger[0].classList.toggle("rotateMiddleOne");
  middleBurger[1].classList.toggle("rotateMiddleTwo");
};

// Add Background to Nav in Desktop Mode
window.addEventListener("scroll", () => {
  if (
    mediaQueryDesktopMin.matches === true &&
    window.scrollY > 1 &&
    !headerNav.classList.contains("showNav")
  ) {
    headerNav.classList.add("navBackground");
  } else {
    headerNav.classList.remove("navBackground");
  }
});

// Nav Links Click Functions
headerNavLi.forEach((h) => {
  h.addEventListener("click", () => {
    if (headerNav.classList.contains("showNav")) {
      headerNav.classList.remove("showNav");
      topBurger.classList.remove("removeTopBottom");
      bottomBurger.classList.remove("removeTopBottom");
      middleBurger[0].classList.remove("rotateMiddleOne");
      middleBurger[1].classList.remove("rotateMiddleTwo");
    }
  });
});

// Click Event to Toggle Nav
burgerBoxContainer.addEventListener("click", () => {
  openNavMenu();
});

// Position Each Slide
if (!mediaQueryDesktopMin.matches === true) {
  bottomContentBoxes.forEach((b, i) => {
    b.style.transform = `translateX(${100 * i}%)`;
  });

  menuSlides.forEach((m, i) => {
    m.style.transform = `translateX(${100 * i}%)`;
  });

  cateringSlides.forEach((c, i) => {
    c.style.transform = `translateX(${100 * i}%)`;
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

// Autoplay only on Mobile Device
if (!mediaQueryDesktopMin.matches === true) {
  // AutoPlay Slider on Refresh
  window.onload = moveThis;
} else {
  headerNav.style.transform = "translateX(0vw)";
}
