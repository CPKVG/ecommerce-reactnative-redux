import { anyTypeAnnotation } from "@babel/types";
import React, { ChangeEvent, useEffect, useState } from "react"
import { FlatList, NativeSyntheticEvent, ScrollView, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from "react-native"
import { useDispatch } from "react-redux";
import { toggleSubmitCardBtn } from "../../../redux/Checkout/checkout.action";



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

        // console.log(debitCardDataObj)
        // console.log(postalAdressDataObj)
        // console.log(contactDataObj)
        
    },[value])
        
    const renderItemCard = ({item,index}:any) => {

        const onChangeCard = (e:NativeSyntheticEvent<TextInputChangeEventData>):void => {
            const value = e.nativeEvent.text;
            if(Object.keys(debitCardDataObj)[index] == item){
                debitCardDataObj[item] = value
            }
            onChangeValue(debitCardDataObj) 
        }

            return(
                <InputForm 
                placeholder = {item}
                style_input = {item == "CVC code" ? styles.card_Cvc_Input : styles.card_Input}
                onChange_input = {onChangeCard}
                defaultValue = {debitCardDataObj[item]}
                keyboardType = {item == "Card number" || item == "CVC code" ? "numeric": "default"}
            />
        )
}

    const renderItemContact = ({item,index}:any) => {
            const onChangeContact = (e:NativeSyntheticEvent<TextInputChangeEventData>):void => {
                const value = e.nativeEvent.text;
                if(Object.keys(contactDataObj)[index] == item){
                    contactDataObj[item] = value
                }
                onChangeValue(contactDataObj) 
            }

            return(
                <InputForm 
                placeholder = {item}
                style_input = {styles.card_Input}
                onChange_input = {onChangeContact}
                defaultValue = {contactDataObj[item]}
                keyboardType = {item == "Phone" ? "numeric": "default"}
            />
        )

    }

    const renderItemAdress = ({item,index}:any) => {
        
        const onChangeAddress = (e:NativeSyntheticEvent<TextInputChangeEventData>):void => {
            const value = e.nativeEvent.text;

            if(Object.keys(postalAdressDataObj)[index] == item){
                postalAdressDataObj[item] = value
            }
            onChangeValue(postalAdressDataObj) 
        }

        return(
            <InputForm 
            placeholder = {item}
            style_input = {styles.input}
            onChange_input = {onChangeAddress}
            defaultValue = {postalAdressDataObj[item]}
            // keyboardType = "default"
        />
        )
    }



    return(
    <View>

        <View style={{flex: 1}}>
            <Text style = {styles.subheader}>
                Contact Information
            </Text>
            
            <FlatList
            data={contactData}
            renderItem={renderItemContact}
            scrollEnabled={false} 
            />
        </View>


        <View style={{flex: 1}}>
            <Text style = {styles.subheader}>
                Payment Information
            </Text>

            <FlatList
            data={debitCardData}
            renderItem={renderItemCard}
            columnWrapperStyle = {styles.columnWrapperStyle}
            horizontal={false}
            numColumns ={2}
            scrollEnabled={false} 
            // ItemSeparatorComponent={
            //     () => <View style={{ width: 16 }}/>
            // }    
            // keyExtractor={item => item.id}
            />
        </View>
        
        <View style={{flex: 1}}>
            <Text style = {styles.subheader}>
                Delivery Address
            </Text>

            <FlatList
            data={postalAdressData}
            renderItem={renderItemAdress}
            // scrollEnabled={false} 
            />
        </View>


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

    },
  });

export default CheckOutDetail