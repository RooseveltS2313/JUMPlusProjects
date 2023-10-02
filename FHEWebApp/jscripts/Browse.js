const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');

btnCart.addEventListener('click',()=>{
  cart.classList.add('cart-active');
});

btnClose.addEventListener('click',()=>{
  cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded',loadFurniture);

function loadFurniture(){
  loadContent();

}

function loadContent(){
  //Remove Furniture Items  From Cart
  let btnRemove=document.querySelectorAll('.cart-remove');
  btnRemove.forEach((btn)=>{
    btn.addEventListener('click',removeItem);
  });

  //Product Item Change Event
  let qtyElements=document.querySelectorAll('.cart-quantity');
  qtyElements.forEach((input)=>{
    input.addEventListener('change',changeQty);
  });

  //Product Cart
  
  let cartBtns=document.querySelectorAll('.add-cart');
  cartBtns.forEach((btn)=>{
    btn.addEventListener('click',addCart);
  });

  updateTotal();
}


//Remove Item
function removeItem() {
    let title=this.parentElement.querySelector('.cart-furniture-title').innerHTML;
    itemList=itemList.filter(el=>el.title!=title);
    this.parentElement.remove();
    loadContent();

}

//Change Quantity
function changeQty(){
  if(isNaN(this.value) || this.value<1){
    this.value=1;
  }
  loadContent();
}

let itemList=[];

//Add Cart
function addCart(){
 let furniture=this.parentElement;
 let title=furniture.querySelector('.furniture-title').innerHTML;
 let price=furniture.querySelector('.furniture-price').innerHTML;
 let imgSrc=furniture.querySelector('.furniture-img').src;
 //console.log(title,price,imgSrc);
 
 let newProduct={title,price,imgSrc}

let newProductElement= createCartProduct(title,price,imgSrc);
let element=document.createElement('div');
element.innerHTML=newProductElement;
let cartBasket=document.querySelector('.cart-content');
cartBasket.append(element);
loadContent();
}


function createCartProduct(title,price,imgSrc){

  return `
  <div class="cart-box">
  <img src="${imgSrc}" class="cart-img">
  <div class="detail-box">
    <div class="cart-furniture-title">${title}</div>
    <div class="price-box">
      <div class="cart-price">${price}</div>
       <div class="cart-amt">${price}</div>
   </div>
    <input type="number" value="1" class="cart-quantity">
  </div>
  <ion-icon name="trash" class="cart-remove"></ion-icon>
</div>
  `;
}

function updateTotal()
{
  const cartItems=document.querySelectorAll('.cart-box');
  const totalValue=document.querySelector('.total-price');
  const disValue=document.querySelector('.total-disprice');

  let total=0;

  cartItems.forEach(product=>{
    let priceElement=product.querySelector('.cart-price');
    let price=parseFloat(priceElement.innerHTML.replace("$",""));
    let qty=product.querySelector('.cart-quantity').value;
    total+=(price*qty);
    product.querySelector('.cart-amt').innerText="$"+(price*qty);

  });
  if (total > 2000 ) {
    let discount=(total*0.9);
    disValue.style.visibility = "visible";
    disValue.innerHTML='Discounted $'+discount;
  }
  else {
    disValue.style.visibility = "hidden";
  }
  totalValue.innerHTML='$'+total;

}

function placeOrder() {
  let tWarning = "Are you sure you want to purchase these items?";

  if (confirm(tWarning) == true) {
    const cartItems=document.querySelectorAll('.cart-box');
    const items = [];
    // am aware of issue
    let total=0;
    let price=0;

    cartItems.forEach(product=>{
      let nameElement=product.querySelector('.cart-furniture-title');
      let name= nameElement.textContent;
      let priceElement=product.querySelector('.cart-price');
      let price=parseFloat(priceElement.innerHTML.replace("$",""));
      let qty=product.querySelector('.cart-quantity').value;
      total+=(price*qty);
      
      items.push(qty + " of " + name);
    });
    
    if (total > 2000 ) {
      price=(total*0.9);      
    }
    else {
      price = total;
    }
    //
    if (total == 0){
      alert("There is nothing to purchase.");
    } else {
    alert("You have purchased " + items + " for a total of $" + price + ".");
    sessionStorage.setItem("BoughtItems", JSON.stringify(items));
    sessionStorage.setItem("BoughtPrice", JSON.stringify(price));
    }

  } else {
      alert("Please make sure you will be happy with your purchase.");
  }
}
