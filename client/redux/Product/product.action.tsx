import { useState } from "react";
import productTypes from "./product.types"
import * as RootNavigation from "../../RootNavigation";

export const fetchProduct = () => async (dispatch:any) => {
    const reponse = await fetch(`http://localhost:3000/data`);
    let productData = await reponse.json();
    

    try {
        dispatch({
        type: productTypes.FETCH_PRODUCT,
        payload: productData
    })
    }catch(err){
        dispatch({
            type: productTypes.FETCH_PRODUCT_ERR,
            payload: err
        })
    }


}



export const fetchProductSearch = (value:string|undefined) => async (dispatch:any) => {
    let productDataSearch:any = ""
        if(typeof value == "string" && value.length !== 0){
            const reponse = await fetch(`http://localhost:3000/data`);
            productDataSearch = await reponse.json();

           //productData filtered by search input value 
            productDataSearch = productDataSearch.filter((item:any) =>{
            //joins all object data into one obj string, allows categories to be searched (it also includes text description)
            return Object.values(item).join('').toLowerCase().includes(value.toLowerCase())
        })
        }else{
            productDataSearch = ""
        }
        try {
            dispatch({
            type: productTypes.FETCH_PRODUCT_SEARCH,
            payload: productDataSearch,
            //categoryBool:categoryBool
        })
        }catch(err){
            dispatch( {
                type: productTypes.FETCH_PRODUCT_ERR,
                payload: err
            })
        }

}

//get category from productCategory 
export const fetchCategory = (value:string | undefined) => async (dispatch:any) =>{  

    if(value !== undefined || value !== null){
            dispatch({
                type:productTypes.SET_CATEGORY,
                payload:value
            })
    }else{
        // console.log("i am undefined")
    }


}


export const fetchProductDetail = (item: any) => async (dispatch:any) =>{
    RootNavigation.navigate("Product", item.id)

    try{
        dispatch({
            type:productTypes.SET_PRODUCT_DETAIL,
            payload:item
        })
    }catch(err){
        dispatch( {
            type: productTypes.SET_PRODUCT_DETAIL,
            payload: err
        })
    }
} 


// export const addProducts = (productData:string) =>({
//         type: productTypes.ADDPRODUCTS,
//         payload: productData
//     })