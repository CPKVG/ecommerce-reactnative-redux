import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory, fetchProduct, fetchProductSearch } from '../../../redux/Product/product.action'
import { RootState } from '../../../redux/rootReducer'
import  ProductImage  from '../productImage';
import  Carousel from 'react-native-snap-carousel';



const Item = ({ item, onPress, backgroundColor, textColor }:any) => (
    <TouchableOpacity onPress={onPress} style={[backgroundColor]}>

      <Text style={[styles.category, textColor]} testID = "categoryID">
          {item.category}
      </Text>

        <Image    
        style = {styles.image}
        source = {ProductImage(item.image)}
        testID='imageID'
        />
    </TouchableOpacity>
  );





//home page category selections
const ProductCategory = () =>{

   const productSelector:any = useSelector((state: RootState) => state.product)

   let productData:any = ""
   let productDataSearch:any = ""
   let productCategorySelect:any = ""

    //type gaurding
    if(productSelector !== undefined){
        productData = productSelector.productData
        productDataSearch = productSelector.productDataSearch
        productCategorySelect = productSelector.productCategorySelect
    }

   //triggers when user selects a category 
   const dispatch = useDispatch();

    const selectedCategory = (value:string) => {
        dispatch(fetchProductSearch(value))
        dispatch(fetchCategory(value))
    }


    //fetches category for display, 
    useEffect(() => {
        dispatch(fetchProduct())
        
    }, [])


    let data:Array<String> = []
    //filters category and first image of that category
    if(productData !== undefined && productData !== ""){
        data = productData.filter((val:any,id:number) => id == productData.findIndex((elem:any)=> elem.category == val.category))
    }

    const renderItem = ({item,backgroundColor,color}:any)=>{

        
        return (
             <Item
                item={item}
                onPress={() => selectedCategory(item.category)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
 
        )
    
    }   

    return (
        productCategorySelect !== "" || productDataSearch !== "" ? null :
        <View>
            <Carousel 
            // layout={"default"}
            data = {data}
            // horizontal = {true}
            renderItem = {renderItem}
            sliderWidth={400}   
            itemWidth={125}
            loop={true}
            autoplay={true}
            autoplayDelay={25000}
            autoplayInterval={2500}
            testID='carousel'
            />
        </View>
    //     <View style={{ marginVertical: '5%' }}>
    //     <FlatList  
    //     data={data}
    //     numColumns ={2}
    //     ItemSeparatorComponent={
    //         () => <View style={{ width: 16 }}/>
    //     }
    //     renderItem={renderItem}
    // />
  
    //   </View>
    )
} 



const styles = StyleSheet.create({
    container: {    
        flex: 1,
    },
    category:{
        fontSize: 16,
        color: "black"
    },
    image:{
        height:120,
        width:120,
        padding:20,
        marginLeft:3,
        marginRight:3,
        //flex:1,
        // backgroundColor:"#ffffff52"
      }
})
export default ProductCategory    