import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import React, { useState } from "react"
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { RootStackParamList } from "../../../App"
import { addProduct } from "../../../redux/Cart/cart.action"
import { submitCart } from "../../../redux/Checkout/checkout.action"
import { RootState } from "../../../redux/rootReducer"
import { navigationRef } from "../../../RootNavigation"



type PurchaseScreenProp = NativeStackNavigationProp<RootStackParamList, 'Purchase'>;

const CheckoutUI = () => {
    const navigation = useNavigation<PurchaseScreenProp>();
    const dispatch = useDispatch()
    
    const handleCheckOut = (navigation: PurchaseScreenProp) => {
        if (navigationRef.isReady()) {
            navigation.navigate('Purchase')
        }
        // dispatch(submitCart())
    }

    const checkoutSelector:any = useSelector((state: RootState) => state.checkout)
    let validCheckoutInput = true

    if(checkoutSelector !== undefined){
        validCheckoutInput = checkoutSelector.valid
    }

    
    // validCheckoutInput = false
    return(
        validCheckoutInput ? 
            <View style = {styles.container}>            
                <TouchableOpacity
                    style = {styles.Btn}
                    onPress ={() => handleCheckOut(navigation)}
                    
                >
                    <Text style = {styles.btnTxt} testID="orderSubmitBtn">
                        Order Submit
                    </Text>
                </TouchableOpacity>

            </View> : null
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
    btnTxt:{
        textAlign:"center",
        fontSize:24,
        fontWeight:"bold",
        color:"white"
    }

})
export default CheckoutUI