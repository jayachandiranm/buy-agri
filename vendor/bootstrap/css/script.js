document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartItems = [];

  addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
          const product = button.closest('.product'); // Get the closest parent with class 'product'
          if (!product) {
              console.error('Product element not found');
              return;
          }

          const productName = product.querySelector('h3');
          const productPrice = product.querySelector('p');

          if (!productName || !productPrice) {
              console.error('Product name or price element not found');
              return;
          }

          const productDetails = {
              name: productName.innerText,
              price: productPrice.innerText
          };

          cartItems.push(productDetails);

          alert(`${productDetails.name} added to cart!`);

          console.log(cartItems);
      });
  });
});