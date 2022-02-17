import cartTypes from './cart.types';

const INITIAL_STATE = {
    cartItems:[undefined],
    // prevCartItems:[undefined],
    nextCartItem:""
}


const cartReducer = (state = INITIAL_STATE , action:any ) => {
    switch(action.type){
        case cartTypes.ADD_TO_CART:
            return{
                ...state,
                //  prevCartItems:state.cartItems,
                nextCartItem:action.payload
            }
            default:

        return state;
        }
    }

export default cartReducer;