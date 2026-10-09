// project description :-
//---------------------
// 1. fetch products from api and display in grid view.
// 2. add to cart - add product in localstorage for cart handling.
// 3. additional page/new page = show all cart products by view cart button
// 4. unique products display
// 5. increment/decrement in products quanitity
// 6. total calculation with discount and 18% GST + increment/decrement quantity.
// 7. if decrement in products quanitity after 1 will remove product.
// 8. increment in products quanitity not allow more than stock.

// For a get the product container :-
//--------------------------------
const productContainer = document.getElementById("products-container");

// For a get the search input :-
//----------------------------
const searchInput = document.getElementById("search-input");

// For create empty array for all products :-
//-------------------------------------------
let allProducts = [];

// For function to fetch products from api :-
//-------------------------------------------
const fetchProducts = () => {

// For fetch products from dummyjson api :-
//------------------------------------------
  fetch("https://dummyjson.com/products")

  // For convert response into json :-
  //----------------------------------
    .then((res) => res.json())

  // For get product data from api :-
  //---------------------------------
    .then((data) => {

   // For store all products in allProducts array :-
  //------------------------------------------------
      allProducts = data.products;

  // For display all products :-
  //----------------------------
      displayProducts(allProducts);
    })

  // For handle api error :-
  //------------------------
    .catch((error) => {

  // For display error in console :-
  //--------------------------------
      console.log(error);

  // For display error message on webpage :-
  //-----------------------------------------
      productContainer.innerHTML = `
        <div class="alert alert-danger text-center">
          Unable to fetch products.
        </div>
      `;
    });
};


// for function to display products :-
//------------------------------------
const displayProducts = (products) => {

// for clear product container :-
//-------------------------------
  productContainer.innerHTML = "";

  // for check if products are empty :-
  //-----------------------------------
  if (products.length == 0) {

    // for display no product found message :-
    //----------------------------------------
    productContainer.innerHTML = `
      <h3 class="text-center mt-5">
        No Products Found
      </h3>
    `;

    // for stop function :-
    //---------------------
    return;
  }

  // foreach loop through all products :-
  //-----------------------------------------
  products.forEach((element) => {

  // for create div element for each product :-
  //-------------------------------------------
    const div = document.createElement("div");

// for set bootstrap card class :-
//--------------------------------
    div.className = "card shadow-sm d-flex flex-column";

// for set card width :-
//---------------------
    div.style.width = "18rem";

// for set card minimum height for same alignment :-
//-------------------------------------------------
    div.style.minHeight = "500px";

// for set product details inside card :-
//---------------------------------------
div.innerHTML = `<img
    src="${element.thumbnail}"
    class="card-img-top"
    alt="${element.title}"
    style="
      height: 220px;
      object-fit: cover;">

  <div class="card-body" style="height: 170px;">
    <h5 class="card-title">
      ${element.title}
    </h5>

    <p class="card-text">
      ${element.description}
    </p>
  </div>

  <ul class="list-group list-group-flush">
    <li class="list-group-item">
      Brand - ${element.brand || "N/A"}
    </li>

    <li class="list-group-item">
      Rating - ${element.rating} 🌟
    </li>

    <li class="list-group-item">
      Stock - ${element.stock}
    </li>

    <li class="list-group-item">
      Price -<strong>USD ${element.price}</strong>
    </li>

    <li class="list-group-item">
      Discount - <strong>${element.discountPercentage}%</strong>
    </li>
  </ul>

  <!----Add to cart button at bottom :---->
  <div class="card-body mt-auto">
    <button
      class="btn btn-primary w-100"
      onclick="addToCart(${element.id})">
      Add to Cart
    </button>
  </div>`;

// for a append product card to product container :-
//------------------------------------------------
    productContainer.appendChild(div);
  });
};

// for a function to add product into cart :-
//-----------------------------------------
const addToCart = (id) => {

  // for get cart list from local storage :-
  //----------------------------------------
  const cartList = JSON.parse(localStorage.getItem("carts")) || [];

  // for check product already exists in cart :-
  //--------------------------------------------
  const existingProduct = cartList.find((element) =>String(element.id) == String(id));

  // for if product already exists then display message :-
  //-----------------------------------------------------
  if (existingProduct) {
  // for display already exists message :-
    //--------------------------------------
    alert("Product already exists in cart.");

  //for stop function :-
  //---------------------
    return;
  }

  // for find product from allProducts array :-
  //-------------------------------------------
  const product = allProducts.find((element) =>String(element.id) == String(id));

  // for check product is available :-
  //----------------------------------
  if (!product) {

    // for display product not found message :-
    //-----------------------------------------
    alert("Product not found.");

    // for stop function :-
    //---------------------
    return;
  }

  // for set initial product quantity to 1 :-
  //-----------------------------------------
  product.quantity = 1;

  // for add product into cart list :-
  //---------------------------------
  cartList.push(product);

  // for save cart list into local storage :-
  //-----------------------------------------
  localStorage.setItem("carts",JSON.stringify(cartList));

  // for display success message :-
  //--------------------------------
  alert("Product added to cart successfully!");
};

// for a function to search products :-
//-----------------------------------
const searchProducts = (event) => {

//prevent form default submit behaviour :-
//----------------------------------------------
  event.preventDefault();

// for get search value from input :-
//----------------------------------
  const searchValue = searchInput.value.toLowerCase().trim();

// for filter products according to search name :-
//------------------------------------------------
  const filteredProducts = allProducts.filter((element) => {
// for check product title with search value :-
//---------------------------------------------
    return element.title.toLowerCase().includes(searchValue);});

// for display filtered products :-
//--------------------------------
  displayProducts(filteredProducts);
};

// forget search form from html :-
//---------------------------------
const searchForm = document.querySelector("form");

// for add submit event to search form :-
//---------------------------------------
searchForm.addEventListener("submit",searchProducts);

// for search products while typing :-
//------------------------------------
searchInput.addEventListener("input",() => {
// for get search value :-
//------------------------
  const searchValue = searchInput.value.toLowerCase().trim();

// for condition if search box is empty then display all products :-
//-------------------------------------------------------
    if (searchValue == "") {
// for a display all products :-
//----------------------------
      displayProducts(allProducts);
      return;
    }

// for filter products according to search value :-
//------------------------------------------------
    const filteredProducts = allProducts.filter((element) => {
// for check product title :-
//--------------------------
    return element.title.toLowerCase().includes(searchValue);});

// for a display searched products :-
//---------------------------------
  displayProducts(filteredProducts);});

// for a call fetchProducts function when page loads :-
//---------------------------------------------------
fetchProducts();