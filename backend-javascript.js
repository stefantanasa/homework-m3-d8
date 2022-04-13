let nameField = document.querySelector("#nameField");
let imageUrl = document.querySelector("#image-url");
let price = document.querySelector("#price");
let description = document.querySelector("#product-description");
let submitProduct = document.querySelector("#submit-form");
let endpoint = "https://striveschool-api.herokuapp.com/api/product/";

const handleSubmit = (event) => {
  event.preventDefault();
  let objToSend = {
    name: nameField.value,
    price: price.value,
    description: description.value,
    imageUrl: "http://placeimg.com/640/480/sports",
  };
  console.log("event: ", submitProduct);
  console.log(objToSend, endpoint);
  fetchData(objToSend);
};

submitProduct.addEventListener("submit", handleSubmit);

let fetchData = async (obj) => {
  try {
    let data = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2NDk4MzY4ODIsImV4cCI6MTY1MTA0NjQ4Mn0.972Dka7292kHJFQonsL8pN9vyYsHdhKImv5l5MKze2g",
      },
    });

    data = await data.json();
  } catch (error) {
    console.log(error.message);
  }
};
