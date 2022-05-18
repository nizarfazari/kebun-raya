const navSlide = () => {
  const burger = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  const navLink = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    //Animat Links
    navLink.forEach((links, index) => {
      if (links.style.animation) {
        links.style.animation = "";
      } else {
        links.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    nav: true,
    navText: ['<i class="fa-solid fa-2x fa-chevron-left"></i>', '<i class="fa-solid fa-2x fa-chevron-right"></i>'],
    slideBy: 2,
    margin: 10,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
        nav: false,
      },
      900: {
        items: 2,
      },
      1300: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
  });
});
