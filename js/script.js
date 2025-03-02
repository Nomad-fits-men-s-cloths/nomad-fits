
// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Contact form handling
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Form submitted:", { name, email, message });

  
    contactForm.reset();
    alert("Thank you for your message! We will get back to you soon.");
  });
}

// halkaan ayaan API ga ka wacanay
axios
  .get("https://fakestoreapi.com/products")
  .then((response) => {
    const products = response.data;
    // Filter only clothing items
    // kali waxaan soo bandhigeynaa kuwa dharka ah oo kaliya
    const featuredProducts = products
      .filter(
        (product) =>
          product.category === "men's clothing" ||
          product.category === "women's clothing"
      )
      .slice(1, 4); // waxaan heleynaa 4 dhar ugu horeeyp
    
    console.log("Featured Products:", featuredProducts);
    featuredProducts.forEach((featured) => featuredCollections(featured));
  })
  .catch((err) => {
    console.error("Error fetching featured collections:", err);
    document.querySelector(".featured-collection").innerHTML =
      '<p class="error-message">Failed to load featured collections. Please try again later.</p>';
  });

function featuredCollections(featured) {
  const featuredCard = document.querySelector(".featured-collection");

  const adventure = document.createElement("section");
  adventure.className = "adventure";

  const adventureImage = document.createElement("img");
  adventureImage.src = featured.image;
  adventureImage.alt = featured.title;
  adventureImage.loading = "lazy"; // Add lazy loading for better performance

  const contentWrapper = document.createElement("div");
  contentWrapper.className = "adventure-content";

  const adventureTitle = document.createElement("h4");
  adventureTitle.textContent = featured.title;

  const adventureDescription = document.createElement("p");
  adventureDescription.textContent =
    featured.description.substring(0, 100) + "...";

  const priceTag = document.createElement("p");
  priceTag.className = "price-tag";
  priceTag.textContent = `$${featured.price.toFixed(2)}`;

  const shopButton = document.createElement("button");
  shopButton.className = "btn explore";
  shopButton.textContent = "Shop Now";

  contentWrapper.appendChild(adventureTitle);
  contentWrapper.appendChild(adventureDescription);
  contentWrapper.appendChild(priceTag);
  contentWrapper.appendChild(shopButton);

  adventure.appendChild(adventureImage);
  adventure.appendChild(contentWrapper);

  featuredCard.appendChild(adventure);
}

// soo jidashada iyo soo bandhigista shop collection kiisa
let currentPage = 1;
const productsPerPage = 6;

function loadProducts(page = 1) {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      const products = response.data;
      const startIndex = (page - 1) * productsPerPage;
      const selectedProducts = products.slice(
        startIndex,
        startIndex + productsPerPage
      );

      if (page === 1) {
        document.querySelector(".shop-collection").innerHTML = "";
      }

      selectedProducts.forEach((product) => createProduct(product));

      // qari marka aad riixdo button xog badan soo bandhig
      const loadMoreBtn = document.querySelector(".load-more .btn");
      if (loadMoreBtn) {
        loadMoreBtn.style.display =
          startIndex + productsPerPage >= products.length ? "none" : "block";
      }
    })
    .catch((err) => {
      console.error("Error loading products:", err);
      document.querySelector(".shop-collection").innerHTML =
        '<p class="error-message">Failed to load products. Please try again later.</p>';
    });
}

function createProduct(product) {
  const shopCollection = document.querySelector(".shop-collection");

  const productSection = document.createElement("section");
  productSection.className = "product";

  const productImage = document.createElement("img");
  productImage.src = product.image;
  productImage.alt = product.title;
  productImage.loading = "lazy";

  const contentWrapper = document.createElement("div");
  contentWrapper.className = "product-content";

  const productTitle = document.createElement("h4");
  productTitle.textContent = product.title;

  const productDescription = document.createElement("p");
  productDescription.textContent =
    product.description.substring(0, 100) + "...";

  const ratingSection = document.createElement("section");
  ratingSection.className = "rating";

  const ratingStar = document.createElement("span");
  ratingStar.className = "star-rating";
  const stars = "⭐".repeat(Math.round(product.rating.rate));
  ratingStar.innerHTML = `${stars} <span class="rating-count">(${product.rating.count})</span>`;

  const productPrice = document.createElement("span");
  productPrice.className = "price";
  productPrice.textContent = `$${product.price.toFixed(2)}`;

  const productButton = document.createElement("button");
  productButton.textContent = "Add to Cart";
  productButton.addEventListener("click", () => {
    productButton.innerHTML = "✓ Added";
    productButton.style.backgroundColor = "var(--accent-color)";
    setTimeout(() => {
      productButton.innerHTML = "Add to Cart";
      productButton.style.backgroundColor = "";
    }, 2000);
  });

  contentWrapper.appendChild(productTitle);
  contentWrapper.appendChild(productDescription);

  ratingSection.appendChild(ratingStar);
  ratingSection.appendChild(productPrice);
  ratingSection.appendChild(productButton);

  productSection.appendChild(productImage);
  productSection.appendChild(contentWrapper);
  productSection.appendChild(ratingSection);

  shopCollection.appendChild(productSection);
}

// soo bandhigista shop collection kiisa
loadProducts();

// ku darista event dhageysanaayo in aan wax badan soo aqrino
const loadMoreBtn = document.querySelector(".load-more .btn");
if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", () => {
    currentPage++;
    loadProducts(currentPage);
  });
}

// ku darista event dhageysanaayo in aan wax filer gareyneyno
const filterSelects = document.querySelectorAll(".filter-select");
filterSelects.forEach((select) => {
  select.addEventListener("change", () => {
    currentPage = 1;
    loadProducts();
  });
});

// Header scroll si aan ugu sameyno si aan u qari no marka scroll down lasameeyo iyo in aan soo bandhig no marka aan scroll up sameyno
let lastScroll = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  
  if (currentScroll > lastScroll) {
    // scroll down marka lasameeyo qari header waxa ku jiro
    header.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up - show header
    // scroll up marka lasameeyo soo bandhig header
    header.style.transform = 'translateY(0)';
  }
  
  lastScroll = currentScroll;
});

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle && navMenu) {
  mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const isOpen = navMenu.classList.contains('active');
    mobileMenuToggle.innerHTML = isOpen ? 
      '<i class="fa-solid fa-xmark"></i>' : 
      '<i class="fa-solid fa-bars"></i>';
  });

  // xir menu bar ka marka aan click siino qeyb ka mid ah banaanka
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target) && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      mobileMenuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });

  // xir menu bar ka marka aan click siino link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      mobileMenuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
}

