import React from "react"

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { fetchCategory, fetchProduct, fetchProductDetail } from "./product.action";
import productTypes from "./product.types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Action creators for product.Action', () => {

    //cant test without mock json-server running
    //********************* */ TODO

        
      
    // it('Creates FETCH_PRODUCT action', () => {
        
    //     // const reponse = await fetch(`http://localhost:3000/data`);
    //     // let productData = await reponse.json();

    //     const store:any = mockStore()
    //     // function success() {
    //     //     return {
    //     //       type: 'FETCH_PRODUCT'
    //     //     }
    //     //   }
    //     let productData:any = ""
    //     const fetch = require("node-fetch");
    //       const fetchData = () => (dispatch:any) => {
    //         productData = fetch(`http://localhost:3000/data.json`)
    //         return productData 
    //       }

    //     const action = [{ type: productTypes.FETCH_PRODUCT, payload: productData }];
    //     // Return the promise
    //     return store.dispatch(fetchData())
    //       .then(() => {
    //         const actions = store.getActions()
    //         expect(actions).toEqual(action)
    //       })
    // })

        // it('Creates FETCH_PRODUCT_SEARCH action', () => {
        
    //     const reponse = await fetch(`http://localhost:3000/data`);
    //     let productData = await reponse.json();

    //     const store:any = mockStore()
        
    //     const action = [{ type: productTypes.FETCH_PRODUCT_SEARCH, payload: productData }];
    //     // Return the promise
    //     return store.dispatch(fetchProductSearch(value))
    //       .then(() => {
    //         const actions = store.getActions()
    //         expect(actions).toEqual(action)
    //       })
    // })
    //********************* */


    it('Creates SET_CATEGORY action', () => {
        const store:any = mockStore()
        let value = "Apparel"
        const action = [{ type: productTypes.SET_CATEGORY, payload: value }];
        // Return the promise
        return store.dispatch(fetchCategory(value))
          .then(() => {
            const actions = store.getActions()
            expect(actions).toEqual(action)
          })
    })


    it('Creates SET_PRODUCT_DETAIL action', () => {
        const store:any = mockStore()
        let item = {
            id:"0",
            title:"White T-shirt",
            price:"5.99",
            description:"keeps you warm",
            stock:"10",
            image:"White_t-shirt",
            category:"Apparel"
        }
        const action = [{ type: productTypes.SET_PRODUCT_DETAIL, payload: item }];
        // Return the promise
        return store.dispatch(fetchProductDetail(item))
          .then(() => {
            const actions = store.getActions()
            expect(actions).toEqual(action)
          })
    })

    


})