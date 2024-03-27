document.addEventListener("DOMContentLoaded", function() {
    const categories = document.querySelectorAll('.category');
    const skills = document.querySelectorAll('.skill');
  
    categories.forEach(category => {
      category.addEventListener('click', () => {
        const selectedCategoryId = category.id;
        
        // Remove 'active' class from all categories
        categories.forEach(cat => {
          cat.classList.remove('active');
        });
        
        // Add 'active' class to the selected category
        category.classList.add('active');
        
        // Hide all skills
        skills.forEach(skill => {
          skill.style.display = 'none';
        });
        
        // Show the corresponding skill based on the selected category
        const selectedSkill = document.querySelector(`.${selectedCategoryId}`);
        selectedSkill.style.display = 'block';
      });
    });
  });