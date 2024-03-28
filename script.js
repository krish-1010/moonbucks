document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("index")) {
    displayProducts();
  } else if (window.location.pathname.includes("cart")) {
    displayCart();
  }
});

const products = [
  { id: 1, name: "Herbal Tea", price: 5, imgsrc: "./imgs/herbal.webp" },
  { id: 2, name: "Basil Tea", price: 4, imgsrc: "./imgs/basil.webp" },
  { id: 3, name: "Ancient Tea", price: 6, imgsrc: "./imgs/ancient.webp" },
  { id: 4, name: "WeightLoss Tea", price: 5, imgsrc: "./imgs/weightloss.webp" },
  { id: 5, name: "Lemon Tea", price: 4, imgsrc: "./imgs/lemon.webp" },
  { id: 6, name: "Magic Tea", price: 6, imgsrc: "./imgs/magic.webp" },
  { id: 7, name: "Mint Tea", price: 5, imgsrc: "./imgs/mint.webp" },
  { id: 8, name: "Star Tea", price: 4, imgsrc: "./imgs/startea.webp" },
  { id: 9, name: "WhiteRose Tea", price: 6, imgsrc: "./imgs/whiterose.webp" },
  { id: 10, name: "Chamomile Tea", price: 6, imgsrc: "./imgs/Chamomile.webp" },
];

function displayProducts() {
  const container = document.getElementById("product-container");
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <div class="pc">
    <div class="ic">
      <img class="imag" src=${product.imgsrc} alt="tea image" />
    </div>
    <div>${product.name}</div>
    <div>
      <p>Price: ₹${product.price}/-</p>
    </div>
    <div><button onclick="addToCart(${product.id})">Add to Cart</button></div>
  </div>
      `;
    container.appendChild(productDiv);
  });
}

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart`);
}

function displayCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const itemsContainer = document.getElementById("cart-items");
  itemsContainer.innerHTML = ""; // Clear existing items
  const totalPriceElement = document.getElementById("total-price");
  let totalPrice = 0;

  cart.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");
    itemDiv.innerHTML = `<div class="pc tempb">
    <div class="ic">
      <img class="imag" src=${item.imgsrc} alt="tea image" />
    </div>
    <div>${item.name}</div>
    <div>
      <p>Price: ₹${item.price}/-</p>
    </div>
    <button onclick="removeFromCart(${index})">Remove</button>
  </div>
                           
                           <div class="temp"></div>`;
    itemsContainer.appendChild(itemDiv);
    totalPrice += item.price;
  });

  totalPriceElement.textContent = totalPrice;
}
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1); // Remove item at the specified index
  localStorage.setItem("cart", JSON.stringify(cart)); // Update the cart in local storage
  displayCart(); // Refresh the cart display
}
