import CheckoutTypes from "./checkout.types";


export const submitCart= () => async (dispatch:any) => {
    //button action fromm checkoutUI
    dispatch({
        type: CheckoutTypes.SUBMIT_ORDER,
        payload:true
        })
}

export const toggleSubmitCardBtn = () => async (dispatch:any) => {
    //action for checkoutBtn to appear
    //data validation to check for all inputs to be filled
    dispatch({
        type: CheckoutTypes.TOGGLE_BTN,
        // payload: shoppingCart   
        payload:true
        })
}
