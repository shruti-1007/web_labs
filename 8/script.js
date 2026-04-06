// Products array
let products = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Headphones", price: 50 },
    { id: 3, name: "Smartphone", price: 300 }
];

// Cart array
let cart = [];

// DOM elements
const productsDiv = document.getElementById("products");
const cartDiv = document.getElementById("cart");
const totalSpan = document.getElementById("total");

// Render products
function renderProducts() {
    productsDiv.innerHTML = "";
    products.forEach(prod => {
        let prodDiv = document.createElement("div");
        prodDiv.className = "product";
        prodDiv.innerHTML = `
            <h3>${prod.name}</h3>
            <p>Price: $${prod.price}</p>
            <button onclick="addToCart(${prod.id})">Add to Cart</button>
        `;
        productsDiv.appendChild(prodDiv);
    });
}

// Add product to cart
function addToCart(id) {
    let item = products.find(p => p.id === id);
    let cartItem = cart.find(c => c.id === id);
    if(cartItem){
        cartItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    renderCart();
}

// Remove product from cart
function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    renderCart();
}

// Update total price
function updateTotal() {
    let total = 0;
    cart.forEach(item => total += item.price * item.quantity);
    totalSpan.innerText = total;
}

// Render cart
function renderCart() {
    cartDiv.innerHTML = "";
    cart.forEach(item => {
        let itemDiv = document.createElement("div");
        itemDiv.className = "cart-item";
        itemDiv.innerHTML = `
            <h4>${item.name}</h4>
            <p>Price: $${item.price}</p>
            <label>Qty: <input type="number" min="1" value="${item.quantity}" onchange="changeQty(${item.id}, this.value)"></label>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartDiv.appendChild(itemDiv);
    });
    updateTotal();
}

// Change quantity
function changeQty(id, qty) {
    let cartItem = cart.find(c => c.id === id);
    cartItem.quantity = Number(qty);
    renderCart();
}

// Initialize
renderProducts();
renderCart();