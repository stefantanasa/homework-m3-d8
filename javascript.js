let cardsArea = document.querySelector(".cards-area");
console.log("card area: ", cardsArea);

let createCard = (arrayProducts) => {
  arrayProducts.forEach((product) => {
    let card = document.createElement("div");
    card.innerHTML = `  <div class="productCard my-2">
        <div class="my-2 d-inline-block">
          <img src=${product.imageUrl} alt="" />
          <div>
            <p>Brand: ${product.brand}</p>
          </div>
          <div>
            <p>Product name: ${product.name}</p>
          </div>
          <div>
            <p >Description: ${product.description}</p>
          </div>
          <div>
            <p>Price: $${product.price}</p>
          </div>
          <div>
            <button>Quick Buy</button>
            <button>Add to cart</button>
            <button><i class="fa fa-pencil" aria-hidden="true"></i></button>
            <button><i class="fa fa-trash-o" aria-hidden="true"></i></button>
          </div>
        </div>
        </div>`;
    cardsArea.appendChild(card);
  });
};

let endpoint = "https://striveschool-api.herokuapp.com/api/product/";

let fetchData = async () => {
  let data = await fetch(endpoint, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2NDk4MzY4ODIsImV4cCI6MTY1MTA0NjQ4Mn0.972Dka7292kHJFQonsL8pN9vyYsHdhKImv5l5MKze2g",
    },
  });
  data = await data.json();
  console.log(data);

  createCard(data);
};
window.onload = () => {
  fetchData();
};
