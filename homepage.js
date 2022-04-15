let cardsArea = document.querySelector(".cards-area");
let badge = document.querySelector(".badge");
let cartList = document.querySelector(".list-group-flush");

console.log("card area: ", cardsArea);
const handleQuickBuy = (itemId) => {
    window.location.href = `/homework-m3-d8/sent.html?${itemId}`;
};

let items = 0;
let total = 0;
let products = [];
const handleAddCart = (productName, productId, price) => {
    items++;
    total += parseFloat(price);
    products.push({ productName: productName, _id: productId, price: price });
    cartList.innerHTML = "";
    products.forEach((p) => {
        cartList.innerHTML += `<li class="added-in-the-cart">$${p.price}:   ${p.productName}</li>`;
    });
    cartList.innerHTML += `<hr>Total: $${total}`;

    badge.textContent = `Cart ${items}`;
};

const createCard = (arrayProducts) => {
    arrayProducts.forEach((product) => {
        let card = document.createElement("div");
        card.innerHTML = `<div class="productCard ">

        <a href="/homework-m3-d8/product.html?productId=${product._id}">
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
            <button id="add-cart to-basket" onclick="handleAddCart('${product.name}','${product._id}','${product.price}')">Add to cart</button>
            <a href='/homework-m3-d8/sent.html?sent=${product._id}'>
            <button id="add-cart" type="submit">Quick Buy</button>
          </a>

          </div>

        </div>`;
        //   console.log(`<div class="d-flex justify-content-center">
        //   <button id="add-cart to-basket" onclick='handleAddCart(${product.name})'>Add to cart</button>
        //   <a href="/homework-m3-d8/sent.html?sent=${product._id}">
        //   <button id="add-cart" type="submit">Quick Buy</button>
        // </a>

        // </div>`);

        cardsArea.appendChild(card);
    });
};

let endpoint = "https://striveschool-api.herokuapp.com/api/product/";

let fetchData = async() => {
    let data = await fetch(endpoint, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2NDk4MzY4ODIsImV4cCI6MTY1MTA0NjQ4Mn0.972Dka7292kHJFQonsL8pN9vyYsHdhKImv5l5MKze2g",
        },
    });

    data = await data.json();
    console.log(data);

    createCard(data.reverse().slice(0, 9));
};
window.onload = () => {
    fetchData();
};