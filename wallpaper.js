// --- PART 1: THE ACTIVE CLICK EVENT LISTENERS (Same as before) ---
const tabContainers = document.querySelectorAll('.version-tabs');

tabContainers.forEach(container => {
  const buttons = container.querySelectorAll('button');
  
  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      const clickedButton = event.target;
      const version = clickedButton.textContent.toLowerCase(); 
      
      // Update Preview Image
      const heroSection = clickedButton.closest('.hero');
      const previewImg = heroSection.querySelector('.preview img');
      if (previewImg && previewImg.dataset[version]) {
        previewImg.src = previewImg.dataset[version];
      }
      
      // Update Resolution Text
      const resolutionTxt = document.querySelector('.resolution-text');
      if (resolutionTxt && resolutionTxt.dataset[version]) {
        resolutionTxt.textContent = resolutionTxt.dataset[version];
      }
      
      // Update active class UI
      buttons.forEach(btn => btn.classList.remove('active'));
      clickedButton.classList.add('active');
    });
  });
});

// --- PART 2: INITIALIZATION ON PAGE LOAD ---
document.addEventListener("DOMContentLoaded", () => {
  // Find the first version button on the page
  const firstButton = document.querySelector('.version-tabs button');

  // Simulate a click on it
  if (firstButton) {
    firstButton.click();
  }
});