// Extract the JSON file contents
import config from './data-minifed.json' with { type: 'json'};

const productsArray = [];

const productGridContainer = document.querySelector(".product-grid");

// look through each object
console.log(config.products[0]);

function Product(product){
   Object.assign(this, product); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
}

for (let i = 0; i < config.products.length && i < 20; i++){
   const product = new Product(config.products[i]);
   productsArray.push(product);
};




for (let p of productsArray){
   
   const createArticle = document.createElement("article");
      createArticle.classList.add("product-card");
   
   const newImg = document.createElement("img");
      newImg.classList.add("product-img");
      newImg.src = p.images[0];
      newImg.alt = "Product image";
      newImg.addEventListener("click", () => {
         alert(`Product ID: ${p.id}`);
      });
      

   const productFooter = document.createElement("div");
      productFooter.classList.add("product-footer");
   
   const productMeta = document.createElement("div");
      productMeta.classList.add("product-meta");

   const productTitle = document.createElement("p");
      productTitle.textContent = p.title;
   const productPrice = document.createElement("p");
      productPrice.textContent = p.price;
   
   const productInfoButton = document.createElement("button");
      productInfoButton.innerHTML = "+";
      productInfoButton.classList.add("display-product-info");
      productInfoButton.addEventListener("click", () => {
         alert(`Product ID: ${p.id}  Product Title: ${p.title}`);
      });
   
   productGridContainer.append(createArticle);
   createArticle.append(newImg);
   createArticle.append(productFooter);
   productFooter.append(productMeta);
   productMeta.append(productTitle);
   productMeta.append(productPrice);
   productFooter.append(productInfoButton);

   console.log(p);
}

// append to the document