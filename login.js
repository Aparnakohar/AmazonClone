let logindetails=[
  {
  User:"Aparna",
  Password:abc,
  Email:"aparnakohar@gmail.com",
  Mobile:9416034712
  },
  {
  User:"Aarzoo",
  Password:xyz,
  Email:"aarzoo@gmail.com",
  Mobile:9467774536
  }
  ];
localStorage.getItem('cart',JSON.stringify(cart));
// let cart=JSON.parse(localStorage.getItem('cart'));
// console.log(cart);
document.getElementById("login_id").addEventListener('click',function(){
  if(logindetails===userr && Password===pass){
    alert("Valid!!");
  }
  else{
    alert("Register First!");
  }
});
// "login"true
window.location.href="cartpage.html";

