let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({name, price});
    total += price;

    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart");
    cartList.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });

    document.getElementById("total").innerText = total;
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Order placed! Thank you for shopping.");
    cart = [];
    total = 0;
    updateCart();
}
