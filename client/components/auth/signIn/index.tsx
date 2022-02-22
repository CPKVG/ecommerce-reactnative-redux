import React, { useState } from "react"
import { StyleSheet, TextInput, View } from "react-native";
import { useDispatch } from "react-redux"

const SignIn = () => {
    const dispatch = useDispatch();

    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

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

    }
})

export default SignIn