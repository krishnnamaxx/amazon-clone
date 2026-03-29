  export const cart=[{
    productId: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    quantity:2
  },{
    productId :"3ebe75dc-64d2-4137-8860-1f5a963e534b",
    quantity:1
  }];

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
              quantity
          });
          }
      }