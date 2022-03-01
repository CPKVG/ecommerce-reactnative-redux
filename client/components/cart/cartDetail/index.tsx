import React from "react"
import { FlatList, Image, ListRenderItemInfo, StyleSheet, Text, TouchableOpacity, View, VirtualizedList } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { increaseCartItem, reduceCartItem, removeCartItem } from "../../../redux/Cart/cart.action"
import { RootState } from "../../../redux/rootReducer"
import ProductImage from "../../product/productImage"

const CartDetail = () => {
    const cartSelector = useSelector((state: RootState) => state.cart)

     let cartItems:any
    if(cartSelector !== undefined){
        cartItems = cartSelector.nextCartItem
        console.log(cartItems)
    }

    
    // console.log(cartItems)
    const dispatch = useDispatch()
    
    const increment = (item:Array<Object>) => {
        //increase count of item by 1
        dispatch(increaseCartItem(item))
    }

    const decrement = (item:Array<Object>) => {
        dispatch(reduceCartItem(item))
        
    }
    const deleteBtn = (item:Array<Object>) =>{
        dispatch(removeCartItem(item))
    }

    const BtnScales = ({item,onPress}:any) => (
        <View>
            <TouchableOpacity onPress = {onPress}>
                <Text style = {styles.scales}>{item}</Text> 
                {/* item this time will be + or - */}
            </TouchableOpacity>
        </View>
    ) 
    // make this look like <BtnScales2> {-} </BtnScales2/> {count} ...repeat for +


    const renderItem = ({item, index}:any) => {
        console.log(item)
        return(

            <View style={{backgroundColor: index % 2 === 0 ? "" : '#ffffff' }} >

                <View  style = {styles.item_container}>
                    <View style = {styles.sub_container}>
                        <Image 
                            style = {styles.image}
                            source = {ProductImage(item[0].image)}
                            // testID = {item}
                        />  

                        <View style = {styles.delete_btn_container} >
                            <TouchableOpacity style = {styles.delete_btn} onPress = {() => deleteBtn(item)}>
                                    <Text style = {styles.delete_btn_txt}>Delete</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style = {styles.container}>
                        <View style = {styles.text_container}>
                            <Text style = {styles.text}>
                                {item[0].title}     
                            </Text>
                        </View>

                        <View style = {styles.price_container}>
                            <Text style = {styles.pricetxt}>
                                ${item[0].price} nzd
                            </Text>
                        </View>

                        <View style = {styles.scales_container}>
                            <BtnScales item = {"-"} onPress = {() => decrement(item)}/>
                                <Text style = {styles.scales_text}>
                                {item[1].count}
                                </Text>
                            <BtnScales item = {"+"} onPress = {() => increment(item)}/>
                        </View>
                    </View>
                </View>
            </View>
            

        )
    }

    return(
        <View style = {styles.container}>
            <Text style = {styles.header}>Shopping Cart</Text>
            <FlatList
                data = {cartItems}
                ItemSeparatorComponent={
                    () => <View style={{ margin: 15 }}/>
                }    
                renderItem = {renderItem}
                testID={'flat_list'}
            />

        {/* display shopping cart list here */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        padding:4,
        marginBottom:60,
    },
    header:{
        fontSize:26,
        fontWeight:"bold",
        padding:4,
        marginBottom:20,
    },
    delete_btn_container:{
        // flex:1,
        // alignItems:"flex-start"
        // justifyContent:"center",
        marginTop:8,
        backgroundColor:"#ee3311",
        borderColor:"white",
        borderWidth:2,
        borderRadius:8,
    },
    delete_btn:{
        // backgroundColor:"red",
        alignItems:"center",

    },
    delete_btn_txt:{
        fontSize:30,
        fontWeight:"bold",
        color:"white"
    },
    item_container:{
        flexDirection:"row",
        flexWrap: "wrap",
        justifyContent:"space-evenly"
    },
    sub_container:{
        // paddingLeft:10,
        // flexDirection:"column",
        // flex:1, 
        // justifyContent:"space-between"
        
    },
    text_container:{
        paddingLeft:10,
        // flexDirection:"column",
        // flex:1, 
        justifyContent:"space-between"
    },
    text:{
        fontSize:30,
    },
    price_container:{
        alignItems:"flex-end"
    },
    pricetxt:{
        fontSize:20
    },
    image:{
        height:125,
        width:125,
        // flex:1,
      },
      scales_container:{
        flexDirection:"row",
        // alignItems:"baseline",
        justifyContent:"space-evenly",
        alignItems:"center",
        // backgroundColor:"red"
      },
      scales:{
          fontSize:36,
           paddingHorizontal:10,
           fontWeight:"bold"
        //   justifyContent:"center"
          
      },
      scales_text:{
          fontSize:36,
          fontWeight:"bold",
          paddingHorizontal:10,
      }

})


export default CartDetail