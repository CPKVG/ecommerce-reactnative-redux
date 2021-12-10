import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import ProductPage from '../../pages/productpage';
import { fetchCategory, fetchProductSearch } from '../../redux/Product/product.action';
import { RootState } from '../../redux/rootReducer';
import * as RootNavigation from '../../RootNavigation'



const Search = () => {
    const dispatch = useDispatch();


    const productSelector:any = useSelector((state: RootState) => state.product)

    const productCategorySelect = productSelector.productCategorySelect
    let [text, onChangeText] = useState<string | undefined>(undefined);

    useEffect(() => {
        dispatch(fetchProductSearch(text))
        dispatch(fetchCategory(""))
      }, [text])
    
    return (
        <View style ={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(text:string | undefined) =>{
                    typeof text == "string" ? (text.length == 0 ? text = undefined : text) : null
                    onChangeText(text)
                }}
                defaultValue = {text !== "" ? productCategorySelect : console.log("text = empty")}
                value={text}    
                placeholder = "Search Products"
            />


            {/* <TouchableOpacity
                style={styles.button}
                onPress={onSubmit}
            > 
            <Text  style={styles.btnText}>Search</Text>
            </TouchableOpacity> */}
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
