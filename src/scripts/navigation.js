// Mobile Navigation Handler
document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navList = document.querySelector(".nav__list");
  const navLinks = document.querySelectorAll(".nav__link");
  const body = document.body;

  // Toggle mobile menu
  if (mobileToggle) {
    mobileToggle.addEventListener("click", function () {
      mobileToggle.classList.toggle("mobile-toggle--active");
      navList.classList.toggle("nav__list--open");
      body.classList.toggle("nav-open");
    });
  }

  // Close menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        mobileToggle.classList.remove("mobile-toggle--active");
        navList.classList.remove("nav__list--open");
        body.classList.remove("nav-open");
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    const isOutsideNav =
      !event.target.closest(".nav") && !event.target.closest(".mobile-toggle");

    if (isOutsideNav && navList.classList.contains("nav__list--open")) {
      mobileToggle.classList.remove("mobile-toggle--active");
      navList.classList.remove("nav__list--open");
      body.classList.remove("nav-open");
    }
  });

  // Handle resize events
  window.addEventListener("resize", function () {
    if (
      window.innerWidth > 768 &&
      navList.classList.contains("nav__list--open")
    ) {
      mobileToggle.classList.remove("mobile-toggle--active");
      navList.classList.remove("nav__list--open");
      body.classList.remove("nav-open");
    }
  });
});
