// fields:
// {
//     id:Number,
//     title:String,
//     price:Number,
//     category:String,
//     description:String,
//     image:String
// }

const API_BASE_URL = "https://fakestoreapi.com";
const PRODUCTS = `${API_BASE_URL}/products`;

const getProduct = async () => {
  try {
    const response = await fetch(PRODUCTS);
    const products = await response.json();
    return products;
  } catch (e) {
    console.log(e);
  }
};

const createProductCard = (imgUrl, title, price) => {
  const products = document.getElementById("products");
  const productItem = document.createElement("a");
  const imageDiv = document.createElement("img");
  const productTitle = document.createElement("h6");
  const productPrice = document.createElement("p");

  imageDiv.setAttribute("src", imgUrl);
  productTitle.textContent = title;
  productPrice.textContent = `$ ${price}`;

  productItem.setAttribute("id", "productItem");

  productItem.appendChild(imageDiv);
  productItem.appendChild(productTitle);
  productItem.appendChild(productPrice);

  products.appendChild(productItem);
};

const populateProduct = () => {
  getProduct().then((prdcts) => {
    prdcts.forEach((item) => {
      const { image, title, price } = item;
      createProductCard(image, title, price);
    });
  });
};

populateProduct();
