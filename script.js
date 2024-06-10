
document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.querySelector(".hero");
  const heroContent = document.querySelector(".hero-content");

  heroContent.style.opacity = "0";
  heroContent.style.transform = "translateY(30px)";

  setTimeout(() => {
    heroContent.style.transition = "opacity 0.5s, transform 0.5s";
    heroContent.style.opacity = "1";
    heroContent.style.transform = "translateY(0)";
  }, 500);
});

//=======================Carousel===================

let slide_data = [
  {
    'src': 'assets/Hero-Images/BANNER-1.webp',
  },
  {
    'src': 'assets/Hero-Images/BANNER-2.webp',
  },
  {
    'src': 'assets/Hero-Images/BANNER-3.webp',

  },
  {
    'src': 'assets/Hero-Images/BANNER-4.webp',
  },

];
let slides = [],
  captions = [],
  loader = document.querySelector('.loader');

let autoplay = setInterval(function () {
  nextSlide();
}, 7000);
let containerCarousel = document.getElementById('containerCarousel');
let leftSlider = document.getElementById('left-col');
// console.log(leftSlider);
let down_button = document.getElementById('down_button');
let up_button = document.getElementById('up_button');
// let caption = document.getElementById('slider-caption');
// let caption_heading = caption.querySelector('caption-heading');

down_button.addEventListener('click', function (e) {
  e.preventDefault();
  clearInterval(autoplay);
  loader.style.animation = 'none'; // Stop loader animation
  setTimeout(function() {
    rotateLoaderBack(); // Rotate loader back to 0 degrees over 3 seconds
    setTimeout(function() {
      loader.style.animation = 'spin 7s linear infinite'; // Restart loader animation
      nextSlide();
      autoplay = setInterval(nextSlide, 7000); // Restart autoplay
    }, 2000); // Delay before resetting and restarting autoplay
  }, 100); // Delay before initiating loader rotation back
});

up_button.addEventListener('click', function (e) {
  e.preventDefault();
  clearInterval(autoplay);
  loader.style.animation = 'none'; // Stop loader animation
  setTimeout(function() {
    rotateLoaderBack(); // Rotate loader back to 0 degrees over 3 seconds
    setTimeout(function() {
      loader.style.animation = 'spin 7s linear infinite'; // Restart loader animation
      nextSlide();
     autoplay = setInterval(nextSlide, 7000); // Restart autoplay
    }, 2000); // Delay before resetting and restarting autoplay
  }, 100); // Delay before initiating loader rotation back
});

function rotateLoaderBack() {
  let startTime = null;
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    loader.style.transform = `rotate(${(progress / 2000) * -360}deg)`; // Rotate loader back to 0 degrees over 3 seconds
    if (progress < 2000) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}


for (let i = 0; i < slide_data.length; i++) {
  let slide = document.createElement('div'),
    caption = document.createElement('div'),
    slide_title = document.createElement('div');

  slide.classList.add('slide');
  slide.setAttribute('style', 'background:url(' + slide_data[i].src + ')');
  caption.classList.add('caption');
  slide_title.classList.add('caption-heading');
  slide_title.innerHTML = '<h1>' + '360 degrees of creativity' + '</h1>';

  switch (i) {
    case 0:
      slide.classList.add('current');
      caption.classList.add('current-caption');
      break;
    case 1:
      slide.classList.add('next');
      caption.classList.add('next-caption');
      break;
    case slide_data.length - 1:
      slide.classList.add('previous');
      caption.classList.add('previous-caption');
      break;
    default:
      break;
  }
  caption.appendChild(slide_title);
  caption.insertAdjacentHTML('beforeend', ' <div class="caption-subhead"><span>Providing Innovative Solutions from Every Angle </span></div>');
  slides.push(slide);
  captions.push(caption);
  leftSlider.appendChild(slide);
  containerCarousel.appendChild(caption);
}
// console.log(slides);


function nextSlide() {
  // caption.classList.add('offscreen');

  slides[0].classList.remove('current');
  slides[0].classList.add('previous', 'change');
  slides[1].classList.remove('next');
  slides[1].classList.add('current');
  slides[2].classList.add('next');
  let last = slides.length - 1;
  slides[last].classList.remove('previous');

  captions[0].classList.remove('current-caption');
  captions[0].classList.add('previous-caption', 'change');
  captions[1].classList.remove('next-caption');
  captions[1].classList.add('current-caption');
  captions[2].classList.add('next-caption');
  let last_caption = captions.length - 1;

  // console.log(last);
  captions[last].classList.remove('previous-caption');

  let placeholder = slides.shift();
  let captions_placeholder = captions.shift();
  slides.push(placeholder);
  captions.push(captions_placeholder);
}

let heading = document.querySelector('.caption-heading');


// https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/
function whichTransitionEvent() {
  var t,
    el = document.createElement("fakeelement");

  var transitions = {
    "transition": "transitionend",
    "OTransition": "oTransitionEnd",
    "MozTransition": "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  }

  for (t in transitions) {
    if (el.style[t] !== undefined) {
      return transitions[t];
    }
  }
}

var transitionEvent = whichTransitionEvent()
caption.addEventListener(transitionEvent, customFunction);

function customFunction(event) {
  caption.removeEventListener(transitionEvent, customFunction);
  console.log('animation ended');

  // Do something when the transition ends
}

document.getElementById("openYouTubeBtn").addEventListener("click", function() {
  window.open("https://www.youtube.com", "_blank");
});


// Testimonial Section
