document.addEventListener("DOMContentLoaded", () => {
    const cartOverlay = document.querySelector(".cart-overlay");
    const cartToggle = document.querySelector(".cart-toggle");
    const closeCartBtn = document.getElementById("close-cart");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");
    let cartArray = [];

    cartToggle.addEventListener("click", () => {
        cartOverlay.classList.toggle("active");
    });

    closeCartBtn.addEventListener("click", () => {
        cartOverlay.classList.remove("active");
    });

    document.querySelectorAll(".btn-buy").forEach(button => {
        button.addEventListener("click", function () {
            const box = this.closest(".box-item");
            const name = box.getAttribute("data-name");
            const price = parseFloat(box.getAttribute("data-price"));

            addToCart(name, price);
        });
    });

    function addToCart(name, price) {
        let existingItem = cartArray.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartArray.push({ name, price, quantity: 1 });
        }
        updateCart();
    }

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0, itemCount = 0;
        cartArray.forEach(item => {
            total += item.price * item.quantity;
            itemCount += item.quantity;
            cartItems.innerHTML += `<li>${item.name} x${item.quantity} - ${item.price.toFixed(2)}€</li>`;
        });

        cartTotal.textContent = total.toFixed(2) + "€";
        cartCount.textContent = itemCount;
    }
});
