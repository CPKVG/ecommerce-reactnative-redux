import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductSearch } from './../../../redux/Product/product.action'
//search + fetch search results 

import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { RootState } from '../../../redux/rootReducer';
import  ProductImage  from '../productImage';



const ProductResult = () =>{

    //const dispatch = useDispatch(); 

    //return value from redux actions    
    const productSelector:any = useSelector((state: RootState) => state.product)
    console.log(productSelector)
    let productDataSearch = productSelector.productDataSearch
    //console.log(productDataSearch,"productDataSearch")
    //console.log(productData,"productData")
    //const productName: any[] = [] 

    
    // useEffect(() => {
    //   dispatch(fetchProducts("test"))
    // }, [])


    

    //const rootRoute = "./../../../"


    // const getImage = (image:any) => {

    //   switch(image){
    //     case "White_t-shirt":
    //       return require(`${rootRoute}assests/img/White_t-shirt.png`)
    //       break;
    //     case "Black_t-shirt":
    //       return require(`${rootRoute}assests/img/Black_t-shirt.png`)
    //       break;
    //     case "RTX3080":
    //       return require(`${rootRoute}assests/img/RTX3080.png`)
    //       break;
    //     case "Laptop":
    //       return require(`${rootRoute}assests/img/Laptop.png`)
    //       break;
    //     case "Potatos":
    //       return require(`${rootRoute}assests/img/Potatos.png`) 
    //       break;
    //     case "Watties_Beanz":
    //       return require(`${rootRoute}assests/img/Watties_Beanz.png`)
    //       break;
    //     case "T34-85":
    //       return require(`${rootRoute}assests/img/T34-85.png`)
    //       break;
    //     case "Kv1":
    //       return require(`${rootRoute}assests/img/Kv1.png`)
    //       break;
    //     // default:
    //     //   return require("") // add image not found 
    //     //   break;
    //   }
//}



    const renderItem = ({item}:any) => {

      
      return(
        //<ProductImage/>
        <View style={styles.container}>
          <Image 
            style = {styles.image}
            source = {ProductImage(item.image)}
          />
          <Text style = {styles.title}>
            {item.title}
          </Text>
          <Text style = {styles.price}>
            ${item.price} nzd
          </Text>
        </View>
      )
    }


    return(
    <View style={{ marginVertical: '5%' }}>
      <FlatList  
      data={productDataSearch}
      numColumns ={2}
      ItemSeparatorComponent={
          () => <View style={{ width: 16 }}/>
      }
      renderItem={renderItem}

  />

    </View>
    )

}


const styles = StyleSheet.create({
  container: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 16,
      color: "black"
    },
    image:{
      height:100,
      width:100,
      flex:1,
      backgroundColor:"red"
    },
    price:{
      fontSize:14,
      color:"black",

    }
  });

export default ProductResult    