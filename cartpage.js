let cart=JSON.parse(localStorage.getItem('cart'));
console.log(cart);

function displaycart() {
  let cart=JSON.parse(localStorage.getItem('cart'));
  let Cc = document.querySelector(".tbodyChange");
  Cc.innerHTML = ""; // Clear any existing content
  let total = 0;
  cart.forEach((productt,index) => { 
      total += productt.price*productt.quantity;
      let dc = document.createElement("tr");
      // dc.classList.add("productt");
      dc.innerHTML = `<tr>
      <td class="Sr_No">${index+1}</td>
      <td><img class="img" src="${productt.img}" style="height:50px; width:50px;" /></td>
      <td class="Quantity"><button class="dec" onclick="decCount(${productt.pid})">-</button>${productt.quantity}<button class="inc" onclick="incCount(${productt.pid});">+</button></td>
      <td class="price">₹${productt.price*productt.quantity}</td>
      <td><i class="fa-solid fa-trash" onclick="deleteAll(${productt.pid})"></i></td>
      </tr>
     
      `;
      Cc.appendChild(dc);
  });
  document.getElementById('z').innerText = total;
}
function incCount(pid){
  
  let quantityExist=cart.find(element=>element.pid===pid);
  console.log(quantityExist);
  quantityExist.quantity+=1;
  localStorage.setItem('cart',JSON.stringify(cart));
  displaycart();
}
function decCount(pid){
  let pd=cart.find(item=>item.pid===pid);
  if(pd.quantity>1){
  pd.quantity-=1;
  localStorage.setItem('cart',JSON.stringify(cart));
  }
  else{
    pd.quantity=1;
    // alert("not possible");
  }
  displaycart();
}
function deleteAll(pid){
  let pk=cart.filter(dl=>dl.pid!==pid);
  console.log(pk);
  cart=pk;
  localStorage.setItem('cart',JSON.stringify(cart));
  displaycart();
}
function logincheck(login){
  // let check=cart.find(element=>element.login===login);
  let change=document.createElement("div");
  if(cart===login){
    change.innerHTML='<p>Successfully Purchased!</p>'
    alert("logged");
  }
  else{
    alert("login first");
  }
  
}


displaycart();
