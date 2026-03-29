 export const deliveryOptions=[
    {
        id : '1',
        deliveryDate :7,
        price : 0
    },{
        id :'2',
        deliveryDate :3,
        price : 99

    },{
        id :'3',
        deliveryDate : 1,
        price : 199
    }
];
 export function getDeliveryOption(deliveryOptionId){
     let deliveryOption;
        deliveryOptions.forEach((option)=>
        {
        if(option.id===deliveryOptionId){
            deliveryOption=option;
        }
        });
        return deliveryOption || deliveryOptions[0];
}

