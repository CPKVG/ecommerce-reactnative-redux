import cartTypes from './cart.types';


let shoppingCart: any[] = []
export const addProduct = (nextCartItem:any) => async (dispatch:any) => {


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

export const increaseCartItem = (item:any) => async(dispatch:any) => {
    
    shoppingCart.map((x:any)=> {
                    if(item[0].id == x[0].id){
                        ++ x[1].count
                    }
                })

   dispatch({
    type: cartTypes.ADD_TO_CART,
    payload: shoppingCart
    })
}

export const removeCartItem = (item:any) => async (dispatch:any) => {
    //remove item from cart

    let shoppingCartIndex = shoppingCart.findIndex(el => el === item)

    shoppingCart.splice(shoppingCartIndex , 1)

    dispatch({
    type: cartTypes.ADD_TO_CART,
    payload: shoppingCart   
    })

    // if shopping cart is empty display msg
    let emptyMsg = "It's empty in here :("

    // if(shoppingCart.length == 0){
    //     dispatch({
    //         type: cartTypes.ADD_TO_CART,
    //         payload: emptyMsg   
    //         })
    // }else{
    //     dispatch({
    //         type: cartTypes.ADD_TO_CART,
    //         payload: shoppingCart   
    //         })
    // }


    // shoppingCart.filter(el => el.)
}
export const reduceCartItem = (item:any) => async (dispatch:any) => {
    //reduce item number by 1

        
            shoppingCart.map((x:any)=> {
                
                if(item[0].id == x[0].id && x[1].count > 0){
                    -- x[1].count
                }
            })
            

        dispatch({
        type: cartTypes.ADD_TO_CART,
        payload: shoppingCart
        })
}

