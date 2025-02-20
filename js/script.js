/*
 
 axios.get("https://api.escuelajs.co/api/v1/products")
  .then((response) => {

    console.log("response", response);
  })
  .catch((error) => {
    console.log(err);
  });
*/

const fetchProducts = async (url) => {
  try {
    const response = await axios.get(url);
    console.log("🚀 ~ fetchProducts ~ response:", response);

    if (response.status === 200 && response.statusText == "OK") {
      console.log("data", response.data);
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    console.log("🚀 ~ fetchProducts ~ error:", error);
    return [];
  }
};

const result = fetchProducts("https://api.escuelajs.co/api/v1/products");

const displayProducts = async () => {
  const shopCollection = document.querySelector(".shop-collection");

  const data = await fetchProducts("https://api.escuelajs.co/api/v1/products");
  console.log("🚀 ~ displayProducts ~ data:", data);

  data.forEach((element) => {
    // create elementts
    const productCard = document.createElement("section");
    const productImage = document.createElement("img");
    const productTitle = document.createElement("h4");
    const productDescription = document.createElement("p");
    const productRating = document.createElement("section");
    const productStartRating = document.createElement("span");
    const productPrice = document.createElement("span");
    const productAddCart = document.createElement("button");

    // add their classes here:
    productCard.className = "product";
    productRating.className = "rating";
    productStartRating.className = "star-rating";
    productPrice.className = "price";

    // give their values here:
    productImage.src = "https://i.imgur.com/FDwQgLy.jpeg";
    console.log(`🚀 ~ data.forEach ~ element?.images[1]`, element?.images[1]);

    productImage.alt = element?.title;
    productTitle.textContent = element?.title;
    productDescription.textContent = `${element?.description?.slice(
      0,
      250
    )} Read more..`;
    productStartRating.textContent = console.log( `⭐4.8 (124 reviews)` [1]);
    productPrice.textContent = `$${element?.price}`;
    productAddCart.textContent = alert(`Added ${product.title} Add to cart!`);

    // append all childs into their parents
    productRating.append(productStartRating, productPrice, productAddCart);
    productCard.append(
      productImage,
      productTitle,
      productDescription,
      productRating
    );

    shopCollection.appendChild(productCard);
  });
};

displayProducts();
