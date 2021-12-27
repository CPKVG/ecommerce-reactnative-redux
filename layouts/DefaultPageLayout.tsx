import React from 'react'
import Header from '../components/header'

const DefaultPageLayout = (props:any) => {

    return(
        <>
        <Header title = {"FooCommerce"}/>
        {props.children}
        </>
    )

}

export default DefaultPageLayout