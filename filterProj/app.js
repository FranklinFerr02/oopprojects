let filteredProducts = [...products];

const productsContainer = document.querySelector(".products-container");

const displayProducts = () => {
  // if statement

  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, no products match your search</h6>`;
    return;
  }

  productsContainer.innerHTML = filteredProducts
    .map(({ id, title, image, price }) => {
      return `<article class ="product" data-id ="${id}">
      <img 
      src=${image} 
      class="product-img img"
      />
    <footer>
      <h5 class="product-name">${title}</h5>
      <span class="product-price">$${price}</span>
    </footer>
    </article>`;
    })
    .join("");
};

displayProducts();

// text filter

const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
  const inputValue = searchInput.value;
  console.log(products);
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  console.log(products);
  displayProducts();
});

// filter buttons

const companiesDom = document.querySelector(".companies");
const filterBtns = () => {
  const buttons = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];
  companiesDom.innerHTML = buttons
    .map((company) => {
      return `<button class="company-btn" data-id="${company}">  
    ${company}     </button>`;
    })
    .join("");
  return;
};

filterBtns();

companiesDom.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("company-btn")) {
    if (el.dataset.id === "all") {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === el.dataset.id;
      });
    }
    searchInput.value = ''
    displayProducts();
  }
});
