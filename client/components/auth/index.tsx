import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux"
import { RootStackParamList } from "../../App";
import { navigationRef } from "../../RootNavigation";

type SignInScreenProp = NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
type SignUpScreenProp = NativeStackNavigationProp<RootStackParamList, 'SignUp'>;

const Auth = () => {
    // const dispatch = useDispatch();
    const navigationSignIn = useNavigation<SignInScreenProp>();
    // const route = useRoute()
    const navigationSignUp = useNavigation<SignUpScreenProp>();

    const handleSignInRoute = () =>{
        if (navigationRef.isReady()) {
            navigationSignIn.navigate('SignIn')// checkout page not cart,
        }
        // console.log(route)
    }

    const handleSignUpRoute = () => {
        if (navigationRef.isReady()) {
            navigationSignUp.navigate('SignUp')
        }
    }

    return(
        <View style = {styles.container}>
            <View style = {styles.btn_container}>
                <TouchableOpacity 
                style = {styles.signIn_btn}
                onPress ={() => handleSignInRoute()}>
                <Text style = {styles.btn_txt}>SignIn</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.btn_container}>
                <TouchableOpacity 
                style = {styles.SignUp_btn}
                onPress ={() => handleSignUpRoute()}>
                <Text style = {styles.btn_txt}
                >SignUp</Text>
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