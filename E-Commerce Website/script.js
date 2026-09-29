// create a ecommerce admin panel where user can add/update/delete products. user cans search, filter and sort products by name, price etc. 

// for get all elements from html file :-
// --------------------------------------
const inputName = document.getElementById("input-name");
const inputCategory = document.getElementById("input-category");
const inputPrice = document.getElementById("input-price");
const inputDiscount = document.getElementById("input-discount");
const inputDescription = document.getElementById("input-description");
const inputRating = document.getElementById("input-rating");
const inputImage = document.getElementById("input-image");

const addProductBtn = document.getElementById("add-product-btn");
const editProductBtn = document.getElementById("edit-product-btn");

const inputSearch = document.getElementById("input-search");
const searchBtn = document.getElementById("search-btn");
const resetBtn = document.getElementById("reset-btn");

const productTbody = document.getElementById("product-tbody");

const priceFilter = document.getElementById("price-filter");

const categoryFilter = document.querySelector(".dropdown");
const categoryFilterText = categoryFilter.querySelector(".dropdown-toggle");
const categoryFilterItems = categoryFilter.querySelectorAll(".dropdown-item");

let selectedCategory = "All Products";

// For get Products from local storage :-
// --------------------------------------
let allProducts = JSON.parse(localStorage.getItem("products")) || [];

// for edit product and other elements :-
// --------------------------------------
let editProductId = null;

// for old products given id :-
// --------------------------------------
let dataChanged = false;

// for function to all products to find -
// --------------------------------------
allProducts = allProducts.map((product) => {  
if (!product.id) {                 
  dataChanged = true;
    return {product,     
// for create unique is and identify all elements by these unique id :-
// ------------------------------------------------------------------
    id: Date.now() + Math.random()
  };
    }
    return product;
});

if (dataChanged) {
  localStorage.setItem("products",JSON.stringify(allProducts));
}

// for function to add products :-
// --------------------------------------
const handleProductListing = () => {

    const product = {
// for create unique is and identify all elements by these unique id :-
//------------------------------------------------------------------
    id: Date.now() + Math.random(),

    name: inputName.value,
    price: inputPrice.value,
    category: inputCategory.value,
    description: inputDescription.value,
    discount: inputDiscount.value,
    image: inputImage.value,
    rating: inputRating.value
    };

    allProducts.push(product);

// for save in Localstorage :-
// --------------------------------------
  localStorage.setItem("products",JSON.stringify(allProducts));

// for display products :-
// --------------------------------------
    displayProducts();
// for clear form to add new products :-
// --------------------------------------
    clearForm();
};

addProductBtn.addEventListener("click",handleProductListing);

// for Function to display products :-
// --------------------------------------
const displayProducts = (products = allProducts) => {
    productTbody.innerHTML = "";

    if (products.length == 0) {
        productTbody.innerHTML = `
          <tr>
          <td colspan="8" class="text-center">
          No Product Found
          </td>
         </tr>
            `;
        return;
    }

// foreach for products add form table by user :-
// --------------------------------------
    products.forEach((product) => {
      const tr = document.createElement("tr");

       tr.innerHTML = `<td class="align-middle">
        <img src="${product.image}" width="60" height="60" style="object-fit: cover;">
        </td>

    <td class="align-middle">${product.name}</td>
    <td class="align-middle">${product.category}</td>
    <td class="align-middle">${product.description}</td>
    <td class="align-middle">₹${product.price}</td>
    <td class="align-middle">${product.discount}%</td>
    <td class="align-middle">${product.rating}</td>

    <td class="text-center align-middle"> 
  <button type="button"class="btn btn-warning" style="width: 80px;"
  onclick="setProductForEdit('${product.id}')">
    Edit
  </button>

  <button type="button"class="btn btn-danger ms-2"style="width: 80px;"
    onclick="removeProduct('${product.id}')">
      Delete
  </button>
    </td>`;

    productTbody.appendChild(tr);
    });
};

// For function to edit products :-
// --------------------------------------
const setProductForEdit = (id) => {
    const product = allProducts.find((product) =>String(product.id) == String(id));

    if (!product) 
    {
      return;
    }

// for save edit product id :-
// ---------------------------
    editProductId = id;

// for fill the form by user:-
// ---------------------------
    inputName.value = product.name;
    inputCategory.value = product.category;
    inputPrice.value = product.price;
    inputDiscount.value = product.discount;
    inputDescription.value = product.description;
    inputRating.value = product.rating;
    inputImage.value = product.image;

// For hide add button :-
// --------------------------------------
    addProductBtn.classList.add("d-none");

// for display to edit product :-
//-----------------------------
    editProductBtn.classList.remove("d-none");
    editProductBtn.classList.add("btn","btn-warning");
};

// For function to update / edit products :-
// --------------------------------------
const handleProductEdit = () => {

    if (editProductId == null) {
        return;
    }

    const productIndex = allProducts.findIndex((product) =>String(product.id) == String(editProductId));

    if (productIndex == -1) {
        return;
    }

// for update to same format of product :-
// --------------------------------------
    allProducts[productIndex].name =inputName.value;
    allProducts[productIndex].category =inputCategory.value;
    allProducts[productIndex].price =inputPrice.value;
    allProducts[productIndex].discount =inputDiscount.value;
    allProducts[productIndex].description =inputDescription.value;
    allProducts[productIndex].rating =inputRating.value;
    allProducts[productIndex].image =inputImage.value;
   
 // for Update to localstorage:-
// --------------------------------------
    localStorage.setItem("products",JSON.stringify(allProducts));

// For display updeted product :-
// --------------------------------------
    searchProduct();

// For Clear form table :-
// -------------------------------
    clearForm();

// For change button event :-
// --------------------------------------
    editProductBtn.classList.add("d-none");
    addProductBtn.classList.remove("d-none");

// For reset to edit Id of product :-
// --------------------------------------
    editProductId = null;
};

// for fetch event to edit button :-
// --------------------------------------
editProductBtn.addEventListener("click",handleProductEdit);

// For function to delete product :-
// --------------------------------------
const removeProduct = (id) => {

    allProducts = allProducts.filter((product) =>String(product.id) !== String(id));

// For Update to Localstorage :-
// --------------------------------------
    localStorage.setItem("products",JSON.stringify(allProducts));

// For display to search product :-
// --------------------------------------
    searchProduct();
};

// For search Function to search products :-
// --------------------------------------
const searchProduct = () => {

// for remove extra space in products by user and convert to lowercase:-
// ---------------------------------------------------------------------
    const searchValue = inputSearch.value.trim().toLowerCase();

    let filteredProducts = allProducts;

// for Condition to Category filter :-
//----------------------------------
    if (selectedCategory != "All Products") {
        filteredProducts = filteredProducts.filter((product) =>
            String(product.category).trim().toLowerCase() == selectedCategory.trim().toLowerCase()
        );
    }

// for Condition to Search filter :-
//--------------------------------
    if (searchValue != "") {
        filteredProducts = filteredProducts.filter((product) =>{
        return(String(product.name).toLowerCase().includes(searchValue)||
              String(product.category).toLowerCase().includes(searchValue)||
              String(product.price).toLowerCase().includes(searchValue)||
              String(product.description).toLowerCase().includes(searchValue)||
              String(product.discount).toLowerCase().includes(searchValue)||
              String(product.rating).toLowerCase().includes(searchValue));
            });
    }

// remove duplicate products only inside selected category :-
//----------------------------------------------------------
    if (selectedCategory != "All Products") {
        filteredProducts = [
            new Map(
                filteredProducts.map((product) => [
                    String(product.name).trim().toLowerCase(),
                    product
                ])
            ).values()
        ];
    }

// for Filter price dropdown by user :-
// --------------------------------------
    if (priceFilter.value == "maximum price") 
    {
        filteredProducts.sort((a, b) => Number(b.price) - Number(a.price));
    } 
    else if (priceFilter.value == "minimum price") 
    {
        filteredProducts.sort((a, b) => Number(a.price) - Number(b.price));
    }

// For display only matching products :-
// -------------------------------------
    displayProducts(filteredProducts);
};

// For fetch event to search button :-
// --------------------------------------
searchBtn.addEventListener("click",searchProduct);

// For Live Search by user :-
// --------------------------------------
inputSearch.addEventListener("input",searchProduct);

// For function to reset search :-
// -------------------------------------
const handleReset = () => {

// For clear search in input :-
// --------------------------------------
inputSearch.value = "";
selectedCategory = "All Products";
categoryFilterText.textContent = "All Products";
priceFilter.value = "default";

// For display to all stored products :-
// --------------------------------------
displayProducts(allProducts);
};

// for fetch event to reset button :-
// --------------------------------------
resetBtn.addEventListener("click",handleReset);

// For Clear form in input table :-
// --------------------------------------
const clearForm = () => {
    inputName.value = "";
    inputCategory.value = "";
    inputPrice.value = "";
    inputDiscount.value = "";
    inputDescription.value = "";
    inputRating.value = "";
    inputImage.value = "";
};

// For Initial display products :-
// --------------------------------------
displayProducts();

//for Filter price dropdown by user :-
// --------------------------------------
priceFilter.onchange = () => {
    searchProduct();
};

// for category filter by user :-
// --------------------------------------
categoryFilterItems.forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        selectedCategory = item.textContent.trim();
        categoryFilterText.textContent = selectedCategory;
        searchProduct();
    });
});

// Default category show all products :-
// --------------------------------------
categoryFilterText.textContent = "All Products";
searchProduct();
