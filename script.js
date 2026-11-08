////////////////////////////////////////////////////////////////////////////////////////
//  COMP 3512 --- ASSIGNMENT 01 MILESTONE
//  HASSAN JARJU
////////////////////////////////////////////////////////////////////////////////////////


// Extract the JSON file contents
import config from './data-minifed.json' with { type: 'json'};


/** Holds product objects created from the JSON data. */
const productsArray = [];

/** Selects the div container of which the product card will be added into. */
const productGridContainer = document.querySelector(".product-grid");

/**
 * Creates a Product instance by copying properties from the product data.
 * @param {Object} product - Product data loaded from the JSON file.
 * Object.assign was found online at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
function Product(product){
   Object.assign(this, product); 
}

/**
 * Builds a product card element from product data.
 * @param {Object} product - Product data used for the card's content.
 * @returns {HTMLElement} The completed product card.
 */
function createProductCard(product){
   const articleElement = document.createElement("article");
   articleElement.classList.add("product-card");

   const newImg = document.createElement("img");
      newImg.classList.add("product-img");
      newImg.src = product.images[0];
      newImg.alt = "Product image";
      newImg.addEventListener("click", () => {
         alert(`Product ID: ${product.id}`);
      });
   
   const productFooter = document.createElement("div");
   productFooter.classList.add("product-footer");
   
   const productMeta = document.createElement("div");
   productMeta.classList.add("product-meta");

   const productTitle = document.createElement("p");
   productTitle.textContent = product.title;
   
   const productPrice = document.createElement("p");
   productPrice.textContent = "$" + product.price;
   
   const productInfoButton = document.createElement("button");
   productInfoButton.innerHTML = "+";
   productInfoButton.classList.add("display-product-info");
   productInfoButton.addEventListener("click", () => {
      alert(`Product ID: ${product.id} | Product Title: ${product.title}`);
   });

   articleElement.append(newImg);
   articleElement.append(productFooter);
   productFooter.append(productMeta);
   productMeta.append(productTitle);
   productMeta.append(productPrice);
   productFooter.append(productInfoButton);

   return articleElement;
}

/**
 * The beginning of the code. 
 * Product is first created then appends the information into the HTML file.
 */
function main(){
   createProduct();
   addProducts();
};

/**
 * Loops over data found in data-pretty.json and pushes the first 20 product items into the ProductsArray.
 */
function createProduct(){
   for (let i = 0; i < config.products.length && i < 20; i++){
      const product = new Product(config.products[i]);
      productsArray.push(product);
   };
};

/**
 * Loops over every product in productsArray and appends each product into the productGridContainer in HTML.
 */
function addProducts(){
   for (let product of productsArray){
      productGridContainer.append(createProductCard(product));
   };
};

main();