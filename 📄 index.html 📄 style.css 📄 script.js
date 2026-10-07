<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FoodieGo</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>

<nav>
  <h1>🍴 FoodieGo</h1>

  <div class="nav-links">
    <a href="#home">Home</a>
    <a href="#restaurants">Restaurants</a>
    <a href="#menu">Menu</a>

    <button onclick="openCart()">
      🛒 Cart <span id="cartCount">0</span>
    </button>
  </div>
</nav>


<!-- HOME -->

<section class="hero" id="home">

  <div class="food-bg">
    🍕 🍔 🍟 🍗 🍜 🍝 🍛 🍣 🍰 🥤
    🌮 🥪 🌭 🍩 🧁 🍦 🥗 🍲 🍚 🍗
  </div>

  <div class="hero-content">

    <p>WELCOME TO FOODIEGO</p>

    <h2>
      Delicious food<br>
      <span>delivered to you.</span>
    </h2>

    <p>
      Order from your favorite restaurants
      and enjoy amazing food at home.
    </p>

    <input
      id="search"
      type="text"
      placeholder="🔍 Search food or restaurant..."
      onkeyup="searchRestaurants()"
    >

  </div>

</section>


<!-- CATEGORIES -->

<section>

  <h2>🍽️ Food Categories</h2>

  <div class="categories">

    <button onclick="filterFood('all')">All</button>
    <button onclick="filterFood('pizza')">🍕 Pizza</button>
    <button onclick="filterFood('burger')">🍔 Burger</button>
    <button onclick="filterFood('indian')">🍛 Indian</button>
    <button onclick="filterFood('chinese')">🍜 Chinese</button>
    <button onclick="filterFood('dessert')">🍰 Desserts</button>
    <button onclick="filterFood('drinks')">🥤 Drinks</button>

  </div>

</section>


<!-- RESTAURANTS -->

<section id="restaurants">

  <h2>🏪 Popular Restaurants</h2>

  <div class="restaurant-grid">


    <div class="restaurant" data-name="pizza palace pizza">

      <div class="restaurant-icon pizza">
        🍕
      </div>

      <h3>Pizza Palace</h3>

      <p>⭐ 4.6 · 25-35 min</p>

      <p>Pizza • Italian • Fast Food</p>

      <button onclick="showMenu('pizza')">
        View Menu
      </button>

    </div>


    <div class="restaurant" data-name="burger house burger">

      <div class="restaurant-icon burger">
        🍔
      </div>

      <h3>Burger House</h3>

      <p>⭐ 4.7 · 20-30 min</p>

      <p>Burgers • Fries • Fast Food</p>

      <button onclick="showMenu('burger')">
        View Menu
      </button>

    </div>


    <div class="restaurant" data-name="spice kitchen indian biryani">

      <div class="restaurant-icon indian">
        🍛
      </div>

      <h3>Spice Kitchen</h3>

      <p>⭐ 4.5 · 30-40 min</p>

      <p>Indian • Biryani • Curry</p>

      <button onclick="showMenu('indian')">
        View Menu
      </button>

    </div>


    <div class="restaurant" data-name="dragon bowl chinese noodles">

      <div class="restaurant-icon chinese">
        🍜
      </div>

      <h3>Dragon Bowl</h3>

      <p>⭐ 4.6 · 25-35 min</p>

      <p>Chinese • Noodles • Rice</p>

      <button onclick="showMenu('chinese')">
        View Menu
      </button>

    </div>

  </div>

</section>


<!-- MENU -->

<section id="menu">

  <h2 id="menuTitle">
    🍽️ Select a restaurant
  </h2>

  <div id="foodItems" class="food-grid">

    <p>
      Click "View Menu" on a restaurant to see its food.
    </p>

  </div>

</section>


<!-- CART -->

<section id="cart" class="cart-section">

  <h2>🛒 Your Cart</h2>

  <div id="cartItems">
    <p>Your cart is empty.</p>
  </div>

  <div class="bill">

    <p>
      Item Total:
      <span>₹<span id="itemTotal">0</span></span>
    </p>

    <p>
      Delivery Fee:
      <span>₹<span id="delivery">0</span></span>
    </p>

    <p>
      Taxes:
      <span>₹<span id="tax">0</span></span>
    </p>

    <hr>

    <h3>
      Total:
      <span>₹<span id="total">0</span></span>
    </h3>

    <button onclick="openCheckout()">
      Proceed to Checkout
    </button>

  </div>

</section>


<!-- CHECKOUT -->

<section id="checkout" class="checkout">

  <h2>📦 Checkout</h2>

  <div class="checkout-box">

    <h3>Delivery Details</h3>

    <input
      id="customerName"
      type="text"
      placeholder="Your name"
    >

    <input
      id="phone"
      type="text"
      placeholder="Phone number"
    >

    <textarea
      id="address"
      placeholder="Delivery address"
    ></textarea>


    <h3>Payment Method</h3>

    <label>
      <input type="radio" name="payment" value="COD" checked>
      💵 Cash on Delivery
    </label>

    <br>

    <label>
      <input type="radio" name="payment" value="UPI">
      📱 UPI
    </label>

    <br>

    <label>
      <input type="radio" name="payment" value="CARD">
      💳 Card
    </label>


    <button onclick="placeOrder()">
      Place Order
    </button>

  </div>

</section>


<!-- ORDER SUCCESS -->

<section id="success" class="success">

  <h2>🎉 Order Placed!</h2>

  <p>Your food is being prepared.</p>

  <div class="tracking">

    <p>✅ Order Confirmed</p>
    <p>✅ Restaurant Accepted</p>
    <p>🟠 Preparing Food</p>
    <p>⚪ Out for Delivery</p>
    <p>⚪ Delivered</p>

  </div>

  <button onclick="goHome()">
    Continue Shopping
  </button>

</section>


<footer>

  <h2>🍴 FoodieGo</h2>

  <p>
    Good food. Good mood. ❤️
  </p>

</footer>


<script src="script.js"></script>

</body>
</html>


let cart = [];

const menus = {

  pizza: {
    name: "🍕 Pizza Palace",

    foods: [
      ["Margherita Pizza", 199, "🍕"],
      ["Cheese Burst Pizza", 299, "🍕"],
      ["Farmhouse Pizza", 279, "🍕"],
      ["Paneer Tikka Pizza", 299, "🍕"],
      ["Chicken Pepperoni", 349, "🍕"],
      ["Garlic Bread", 129, "🥖"],
      ["Cheesy Garlic Bread", 169, "🥖"]
    ]
  },


  burger: {
    name: "🍔 Burger House",

    foods: [
      ["Classic Burger", 149, "🍔"],
      ["Cheese Burger", 179, "🍔"],
      ["Chicken Burger", 199, "🍔"],
      ["Double Cheese Burger", 249, "🍔"],
      ["Spicy Chicken Burger", 229, "🍔"],
      ["French Fries", 99, "🍟"],
      ["Cheese Fries", 139, "🍟"]
    ]
  },


  indian: {
    name: "🍛 Spice Kitchen",

    foods: [
      ["Chicken Biryani", 180, "🍛"],
      ["Mutton Biryani", 260, "🍛"],
      ["Paneer Biryani", 170, "🍛"],
      ["Butter Chicken", 220, "🍗"],
      ["Paneer Tikka", 160, "🍢"],
      ["Masala Dosa", 100, "🥞"],
      ["Veg Thali", 180, "🍱"]
    ]
  },


  chinese: {
    name: "🍜 Dragon Bowl",

    foods: [
      ["Chicken Noodles", 180, "🍜"],
      ["Veg Noodles", 140, "🍜"],
      ["Chicken Fried Rice", 190, "🍚"],
      ["Veg Fried Rice", 150, "🍚"],
      ["Schezwan Noodles", 200, "🍜"],
      ["Manchurian", 170, "🥡"],
      ["Spring Rolls", 120, "🥟"]
    ]
  }

};


/* SHOW MENU */

function showMenu(type) {

  const restaurant = menus[type];

  document.getElementById("menuTitle").textContent =
    restaurant.name + " - Menu";

  let html = "";

  restaurant.foods.forEach(function(food, index) {

    html += `

      <div class="food-item">

        <div class="food-emoji">
          ${food[2]}
        </div>

        <div class="food-info">

          <h3>${food[0]}</h3>

          <p>
            Delicious ${food[0].toLowerCase()}
          </p>

          <span class="price">
            ₹${food[1]}
          </span>

        </div>

        <button
          onclick="addFood('${food[0]}', ${food[1]})"
        >
          ADD
        </button>

      </div>

    `;

  });

  document.getElementById("foodItems").innerHTML = html;

  document.getElementById("menu").scrollIntoView({
    behavior: "smooth"
  });
}


/* ADD FOOD */

function addFood(name, price) {

  const existing = cart.find(
    item => item.name === name
  );

  if (existing) {

    existing.quantity++;

  } else {

    cart.push({
      name: name,
      price: price,
      quantity: 1
    });

  }

  updateCart();

}


/* UPDATE CART */

function updateCart() {

  let count = 0;
  let itemTotal = 0;

  cart.forEach(function(item) {

    count += item.quantity;

    itemTotal +=
      item.price * item.quantity;

  });


  document.getElementById("cartCount").textContent = count;

  document.getElementById("itemTotal").textContent =
    itemTotal;


  let delivery = 0;

  if (itemTotal > 0) {
    delivery = 40;
  }

  document.getElementById("delivery").textContent =
    delivery;


  let tax = Math.round(itemTotal * 0.05);

  document.getElementById("tax").textContent =
    tax;


  let total =
    itemTotal + delivery + tax;

  document.getElementById("total").textContent =
    total;


  displayCart();

}


/* DISPLAY CART */

function displayCart() {

  const box =
    document.getElementById("cartItems");

  if (cart.length === 0) {

    box.innerHTML =
      "<p>Your cart is empty.</p>";

    return;

  }


  let html = "";


  cart.forEach(function(item, index) {

    html += `

      <div class="cart-row">

        <span>
          ${item.name}
        </span>

        <span>
          ₹${item.price}
        </span>

        <div class="quantity">

          <button
            onclick="decrease(${index})"
          >
            −
          </button>

          ${item.quantity}

          <button
            onclick="increase(${index})"
          >
            +
          </button>

        </div>

        <button
          class="remove"
          onclick="removeItem(${index})"
        >
          ×
        </button>

      </div>

    `;

  });


  box.innerHTML = html;

}


/* INCREASE */

function increase(index) {

  cart[index].quantity++;

  updateCart();

}


/* DECREASE */

function decrease(index) {

  cart[index].quantity--;

  if (cart[index].quantity <= 0) {

    cart.splice(index, 1);

  }

  updateCart();

}


/* REMOVE */

function removeItem(index) {

  cart.splice(index, 1);

  updateCart();

}


/* OPEN CART */

function openCart() {

  document.getElementById("cart")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* CHECKOUT */

function openCheckout() {

  if (cart.length === 0) {

    alert("Please add food to your cart first.");

    return;

  }

  document.getElementById("checkout")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* PLACE ORDER */

function placeOrder() {

  const name =
    document.getElementById("customerName").value;

  const phone =
    document.getElementById("phone").value;

  const address =
    document.getElementById("address").value;


  if (
    name === "" ||
    phone === "" ||
    address === ""
  ) {

    alert(
      "Please enter your name, phone number and address."
    );

    return;

  }


  document.getElementById("success").style.display =
    "block";


  document.getElementById("success")
    .scrollIntoView({
      behavior: "smooth"
    });


  cart = [];

  updateCart();

}


/* SEARCH */

function searchRestaurants() {

  const search =
    document.getElementById("search")
      .value
      .toLowerCase();


  const restaurants =
    document.querySelectorAll(".restaurant");


  restaurants.forEach(function(restaurant) {

    const name =
      restaurant
        .getAttribute("data-name")
        .toLowerCase();


    if (name.includes(search)) {

      restaurant.style.display = "block";

    } else {

      restaurant.style.display = "none";

    }

  });

}


/* CATEGORY FILTER */

function filterFood(category) {

  const restaurants =
    document.querySelectorAll(".restaurant");


  restaurants.forEach(function(restaurant) {

    const name =
      restaurant
        .getAttribute("data-name")
        .toLowerCase();


    if (
      category === "all" ||
      name.includes(category)
    ) {

      restaurant.style.display = "block";

    } else {

      restaurant.style.display = "none";

    }

  });

}


/* HOME */

function goHome() {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #fff8f2;
  color: #222;
}


/* NAVBAR */

nav {
  height: 75px;
  padding: 0 7%;

  display: flex;
  align-items: center;

  background: white;

  position: sticky;
  top: 0;
  z-index: 10;

  box-shadow: 0 3px 15px #0002;
}

nav h1 {
  color: #ff4d2d;
}

.nav-links {
  margin-left: auto;

  display: flex;
  align-items: center;
  gap: 25px;
}

.nav-links a {
  text-decoration: none;
  color: #444;
}

button {
  border: none;
  background: #ff4d2d;
  color: white;

  padding: 11px 18px;

  border-radius: 25px;

  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background: #e63e21;
}


/* HERO */

.hero {
  min-height: 520px;

  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  color: white;

  background:
    radial-gradient(circle at 20% 30%, #ffcc70, transparent 30%),
    radial-gradient(circle at 80% 70%, #ff477e, transparent 30%),
    linear-gradient(135deg, #ff512f, #f09819);
}

.food-bg {
  position: absolute;

  width: 120%;
  height: 120%;

  font-size: 60px;
  line-height: 2.3;
  word-spacing: 25px;

  opacity: 0.13;

  transform: rotate(-8deg);

  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-content > p:first-child {
  letter-spacing: 3px;
  font-weight: bold;
}

.hero h2 {
  font-size: 65px;
  margin: 20px 0;
}

.hero h2 span {
  color: #fff0c7;
}

.hero-content input {
  margin-top: 30px;

  width: 600px;
  max-width: 90%;

  padding: 18px 25px;

  border: none;
  outline: none;

  border-radius: 40px;

  font-size: 16px;
}


/* SECTIONS */

section:not(.hero) {
  padding: 60px 8%;
}

section h2 {
  margin-bottom: 30px;
}


/* CATEGORIES */

.categories {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.categories button {
  background: white;
  color: #333;

  border: 1px solid #eee;

  padding: 13px 20px;
}

.categories button:hover {
  background: #ff4d2d;
  color: white;
}


/* RESTAURANTS */

.restaurant-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 25px;
}

.restaurant {
  background: white;

  padding-bottom: 20px;

  border-radius: 18px;

  overflow: hidden;

  box-shadow: 0 7px 25px #0001;

  transition: 0.3s;
}

.restaurant:hover {
  transform: translateY(-7px);
}

.restaurant-icon {
  height: 180px;

  display: grid;
  place-items: center;

  font-size: 85px;
}

.pizza {
  background: linear-gradient(135deg, #ff9966, #ff5e62);
}

.burger {
  background: linear-gradient(135deg, #f6d365, #fda085);
}

.indian {
  background: linear-gradient(135deg, #ff9966, #ffcc33);
}

.chinese {
  background: linear-gradient(135deg, #ff5f6d, #ffc371);
}

.restaurant h3,
.restaurant p,
.restaurant button {
  margin-left: 20px;
}

.restaurant p {
  color: #777;
}


/* MENU */

#menu {
  background: #fff;
}

.food-grid {
  max-width: 850px;
}

.food-item {
  background: white;

  padding: 20px;

  margin: 15px 0;

  border-radius: 15px;

  display: flex;

  align-items: center;

  box-shadow: 0 4px 15px #0001;
}

.food-emoji {
  font-size: 50px;

  margin-right: 20px;
}

.food-info {
  flex: 1;
}

.food-info h3 {
  margin: 0;
}

.food-info p {
  color: #777;
}

.price {
  font-weight: bold;
  color: #ff4d2d;
  font-size: 18px;
}


/* CART */

.cart-section {
  background: #181818;

  color: white;
}

.cart-row {
  max-width: 800px;

  padding: 15px;

  margin: 10px 0;

  background: #292929;

  border-radius: 10px;

  display: flex;

  align-items: center;

  gap: 15px;
}

.cart-row span:first-child {
  flex: 1;
}

.quantity button {
  padding: 5px 12px;
  border-radius: 5px;
}

.remove {
  background: #d32f2f;
}

.bill {
  max-width: 800px;

  margin-top: 30px;

  background: #242424;

  padding: 25px;

  border-radius: 15px;
}

.bill p {
  display: flex;
  justify-content: space-between;

  color: #ccc;
}

.bill h3 {
  display: flex;
  justify-content: space-between;
}


/* CHECKOUT */

.checkout {
  background: #fff8f2;
}

.checkout-box {
  max-width: 600px;

  background: white;

  padding: 30px;

  border-radius: 15px;

  box-shadow: 0 5px 20px #0001;
}

.checkout-box input,
.checkout-box textarea {
  width: 100%;

  padding: 14px;

  margin: 8px 0 15px;

  border: 1px solid #ddd;

  border-radius: 8px;

  outline: none;
}

.checkout-box textarea {
  height: 100px;
}

.checkout-box label {
  display: inline-block;

  margin: 7px 0;
}

.checkout-box button {
  margin-top: 20px;
}


/* SUCCESS */

.success {
  display: none;

  text-align: center;

  background: #e8f5e9;
}

.tracking {
  max-width: 500px;

  margin: 30px auto;

  padding: 20px;

  background: white;

  border-radius: 15px;

  text-align: left;
}

.tracking p {
  padding: 10px;

  border-bottom: 1px solid #eee;
}


/* FOOTER */

footer {
  padding: 50px;

  text-align: center;

  background: #111;

  color: white;
}

footer h2 {
  color: #ff4d2d;
}


/* MOBILE */

@media(max-width: 900px) {

  .restaurant-grid {
    grid-template-columns: repeat(2, 1fr);
  }

}

@media(max-width: 600px) {

  nav {
    padding: 10px 5%;
  }

  nav h1 {
    font-size: 20px;
  }

  .nav-links {
    gap: 8px;
  }

  .nav-links a {
    display: none;
  }

  .hero h2 {
    font-size: 42px;
  }

  .restaurant-grid {
    grid-template-columns: 1fr;
  }

  .food-item {
    flex-wrap: wrap;
  }

}

