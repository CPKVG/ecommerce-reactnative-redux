import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductSearch, fetchProductDetail } from './../../../redux/Product/product.action'
//search + fetch search results 

import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { RootState } from '../../../redux/rootReducer';
import  ProductImage  from '../productImage';
import { navigationRef } from '../../../RootNavigation';



const ProductResult = () =>{

  const dispatch = useDispatch();

  const selectedProduct = (item:any) => {
    //navigate to product page based on item.id
    dispatch(fetchProductDetail(item))

  }

    //const dispatch = useDispatch(); 

    //return value from redux actions    
    const productSelector:any = useSelector((state: RootState) => state.product)
    let productDataSearch:any = ""
    if(productSelector !== undefined){
      productDataSearch = productSelector.productDataSearch
    }

  
    const renderItem = ({item}:any) => {
    
      return(
        <TouchableOpacity onPress={ () => selectedProduct(item)} style={styles.container}>
          <Image 
            style = {styles.image}
            source = {ProductImage(item.image)}
          />
          <Text style = {styles.title} >
            {item.title}
          </Text>
          <Text style = {styles.price}>
            ${item.price} nzd
          </Text>
        </TouchableOpacity >
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
      // testID="flat-list"
      // keyExtractor={item => item.id.toString()}

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