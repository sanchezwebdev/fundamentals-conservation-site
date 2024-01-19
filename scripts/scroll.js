// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
  // Get all elements with the class 'text'
  const textElements = document.getElementsByClassName('text');

  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  // Function to handle the scroll event
  function handleScroll() {
      // Loop through each 'text' element
      for (const textElement of textElements) {
          // Check if the element is in the viewport
          if (isElementInViewport(textElement)) {
              // If in the viewport, set opacity to 1 and translateY to 0
              textElement.style.opacity = '1';
              textElement.style.transform = 'translateY(0)';
          }
      }
  }

  // Call handleScroll once to check initial state
  handleScroll();

  // Add a scroll event listener to trigger handleScroll on scroll
  window.addEventListener('scroll', handleScroll);
});
