import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  ProductCategory  from '../../components/product/productCategory';
import ProductResult from '../../components/product/productResult';
import HomePageLayout from '../../layouts/HomePageLayout';


const HomePage = () =>{
    
    return(
        <View style ={styles.container}>
            {/* <HomePageLayout > */}
                <ProductCategory />
            {/* </HomePageLayout> */}
        </View>
        
    )
};

const styles = StyleSheet.create({
    container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
    },
    homePageText:{
        color: 'black',
        fontSize: 16,
    }
})



export default HomePage