import { useState } from "react";
import productTypes from "./product.types"


export const fetchProduct = () => async (dispatch:any) => {
    const reponse = await fetch(`http://localhost:3000/data`);
    let productData = await reponse.json();


    try {
        dispatch({
        type: productTypes.FETCHPRODUCT,
        payload: productData
    })
    }catch(err){
        dispatch( {
            type: productTypes.FETCHPRODUCT_ERR,
            payload: err
        })
    }


}



export const fetchProductSearch = (value:string) => async (dispatch:any) => {
    
    let productDataSearch:any = ''
        if(value.length !== 0){
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
            type: productTypes.FETCHPRODUCTSEARCH,
            payload: productDataSearch
        })
        }catch(err){
            dispatch( {
                type: productTypes.FETCHPRODUCT_ERR,
                payload: err
            })
        }





}





export const addProducts = (productData:string) =>({
        type: productTypes.ADDPRODUCTS,
        payload: productData
    })