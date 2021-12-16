import React from 'react'


import CartUI from "../components/cart/cartUI";
import Header from '../components/header';



const ProductPageLayout = (props:any) =>{
    return(
        <>
        <Header title = {"FooCommerce"}/>
        {props.children}
        <CartUI/>
        
        </>
    )
}

export default ProductPageLayout