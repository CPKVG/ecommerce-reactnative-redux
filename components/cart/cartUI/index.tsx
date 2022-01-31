import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import React, { useState } from "react"
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { RootStackParamList } from "../../../App"
import { addProduct } from "../../../redux/Cart/cart.action"
import { RootState } from "../../../redux/rootReducer"
import { navigationRef } from "../../../RootNavigation"



type cartScreenProp = NativeStackNavigationProp<RootStackParamList, 'Cart'>;

const CartUI = () => {
    const navigation = useNavigation<cartScreenProp>();

    const handleCheckOut = (navigation: cartScreenProp) => {
        //redirect to cart page
        if (navigationRef.isReady()) {
        navigation.navigate('CheckOut')// checkout page not cart,
        }
    }

    //fetching count status from actions

    return(
        <View style = {styles.container}>            
            <TouchableOpacity
                style = {styles.Btn}
                onPress ={() => handleCheckOut(navigation)}
                testID="btn"
            >
                <Text style = {styles.checkOutBtnTxt}>
                    Continue
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
        // flexDirection:"row",
        // alignContent:"stretch",
        // justifyContent:"center",
        padding:10,
        marginTop:6,
        marginBottom:6,


    },
    Btn:{
        margin:6,
        padding:10,  
        borderRadius:14,
        borderWidth:6,
        backgroundColor:"#1db954",
        borderColor:"#E0E0E0",
    },
    checkOutBtnTxt:{
        textAlign:"center",
        fontSize:24,
        fontWeight:"bold",
        color:"white"
    }

})
export default CartUI