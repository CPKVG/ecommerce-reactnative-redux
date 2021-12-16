import React from "react"
import { Text, View } from "react-native"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/rootReducer"

const CartDetail = () => {
    const cartSelector:any = useSelector((state: RootState) => state.cart)
    
    const cartItems = cartSelector.nextCartItem
    // console.log(cartItems)

    return(
        <View>
            <Text>Shopping Cart</Text>
        {/* display shopping cart list here */}
        </View>
    )
}

export default CartDetail