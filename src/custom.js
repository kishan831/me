
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("hidden");

  const links = menu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden"); 
    });
  });
}


$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: false,
  smartSpeed: 500,
  autoplaySpeed: 800,
  navSpeed: 800,
  navText: [
    '<span class="iconify" data-icon="oui:arrow-left"></span>',
    '<span class="iconify" data-icon="oui:arrow-right"></span>',
  ],
  responsive: {
    0: {
      items: 1,
      margin: 10,
    },
    640: {
      items: 2,
      margin: 15,
    },
    1024: {
      items: 2,
    },
    1280: {
      items: 4,
    },
  },
});
gsap.registerPlugin(ScrollTrigger);

var tl6 = gsap.timeline();

// Animate .animate-3
tl6.from(".newslatter .animate-3", {
  duration: 1,
  rotate: 90,
  scrollTrigger: {
    trigger: ".animate-3",
    start: "top 50%",
    scrub: true, // Corrected the scrub to boolean
    stagger: 0.5,
  },
});

// Animate .animate-4
tl6.from(".newslatter .animate-4", {
  duration: 1,
  rotate: 270,
  scrollTrigger: {
    trigger: ".animate-4",
    start: "top 50%",
    scrub: true, // Corrected scrub
    stagger: 0.5,
  },
});

// Animate .animate-5
tl6.from(".newslatter .animate-5", {
  duration: 1,
  rotate: 180,
  scrollTrigger: {
    trigger: ".animate-5",
    start: "top 50%",
    scrub: true, // Corrected scrub
    stagger: 0.5,
  },
});

// Animate .animate-6
tl6.from(".newslatter .animate-6", {
  duration: 1,
  rotate: 90,
  scrollTrigger: {
    trigger: ".animate-6",
    start: "top 50%",
    scrub: true, // Corrected scrub
    stagger: 0.5,
  },
});

var tl10 = gsap.timeline();
tl10.from(".Navbar a", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.4,
  stagger: 0.5,
});


var tl11 = gsap.timeline();
tl10.from(".bg-gradient .animation-images", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.4,
  stagger: 0.5,
});

// Animate .animate-7

AOS.init();
