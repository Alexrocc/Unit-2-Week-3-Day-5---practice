const createCards = () => {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
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
    .then((products) => {
      console.log(products);
      const row = document.querySelector(".row");
      products.forEach((product) => {
        const col = document.createElement("div");
        col.classList.add("col-6", "col-md-4", "mt-4", "gx-3");

        col.innerHTML = `<div class="card h-100 d-flex flex-column justify-content-start">
                                <img src="${product.imageUrl}" class="card-img-top"/>
                                <div class="card-body flex-grow-0 mt-auto">
                                    <h5 class="card-title">${product.name}</h5>
                                    <p class="card-text">${product.brand} / ${product.price}$</p>
                                    <p class="card-text">${product.description}</p>
                                    <a href="./details.html?Id=${product._id}" class="btn btn-success">Details</a>
                                    <a href="./back-office.html?Id=${product._id}" target="_blank" class="btn btn-primary">Modify</a>
                                </div>
                            </div>    `;
        row.appendChild(col);
        console.log(product._id);
      });
    })
    .catch((error) => {
      throw new Error(error);
    });
};

window.onload = () => {
  createCards();
};
