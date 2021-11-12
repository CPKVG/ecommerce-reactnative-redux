import { useState } from "react";
import productTypes from "./product.types"



export const fetchProducts = (string:string) => async (dispatch:any) => {
    const reponse = await fetch(`http://localhost:3000/data`);
    const productData = await reponse.json();

    
    try {
        dispatch({
        type: productTypes.FETCHPRODUCTS,
        payload:productData
    })
    }catch(err){
        dispatch( {
            type: productTypes.FETCHPRODUCTS_ERR,
            payload: err
        })
    }
    
}
export const addProducts = (productData:string) =>({
        type: productTypes.ADDPRODUCTS,
        payload: productData
    })