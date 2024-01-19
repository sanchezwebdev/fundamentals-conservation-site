const words = ["Conservation", "Sustainabiliy", "Reforestation", "Preservation", "Stewardship"];
let currentIndex = 0;

const wordContainer = document.getElementById("text-overlay");

function rotateWords() {
  // Fade out
  wordContainer.style.opacity = 0;

  // Wait for fade-out to complete, then update word and fade in
  setTimeout(() => {
    wordContainer.innerHTML = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length;

    // Fade in
    wordContainer.style.opacity = 1;
  }, 1000); // 1s is the duration of the fade-out transition
}

// Initial rotation
rotateWords();

// Set interval for continuous rotation
setInterval(rotateWords, 2700); 