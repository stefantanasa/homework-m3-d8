let cardsArea = document.querySelector(".cards-area");
let badge = document.querySelector(".badge");
let cartList = document.querySelector(".list-group-flush");

console.log("card area: ", cardsArea);
let items = 0;
const handleAddCart = (event) => {
  items++;
  badge.textContent = `Cart ${items}`;
  let itemClicked =
    event.target.parentElement.parentElement.children[2].textContent.slice(26);

  let list = [];
  list.push(itemClicked);
  list.forEach((item) => {
    console.log(),
      (cartList.innerHTML += `<li class="added-in-the-cart">${item}</li>`);
  });
  console.log(list);
};

const createCard = (arrayProducts) => {
  arrayProducts.forEach((product) => {
    let card = document.createElement("div");
    card.innerHTML = `  <div class="productCard ">
    <a href="/homework-m3-d8/product.html?productId=${product._id}">
        <div class=" d-inline-block">

       
        <img class="img-homepage" src=${product.imageUrl} alt="" />
        
          <div>
            <p class="p-homepage">Brand: ${product.brand}</p>
          </div>
          <div>
            <p class="p-homepage">Product name: ${product.name}</p>
          </div>
          <div>
            <p class="p-homepage">Description: ${product.description}</p>
          </div>
          <div>
            <p class="p-homepage">Price: $${product.price}</p>
          </div>
          </a>
          <div class="d-flex justify-content-center">
          
          <button><i class="fa fa-pencil" aria-hidden="true"></i></button>
          <button id="add-cart" onClick="handleAddCart(event)"><i class="fa fa-trash-o" aria-hidden="true"></i></button>

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

  createCard(data.reverse().slice(0, 9));
};
window.onload = () => {
  fetchData();
};
