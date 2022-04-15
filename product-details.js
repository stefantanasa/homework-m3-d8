// product details page

const productDetailsCart = document.querySelector(".product-details-card");
let fields = document.createElement("div");

let productId = new URLSearchParams(window.location.search).get("productId");
let endpointId = `https://striveschool-api.herokuapp.com/api/product/${productId}`;

let handleDelete = async() => {
    let data = await fetch(endpointId, {
        method: "DELETE",
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2NDk4MzY4ODIsImV4cCI6MTY1MTA0NjQ4Mn0.972Dka7292kHJFQonsL8pN9vyYsHdhKImv5l5MKze2g",
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

    let fetchToPut = async() => {
        let data = await fetch(endpointId, {
            method: "PUT",
            body: JSON.stringify(objToPut),
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2NDk4MzY4ODIsImV4cCI6MTY1MTA0NjQ4Mn0.972Dka7292kHJFQonsL8pN9vyYsHdhKImv5l5MKze2g",
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

let fetchDataById = async() => {
    let data = await fetch(endpointId, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2NDk4MzY4ODIsImV4cCI6MTY1MTA0NjQ4Mn0.972Dka7292kHJFQonsL8pN9vyYsHdhKImv5l5MKze2g",
        },
    });

    data = await data.json();
    console.log(data);

    const {
        name,
        description,
        brand,
        imageUrl,
        price,
        _id,
        updatedAt,
        userId,
        createdAt,
    } = data;
    fields.innerHTML = `
  
          <img src=${imageUrl} alt="" />
          <div>
            <p>Product name: ${name}</p>
          </div>
          <div>
            <p>Brand: ${brand}</p>
          </div>
          <div>
            <p >Description: ${description}</p>
          </div>
          <div>
            <p>Price: $${price}</p>
          </div>
          <div>
            <p>Product Id: $${_id}</p>
          </div>
          <div>
            <p>Published: $${createdAt}</p>
          </div>
          </a>
          <div class="d-flex justify-content-center">
            <button id="add-cart" onClick="handleAddCart(event)">Add to cart</button>
            
           
            
            </div>
  

  `;

    productDetailsCart.prepend(fields);
};

window.onload = () => {
    fetchDataById();
};