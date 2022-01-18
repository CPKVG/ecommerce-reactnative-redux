import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PurchaseDetail = () => {

    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>
                Thank you for your purchase!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
    }
})

export default PurchaseDetail