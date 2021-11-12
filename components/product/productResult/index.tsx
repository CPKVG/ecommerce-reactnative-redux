import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './../../../redux/Product/product.action'
//search + fetch search results 

import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { RootState } from '../../../redux/rootReducer';

    //start json server [json-server --watch db.json]
    //[adb reverse tcp:3000 tcp:3000] ==> to set mobile server with local host server

    //cd android 
    //./gradlew clean

const ProductResult = () =>{

    // const dispatch = useDispatch(); 

    //return value from redux actions    
    const productSelector:any = useSelector((state: RootState) => state.product)

    const productData = productSelector.productData

    const productName: any[] = [] 

    Object.keys(productData).map((x:any) =>{
        productName.push(productData[x].title)
    })
    console.log(productName)


    const Item = ({ title } :any) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
      
    const renderItem = ({ item }:any) => (
        <Item title={item.title} />
    );

  

    return(
        <View style={{ marginVertical: '15%' }}>
        <FlatList
        data={productData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
        {/* <Button title="READ" onPress={() => readFile()} /> */}
        {/* <Button title = "FILECREATION" onPress = {() => createFile()}/> */}



    </View>
    )

}


const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

export default ProductResult    