import productTypes from './product.types';

const INITIAL_STATE  = {
    product: '',
    loading:true,
    productData:'',
    productDataSearch:undefined,
    productCategorySelect:"",
    // categoryBool:false
    };

const productReducer = (state = INITIAL_STATE, action:any) => {
    switch(action.type) {
        case productTypes.FETCH_PRODUCT:
            return {
            ...state,
            productData:action.payload
            }
        case productTypes.FETCH_PRODUCT_SEARCH:
            return{
            ...state,
            productDataSearch:action.payload,
            //categoryBool:action.categoryBool
            }
        case productTypes.FETCH_PRODUCT_ERR:
            return {
            loading: false,
            err:action.payload
            }
        case productTypes.SET_CATEGORY:
            return{
            ...state,
            productCategorySelect:action.payload
            }
        case productTypes.SET_CATEGORY_ERR:
            return{
                loading:false,
                err:action.payload
            }
        case productTypes.SET_PRODUCT_DETAIL:
            return{
                ...state,
                productDetail:action.payload
            }
        
        default:
    return state;
    }
    }

export default productReducer;