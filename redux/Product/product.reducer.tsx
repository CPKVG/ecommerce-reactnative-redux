import productTypes from './product.types';

const INITIAL_STATE  = {
    product: '',
    loading:true,
    productData:'',
    productDataSearch:'',
    };


const productReducer = (state = INITIAL_STATE, action:any) => {
    switch(action.type) {
        case productTypes.FETCHPRODUCT:
            return {
            ...state,
            productData:action.payload
            }
        case productTypes.FETCHPRODUCTSEARCH:
            return{
            ...state,
            productDataSearch:action.payload
            }
        case productTypes.FETCHPRODUCT_ERR:
            return {
            loading: false,
            err:action.payload
            }
        default:
    return state;
    }
    }

export default productReducer;