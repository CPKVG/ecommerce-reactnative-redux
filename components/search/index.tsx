import React from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';


const Search = () => {


    const dispatch = useDispatch();
 
    const [text, onChangeText] = React.useState('');

    const onSubmit = () => {
        // dispatch(text)
        console.log("btn pressed")
    }



    return (
        <View style ={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder = "Search Products"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={onSubmit}
            > 
            <Text  style={styles.btnText}>Search</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
    },
    input:{
        flex: 1,
        margin: 12,
        borderWidth: 1,
        borderRadius:5,
        borderColor:"#5c697a",
        padding: 8,
    
    },
    button:{
        backgroundColor:'#999999',
        justifyContent: 'center',
        textAlign: 'center',
        margin: 12,
        borderWidth:2,
        borderRadius:5,
        borderColor:'#999999',
        padding:5,
    },
    btnText:{
        fontWeight:'bold',
        fontSize:18,
        color:'#ffffff',
    }
  });



export default Search
