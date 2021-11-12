import { combineReducers } from 'redux';

import productReducer from './Product/product.reducer';

// export default combineReducers({
//     product: productReducer
// });

export const rootReducer = combineReducers({
    product: productReducer
  });


export type RootState = ReturnType<typeof rootReducer>