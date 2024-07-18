
//READMORE BUTTON 
$('.moreless-button').click(function() {
    $('.moretext').slideToggle();
    if ($('.moreless-button').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
  
  //READMORE BUTTON ENDS

  document.addEventListener('DOMContentLoaded', () => {
    const blogSections = document.querySelectorAll('.blogdy');
    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.5 // 50% of the section must be in view to trigger
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    blogSections.forEach(section => {
        observer.observe(section);
    });
});