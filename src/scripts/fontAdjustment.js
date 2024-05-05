// Function to adjust the font size of the top text overlay
function adjustTopFontSize() {
  const viewportWidth = window.innerWidth;
  const customText = document.getElementById("text-overlay");

  if (viewportWidth <= 710) {
    const fontSize = Math.min((viewportWidth / 12), 52);
    customText.style.fontSize = `${fontSize}px`;
  } else {
    const fontSize = Math.min((viewportWidth / 20), 72);
    customText.style.fontSize = `${fontSize}px`;
  }
}

// Function to adjust the font size of bucket text
function adjustBucketFontSize() {
  const viewportWidth = window.innerWidth;
  const bucketTextElements = document.getElementsByClassName("bucket-text");
  for (let i = 0; i < bucketTextElements.length; i++) {
    const customText = bucketTextElements[i];

    if (viewportWidth <= 710) {
      const fontSize = Math.min((viewportWidth / 12), 52);
      customText.style.fontSize = `${fontSize}px`;
    } else {
      const fontSize = Math.min((viewportWidth / 15), 56);
      customText.style.fontSize = `${fontSize}px`;
    }
  }
}

// Function to adjust the font size of the lake title
function adjustLakeTitleSize() {
  const viewportWidth = window.innerWidth;
  const customText = document.getElementById("lake-title");
  if (viewportWidth <=710){
  const fontSize = Math.min((viewportWidth / 10), 68); 
  customText.style.fontSize = `${fontSize}px`;
  } else {
    const fontSize = Math.min((viewportWidth / 10), 72); 
    customText.style.fontSize = `${fontSize}px`;
  }
}

// Function to adjust the font size of goal titles
function adjustGoalTitleSize() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const bucketTextElements = document.getElementsByClassName("goal-title");
  for (let i = 0; i < bucketTextElements.length; i++) {
    const customText = bucketTextElements[i];

    if (viewportWidth <= 710 && viewportHeight >=800) {
      const fontSize = Math.min((viewportWidth / 20), 52);
      customText.style.fontSize = `${fontSize}px`;
    }
    else if (viewportWidth <= 710 && viewportHeight <=800) {
      const fontSize = Math.min((viewportWidth / 20), 52);
      customText.style.fontSize = `${fontSize}px`;
    } else {
      const fontSize = Math.min((viewportWidth / 25), 36);
      customText.style.fontSize = `${fontSize}px`;
    }
  }
}

// Function to adjust the font size of goal icons
function adjustGoalIconSize() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const bucketTextElements = document.getElementsByClassName("icon");
  for (let i = 0; i < bucketTextElements.length; i++) {
    const customText = bucketTextElements[i];

    if (viewportWidth <= 710 && viewportHeight >=800) {
      const fontSize = Math.min((viewportWidth / 2), 40);
      customText.style.fontSize = `${fontSize}px`;
    }  
    else if (viewportWidth <= 710 && viewportHeight <=800) {
      const fontSize = Math.min((viewportWidth / 5), 52);
      customText.style.fontSize = `${fontSize}px`;
    }
    else {
      const fontSize = Math.min((viewportWidth / 20), 52);
      customText.style.fontSize = `${fontSize}px`;
    }
  }
}

// Function to adjust the font size of the donate text
function adjustDonateSize() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const customText = document.getElementById("donate-inner-text");
  if (viewportWidth <= 710){
  const fontSize = Math.min((viewportWidth / 15), 24); 
  customText.style.fontSize = `${fontSize}px`;
  }   
  else {
    const fontSize = Math.min((viewportWidth / 25), 48); 
    customText.style.fontSize = `${fontSize}px`;
  }
}

// Call functions to set initial font sizes
adjustTopFontSize()
adjustBucketFontSize()
adjustLakeTitleSize()
adjustGoalTitleSize()
adjustGoalIconSize()
adjustDonateSize()

// Event listeners for window resize
  window.addEventListener("resize", adjustTopFontSize);
  window.addEventListener("resize", adjustBucketFontSize);
  window.addEventListener("resize", adjustLakeTitleSize);
  window.addEventListener("resize", adjustGoalTitleSize);
  window.addEventListener("resize", adjustGoalIconSize);
  window.addEventListener("resize", adjustDonateSize);
  
  
 