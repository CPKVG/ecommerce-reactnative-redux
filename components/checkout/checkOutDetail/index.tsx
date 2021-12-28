import { anyTypeAnnotation } from "@babel/types";
import React, { ChangeEvent, useEffect, useState } from "react"
import { FlatList, NativeSyntheticEvent, ScrollView, SectionList, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from "react-native"
import { useDispatch } from "react-redux";
import { inputValidation, toggleSubmitCardBtn } from "../../../redux/Checkout/checkout.action";



const InputForm = ({item,placeholder,style_input,onChange_input,defaultValue,keyboardType}:any) => (
            <TextInput
                style={style_input}
                onChange = {onChange_input}
                placeholder={placeholder} 
                defaultValue = {defaultValue}
                keyboardType= {keyboardType}
            />
)

//to generate flatlist with thses as label inputs
const debitCardData = [
    "Card number","CVC code","Card holder name"
  ];

const postalAdressData = [
    "First name","Last name","City","Street Address","PostCode"
];

const contactData = [
    "Email","Phone"
]


const DATA = [
    {
        title:"Contact Information",
        data:debitCardData
    },
    {
        title:"Postal Adress",  
        data:postalAdressData
    },
    {
        title:"Payment Information",    
        data:contactData
    },

]


    //convert arr values -> obj's keys & "" -> values 
const arr2obj = (array:Array<string>) => {
    let obj:any = {}
    array.forEach((x:any) => {
        obj[x] = ""
    })
    return(obj)
}

let contactDataObj = arr2obj(contactData)
let debitCardDataObj = arr2obj(debitCardData)
let postalAdressDataObj = arr2obj(postalAdressData)

let dataObj = arr2obj(contactData.concat(debitCardData,postalAdressData))
console.log(dataObj,"dataObj1")

export const CheckOutDetail = () => {
    //display shopping cart info(ITEM NAME, Quantity , TOTAL PRICE)
    //+ paymenet information
    //inputs

    //payment info (debit cards)
    // 1) card number   
    // 2) CVC Code 
    // 3) card name 

    //Contact info
    //1) email
    //2) phone
    
    //delivery info
    // 1) first + lastname
    // 2) Street address
    // 3) City
    // 4) post code   
    
    //show/hide btn only when input values are all filled
    const dispatch = useDispatch()



    // let [text, onChangeText] = useState<string>("");


    let [value, onChangeValue]:any = useState()

    useEffect(() => {
        
        //dispatch data validationn mechanism here (i.e valid creditcard check)
        dispatch(inputValidation(value))
        console.log(value,"useEffect")
    },[value])
        
    const renderItem = ({item,title,index}:any) => {
        const onChange = (e:NativeSyntheticEvent<TextInputChangeEventData>):void => {
            const value = e.nativeEvent.text;

            //to match dataObj(keys) to item    

            Object.keys(dataObj).forEach((x:any) => {
                if(item == x){
                    dataObj[x] = value
                }
                return dataObj
            })
            onChangeValue(dataObj) 
        }

        return(
            <InputForm 
                placeholder = {item}
                style_input = {item == "CVC code" ? styles.input : styles.card_Input}
                onChange_input = {onChange}
                defaultValue = {DATA[item]}
               keyboardType = {item == "Card number" || item == "CVC code" || item == "Phone" || item == "PostCode" ? "numeric": "default"}
            />
        )
    }
    return(
        <View style = {styles.container}>
            <SectionList
                sections={DATA}
                renderItem={renderItem}
                keyExtractor = {(item, index) => item + index}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
                
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        // flex:1,
        // padding:8,
    },
    subheader:{
        fontSize:20,
        fontWeight:"bold",
        padding:2,
        marginVertical:8,
    },  
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
      },
      title: {
        fontSize: 24
      },
    columnWrapperStyle:{
        flexWrap:"wrap",
        flex:1,
        marginTop:5,
        backgroundColor:"pink",
        // justifyContent:"space-evenly",
    },
    card_Input_container:{
        // flex:1, 
        // flexDirection:"row",
        // flexWrap:"wrap",
        // backgroundColor:"red",
        // justifyContent:"space-evenly",
    },
    card_Input:{
        borderWidth:4,
        borderColor:"black",
        flex:3,     
    },
    card_Cvc_Input:{
        flex:1,
    },
    input_container:{

    }, 
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      flex:1

    },
  });

export default CheckOutDetail