const products = [
  { id: 1, name: "Classic Pullover Hoodie", price: 79.99, image: "/api/placeholder/250/300", link: "product-detail.php?id=1" },
  { id: 2, name: "Zip-Up Hoodie", price: 89.99, image: "/api/placeholder/250/300", link: "product-detail.php?id=2" },
  { id: 3, name: "Oversized Hoodie", price: 69.99, image: "/api/placeholder/250/300", link: "product-detail.php?id=3" },
  { id: 4, name: "Graphic Print Hoodie", price: 59.99, image: "/api/placeholder/250/300", link: "product-detail.php?id=4" },
  { id: 5, name: "Comfort Fleece Hoodie", price: 99.99, image: "/api/placeholder/250/300", link: "product-detail.php?id=5" },
  { id: 6, name: "Vintage Hoodie", price: 79.99, image: "/api/placeholder/250/300", link: "product-detail.php?id=6" }
];

let visibleProducts = 3; // Number of products visible at once

// Function to render products on the page
function renderProducts() {
  const productGrid = document.getElementById('productGrid');
  productGrid.innerHTML = ''; // Clear existing products

  const visibleProductsArray = products.slice(0, visibleProducts);
  visibleProductsArray.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
          <a href="${product.link}">
              <div class="product-image">
                  <img src="${product.image}" alt="${product.name}">
              </div>
              <div class="product-info">
                  <div class="product-title">${product.name}</div>
                  <div class="product-price">$${product.price}</div>
                  <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
              </div>
          </a>
      `;
      productGrid.appendChild(productCard);
  });
}

// Function to add items to the cart
function addToCart(productId) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const product = products.find(p => p.id === productId);
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(${product.name} added to cart!);
}

// Function to sort products by price
function sortProducts() {
  const sortOption = document.getElementById('sortSelect').value;
  if (sortOption === 'low-to-high') {
      products.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'high-to-low') {
      products.sort((a, b) => b.price - a.price);
  }
  renderProducts();
}

// Function to load more products
function loadMore() {
  visibleProducts += 3;
  renderProducts();
}

// Initial render
renderProducts();
Write to Ezra Orizal
