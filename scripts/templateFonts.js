// Function to adjust the font size based on the viewport width
function adjustFontSize() {
  const viewportWidth = window.innerWidth;
  const customText = document.getElementById("text");
  if (viewportWidth <= 710) {
      const fontSize = Math.min(viewportWidth / 20, 20);
      customText.style.fontSize = `${fontSize}px`; 
  } else {
      const fontSize = Math.min(viewportWidth / 50, 52);
      customText.style.fontSize = `${fontSize}px`; 
  }
}

adjustFontSize();


window.addEventListener("resize", adjustFontSize);
