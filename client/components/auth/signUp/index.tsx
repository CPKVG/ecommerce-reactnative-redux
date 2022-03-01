import React, { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux"
import { signUpUser } from "../../../redux/User/user.action";

const SignUp = () => {
    const dispatch = useDispatch();
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword,setconfirmPassword] = useState("")

    const handleSignUpSubmit = () => {
        dispatch(signUpUser({email,password,confirmPassword}))
    }

    return(
        <View style = {styles.container}>
            <View style = {styles.input_container}>
                <TextInput
                    style = {styles.input}
                    onChangeText = {setEmail}
                    placeholder = "Email"
                    value = {email}  
                />
                <TextInput
                    style = {styles.input}
                    onChangeText = {setPassword}
                    placeholder = "Password" 
                    value = {password}  
                />
                <TextInput
                    style = {styles.input}
                    onChangeText = {setconfirmPassword}
                    placeholder = "Confirm Password" 
                    value = {confirmPassword}  
                />
            </View>

            <View style = {styles.btn_container}>
                <TouchableOpacity 
                style = {styles.SignUp_btn}
                onPress ={() => handleSignUpSubmit()}>
                <Text style = {styles.btn_txt}
                >SignUp</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    },
    input_container:{

    },
    input:{

    },
    btn_container:{

    },
    SignUp_btn:{
        
    },
    btn_txt:{
        
    }
})

export default SignUp