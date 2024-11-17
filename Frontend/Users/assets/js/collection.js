// Filter categories based on search input
function filterCategories() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const categoryCards = document.querySelectorAll('.category-card');

  categoryCards.forEach(card => {
      const categoryName = card.querySelector('h3').textContent.toLowerCase();
      if (categoryName.includes(searchInput)) {
          card.style.display = 'block';
      } else {
          card.style.display = 'none';
      }
  });
}

// Toggle between grid and list views
function toggleView(view) {
  const categoryContainer = document.getElementById('categoryContainer');

  if (view === 'grid') {
      categoryContainer.classList.remove('list-view');
      categoryContainer.classList.add('grid-view');
  } else {
      categoryContainer.classList.remove('grid-view');
      categoryContainer.classList.add('list-view');
  }
}
