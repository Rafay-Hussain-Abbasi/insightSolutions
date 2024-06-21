const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

// Header Starts
window.addEventListener('scroll', function() {
    const logo = document.querySelector('.logo');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 10) { // Adjust this value as needed
      logo.classList.add('scrolled');
    } else {
      logo.classList.remove('scrolled');
    }
  });

  window.addEventListener('scroll', function() {
    const hamburger = document.querySelectorAll('.hamburger-lines'); // Select all elements with the class
    const scrollPosition = window.scrollY;
  
    hamburger.forEach(function(hamburgerL) { // Iterate over each element
      if (scrollPosition > 10) { // Adjust this value as needed
        hamburgerL.classList.add('scrolled');
      } else {
        hamburgerL.classList.remove('scrolled');
      }
    });
  });
  
  window.addEventListener('scroll', function() {
    const navLinks = document.querySelectorAll('.navLink'); // Select all elements with the class
    const scrollPosition = window.scrollY;
  
    navLinks.forEach(function(navLink) { // Iterate over each element
      if (scrollPosition > 10) { // Adjust this value as needed
        navLink.classList.add('scrolled');
      } else {
        navLink.classList.remove('scrolled');
      }
    });
  });

  gsap.to(".navBar", {
    backgroundColor: "#451515",
    height: "90px", 
    duration: 0.3,
    scrollTrigger: {
        trigger: ".navBar",
        scroller: "body",
        // markers: true, // Uncomment this line for debugging purposes
        start: "top -10%",
        end: "top -15%",
        scrub: 1,
        onUpdate: function(self) {
            // Check if the scroll position is outside of the specified range
            if (self.direction === 1 && self.scroll < self.start || self.direction === -1 && self.scroll > self.end) {
                // If so, revert back to the original background color
                gsap.to(".navBar", { backgroundColor: "#b7a37f", duration: 0.3 });
            }
        }
    }
});


