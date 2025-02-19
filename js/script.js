/* axios
  .get("https://api.escuelajs.co/api/v1/products")
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

const ecommerceWebsite = (product) => {
  //first 3 products :

  const mainContainer = document.querySelector("mainContainer");
  const website = websiteData(product);

  newsContainer.innerHTML = "";

  const shopCollect = document.createElement("div");
  shopCollect.className = "shop-collection";

  const adventureSection = document.createElement("section");
  adventureSection.classList.add("product");

  const adventureImage = document.createElement("img");
  adventureImage.src = website[0].image;
  adventureImage.alt = website[0].name;

  const h4 = document.createElement("h4");
  h4.textContent = " Adventure Trek Jacket";

  const paragraphe = document.createElement("paragraphe");
  paragraphe1.textContent =
    "Waterproof,breathable jacket perfect for hiking and outdoor adventures.";

  const ratingSection = document.createElement("section");
  ratingSection.classList.add("rating");

  const span = document.createElement("span");
  span.classList.add("star-rating");
  span.textContent = "⭐4.8 (124 reviews)";
  span.classList.add("price");
  span.textContent = "199.99";
  const button = document.createElement("button");
  button.textContent = "Add to Carte";

  shopCollect.appendChild(adventureSection);
  shopCollect.appendChild(adventureImage);
  shopCollect.appendChild(h4);
  shopCollect.appendChild(paragraphe);
  shopCollect.appendChild(ratingSection);
  shopCollect.appendChild(span);
  shopCollect.appendChild(button);

  const urbanSection = document.createElement("section");
  urbanSection.className.add("product");

  const urbanImage1 = document.createElement("img");
  urbanImage1.src = website[0].image;
  urbanImage.alt = website[0].name;

  const h4two = document.createElement("h4");
  h4.textContent = "Urban Nomad backPack";

  const paragraphe2 = document.createElement("p");
  paragraphe2.textContent =
    "sleek,weatherproof Backpack with laptop compartement and hidden pockets.";

  const ratingSection2 = document.createElement("section");
  ratingSection2.classList.add("rating");

  const span2 = document.createElement("span");
  span2.classList.add("star-rating");
  span2.textContent = " ⭐ 4.9 (89 reviews) ";
  span2.classList.add("price");
  span2.textContent = "149.99";
  const button2 = document.createElement("button");
  button2.textContent = "Add to Carte";

  urbanSection.appendChild(urbanImage1);
  urbanSection.appendChild(h4two);
  urbanSection.appendChild(paragraphe2);

  const citySection = document.createElement("section");
  citySection.className = "product";

  const urbanImage = document.createElement("img");
  urbanImage1.src = website[0].image;
  cityImage.alt = website[0].name;

  const h43 = document.createElement("h4");
  h4.textContent = "City Stretch chinos";

  const paragraphe3 = document.createElement("p");
  paragraphe3.textContent =
    "Four-way stretch chinos that move with you,perfect for urban exploration.";

  const ratingSection3 = document.createElement("section");
  ratingSection3.classList.add("rating");

  const span3 = document.createElement("span");
  span3.classList.add("star-rating");
  span2.textContent = " ⭐ 4.6 (203 reviews)";
  span3.classList.add("price");
  span3.textContent = "119.99";
  const button3 = document.createElement("button");
  button3.textContent = "Add to Carte";

  //last 3 products:

  const marinoSection = document.createElement("section");
  marinoSection.className = "product";

  const marinoSectionImage = document.createElement("img");
  marinoImage.src = website[0].image;
  marinoImage.alt = website[0].name;

  const h44 = document.createElement("h4");
  h4.textContent = "Marino Wool Henley";

  const paragraphe4 = document.createElement("p");
  paragraphe4.textContent =
    "Naturally outdoor-resistant and temperature-regulationg long sleeve henley.";

  const ratingSection4 = document.createElement("section");
  ratingSection3.classList.add("rating");

  const span4 = document.createElement("span");
  span4.classList.add("star-rating");
  span4.textContent = "⭐ 4.7 (156reviews)";
  span4.classList.add("price");
  span4.textContent = "89.99";
  const button4 = document.createElement("button");
  button4.textContent = "Add to Carte";

  const alpinSection = document.createElement("section");
  marinoSection.className = "product";

  const marinoImage = document.createElement("img");
  marinoImage.src = website[0].image;
  marinoImage.alt = website[0].name;

  const h45 = document.createElement("h4");
  h4.textContent = "Marino Wool Henley";

  const paragraphe5 = document.createElement("p");
  paragraphe5.textContent =
    "Premium down-filled parka for extreme cold weather conditions.";

  const ratingSection5 = document.createElement("section");
  ratingSection5.classList.add("rating");

  const span5 = document.createElement("span");
  span5.classList.add("star-rating");
  span5.textContent = "⭐ 4.9 (78 reviews)";
  span5.classList.add("price");
  span5.textContent = "299.99";
  const button5 = document.createElement("button");
  button5.textContent = "Add to Carte";

  const packablenSection = document.createElement("section");
  packablenSection.className = "product";

  const PackableImage = document.createElement("img");
  PackableImage.src = website[0].image;
  PackableImage.alt = website[0].name;

  const h46 = document.createElement("h4");
  h4.textContent = "Packable Rain Shell";

  const paragraphe6 = document.createElement("p");
  paragraphe6.textContent =
    "ultra-light-weight,packable rain jacket for unexpected weather. ";

  const ratingSection6 = document.createElement("section");
  ratingSection6.classList.add("rating");

  const span6 = document.createElement("span");
  span6.classList.add("star-rating");
  span6.textContent = "⭐ 4.9 (78 reviews)";
  span6.classList.add("price");
  span6.textContent = "129.99";
  const button6 = document.createElement("button");
  button6.textContent = "Add to Carte";

  //return the main-container

  return mainContainer;
};

ecommerceWebsite(result);
