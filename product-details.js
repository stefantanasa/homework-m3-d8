// product details page

const editProductForm = document.querySelector(".edit-product-form");
let fields = document.createElement("div");

let productId = new URLSearchParams(window.location.search).get("productId");
let endpointId = `https://striveschool-api.herokuapp.com/api/product/${productId}`;

let handleDelete = async () => {
  let data = await fetch(endpointId, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2NDk4MzY4ODIsImV4cCI6MTY1MTA0NjQ4Mn0.972Dka7292kHJFQonsL8pN9vyYsHdhKImv5l5MKze2g",
      "Content-Type": "application/json",
    },
  });
  data = await data.json();
  console.log("deleted!");
  redirect("/");
};
const redirect = (location) => {
  window.location.href = location;
};
const handleSubmitPut = (event) => {
  event.preventDefault();
  let nameField = document.querySelector("#nameField");
  let imageUrl = document.querySelector("#image-url");
  let price = document.querySelector("#price");
  let brand = document.querySelector("#brand");
  let description = document.querySelector("#product-description");
  let objToPut = {
    name: nameField.value,
    imageUrl: imageUrl.value,
    price: price.value,
    brand: brand.value,
    description: description.value,
  };

  let fetchToPut = async () => {
    let data = await fetch(endpointId, {
      method: "PUT",
      body: JSON.stringify(objToPut),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2NDk4MzY4ODIsImV4cCI6MTY1MTA0NjQ4Mn0.972Dka7292kHJFQonsL8pN9vyYsHdhKImv5l5MKze2g",
        "Content-Type": "application/json",
      },
    });

    data = await data.json();

    console.log("from fetch:", data);
    console.log("Obj to send:", objToPut);
    console.log("inside endpoint:", endpointId);

    redirect("/");
  };
  fetchToPut();
};

let fetchDataById = async () => {
  let data = await fetch(endpointId, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2NDk4MzY4ODIsImV4cCI6MTY1MTA0NjQ4Mn0.972Dka7292kHJFQonsL8pN9vyYsHdhKImv5l5MKze2g",
    },
  });

  data = await data.json();
  console.log(data);

  const { name, description, brand, imageUrl, price } = data;
  fields.innerHTML = `
  <img
            class="m-2"
            src="${imageUrl}"
            alt="product"
          />
  <form class="m-3 edit-product-form" id="submit-form" onSubmit = handleSubmitPut(event)>
          
  <div class="form-group">
    <input
      type="text"
      id="nameField"
      placeholder="Name"
      class="form-control"
      value="${name}"
    />
  </div>
  <div class="form-group">
    <input
      type="text"
      id="brand"
      placeholder="Brand"
      class="form-control"
      value="${brand}"
    />
  </div>
  <div class="form-group">
    <input
      type="textarea"
      id="product-description"
      placeholder="Description"
     
      class="form-control"
      value="${description}"
    />
  </div>
  
  <div class="form-group">
    <input
      type="text"
      id="image-url"
      placeholder="Image Url"
      class="form-control"
      value="${imageUrl}"
    />
  </div>
  <div class="form-group">
    <input
      type="number"
      id="price"
      placeholder="Price"
      class="form-control"
      value="${price}"
    />
  </div>
  <button id="submit-product" class="float-left" type="submit">Save</button>
  <button id="submit-product" class="float-right bg-danger" onClick="handleDelete()" ><i class="fa fa-trash"  aria-hidden="true"></i></button>

  </form>

  `;

  editProductForm.prepend(fields);
};

window.onload = () => {
  fetchDataById();
};
