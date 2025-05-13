// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle functionality with the toggle switch
  const themeToggleInput = document.getElementById('theme-toggle-input');
  
  if (themeToggleInput) {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      themeToggleInput.checked = true;
    }
    
    // Add event listener for theme toggle
    themeToggleInput.addEventListener('change', function() {
      document.body.classList.toggle('dark-theme');
      
      // Save theme preference
      const isDarkTheme = document.body.classList.contains('dark-theme');
      localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    });
  }
  
  // Back to top functionality
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  // Mobile menu toggle if needed (can be implemented later)
});
