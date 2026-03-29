  export let cart= JSON.parse(localStorage.getItem('cart'));

  if(!cart){
 cart=[{
    productId: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    quantity:2,
    deliveryOptionId :'1'
  },{
    productId :"3ebe75dc-64d2-4137-8860-1f5a963e534b",
    quantity:1,
    deliveryOptionId :'2'
  }];
  }
  

  function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
  }
 export  function addtoCart(productId){
          let matchingItem;
          cart.forEach((cartItem)=>{
              if(productId===cartItem.productId){
                  matchingItem=cartItem;
              }
          });
  
          const quantitySelector = document.querySelector(
              `.js-quantity-selector-${productId}`
          );
          const quantity = Number(quantitySelector.value);
  
          if(matchingItem){
          matchingItem.quantity += quantity;
          }
          else {
              cart.push({
              productId,
              quantity,
              deliveryOptionId :'1'
          });
          }
          saveToStorage();
      }

        export function removeFromCart(productId){
            const newCart=[];
            cart.forEach((cartItem)=>{
                if(cartItem.productId !==productId){
                    newCart.push(cartItem);
            }
        }); 
        cart= newCart;
        saveToStorage();
        }

        export function calculateCartQuantity() {
            let cartQuantity = 0;
            cart.forEach((cartItem) => {
                cartQuantity += cartItem.quantity;
            });
            return cartQuantity;
        }

        export function updateQuantity(productId, newQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = newQuantity;

  saveToStorage();
}