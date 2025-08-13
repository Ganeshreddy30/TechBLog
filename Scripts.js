document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document
    .getElementsByClassName("nav_dots")[0]
    .getElementsByTagName("button");

  // Show first slide immediately
  slides[slideIndex].style.display = "block";

  function showSlides() {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Increment slide index
    slideIndex++;

    // Reset to first slide if we've reached the end
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }

    // Show current slide
    slides[slideIndex].style.display = "block";

    // Update active dot
    for (let j = 0; j < dots.length; j++) {
      dots[j].className = dots[j].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";

    // Change slide every 5 seconds
    setTimeout(showSlides, 5000);
  }

  // Start slideshow after a brief delay
  setTimeout(showSlides, 5000);

  // Add click event listeners to dots
  for (let k = 0; k < dots.length; k++) {
    dots[k].addEventListener("click", function () {
      // Clear any pending timeout
      clearTimeout(window.slideTimeout);

      // Update slide index to clicked dot
      slideIndex = k;

      // Hide all slides
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      // Show selected slide
      slides[slideIndex].style.display = "block";

      // Update active dots
      for (let j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" active", "");
      }
      dots[slideIndex].className += " active";

      // Restart the slideshow timer
      window.slideTimeout = setTimeout(showSlides, 5000);
    });
  }
});
