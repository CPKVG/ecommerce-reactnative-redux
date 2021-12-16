import { combineReducers } from 'redux';
import cartReducer from './Cart/cart.reducer';

import productReducer from './Product/product.reducer';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
// export default combineReducers({
//     product: productReducer
// });

const persistConfig = {
  key: 'root',
  storage : AsyncStorage,
}


// export const rootReducer = combineReducers({
//     product: productReducer,
//     cart: cartReducer,
//   });

export const rootReducer = combineReducers({
  product: persistReducer(persistConfig, productReducer),
  cart: persistReducer(persistConfig, cartReducer),
});
  
// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export type RootState = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof rootReducer>