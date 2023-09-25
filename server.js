// Sample JavaScript code for adding products to the cart and calculating the total

let cart = [];
let cartTotal = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    cartTotal += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
    });

    cartTotalElement.textContent = cartTotal.toFixed(2);
}
