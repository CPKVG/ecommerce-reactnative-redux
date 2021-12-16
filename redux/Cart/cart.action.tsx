import cartTypes from './cart.types';


// let shoppingCart: { item: any; count: number; }[] = []
let shoppingCart: any[] = []
// let count = 1
export const addProduct = (nextCartItem:any) => async (dispatch:any) => {

//nextCartItem.push({"count":count})

let cart_item:any = [nextCartItem , {"count":1}]
//checking/filtering for duplicate pushed into cart

if(shoppingCart.length == 0){
    //if shopping cart is empty, no need to check for duplicates
    shoppingCart.push(cart_item)
}else{

    //check for duplicate items existing in shopping cart
    let isDup = false 

    shoppingCart.map((x:any) => {
        if(Object.values(x[0].id)[0] == cart_item[0].id){
            ++ x[1].count
            return isDup = true
        }
    })

    if(isDup == false){
        shoppingCart.push(cart_item)
    }


}

        dispatch({
        type: cartTypes.ADD_TO_CART,
        payload: shoppingCart
        })
}

export const removeCartItem = () => async (dispatch:any) => {
    //remove item from cart

}

export const reduceCartItem = () => async (dispatch:any) => {
    //reduce item number by 1
}

