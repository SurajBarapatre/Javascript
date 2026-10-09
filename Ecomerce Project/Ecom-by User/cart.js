// For a get the cart container :-
//------------------------------
const cartContainer = document.getElementById("cart-container");

// For function to remove product from cart :-
//--------------------------------------------
const removeFromCart = (id) => {
// for get the cart list from local storage :-
//-------------------------------------------
  let cartList = JSON.parse(localStorage.getItem("carts")) || [];

// for filter the cart list and remove product with given id :-
//-----------------------------------------------------------
  cartList = cartList.filter((element) =>String(element.id) !== String(id));

// for update cart list in local storage :-
//-----------------------------------------
  localStorage.setItem("carts",JSON.stringify(cartList));

// for display updated cart list :-
//--------------------------------
  displayProductsFromCart();
};

// For a function to increase product quantity :-
//---------------------------------------------
const increaseQuantity = (id) => {

// for get cart list from local storage :-
//---------------------------------------
  let cartList = JSON.parse(localStorage.getItem("carts")) || [];

// for find product from cart list :-
//----------------------------------
  const product =cartList.find((element) =>String(element.id) == String(id));

// for check product exists in cart :-
//------------------------------------
  if (product) {
// for if condition quantity does not exist then set quantity to 1 :-
//---------------------------------------------------------
    if (!product.quantity) {
      product.quantity = 1;
    }

// for check quantity should not be greater than stock :-
//------------------------------------------------------
    if (product.quantity < product.stock) {
// for increase quantity by 1 :-
//--------------------------------
      product.quantity++;

    } 
    else {
// for display stock limit message :-
//-----------------------------------
      alert(`Only ${product.stock} products available in stock.`);
    }
  }

// for update cart list in local storage :-
//-----------------------------------------
  localStorage.setItem("carts",JSON.stringify(cartList));

// for display updated cart :-
//----------------------------
  displayProductsFromCart();
};

// for a function to decrease product quantity :-
//----------------------------------------------
const decreaseQuantity = (id) => {
// for get cart list from local storage :-
//----------------------------------------
  let cartList = JSON.parse(localStorage.getItem("carts")) || [];

// for find product from cart list :-
//-----------------------------------
  const product = cartList.find((element) =>String(element.id) == String(id));

// for check product exists in cart :-
//------------------------------------
  if (product) {
// for if quantity is greater than 1 :-
//-------------------------------------
    if (product.quantity > 1) {

// for decrease quantity by 1 :-
//--------------------------------
      product.quantity--;
} 
else {
// for condition if quantity is 1 then remove product :-
//------------------------------------------------
    cartList = cartList.filter((element) =>String(element.id) !== String(id));
    }
  }

// for update cart list in local storage :-
//-----------------------------------------
  localStorage.setItem("carts",JSON.stringify(cartList));

// for display updated cart :-
//----------------------------
  displayProductsFromCart();
};

// for function to display products from cart :-
//----------------------------------------------
const displayProductsFromCart = (products = null) => {

  // for get cart list from local storage :-
  //----------------------------------------
  const cartList = products !== null? products : JSON.parse(localStorage.getItem("carts")) || [];

// for clear cart container :-
//---------------------------
  cartContainer.innerHTML = "";

// for check if cart is empty :-
//-----------------------------
  if (cartList.length == 0) {

// for display empty cart message :-
//----------------------------------
    cartContainer.innerHTML = `
      <div class="text-center mt-5">
        <h3>Your Cart is Empty</h3>
        <a href="index.html"class="btn btn-primary mt-3">
        Continue Shopping
        </a>
      </div>
    `;

// for stop function :-
//---------------------
    return;
  }

 // for create variable for subtotal :-
//------------------------------------
  let subtotal = 0;

// foreach loop through cart products :-
//-----------------------------------------
  cartList.forEach((element) => {
// for if quantity does not exist then set quantity to 1 :-
//---------------------------------------------------------
    if (!element.quantity) {
    element.quantity = 1;
    }

// for get original product price :-
//---------------------------------
    const originalPrice = element.price;

// for calculate discount amount :-
//--------------------------------
    const discountAmount = originalPrice * element.discountPercentage / 100;

// for calculate price after discount :-
//--------------------------------------
    const discountedPrice = originalPrice - discountAmount;

// for calculate product total according to quantity :-
//-----------------------------------------------------
    const productTotal = discountedPrice * element.quantity;

// for add product total into subtotal :-
//--------------------------------------
    subtotal += productTotal;

// for create div element for each product :-
//-------------------------------------------
    const div = document.createElement("div");

// for set bootstrap card class :-
//--------------------------------
    div.className = "card my-3 col-7 shadow-sm";

// for set product details inside card :-
//---------------------------------------
    div.innerHTML = `
      <div class="card-body d-flex">
        <img
          height="150"
          width="150"
          class="rounded me-3"
          src="${element.thumbnail}"
          alt="${element.title}"
          style="object-fit: cover;">

        <div class="flex-grow-1">

          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.description}</p>
          <p>
            Price:
            <strong>
              ${originalPrice} USD
            </strong>
          </p>

          <p class="text-success">
            Discount: ${element.discountPercentage}%
          </p>

          <p>
            Price After Discount:
            <strong>
          ${discountedPrice.toFixed(2)} USD
            </strong>
          </p>

          <!-- for quantity buttons :- -->
          <div class="d-flex align-items-center gap-3">

            <button class="btn btn-primary"
              onclick="decreaseQuantity('${element.id}')">
            -
            </button>

            <span class="fs-5 fw-bold"> ${element.quantity}</span>

            <button class="btn btn-primary"
              onclick="increaseQuantity('${element.id}')">
              +
            </button>

            <button class="btn btn-danger"
              onclick="removeFromCart('${element.id}')">
              Remove
            </button>
          </div>


          <!-- for display product total :- -->
          <p class="mt-3 fw-bold">
            Product Total:${productTotal.toFixed(2)} USD
          </p>

          <!-- for display available stock :- -->
          <p class="text-secondary">
            Available Stock:${element.stock}
          </p>
        </div>
      </div>
    `;

// for append product card to cart container :-
//---------------------------------------------
    cartContainer.appendChild(div);
  });

 // for calculate 18% GST :-
//------------------------
  const gst = subtotal * 18 / 100;

// for calculate final total including GST :-
//-------------------------------------------
  const finalTotal = subtotal + gst;

// for create div for cart summary :-
//-----------------------------------
  const totalDiv = document.createElement("div");

// for set bootstrap class for cart summary :-
//--------------------------------------------
  totalDiv.className = "card my-3 col-7 shadow";

// for display subtotal, GST and final total :-
//--------------------------------------------
  totalDiv.innerHTML = `<div class="card-body">
      <h4 class="card-title">
        Cart Summary
      </h4>
      <hr>

      <p>
        Subtotal:<strong> ${subtotal.toFixed(2)} USD</strong>
      </p>

      <p>
        GST (18%):<strong>${gst.toFixed(2)} USD</strong>
      </p>

      <hr>

      <h4>
        Final Total:<strong class="text-success">${finalTotal.toFixed(2)} USD</strong>
      </h4>

      <a href="index.html" class="btn btn-primary mt-3">Continue Shopping</a>
    </div>
  `;

// for append cart summary to cart container :-
//---------------------------------------------
  cartContainer.appendChild(totalDiv);

// forupdate cart list in local storage :-
//-----------------------------------------
  localStorage.setItem("carts",JSON.stringify(cartList));
};

// for get cart search input :-
//-----------------------------
const cartSearchInput = document.getElementById("cart-search-input");

// for function to search products from local storage :-
//------------------------------------------------------
const searchCartProducts = () => {
// for get all products from local storage :-
//-------------------------------------------
  const cartList = JSON.parse(localStorage.getItem("carts")) || [];
// for get search value :-
//------------------------
  const searchValue = cartSearchInput.value.toLowerCase().trim();

// for if search value is empty then display all products :-
//---------------------------------------------------------
  if (searchValue == "") {
// for display all stored cart products :-
//----------------------------------------
    displayProductsFromCart(cartList);
    return;
  }
// for filter products according to search name :-
//------------------------------------------------
  const filteredProducts = cartList.filter((element) => {

// for check product title with search value :-
//---------------------------------------------
      return element.title.toLowerCase().includes(searchValue);
    });

// for display filtered products :-
//--------------------------------
  if (filteredProducts.length == 0) {

// for display product not found message :-
//-----------------------------------------
    cartContainer.innerHTML = `<div class="text-center mt-5"><h3>No Product Found</h3></div>`;

  } 
  else {
// for display searched products :-
//---------------------------------
    displayProductsFromCart(filteredProducts);
  }
};

// for add input event to search while typing :-
//----------------------------------------------
cartSearchInput.addEventListener( "input",searchCartProducts);

// for get cart search form :-
//----------------------------
const cartSearchForm = document.getElementById("cart-search-form");

// for add submit event to cart search form :-
//-------------------------------------------
cartSearchForm.addEventListener("submit",(event) => {
// for prevent page refresh :-
//----------------------------
    event.preventDefault();

// for call search function :-
//---------------------------
    searchCartProducts();
  }
);
// for call displayProductsFromCart function on page load :-
//----------------------------------------------------------
displayProductsFromCart();