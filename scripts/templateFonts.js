// Function to adjust the font size based on the viewport width
function adjustFontSize() {
  // Get the current viewport width
  const viewportWidth = window.innerWidth;
  
  // Get the element with the ID 'text'
  const customText = document.getElementById("text");
  
  // Check if the viewport width is less than or equal to 710 pixels
  if (viewportWidth <= 710) {
      // Calculate the font size as the minimum of viewport width divided by 20 or 20
      const fontSize = Math.min(viewportWidth / 20, 20);
      customText.style.fontSize = `${fontSize}px`; // Set the font size of the element
  } else {
      // If the viewport width is greater than 710 pixels
      // Calculate the font size as the minimum of viewport width divided by 50 or 36
      const fontSize = Math.min(viewportWidth / 50, 52);
      customText.style.fontSize = `${fontSize}px`; // Set the font size of the element
  }
}

// Call the adjustFontSize function once to set the initial font size
adjustFontSize();

// Add a resize event listener to dynamically adjust the font size on window resize
window.addEventListener("resize", adjustFontSize);
