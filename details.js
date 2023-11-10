window.onload = () => {
  const productId = new URLSearchParams(window.location.search).get("Id");
  console.log(productId);
  const container = document.querySelector(".container");
  container.style = "min-height = 80vh;";
  fetch("https://striveschool-api.herokuapp.com/api/product/" + productId, {
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

      container.innerHTML = `
          <h1 class="mt-4">${productObj.name}</h1>
          <img src=${productObj.imageUrl} class="w-50" />
          <h5 class="mt-4">${productObj.description}</h5>
          <h6>${productObj.price}$</h6>
          <a href="./homepage.html">Back to Homepage</a>`;
    })
    .catch((error) => {
      throw new Error(error);
    });
};
