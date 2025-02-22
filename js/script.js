

axios.get("https://fakestoreapi.com/products")
.then(response=>{
const projet = response.data;
console.log(projet);


projet.slice (17,20).forEach(function(featured){

  featuredCollections(featured)
})


}).catch(err => console.error('there is an error:', err));



function featuredCollections(featured){


  const featuredcard = document.querySelector(".featured-collection")

  const  adventure= document.createElement("section")
  adventure.className = "adventure"

  const adventureImage = document.createElement("img")
  adventureImage.src = featured.image
  

  const adventuretTitle = document.createElement("h4")
  adventuretTitle.textContent = featured.title


const  adventuredescription = document.createElement("p")
adventuredescription.textContent = featured.description

adventure.appendChild(adventureImage)
adventure.appendChild(adventuretTitle)
adventure.appendChild(adventuredescription)


featuredcard.appendChild(adventure)



console.log(featuredcard)

}

  





axios.get('https://fakestoreapi.com/products')
.then(response => {
 const dharka = response.data;
 console.log(dharka);

 dharka.slice(0,6).forEach(function(product){
  createProduct(product)
 })
            
}).catch(err => console.error('something is wrong:', err));




function createProduct(product){

  const shopCollection = document.querySelector(".shop-collection")

  const productSection = document.createElement("section")
  productSection.className = "product"



  const productImage = document.createElement("img")
  productImage.src = product.image
  


  const productTitle = document.createElement("h4")
  productTitle.textContent = product.title



const productDescription = document.createElement("p")
productDescription.textContent = product.description



const ratingSection = document.createElement("section")
  ratingSection.className = "rating"
  
  const ratingStar = document.createElement("span")
  ratingStar.className = "star-rating"
  ratingStar.textContent = `⭐ ${product.rating.rate } ${product.rating.count} reviews `

  const productPrice = document.createElement("span")
  productPrice.className = "price"
  productPrice.textContent = ` $${product.price}`
  
  const productButton = document.createElement("button")
  productButton.textContent = "Add to Cart"


  productSection.appendChild(productImage)
  productSection.appendChild(productTitle)
  productSection.appendChild(productDescription)


  
ratingSection.appendChild(ratingStar)
ratingSection.appendChild(productPrice)
ratingSection.appendChild(productButton)

productSection.appendChild(ratingSection)
shopCollection.appendChild(productSection)


console.log(shopCollection)
}






















































