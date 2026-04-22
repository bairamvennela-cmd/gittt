// Select elements
const searchBox = document.querySelector(".search-box");
const productCards = document.querySelectorAll(".product-card");
const cart = document.querySelector(".cart");

// Simple cart array
let cartItems = [];

// 🔍 Search Function
searchBox.addEventListener("keyup", () => {
    let filter = searchBox.value.toLowerCase();

    productCards.forEach((card) => {
        let title = card.querySelector("h4").innerText.toLowerCase();

        if (title.includes(filter)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// 🛒 Add to Cart (click product)
productCards.forEach((card) => {
    card.addEventListener("click", () => {
        let productName = card.querySelector("h4").innerText;
        cartItems.push(productName);
        updateCart();
    });
});

// 🔄 Update Cart UI
function updateCart() {
    cart.innerText = `Cart 🛒 (${cartItems.length})`;
}

// 🔔 Login Button Click
const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", () => {
    alert("Login functionality coming soon!");
});
