
// String array loop
const words = ["Conservation", "Sustainabiliy", "Reforestation", "Preservation", "Stewardship"];
let currentIndex = 0;
const wordContainer = document.getElementById("text-overlay");
function rotateWords() {
    wordContainer.style.opacity = 0;
    setTimeout(() => {
    wordContainer.innerHTML = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length;
        wordContainer.style.opacity = 1;
  }, 1000);
}
rotateWords();
setInterval(rotateWords, 2700); 