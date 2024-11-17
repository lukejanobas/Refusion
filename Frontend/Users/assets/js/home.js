// Function to filter products based on search input
function filterProducts() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
      const productName = card.querySelector('.product-title').textContent.toLowerCase();
      if (productName.includes(searchInput)) {
          card.style.display = 'block';
      } else {
          card.style.display = 'none';
      }
  });
}

// Cart functionality - adding items to the cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
      const productName = this.getAttribute('data-product');
      cart.push(productName);

      // Save the updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));

      alert(${productName} added to cart!);
  });
});
Ezra
