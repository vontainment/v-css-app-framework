// attach a function to the document that will execute once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // select all elements with the class 'fade-in'
  const fadeInElements = document.querySelectorAll(".fade-in");

  // define a function to check visibility of each 'fade-in' element
  function checkVisibility() {
    // loop through each 'fade-in' element
    fadeInElements.forEach(function (element) {
      // get the bounding rectangle of the current element
      const rect = element.getBoundingClientRect();
      // get the window height
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // check if the element is within the viewport
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        // add the class 'is-visible' to the element if it's within the viewport
        element.classList.add("is-visible");
      }
    });
  }

  // call the checkVisibility function when the user scrolls
  window.addEventListener("scroll", checkVisibility);
  // call the checkVisibility function when the user resizes the window
  window.addEventListener("resize", checkVisibility);
  // call the checkVisibility function when the page has finished loading
  window.addEventListener("load", checkVisibility);
});
