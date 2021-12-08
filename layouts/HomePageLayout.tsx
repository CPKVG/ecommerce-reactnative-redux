
import React from 'react'
import Header from '../components/header'
import Search from '../components/search'


const HomePageLayout = (props:any) => {
    //const navigation = useNavigation();
    return(
        <>
        {/* <Search/> */}
        <Header title = {"FooCommerce"}/>
        {props.children}
        </>
    )
    // return <>
    //     <Search />
    //     <Header title = {"FooCommerce"}/>
    //     {props.children}
    // </>
}

export default HomePageLayout