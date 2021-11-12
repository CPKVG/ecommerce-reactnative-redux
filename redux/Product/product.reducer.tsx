import productTypes from './product.types';

const INITIAL_STATE  = {
    product: '',
    loading:true,
    productData:'',

    };


const productReducer = (state = INITIAL_STATE, action:any) => {
    switch(action.type) {
        case productTypes.FETCHPRODUCTS:
            return {
            ...state,
            productData:action.payload
            }
        case productTypes.FETCHPRODUCTS_ERR:
            return {
            loading: false,
            err:action.payload
            }
        default:
    return state;
    }
    }

export default productReducer;