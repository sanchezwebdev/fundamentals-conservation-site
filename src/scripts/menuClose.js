  const checkbox = document.getElementById("openSidebarMenu");
  const menuIcon = document.querySelector(".menu-icon");

  checkbox.addEventListener("change", function () {
    menuIcon.innerHTML = checkbox.checked ? "close" : "menu";
  });