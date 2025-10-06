/* ===================================== */
/*             LENIS SCROLL              */
/* ===================================== */
let lenis;

function initLenis() {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
    if (lenis) {
      lenis.raf(time);
    }
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

initLenis();
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("exampleModal");

  if (modal) {
    modal.addEventListener("show.bs.modal", function () {
      if (lenis) {
        lenis.destroy();
        lenis = null;
      }
    });

    modal.addEventListener("hidden.bs.modal", function () {
      setTimeout(() => {
        initLenis();
      }, 100);
    });
  }
});

/* ===================================== */
/*       PRODUCT HERO SECTION SLID       */
/* ===================================== */
$(document).ready(function ($) {
  $(".slick.marquee").slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5.5,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    pauseOnFocus: true,

    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 4,
          speed: 12000,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

/* ===================================== */
/*             TEXT ANIMATION            */
/* ===================================== */
(function ($) {
  "use strict";

  // Animation gsap
  function title_animation() {
    var tg_var = jQuery(".sec-title-animation");
    if (!tg_var.length) {
      return;
    }
    const quotes = document.querySelectorAll(
      ".sec-title-animation .title-animation"
    );

    quotes.forEach((quote) => {
      //Reset if needed
      if (quote.animation) {
        quote.animation.progress(1).kill();
        quote.split.revert();
      }

      var getclass = quote.closest(".sec-title-animation").className;
      var animation = getclass.split("animation-");
      if (animation[1] == "style4") return;

      quote.split = new SplitText(quote, {
        type: "lines,words,chars",
        linesClass: "split-line",
      });
      gsap.set(quote, {
        perspective: 400,
      });

      if (animation[1] == "style1") {
        gsap.set(quote.split.chars, {
          opacity: 0,
          y: "90%",
          rotateX: "-40deg",
        });
      }
      if (animation[1] == "style2") {
        gsap.set(quote.split.chars, {
          opacity: 0,
          x: "50",
        });
      }
      if (animation[1] == "style3") {
        gsap.set(quote.split.chars, {
          opacity: 0,
        });
      }
      quote.animation = gsap.to(quote.split.chars, {
        scrollTrigger: {
          trigger: quote,
          start: "top 90%",
        },
        x: "0",
        y: "0",
        rotateX: "0",
        opacity: 1,
        duration: 1,
        ease: Back.easeOut,
        stagger: 0.02,
      });
    });
  }
  ScrollTrigger.addEventListener("refresh", title_animation);
})(jQuery);

/* ===================================== */
/*             REVEAL SCRIPT             */
/* ===================================== */
function animateFrom(elem, direction) {
  direction = direction || 1;

  var x = 0,
    y = direction * 100;

  if (elem.classList.contains("fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("fromRight")) {
    x = 100;
    y = 0;
  }

  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1.5,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "power3.out",
      overwrite: "auto",
      clearProps: "transform",
    }
  );
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
  });

  gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
    hide(elem);

    ScrollTrigger.create({
      trigger: elem,
      start: "top 85%",
      end: "bottom 15%",
      markers: false,
      toggleActions: "play none none reverse",
      onEnter: function () {
        animateFrom(elem);
      },
      onEnterBack: function () {
        animateFrom(elem, -1);
      },
      onLeave: function () {
        hide(elem);
      },
    });
  });
});

/* ===================================== */
/*             REVEAL SCRIPT             */
/* ===================================== */
var swiper = new Swiper(".product_slider", {
  slidesPerView: 3.5,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 16,
      // slidesOffsetBefore: 20,
    },

    640: {
      slidesPerView: 2.2,
      spaceBetween: 16,
      // slidesOffsetBefore: 30,
    },

    768: {
      slidesPerView: 2.2,
      spaceBetween: 26,
      // slidesOffsetBefore: 50,
    },

    991: {
      slidesPerView: 3.2,
      spaceBetween: 26,
      // slidesOffsetBefore: 50,
    },

    1280: {
      slidesPerView: 3.5,
      spaceBetween: 40,
    },
  },
});

/* ===================================== */
/*         RELATED SEVICE SLIDER         */
/* ===================================== */
var swiper = new Swiper(".related_slider", {
  slidesPerView: 4.2,
  spaceBetween: 26,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 1000,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 16,
    },

    640: {
      slidesPerView: 2.2,
      spaceBetween: 16,
    },

    991: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },

    1280: {
      slidesPerView: 4.2,
      spaceBetween: 26,
    },
  },
});

/* ===================================== */
/*            FAVORITES SLIDE            */
/* ===================================== */
var swiper = new Swiper(".faviorites_slider", {
  slidesPerView: 1.5,
  spaceBetween: 16,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
  speed: 1000,
  // autoplay: {
  //   delay: 1500,
  //   disableOnInteraction: false,
  // },
});

/* ===================================== */
/*              MUTLI SLIDER             */
/* ===================================== */

$(".mutislider-1").slick({
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: false,
  cssEase: "linear",
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  pauseOnHover: true,
  vertical: true,
  verticalSwiping: true,
});
$(".mutislider-2").slick({
  speed: 8000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: false,
  cssEase: "linear",
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  pauseOnHover: true,
  vertical: true,
  verticalSwiping: true,
});
/* ===================================== */
/*         SERVICES MARQUEE SLIDER       */
/* ===================================== */
$(".marquee-service").slick({
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1320,
      settings: {
        slidesToShow: 4,
        speed: 12000,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
