// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
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
      for (const textElement of textElements) {
          if (isElementInViewport(textElement)) {
              textElement.style.opacity = '1';
              textElement.style.transform = 'translateY(0)';
          }
      }
  }

  handleScroll();

  window.addEventListener('scroll', handleScroll);
});
