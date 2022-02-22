import React from 'react'

import Header from '../components/header';

const ProductPageLayout = (props:any) =>{
    return(
        <>
        {/* <Header title = {"FooCommerce"}/> */}
        {props.children}
        {/* {<Footer/>} */}
        </>
    )
}

export default ProductPageLayout