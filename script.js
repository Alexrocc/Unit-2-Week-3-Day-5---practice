const productParamId = new URLSearchParams(window.location.search).get("Id");
const URL = productParamId
  ? "https://striveschool-api.herokuapp.com/api/product/" + productParamId
  : "https://striveschool-api.herokuapp.com/api/product/";

// NEW PRODUCT CREATION

const submitNewProduct = () => {
  const newProductObj = {
    name: document.getElementById("productName").value,
    description: document.getElementById("productDesc").value,
    brand: document.getElementById("productBrand").value,
    imageUrl: document.getElementById("productImage").value,
    price: document.getElementById("productPrice").value,
  };
  fetch(URL, {
    method: "POST",
    body: JSON.stringify(newProductObj),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWM5NTI1NGU4ODAwMTgzZjE4N2QiLCJpYXQiOjE2OTk2MDU2NTMsImV4cCI6MTcwMDgxNTI1M30.a88GyzWot7RHVgsur2ZCWXlXUjky6Hap3nM6K4StKBk",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((newProduct) => console.log(newProduct))
    .catch((error) => {
      throw new Error(error);
    });
};

// MODIFY EXISTING PRODUCT
const modifyProduct = () => {
  const ProductObj = {
    name: document.getElementById("productName").value,
    description: document.getElementById("productDesc").value,
    brand: document.getElementById("productBrand").value,
    imageUrl: document.getElementById("productImage").value,
    price: document.getElementById("productPrice").value,
  };
  fetch(URL, {
    method: "PUT",
    body: JSON.stringify(ProductObj),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWM5NTI1NGU4ODAwMTgzZjE4N2QiLCJpYXQiOjE2OTk2MDU2NTMsImV4cCI6MTcwMDgxNTI1M30.a88GyzWot7RHVgsur2ZCWXlXUjky6Hap3nM6K4StKBk",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response) {
        throw new Error();
      }
      return response.json();
    })
    .then((receivedObj) => {
      receivedObj = {
        name: document.getElementById("productName").value,
        description: document.getElementById("productDesc").value,
        brand: document.getElementById("productBrand").value,
        imageUrl: document.getElementById("productImage").value,
        price: document.getElementById("productPrice").value,
      };
      console.log(receivedObj);
    });
};

// DELETING EXISTING PRODUCT

window.onload = () => {
  if (productParamId) {
    fetch(URL, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWM5NTI1NGU4ODAwMTgzZjE4N2QiLCJpYXQiOjE2OTk2MDU2NTMsImV4cCI6MTcwMDgxNTI1M30.a88GyzWot7RHVgsur2ZCWXlXUjky6Hap3nM6K4StKBk",
      },
    })
      .then((response) => {
        if (!response) {
          throw new Error();
        }
        return response.json();
      })
      .then((productObj) => {
        console.log(productObj);
        const { name, description, brand, imageUrl, price } = productObj;
        document.getElementById("productName").value = name;
        document.getElementById("productDesc").value = description;
        document.getElementById("productBrand").value = brand;
        document.getElementById("productImage").value = imageUrl;
        document.getElementById("productPrice").value = price;
      })
      .catch((error) => {
        throw new Error(error);
      });
    document.querySelector(".btn-primary").classList.add("d-none");
    document.querySelector(".btn-info").classList.remove("d-none");
    document.querySelector(".btn-info").onclick = () => {
      modifyProduct();
    };
    document.querySelector(".btn-danger").classList.remove("d-none");

    document.getElementsByTagName("h4")[0].innerText = "- Modify Product";
  } else {
    document.querySelector(".btn-primary").classList.remove("d-none");
    document.querySelector(".btn-info").classList.add("d-none");
    document.querySelector(".btn-danger").classList.add("d-none");
    const form = document.getElementById("productForm");
    form.onsubmit = (e) => {
      e.preventDefault();
      submitNewProduct(e);
    };
  }
};
