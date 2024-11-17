document.addEventListener('DOMContentLoaded', () => {
  const cartItems = document.querySelector('.cart-items');
  const emptyCart = document.querySelector('.empty-cart');
  const subtotalElement = document.querySelector('.subtotal');
  const totalElement = document.querySelector('.total');
  const shippingCostElement = document.querySelector('.shipping-cost');
  const clearCartButton = document.querySelector('.clear-cart-button');

  const shippingThreshold = 100.00;
  let shippingCost = 10.00;

  const updateCartTotal = () => {
      let subtotal = 0;
      document.querySelectorAll('.cart-item').forEach(item => {
          const price = parseFloat(item.dataset.price);
          const quantity = parseInt(item.querySelector('.quantity').textContent, 10);
          subtotal += price * quantity;
      });

      subtotalElement.textContent = $${subtotal.toFixed(2)};
      shippingCost = subtotal > shippingThreshold ? 0 : 10.00;
      shippingCostElement.textContent = $${shippingCost.toFixed(2)};
      totalElement.textContent = $${(subtotal + shippingCost).toFixed(2)};
  };

  const toggleEmptyCart = () => {
      if (document.querySelectorAll('.cart-item').length === 0) {
          cartItems.style.display = 'none';
          emptyCart.style.display = 'block';
      } else {
          cartItems.style.display = 'block';
          emptyCart.style.display = 'none';
      }
  };

  const saveCartToLocalStorage = () => {
      const cartData = [];
      document.querySelectorAll('.cart-item').forEach(item => {
          cartData.push({
              name: item.querySelector('.cart-item-details h3').textContent,
              price: parseFloat(item.dataset.price),
              quantity: parseInt(item.querySelector('.quantity').textContent, 10),
          });
      });
      localStorage.setItem('cart', JSON.stringify(cartData));
  };

  const loadCartFromLocalStorage = () => {
      const cartData = JSON.parse(localStorage.getItem('cart')) || [];
      cartData.forEach(item => addCartItem(item.name, item.price, item.quantity));
  };

  const addCartItem = (name, price, quantity = 1) => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.dataset.price = price;
      cartItem.innerHTML = `
          <img src="/api/placeholder/100/100" alt="${name}">
          <div class="cart-item-details">
              <h3>${name}</h3>
              <p>$${price.toFixed(2)}</p>
              <div class="quantity-selector">
                  <button class="decrease-quantity">-</button>
                  <span class="quantity">${quantity}</span>
                  <button class="increase-quantity">+</button>
              </div>
          </div>
          <button class="remove-item">×</button>
      `;
      cartItems.appendChild(cartItem);
      toggleEmptyCart();
      updateCartTotal();
  };

  cartItems.addEventListener('click', (e) => {
      const target = e.target;

      if (target.classList.contains('increase-quantity')) {
          const quantityElement = target.previousElementSibling;
          quantityElement.textContent = parseInt(quantityElement.textContent, 10) + 1;
          updateCartTotal();
          saveCartToLocalStorage();
      } else if (target.classList.contains('decrease-quantity')) {
          const quantityElement = target.nextElementSibling;
          const currentQuantity = parseInt(quantityElement.textContent, 10);
          if (currentQuantity > 1) {
              quantityElement.textContent = currentQuantity - 1;
              updateCartTotal();
              saveCartToLocalStorage();
          }
      } else if (target.classList.contains('remove-item')) {
          target.closest('.cart-item').remove();
          updateCartTotal();
          toggleEmptyCart();
          saveCartToLocalStorage();
      }
  });

  clearCartButton.addEventListener('click', () => {
      cartItems.innerHTML = '';
      updateCartTotal();
      toggleEmptyCart();
      saveCartToLocalStorage();
  });

  loadCartFromLocalStorage();
  toggleEmptyCart();
  updateCartTotal();
});
