document.addEventListener('DOMContentLoaded', () => {
  const paymentMethods = document.querySelectorAll('input[name="payment"]');
  const cardDetails = document.querySelector('.card-details');
  const checkoutForm = document.getElementById('checkout-form');

  const togglePaymentMethod = () => {
      const selectedMethod = document.querySelector('input[name="payment"]:checked').value;
      cardDetails.style.display = selectedMethod === 'card' ? 'block' : 'none';
  };

  const validateForm = () => {
      const requiredFields = ['email', 'fullname', 'address', 'city', 'zip'];
      for (const field of requiredFields) {
          const input = document.getElementById(field);
          if (!input.value.trim()) {
              alert(Please fill in the ${field.replace('-', ' ')} field.);
              input.focus();
              return false;
          }
      }

      const selectedPayment = document.querySelector('input[name="payment"]:checked').value;
      if (selectedPayment === 'card') {
          const cardFields = ['card-number', 'expiry', 'cvv'];
          for (const field of cardFields) {
              const input = document.getElementById(field);
              if (!input.value.trim()) {
                  alert(Please fill in the ${field.replace('-', ' ')} field.);
                  input.focus();
                  return false;
              }
          }
      }

      return true;
  };

  checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (validateForm()) {
          alert('Your order has been successfully placed!');
          checkoutForm.reset();
      }
  });

  paymentMethods.forEach(method => {
      method.addEventListener('change', togglePaymentMethod);
  });

  togglePaymentMethod();
});