import React from 'react'
import CheckOutUI from '../components/checkout/checkOutUI';

import Header from '../components/header';



const CheckoutPageLayout = (props:any) =>{
    return(
        <>
        <Header title = {"FooCommerce"}/>
        {props.children}
        {/* <Footer/> */}
        {/* {<CheckOutUI/>} */}
        </>
    )

}

export default CheckoutPageLayout