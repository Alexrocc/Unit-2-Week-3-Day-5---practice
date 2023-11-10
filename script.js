const productParamId = new URLSearchParams(window.location.search).get("Id");
const URL = productParamId
  ? "https://striveschool-api.herokuapp.com/api/product/" + productParamId
  : "https://striveschool-api.herokuapp.com/api/product/";

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

window.onload = () => {
  const form = document.getElementById("productForm");
  form.onsubmit = (e) => {
    e.preventDefault();
    submitNewProduct(e);
  };
};
