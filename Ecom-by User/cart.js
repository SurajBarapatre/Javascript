
// 1. get the cart container :-
//------------------------------
const cartContainer = document.getElementById("cart-container");                          

// 2. function to increment/decrement in products quanitity :-
//----------------------------------------------
const removeFromCart = (id) => {                                                // 3. remove product from cart :-                                        
  let cartList = JSON.parse(localStorage.getItem("carts")) || [];               // 4. get the cart list from local storage :-

  cartList = cartList.filter((element) => String(element.id) !== String(id));   // 5. filter the cart list to remove the product with the given id :-

// 6. update the cart list in local storage :-
//-------------------------------------------
  localStorage.setItem("carts", JSON.stringify(cartList)); 

  displayProductsFromCart();                                                 // 7. display the updated cart list :-
};

// 8. function to display the products from cart :-
//----------------------------------------------
const displayProductsFromCart = () => {                                
  const cartList = JSON.parse(localStorage.getItem("carts")) || [];             // 9. get the cart list from local storage :-

  cartContainer.innerHTML = "";                                                 // 10. clear the cart container :-

// 11. if condition for cart is empty, display a message :-
//--------------------------------------------------------
  if (cartList.length == 0) {
    cartContainer.innerHTML = `<h3 class="text-center mt-5">Your Cart is Empty</h3>`;
    return;
  }

// 12. foreach loop through the cart list and display the products :-
//------------------------------------------------------------------
  cartList.forEach((element) => {                                          
    const div = document.createElement("div");                                // 13. create a div element for each product :-
    div.className = "card my-3 col-7";                                        // 14. set the class name for the div element :- 

  // 15. set the inner HTML for the div element with product details :-
//--------------------------------------------------------------------
    div.innerHTML = `<div class="card-body d-flex">
    <img
      height="150"
      width="150"
      class="rounded me-3"
      src="${element.thumbnail}"
      alt=""
    />
    <div>
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">
       ${element.description}
      </p>
      <p>Price. ${element.price} USD | Discount. ${element.discountPercentage}%</p>
      <div class="d-flex gap-3">
        <div>
          <button class="btn btn-primary">-</button>
          <span class="fs-5 fw-bold mx-3">1</span>
          <button class="btn btn-primary">+</button>
        </div>
        <button
          class="btn btn-danger"
          onclick="removeFromCart('${element.id}')">
          Remove
        </button>
      </div>
    </div>
  </div>`;

    cartContainer.appendChild(div);                            // 16. append the div element to the cart container
  });
};

displayProductsFromCart();                                    // 17. call the function to display the products from cart on page load