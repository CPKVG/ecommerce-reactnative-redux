import React, { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux"


const Auth = () => {

    return(
        <View style = {styles.container}>
            <View style = {styles.btn_container}>
            <TouchableOpacity style = {styles.signIn_btn}>
                <Text style = {styles.btn_txt}>SignIn</Text>
            </TouchableOpacity>
            </View>

            <View style = {styles.btn_container}>
            <TouchableOpacity style = {styles.SignUp_btn}>
                <Text style = {styles.btn_txt}>SignUp</Text>
            </TouchableOpacity>
            </View>

        </View>
    )
}   


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
    },
    btn_container:{
        flex:1,
        // padding:5,
    },
    signIn_btn:{
        // minHeight:40,
        margin:6,
        padding:4,  
        borderRadius:14,
        borderWidth:6,
        backgroundColor:"#fea710",
        borderColor:"#E0E0E0",
    },
    SignUp_btn:{
        // minHeight:40,
        margin:6,
        padding:4,  
        borderRadius:14,
        borderWidth:6,
        backgroundColor:"#1db954",
        borderColor:"#E0E0E0",
    },
    btn_txt:{
        textAlign:"center",
        fontSize:24,
        fontWeight:"bold",
        color:"white"
    }
})


export default Auth 