// create a ecommerce admin panel where user can add/update/delete products. user cans search, filter and sort products by name, price etc. product add to cart and quantity increament/decrement based bill calculate.
const inputName = document.getElementById("input-name");
const inputCategory = document.getElementById("input-category");
const inputPrice = document.getElementById("input-price");
const inputDiscount = document.getElementById("input-discount");
const inputDescription = document.getElementById("input-description");
const inputRating = document.getElementById("input-rating");
const inputImage = document.getElementById("input-image");
const addProductBtn = document.getElementById("add-product-btn");

const inputSearch = document.getElementById("input-search");
const searchBtn = document.getElementById("search-btn");

const productTbody = document.getElementById("product-tbody");

// fetch from input -> store local storage -> fetch from local storage -> display

const allProducts = JSON.parse(localStorage.getItem("products")) || [];

const handleProductListing = () => {
  const product = {
    name: inputName.value,
    price: inputPrice.value,
    category: inputCategory.value,
    description: inputDescription.value,
    discount: inputDiscount.value,
    image: inputImage.value,
    rating: inputRating.value,
  };
  allProducts.push(product);
  localStorage.setItem("products", JSON.stringify(allProducts));
  displayProducts();
};

addProductBtn.addEventListener("click", handleProductListing);

// arr.push(value) -> insert value in the array at last index

/*

 <tr>
            <th scope="row">1</th>
            <td>
              <img
                height="100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtKKbOT3rnT05wqGZGoaaVh4jfJWSFaaeKJ7hgS3wuXw&s"
                alt=""
              />
            </td>
            <td>Amala Candy</td>
            <td>Food & Beverage</td>
            <td>Lorem ipsum dolor sit amet.</td>
            <td>588.25</td>
            <td>10%</td>
            <td>3.5</td>
            <td>
              <button class="btn btn-warning">Edit</button
              ><button class="btn btn-danger ms-3">Delete</button>
            </td>
    </tr>
*/
const displayProducts = () => {
  allProducts.forEach((product, i) => {
    const tr = document.createElement("tr");

    const th = document.createElement("th");

    const tdImage = document.createElement("td");
    const tdName = document.createElement("td");
    const tdCategory = document.createElement("td");
    const tdDescription = document.createElement("td");
    const tdPrice = document.createElement("td");
    const tdDiscount = document.createElement("td");
    const tdRating = document.createElement("td");
    const tdAction = document.createElement("td");

    const img = document.createElement("img");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    th.scope = "row";
    th.textContent = i + 1;

    img.height = "100";
    img.src = product.image;
    tdImage.appendChild(img);

    tdName.textContent = product.name;
    tdCategory.textContent = product.category;
    tdDescription.textContent = product.description;
    tdPrice.textContent = product.price;
    tdDiscount.textContent = product.discount;
    tdRating.textContent = product.rating;

    editBtn.className = "btn btn-warning";
    deleteBtn.className = "btn btn-danger ms-3";
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";
    tdAction.appendChild(editBtn);
    tdAction.appendChild(deleteBtn);

    tr.appendChild(th);
    tr.appendChild(tdImage);
    tr.appendChild(tdName);
    tr.appendChild(tdCategory);
    tr.appendChild(tdDescription);
    tr.appendChild(tdPrice);
    tr.appendChild(tdDiscount);
    tr.appendChild(tdRating);
    tr.appendChild(tdAction);

    productTbody.appendChild(tr);
  });
};

displayProducts();
