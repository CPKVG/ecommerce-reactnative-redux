import React from 'react'
import Header from '../components/header'
import Search from '../components/search'

//footer and header here

// export interface LayoutProps  { 
//     children: React.ReactNode
//  }   

//  type WithChildren<T = {}> = 
//  T & { children?: React.ReactNode };

//  type CardProps = WithChildren<{
//     title: string
//   }>

//   function HomePageLayout({ title, children }: CardProps) {
//     return <>
//       <h1>{ title }</h1>
//       {children}
//     </>
//   }




const HomePageLayout = (props:any) => {
    return <>
        {/* <Header title={''} {...props}/> */}
        {/* <Header {...props}/>  */}
        <Search/>
        <Header title = {"FooCommerce"}/>
        {props.children}
        {/* {props} */}
        {/* <Footer /> */}
    </>
}

export default HomePageLayout