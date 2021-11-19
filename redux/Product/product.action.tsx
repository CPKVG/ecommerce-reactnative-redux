import { useState } from "react";
import productTypes from "./product.types"





export const fetchProducts = (value:any) => async (dispatch:any) => {
    const reponse = await fetch(`http://localhost:3000/data`);
    let productData = await reponse.json();
    //productData = JSON.parse(productData)
    //convert json into js 
    console.log(productData, "in redux")

    // const InputResult = productData.map((x:any)=> {
    //     if(value == x.title){
    //         return x
    //     }
    // })
    //console.log(InputResult,"InputResult")

    //WIP too scuffed for a search filter
    productData.map((x:any,index:number)=>{
        if(value == x.title){
            console.log(x.title,"from redux ")
            //console.log(productData[index])
            try {
                dispatch({
                type: productTypes.FETCHPRODUCTS,
                payload: [productData[index]]
            })
            }catch(err){
                dispatch( {
                    type: productTypes.FETCHPRODUCTS_ERR,
                    payload: err
                })
            }
        }
    })
}

export const filterProducts = (productData:any) => {

}
export const addProducts = (productData:string) =>({
        type: productTypes.ADDPRODUCTS,
        payload: productData
    })