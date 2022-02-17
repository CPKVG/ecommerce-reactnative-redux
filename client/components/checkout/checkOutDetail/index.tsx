// import { anyTypeAnnotation } from "@babel/types";
import React, { ChangeEvent, useEffect, useState } from "react"
import { FlatList, NativeSyntheticEvent, ScrollView, SectionList, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from "react-native"
import { useDispatch } from "react-redux";
import { inputValidation } from "../../../redux/Checkout/checkout.action";

const InputForm = ({container_style,placeholder,style_input,onChange_input,defaultValue,keyboardType}:any) => (
    <View style = {container_style}>
            <TextInput
                style={style_input}
                onChange = {onChange_input}
                placeholder={placeholder} 
                defaultValue = {defaultValue}
                keyboardType= {keyboardType}
            />
     </View>

)

//to generate flatlist with thses as label inputs
const debitCardData = [
    "Card number","CVC code","Card holder name","Expire date"
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
        data:[debitCardData]
    },
    {
        title:"Postal Adress",  
        data:[postalAdressData]
    },
    {
        title:"Payment Information",    
        data:[contactData]
    },

]

const arr2obj = (array:Array<string>) => {
    let obj:any = {}
    array.forEach((x:any) => {
        obj[x] = ""
    })
    return(obj)
}

// let contactDataObj = arr2obj(contactData)
// let debitCardDataObj = arr2obj(debitCardData)
// let postalAdressDataObj = arr2obj(postalAdressData)

let dataObj = arr2obj(contactData.concat(debitCardData,postalAdressData))
// console.log(dataObj,"dataObj1")

// export const Form = ({ res }) => <form onSubmit={onSubmit}></form>;

export const CheckOutDetail = () => {
    // let [value, onChangeValue]:any = useState()
    // let count = 1
    const dispatch = useDispatch()
    

const renderItem = ({item,title,index}:any) => {
    const onChange = (e:NativeSyntheticEvent<TextInputChangeEventData>):void => {
        const value = e.nativeEvent.text;
        
        // console.log(value)
        //to match dataObj(keys) to item     

        Object.keys(dataObj).forEach((x:any) => {
            if(item == x){
                dataObj[x] = value
            }
            return dataObj
        })
        
        // onChangeValue(dataObj)
        dispatch(inputValidation(dataObj))
    }

    return( 
    // <View style = {styles.input_conatiner}>
        <InputForm
            placeholder = {item}
            onChange_input = {onChange}
            // onChange_input={(text:any) => onChange(text)}
            //shift the proportion of flex space for that row
            container_style = {[
                item == "CVC code" ? {flex:0.3} : styles.input_conatiner,
                item == "Card number" ? {flex:0.7} : null,
                item == "Card holder name" || item == "PostCode"  ? {flex:1} : null,
            ]}

            style_input = {styles.input}
        />
    )
}

const renderSectionListItem = ({item}:any) => {
    return(
        <View style = {styles.flatList_container}>
            <FlatList
                data = {item}
                numColumns={2}
                renderItem = {renderItem}
            />
        </View>

    )
}
    return(
        <View style = {styles.container}>
            <SectionList
            sections={DATA}
            renderItem={renderSectionListItem}
            // keyExtractor = {(item, index) => item + index}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
            )}
        />
        </View>


    )
}


const styles = StyleSheet.create({

    header: {
        fontSize: 32,
        backgroundColor: "#fff",
        padding:3,
        marginTop:3,
      },
      container:{
      },
      flatList_container:{
        flex:1,
        // borderWidth: 3,
        // justifyContent:"flex-end",
      },

      input_conatiner:{
        flex:0.5,
      },
      input:{
        // minWidth:150,
        height: 50,
        // margin: 12,
        borderWidth:1,
        borderRadius:2,
        padding: 10,
        marginHorizontal:6,
        marginVertical:4,
        backgroundColor:"#ffff",
      }
    })
export default CheckOutDetail