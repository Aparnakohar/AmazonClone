let products=[
  {
  pid:1,
  description:"Marvel all in one pack",
  price:5000,
  img:"c1.jpg"
},
{
  pid:2,
  description:"Captain America",
  price:1999,
  img:"c2.jpg"
},
{
  pid:3,
  description:"spiderman face mask",
  price:4449,
  img:"c3.jpg"
},
{
  pid:4,
  description:"Thor",
  price:2999,
  img:"c4.jpg"
},
{
  pid:5,
  description:"Spiderman",
  price:2500,
  img:"c5.webp"
},
{
  pid:6,
  description:"Hammer",
  price:3000,
  img:"c6.avif"
}
]

function displayproducts() {
  let Container = document.querySelector(".container");
  Container.innerHTML = ""; // Clear any existing content

  products.forEach(product => { 
      let divCard = document.createElement("div");
      // divCard.classList.add("product");

      divCard.innerHTML = `
          <img class="img" src="${product.img}" alt="${product.description}">
          <p class="pid"></p>
          <p class="description">${product.description}</p>
          <p class="price">₹${product.price}</p>
          <input type="button" value="Add to cart" class="bt" onclick="addToCart(${product.pid})"/>
      `;

      Container.appendChild(divCard);
  });

let count = 0;
let counterElement = document.getElementById("counter");

document.querySelectorAll(".bt").forEach(button => {
    button.addEventListener("click", () => {
        count++;
        counterElement.textContent = count;
    });
});
}

let cart=[];
function addToCart(pid){
  let productExist=cart.find(element=>element.pid===pid)
  let productDetail = products.find(product=>product.pid===pid);
  // console.log(productDetail);
  if(productExist){
    // alert("2 barr");
    productExist.quantity+=1;
  }
  else{
  cart.push({...productDetail, quantity: 1})
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}
displayproducts()
