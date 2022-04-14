let cardsArea = document.querySelector(".cards-area");
let badge = document.querySelector(".badge");
let cartList = document.querySelector(".list-group-flush");

console.log("card area: ", cardsArea);
let items = 0;
const handleQuickBuy = (itemId) => {
  window.location.href = `/sent.html?${itemId}`;
};

const handleAddCart = (event) => {
  items++;
  badge.textContent = `Cart ${items}`;

  // // event.target.parentElement.parentElement.children[1].textContent.slice(26);

  // productName =
  //   event.target.parentElement.parentElement.children[0].children[1].textContent.slice(
  //     25
  //   );
  // productPrice =
  //   event.target.parentElement.parentElement.children[0].children[4].textContent.slice(
  //     21
  //   );
  // items.push({ name: productName, price: productPrice });
  // console.log(items);
  // console.log(productName);

  // let list = [];
  // list.push(itemClicked);
  // list.forEach((item) => {
  //   console.log(),
  //     (cartList.innerHTML += `<li class="added-in-the-cart">${item}</li>`);
  // });
  // console.log(list);
};

const createCard = (arrayProducts) => {
  arrayProducts.forEach((product) => {
    let card = document.createElement("div");
    card.innerHTML = `  <div class="productCard ">
        
        <a href="/product.html?productId=${product._id}">
          <img class="img-homepage" src=${product.imageUrl} alt="" />
          <div>
          <p class="p-homepage">Product name: ${product.name}</p>
          </div>
          <div>
          <p class="p-homepage">Brand: ${product.brand}</p>
          </div>
          <div>
            <p  class="p-homepage">Description: ${product.description}</p>
          </div>
          <div>
            <p>Price: $${product.price}</p>
          </div>
          </a>
          <div class="d-flex justify-content-center">
            <button id="add-cart to-basket" onclick="handleAddCart(event)">Add to cart</button>
            <a href="/sent.html?sent=${product._id}">
            <button id="add-cart" type="submit">Quick Buy</button>
          </a>
            
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
