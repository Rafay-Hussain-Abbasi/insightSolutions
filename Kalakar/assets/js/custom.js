// Wow JS Start //
wow = new WOW({
  animateClass: "animated",
  offset: 80,
});
wow.init();

//

function afterReveal(el) {
  el.addEventListener("animationend", function (event) {
    $(".wow").each(function () {
      $(this).css("opacity", 1);
    });
  });
}
new WOW({ callback: afterReveal }).init();
// Wow JS End //

//Work Slider Start //
$(document).ready(function () {
  $(".work_filter_btn").click(function () {
    var value = $(this).attr("data-filter");
    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $(".work_filter_col").show("6000");
    } else {
      // $('.work_filter_col[filter-item="'+value+'"]').removeClass('hidden');
      // $(".work_filter_col").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".work_filter_col")
        .not("." + value)
        .hide("6000");
      $(".work_filter_col")
        .filter("." + value)
        .show("6000");
    }
  });
  if ($(".work_filter_btn").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
});
//Work Slider End //

// Case Study Gallery Slider Start //
$(".study_gallery").slick({
  infinite: true,
  arrows: false,
  buttons: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        infinite: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        infinite: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
// Case Study Gallery Slider End //

// Side Canvas Toggle Start //
$("#canvasToggle").click(function () {
  $(".opentoggle").toggleClass("closetoggle");
});

$("#canvasToggle").click(function () {
  $(".canvas_area").toggleClass("canvas_area_active");
});

$("#canvasToggle").click(function () {
  $("body").toggleClass("canvas_active");
});

$(".canvas_menu ul li a").click(function () {
  $(".canvas_area").toggleClass("canvas_area_active");
});
// Side Canvas Toggle End //

// Background Color Change on Scroll Animation Start //
$(window)
  .scroll(function () {
    var $window = $(window),
      $body = $("body"),
      $sectionpanel = $(".sectionpanel");
    var scroll = $window.scrollTop() + $window.height() / 1.7;
    $sectionpanel.each(function () {
      var $this = $(this);
      if (
        $this.position().top <= scroll &&
        $this.position().top + $this.height() > scroll
      ) {
        $body.removeClass(function (index, css) {
          return (css.match(/(^|\s)bg_color_\S+/g) || []).join(" ");
        });
        $body.addClass("bg_color_" + $(this).data("color"));
      }
    });
  })
  .scroll();
// Background Color Change on Scroll Animation End //

// Progress Circle Start //
let scrollPercentage = () => {
  let scrollProgress = document.getElementById("progress_circle");
  let progressValue = document.getElementById("progress_value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  //Add class when progress is complete (100%)
  if (scrollValue == 100) {
    document.getElementById("progress_circle").classList.add("completed");
  } else {
    document.getElementById("progress_circle").classList.remove("completed");
  }
  scrollProgress.style.background = `conic-gradient(#E91E63 ${scrollValue}%, #FFF3DD ${scrollValue}%)`;
  progressValue.textContent = `${scrollValue}%`;
};
window.onscroll = scrollPercentage;
window.onload = scrollPercentage;
// Progress Circle End //

// Banner TextSwap Animation Start //
const txts = document.querySelector(".animate_text").children,
  txtsLen = txts.length;
let index = 0;
const textInTimer = 4000,
  textOutTimer = 4000;
function animateText() {
  for (let i = 0; i < txtsLen; i++) {
    txts[i].classList.remove("text_in", "text_out");
  }
  txts[index].classList.add("text_in");
  setTimeout(function () {
    txts[index].classList.add("text_out");
  }, textOutTimer);
  setTimeout(function () {
    if (index == txtsLen - 1) {
      index = 0;
    } else {
      index++;
    }
    animateText();
  }, textInTimer);
}
window.onload = animateText;
// Banner TextSwap Animation End //

// Header Scroll Start //
function updateScroll() {
  if ($(window).scrollTop() >= 100) {
    $("header").addClass("header_scroll");
  } else {
    $("header").removeClass("header_scroll");
  }
}
$(function () {
  $(window).scroll(updateScroll);
  updateScroll();
});
// Header Scroll End //

// Case Study Index Slide Start //
const work_container = document.querySelector(".work_container");
const sections = gsap.utils.toArray(".work_container .work_section");
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");
let scrollTween = gsap.to(sections, {
  xPercent: -120 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".work_container",
    pin: true,
    scrub: 1,
    end: "bottom 0%",
    start: "top 15%",
    snap: 1 / (sections.length - 1),
    // markers: true,
  },
});
console.log(1 / (sections.length - 1));
gsap.to(mask, {
  width: "100%",
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top left",
    scrub: 1,
  },
});
sections.forEach((section) => {
  let text = section.querySelectorAll(".anim");
  if (text.length === 0) return;
  gsap.from(text, {
    y: -130,
    opacity: 0,
    duration: 2,
    ease: "elastic",
    stagger: 0.1,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      start: "left center",
      markers: false,
    },
  });
});
// Case Study Index Slide End //

// Marquee Animation Start //
let currentScroll = 0;
let isScrollingDown = true;
let tween = gsap
  .to(".factpart", {
    xPercent: -100,
    repeat: -1,
    duration: 10,
    ease: "linear",
  })
  .totalProgress(0.5);
gsap.set(".factinner", { xPercent: -50 });
window.addEventListener("scroll", function () {
  if (window.pageYOffset > currentScroll) {
    isScrollingDown = true;
  } else {
    isScrollingDown = true;
  }
  gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1,
  });
  currentScroll = window.pageYOffset;
});
// Marquee Animation End //

// Client BG Shadow Animation Start //
gsap.to("#clientBg", {
  scrollTrigger: {
    trigger: "#clientBg",
    scroller: "body",
    markers: false,
    start: "top 50%",
    end: "bottom 20%",
    scrub: 1,
  },
  left: "-30%",
  duration: 1,
});
// Client BG Shadow Animation Start //

// IMG Reveal on Hover Start //
const link = document.querySelectorAll(".img_reveal");
const linkHoverReveal = document.querySelectorAll(".hover-reveal");
const linkImages = document.querySelectorAll(".hidden-img");
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("mousemove", (e) => {
    linkHoverReveal[i].style.opacity = 1;
    linkHoverReveal[i].style.transform = `translate(-100%, -50% ) rotate(5deg)`;
    linkImages[i].style.transform = "scale(1, 1)";
    linkHoverReveal[i].style.left = e.clientX + "px";
  });
  link[i].addEventListener("mouseleave", (e) => {
    linkHoverReveal[i].style.opacity = 0;
    linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
    linkImages[i].style.transform = "scale(1, 1)";
  });
}
// IMG Reveal on Hover End //

// Client Slider Start //
jQuery(document).ready(function ($) {
  $(".client_slider").slick({
    arrows: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    touchMove: true,
    centerMode: false,
    variableWidth: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
        },
      },
    ],
  });
});
// Client Slider End //

// Hero Scroll Start //
var leftItem = document.getElementById("heroImage");
(function () {
  var throttle = function (type, name, obj) {
    var obj = obj || window;
    var running = false;
    var func = function () {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function () {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  throttle("scroll", "optimizedScroll");
})();
window.addEventListener("optimizedScroll", function () {
  leftItem.style.transform = "translateY(" + window.pageYOffset + "px)";
});
// Hero Scroll End //

// WorkFilter Menu Start //
$(function () {
  $(".workfilter_menu ul li").click(function () {
    $("li").removeClass("active");
    $(this).addClass("active");
  });
});
// WorkFilter Menu End //

// Team Slider Start //
jQuery(document).ready(function ($) {
  $(".team_slider").slick({
    arrows: false,
    dots: false,
    touchMove: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    centerMode: false,
    focusOnSelect: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// Team Slider End //

// Work Slide Slider Start //
jQuery(document).ready(function ($) {
  $(".workslide_slider.marquee").slick({
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
    focusOnSelect: false,
  });
});
// Work Slide Slider End //

// Meme Slider Start //
$(".memeSlider").slick({
  centerMode: true,
  centerPadding: "300px",
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        centerPadding: "200px",
      },
    },
    {
      breakpoint: 1200,
      settings: {
        centerPadding: "140px",
      },
    },
    {
      breakpoint: 992,
      settings: {
        centerPadding: "30px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerPadding: "50px",
      },
    },
    {
      breakpoint: 300,
      settings: {
        centerPadding: "10px",
      },
    },
  ],
});
// Meme Slider End //

// MemeSlide Collapse Start //
$(".memeSlide_Collapse").click(function () {
  $(this).find(".collapser").toggleClass("collapser_oepn");
  $(this).find(".collapse_body").toggleClass("collapse_bodyoepn");
});
// MemeSlide Collapse End //

// Image Card Swipe Start //
var imageSwiper = new Swiper(".image-slider", {
  effect: "cards",
  grabCursor: true,
  allowTouchMove: true,
  loop: true,
});
var quoteSwiper = new Swiper(".quote-slider", {
  direction: "vertical",
  effect: "slide",
  //autoHeight: true,
  grabCursor: false,
  allowTouchMove: true,
  loop: true,
});
imageSwiper.controller.control = this.quoteSwiper;
quoteSwiper.controller.control = this.imageSwiper;
// Image Card Swipe End //

// Our Buddies Start //
let imgBx = document.querySelectorAll(".imgBx");
let contentBx = document.querySelectorAll(".contentBx");

for (let i = 0; i < imgBx.length; i++) {
  imgBx[i].addEventListener("click", function () {
    for (let i = 0; i < contentBx.length; i++) {
      contentBx[i].className = "contentBx";
    }
    document.getElementById(this.dataset.id).className = "contentBx active";

    for (let i = 0; i < imgBx.length; i++) {
      imgBx[i].className = "imgBx";
    }
    this.className = "imgBx active";
  });
}
// Our Buddies End //

// Timeline Start //
(function ($) {
  $(function () {
    $(window).on("scroll", function () {
      fnOnScroll();
    });
    $(window).on("resize", function () {
      fnOnResize();
    });
    var agTimeline = $(".js-timeline"),
      agTimelineLine = $(".js-timeline_line"),
      agTimelineLineProgress = $(".js-timeline_line-progress"),
      agTimelinePoint = $(".js-timeline-card_point-box"),
      agTimelineItem = $(".js-timeline_item"),
      agOuterHeight = $(window).outerHeight(),
      agHeight = $(window).height(),
      f = -1,
      agFlag = false;
    function fnOnScroll() {
      agPosY = $(window).scrollTop();
      fnUpdateFrame();
    }
    function fnOnResize() {
      agPosY = $(window).scrollTop();
      agHeight = $(window).height();
      fnUpdateFrame();
    }
    function fnUpdateWindow() {
      agFlag = false;
      agTimelineLine.css({
        top:
          agTimelineItem.first().find(agTimelinePoint).offset().top -
          agTimelineItem.first().offset().top,
        bottom:
          agTimeline.offset().top +
          agTimeline.outerHeight() -
          agTimelineItem.last().find(agTimelinePoint).offset().top,
      });
      f !== agPosY && ((f = agPosY), agHeight, fnUpdateProgress());
    }
    function fnUpdateProgress() {
      var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
      i = agTop + agPosY - $(window).scrollTop();
      a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
      n = agPosY - a + agOuterHeight / 2;
      i <= agPosY + agOuterHeight / 2 && (n = i - a);
      agTimelineLineProgress.css({ height: n + "px" });
      agTimelineItem.each(function () {
        var agTop = $(this).find(agTimelinePoint).offset().top;
        agTop + agPosY - $(window).scrollTop() < agPosY + 0.5 * agOuterHeight
          ? $(this).addClass("js-ag-active")
          : $(this).removeClass("js-ag-active");
      });
    }
    function fnUpdateFrame() {
      agFlag || requestAnimationFrame(fnUpdateWindow);
      agFlag = true;
    }
  });
})(jQuery);
// Timeline End //

// News Slider Start //
var items = document.querySelectorAll(".news__item");
var item = document.querySelector(".news__item");
var swiper = new Swiper(".news-slider", {
  effect: "slide",
  grabCursor: false,
  loop: false,
  rewind: false,
  centeredSlides: false,
  slidesPerView: "auto",
  spaceBetween: 0,
  keyboard: true,
  speed: 500,
  simulateTouch: true,
  breakpoints: {
    767: {
      spaceBetween: 0,
    },
    300: {
      spaceBetween: 30,
      slidesPerView: 1,
      centeredSlides: true,
    },
  },
  navigation: {
    nextEl: ".news-slider-next",
    prevEl: ".news-slider-prev",
  },
  pagination: {
    el: ".news-slider__pagination",
    clickable: true,
  },
  on: {
    init: function () {
      var activeItem = document.querySelector(".swiper-slide-active");
      var sliderItem = activeItem.querySelector(".news__item");
      $(".swiper-slide-active .news__item").addClass("active");
      var x = sliderItem.getBoundingClientRect().left;
      var y = sliderItem.getBoundingClientRect().top;
      var width = sliderItem.getBoundingClientRect().width;
      var height = sliderItem.getBoundingClientRect().height;
    },
  },
});
swiper.on("touchEnd", function () {
  $(".news__item").removeClass("active");
  $(".swiper-slide-active .news__item").addClass("active");
});
swiper.on("slideChange", function () {
  $(".news__item").removeClass("active");
});
swiper.on("slideChangeTransitionEnd", function () {
  $(".news__item").removeClass("active");
  var activeItem = document.querySelector(".swiper-slide-active");
  var sliderItem = activeItem.querySelector(".news__item");
  $(".swiper-slide-active .news__item").addClass("active");
  var x = sliderItem.getBoundingClientRect().left;
  var y = sliderItem.getBoundingClientRect().top;
  var width = sliderItem.getBoundingClientRect().width;
  var height = sliderItem.getBoundingClientRect().height;
});
// News Slider End //

// Meme Evolution Slider Start //
function flickity_handle_wheel_event(
  e,
  flickity_instance,
  flickity_is_animating
) {
  if (!flickity_is_animating) {
    var direction =
      Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    console.log("wheel scroll ", e.deltaX, e.deltaY, direction);
    if (direction > 0) {
      flickity_instance.next();
    } else {
      flickity_instance.previous();
    }
  }
}
var memeEvolution_Carousel = document.querySelector(".memeEvolution_Carousel");
var flickity_2 = new Flickity(".memeEvolution_Carousel", {
  wrapAround: false,
  contain: true,
  autoPlay: true,
  autoPlay: 2500,
  pauseAutoPlayOnHover: false,
  selectedAttraction: 0.01,
  friction: 0.15,
  freeScroll: true,
  freeScrollFriction: 0.03,
  initialIndex: 0,
  accessibility: true,
  percentPosition: false,
  setGallerySize: false,
  pageDots: false,
});
var flickity_2_is_animating = false;
flickity_2.on("settle", function (index) {
  console.log("Slide settle " + index);
  flickity_2_is_animating = false;
});
flickity_2.on("select", function (index) {
  console.log("Slide selected " + index);
  flickity_2_is_animating = true;
});
memeEvolution_Carousel.onwheel = function (e) {
  flickity_handle_wheel_event(e, flickity_2, flickity_2_is_animating);
};
// Meme Evolution Slider End //

// Mobile Work Slider Start //
$(".mobWorkSlider").slick({
  centerMode: false,
  variableWidth: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        autoplay: false,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        autoplay: false,
      },
    },
    {
      breakpoint: 992,
      settings: {
        autoplay: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        autoplay: false,
      },
    },
    {
      breakpoint: 300,
      settings: {
        autoplay: false,
      },
    },
  ],
});
// Mobile Work Slider End //

// Service Accordion Start //
const tabs = gsap.utils.toArray(".service_accordian_item");
tabs.forEach((tab) => {
  gsap.from(tab, {
    scrollTrigger: {
      start: "top 40%",
      //end: 'top center',
      markers: false,
      trigger: tab,
      onEnter() {
        tab.classList.add("expand");
        setTimeout(function () {
          ScrollTrigger.refresh();
        }, 20);
      },
      onLeave() {
        //info.classList.remove('expand');
        //setTimeout(function () { ScrollTrigger.refresh(); }, 0);
      },
      onEnterBack() {
        tab.classList.add("expand");
        //setTimeout(function () { ScrollTrigger.refresh(); }, 0);
      },
      onLeaveBack() {
        tab.classList.remove("expand");
        setTimeout(function () {
          ScrollTrigger.refresh();
        }, 20);
      },
    },
  });
});

gsap.to(window, {
  scrollTo: 10000,
  duration: 1,
});

// Service Accordion End //

// Our Buddies Slider Start //
var $slider = $(".slider-for");
$slider
  .on("init", function () {
    mouseWheel($slider);
  })
  .slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".round-slider",
    infinite: false,
  });
$(".round-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: true,
  centerMode: true,
  arrows: true,
  focusOnSelect: true,
  dotsClass: "slider-paging-number",
});
function mouseWheel($slider) {
  $(window).on(
    "mousewheel",
    {
      $slider: $slider,
    },
    mouseWheelHandler
  );
}

function mouseWheelHandler(event) {
  event.preventDefault();
  var $slider = event.data.$slider;
  var delta = event.originalEvent.deltaY;
  if (delta > 10) {
    $slider.slick("slickPrev");
  } else {
    $slider.slick("slickNext");
  }
}
var type = 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
  radius = "250px", //distance from center
  start = -90, //shift start from 0
  $elements = $(".round-slider .slider-paging-number li"),
  numberOfElements = type === 1 ? $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
  slice = (360 * type) / numberOfElements;

$elements.each(function (i) {
  var $self = $(this),
    rotate = slice * i + start,
    rotateReverse = rotate * -1;

  $self.css({
    transform:
      "rotate(" +
      rotate +
      "deg) translate(" +
      radius +
      ") rotate(" +
      rotateReverse +
      "deg)",
  });
});

// Our Buddies Slider End //

// Banner Elements JS Start //
var bannerEarth = $("#bannerEarth");
var bannerMoon = $("#bannerMoon");
var bannerRocket = $("#bannerRocket");
var bannerSpaceship = $("#bannerSpaceship");
var bannerSaturn = $("#bannerSaturn");
var bannerStarOne = $("#bannerStarOne");
var bannerStarTwo = $("#bannerStarTwo");
var bannerStarThree = $("#bannerStarThree");
var bannerStarFour = $("#bannerStarFour");

var layer = $("#heroBanner");

layer.mousemove(function (e) {
  var bannerEarthvalueX = (e.pageX * -1) / 21;
  var bannerEarthvalueY = (e.pageY * -1) / 24;
  var bannerMoonvalueX = (e.pageX * -1) / 27;
  var bannerMoonvalueY = (e.pageY * -1) / 51;
  var bannerRocketvalueX = (e.pageX * -1) / 22;
  var bannerRocketvalueY = (e.pageY * -1) / 21;
  var bannerSpaceshipvalueX = (e.pageX * -1) / 23;
  var bannerSpaceshipvalueY = (e.pageY * -1) / 43;
  var bannerSaturnvalueX = (e.pageX * -1) / 28;
  var bannerSaturnvalueY = (e.pageY * -1) / 27;
  var bannerStarOnevalueX = (e.pageX * -1) / 34;
  var bannerStarOnevalueY = (e.pageY * -1) / 54;
  var bannerStarTwovalueX = (e.pageX * -1) / 23;
  var bannerStarTwovalueY = (e.pageY * -1) / 28;
  var bannerStarThreevalueX = (e.pageX * -1) / 31;
  var bannerStarThreevalueY = (e.pageY * -1) / 46;
  var bannerStarFourvalueX = (e.pageX * -1) / 22;
  var bannerStarFourvalueY = (e.pageY * -1) / 20;
  console.log("ok");
  bannerEarth.css(
    "transform",
    "translate3d(" + bannerEarthvalueX + "px," + bannerEarthvalueY + "px, 0)"
  );
  bannerMoon.css(
    "transform",
    "translate3d(" + bannerMoonvalueX + "px," + bannerMoonvalueY + "px, 0)"
  );
  bannerRocket.css(
    "transform",
    "translate3d(" + bannerRocketvalueX + "px," + bannerRocketvalueY + "px, 0)"
  );
  bannerSpaceship.css(
    "transform",
    "translate3d(" +
      bannerSpaceshipvalueX +
      "px," +
      bannerSpaceshipvalueY +
      "px, 0)"
  );
  bannerSaturn.css(
    "transform",
    "translate3d(" + bannerSaturnvalueX + "px," + bannerSaturnvalueY + "px, 0)"
  );
  bannerStarOne.css(
    "transform",
    "translate3d(" +
      bannerStarOnevalueX +
      "px," +
      bannerStarOnevalueY +
      "px, 0)"
  );
  bannerStarTwo.css(
    "transform",
    "translate3d(" +
      bannerStarTwovalueX +
      "px," +
      bannerStarTwovalueY +
      "px, 0)"
  );
  bannerStarThree.css(
    "transform",
    "translate3d(" +
      bannerStarThreevalueX +
      "px," +
      bannerStarThreevalueY +
      "px, 0)"
  );
  bannerStarFour.css(
    "transform",
    "translate3d(" +
      bannerStarFourvalueX +
      "px," +
      bannerStarFourvalueY +
      "px, 0)"
  );
});

// Banner Elements JS End //
