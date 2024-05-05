document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('donate-button');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
  
    // Open the modal when the button is clicked
    openModalBtn.addEventListener('click', function () {
        setTimeout(function () {
            modal.style.display = 'block';
            openModalBtn.style.display = 'none';
            document.body.style.overflow = 'hidden';
        }, 250);
    });
  
    // Close the modal when clicking outside the modal content
    window.addEventListener('click', function (event) {
      if (event.target !== modalContent && event.target !== openModalBtn) {
        modal.style.display = 'none';
        openModalBtn.style.display = 'block'
        document.body.style.overflow = 'auto';
      }
    });
  });
  