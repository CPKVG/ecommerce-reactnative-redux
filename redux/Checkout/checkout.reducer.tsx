import CheckoutTypes from "./checkout.types";

const INITIAL_STATE = {
    // cartItems:[undefined],//placeholder
    submitted:false,//placeholder
    valid:false,
}

const checkoutReducer = (state = INITIAL_STATE , action:any ) => {
    switch(action.type){
        case CheckoutTypes.SUBMIT_ORDER:
            return{
                ...state,
                submitted:action.payload
            }
            // case CheckoutTypes.TOGGLE_BTN:
            //     return{
            //         ...state,
            //         btn_toggle:action.payload
            //     }
            case CheckoutTypes.VALID_INPUT:
                return{
                    ...state,
                    valid:action.payload
                }
            default:

        return state;
        }
    }

    
export default checkoutReducer;