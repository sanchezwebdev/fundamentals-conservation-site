  // Get the checkbox and menu-icon elements
  const checkbox = document.getElementById("openSidebarMenu");
  const menuIcon = document.querySelector(".menu-icon");

  // Add an event listener to the checkbox for changes
  checkbox.addEventListener("change", function () {
    // Update the menu-icon innerHTML based on the checkbox state
    menuIcon.innerHTML = checkbox.checked ? "close" : "menu";
    console.log(checkbox.checked);

  });