import React from 'react';
import { StyleSheet, View } from 'react-native';
import CartDetail from '../../components/cart/cartDetail';
import CartUI from '../../components/cart/cartUI';

const CartPage = () =>{



    return(
        <View style = {styles.container}>
            <View style = {styles.cartDetail}>
                <CartDetail/>
            </View>
            <View style = {styles.cartUI}>
                <CartUI/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    cartDetail:{
        flex:12
    },
    cartUI:{
        flex:3
    }
})

export default CartPage