import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/rootReducer"
import ProductImage from "../productImage"



export const ProductDetail = () =>{
    const productSelector:any = useSelector((state: RootState) => state.product)
    console.log(JSON.stringify(productSelector))
    let fetchProductDetail:any = ""
    if(productSelector !== undefined){
        fetchProductDetail = productSelector.productDetail
    }
    
  return (
      <View style = {styles.container}>
        <View style = {styles.title_container}>
            <Text style = {styles.title} testID ="titleID">{fetchProductDetail.title}</Text>
        </View>     
          <View style ={styles.image_container}>
            <Image 
            style = {styles.image}
            source = {ProductImage(fetchProductDetail.image)}
            testID="imageID"
            />
            
          </View>

        <View style = {styles.text_container}> 
            <Text style = {styles.text} testID="descID">Description: {fetchProductDetail.description}</Text>
            <Text style = {styles.text} testID="stockID">Stock: {fetchProductDetail.stock}</Text>
            <Text style = {styles.text} testID="priceID">Price: ${fetchProductDetail.price}nzd</Text>
        </View>


      </View>
  )
}


const styles = StyleSheet.create({
    container: {    

        // alignItems:"center"
    },
    title_container:{
        alignItems:"center",
    },
    title:{
        fontSize:25,
        fontWeight:"bold",
        alignItems:"center"
    },    
    image_container:{
        alignItems:"center"
    },
    image:{
        height:200,
        width:200,
        padding:20,
      },

    text_container:{
        borderColor:"black",
        borderTopWidth:7,
        paddingTop:20,
        paddingBottom:10,
        paddingLeft:15,
        paddingRight:105,
        marginTop:40,
        marginBottom:10
    },
    text:{
        fontSize:18,

    }
})

export default ProductDetail
