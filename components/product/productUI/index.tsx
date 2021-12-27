import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import React, { useState } from "react"
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { RootStackParamList } from "../../../App"
import { addProduct } from "../../../redux/Cart/cart.action"
import { RootState } from "../../../redux/rootReducer"



type cartScreenProp = NativeStackNavigationProp<RootStackParamList, 'Cart'>;

const ProductUI = () => {
    const dispatch = useDispatch()

    const productSelector:any = useSelector((state: RootState) => state.product)
    let productDetail = productSelector.productDetail


    const cartSelector:any = useSelector((state:RootState) => state.cart)

    const handleAddToCart = () =>{
        dispatch(addProduct(productDetail))
    }

    const navigation = useNavigation<cartScreenProp>();

    const handleCheckOut = (navigation: cartScreenProp) => {
        //redirect to cart page
        navigation.navigate('Cart')// checkout page not cart,
    }
    let count = 0

    //fetching count status from actions
    if(cartSelector.nextCartItem !=- ""){
        cartSelector.nextCartItem.forEach((x:any)=>{

            if(productDetail.id == x[0].id){
                return (count = x[1].count)
            }

        })
    }



    return(
        <View style = {styles.container}>
            <TouchableOpacity 
                // style = {styles.button}
                style = {styles.cartBtn}
                onPress = {() => handleAddToCart()} // will change to touchableOcupacity 
                // title = "Add To Cart"
            >
                <Text style = {styles.cartBtnTxt}>
                Add to Cart ({count})
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style = {styles.checkOutBtn}
                onPress ={() => handleCheckOut(navigation)}
            >
                <Text style = {styles.checkOutBtnTxt}>
                    To CheckOut
                </Text>
            </TouchableOpacity>



        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        //keep the container at the bottom
        position: 'absolute', left: 0, right: 0, bottom: 0,
        //align items in row
        flexDirection:"row",
        justifyContent:"center",
        padding:10,
        marginTop:6,
        marginBottom:6,
        //borderTopWidth:4,
        //borderTopColor:"black",


    },
    // btn:{
    //     margin:6,
    //     padding:10,  
    //     borderRadius:14,
    //     borderWidth:6,
    // },
    cartBtn:{
        margin:6,
        padding:10,  
        borderRadius:14,
        borderWidth:6,
        backgroundColor:"#ffb900",
        borderColor:"#E0E0E0",
    },
    cartBtnTxt:{
        fontSize:24,
        fontWeight:"bold",
        color:"white"
    },
    checkOutBtn:{
        margin:6,
        padding:10,  
        borderRadius:14,
        borderWidth:6,
        backgroundColor:"#1db954",
        borderColor:"#E0E0E0",
    },
    checkOutBtnTxt:{
        fontSize:24,
        fontWeight:"bold",
        color:"white"
    }

})
export default ProductUI