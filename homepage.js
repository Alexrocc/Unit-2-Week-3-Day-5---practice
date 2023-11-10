const createCards = () => {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "GET",
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
      response.json();
      console.log(response);
    })
    .then((products) => {
      console.log(products);
      const row = document.querySelector(".row");
      products.forEach((product) => {
        const col = document.createElement("div");
        col.classList.add("col-6", "col-md-4", "col-lg-3");

        col.innerHTML = `<div class="card">
                                <img src="${product.imageUrl}" class="card-img-top"/>
                                <div class="card-body">
                                    <h5 class="card-title">${product.name}</h5>
                                    <p class="card-text">${product.brand} / ${product.price}</p>
                                    <p class="card-text">${product.description}</p>
                                    <a href="./details.html?productId=${product._id}" class="btn btn-success">Details</a>
                                </div>
                            </div>    `;
        row.appendChild(col);
      });
    })
    .catch((error) => {
      throw new Error(error);
    });
};

window.onload = () => {
  createCards();
};
