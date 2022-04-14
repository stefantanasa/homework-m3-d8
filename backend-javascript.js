let nameField = document.querySelector("#nameField");
let imageUrl = document.querySelector("#image-url");
let price = document.querySelector("#price");
let brand = document.querySelector("#brand");
let description = document.querySelector("#product-description");
let submitProduct = document.querySelector("#submit-form-product");
let backofficeArea = document.querySelector(".backoffice-area");
let endpointPost = "https://striveschool-api.herokuapp.com/api/product/";
let alertElement = document.createElement("div");
console.log(nameField.value);
const handleSubmit = async (event) => {
  event.preventDefault();
  let objToSend = {
    name: nameField.value,
    price: price.value,
    brand: brand.value,
    description: description.value,
    imageUrl:
      imageUrl.value === true
        ? imageUrl.value
        : "http://placeimg.com/640/480/dance",
  };
  console.log("event: ", submitProduct);
  console.log(objToSend, endpointPost);

  try {
    let data = await fetch(endpointPost, {
      method: "POST",
      body: JSON.stringify(objToSend),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2NDk4MzY4ODIsImV4cCI6MTY1MTA0NjQ4Mn0.972Dka7292kHJFQonsL8pN9vyYsHdhKImv5l5MKze2g",
        "Content-Type": "Application/Json",
      },
    });

    if (data.ok) {
      data = await data.json();
      backofficeArea.innerHTML += `
      
      <div class="row alert alert-success" role="alert">
        Product Has Been Added!
      </div>
        
      `;
    }
  } catch (error) {
    alert(error.message);
  }
};

submitProduct.addEventListener("submit", handleSubmit);
