import React from "react"

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { addProduct, increaseCartItem, reduceCartItem, removeCartItem } from "./cart.action";
import cartTypes from "./cart.types";


// import { addProduct,increaseCartItem, reduceCartItem, removeCartItem } from "../../redux/Cart/cart.action";

//CART ACTIONS
//PRODUCT ACTIONS

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('Action creators for cart.Action', () => {

    const nextCartItem = {
        id:"0",
        title:"White T-shirt",
        price:"5.99",
        description:"keeps you warm",
        stock:"10",
        image:"White_t-shirt",
        category:"Apparel"
    }
    const shoppingCart = [[nextCartItem,{count:1}]]
    // const store = mockStore({});
	it('Creates ADDPRODUCTS action', () => {
        const store:any = mockStore()
        const action = [{ type: cartTypes.ADD_TO_CART, payload: shoppingCart }];
        // Return the promise
        return store.dispatch(addProduct(nextCartItem))
          .then(() => {
            const actions = store.getActions()
            expect(actions).toEqual(action)
          })
    })

    it('Creates ADD_TO_CART action from increaseCartItem()', () => {
        
        const store:any = mockStore()
        
        const action = [{ type: cartTypes.ADD_TO_CART, payload: shoppingCart }];
        // Return the promise
        return store.dispatch(increaseCartItem(shoppingCart))
          .then(() => {
            const actions = store.getActions()
            expect(actions).toEqual(action)
          })
    })

    it('Creates ADD_TO_CART action from removeCartItem()', () => {
        
        const store:any = mockStore()
        
        const action = [{ type: cartTypes.ADD_TO_CART, payload: [] }];
        // Return the promise
        return store.dispatch(removeCartItem(shoppingCart))
          .then(() => {
            const actions = store.getActions()
            expect(actions).toEqual(action)
          })
    })

    it('Creates ADD_TO_CART action from reduceCartItem()', () => {
        
        const store:any = mockStore()
        
        const action = [{ type: cartTypes.ADD_TO_CART, payload: [] }];
        // Return the promise
        return store.dispatch(reduceCartItem(shoppingCart))
          .then(() => {
            const actions = store.getActions()
            expect(actions).toEqual(action)
          })
    })

    
})