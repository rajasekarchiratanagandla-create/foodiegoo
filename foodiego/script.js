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
