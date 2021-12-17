import React from "react"
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/rootReducer"
import ProductImage from "../../product/productImage"

const CartDetail = () => {
    const cartSelector:any = useSelector((state: RootState) => state.cart)
    
    const cartItems = cartSelector.nextCartItem

    const increment = () => {
        console.log("increment")
    }

    const decrement = () => {
        console.log("decrement")
    }
    //TRIAL 1, MUST BE A CLEANER WAY OF DOING THIS!!!

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
                    <Image 
                        style = {styles.image}
                        source = {ProductImage(item[0].image)}
                    />  
                    <View style = {styles.text_container}>
                        <Text style = {styles.text}>
                            {item[0].title}     
                        </Text>
                        {/* <Text style = {styles.text}>
                            Count : <BtnScales item = {item[1].count}/> 
                        </Text> */}
                        <View style = {styles.scales_container}>
                            {/* <Text style = {styles.scales_text}> 
                                Count : 
                            </Text> */}
                        <BtnScales item = {"-"} onPress = {() => decrement()}/>
                            <Text style = {styles.scales_text}>
                               {item[1].count}
                            </Text>
                        <BtnScales item = {"+"} onPress = {() => increment()}/>
                        </View>


                    </View>
                </View>


            <View style = {styles.delete_btn_container} >
                <TouchableOpacity style = {styles.delete_btn}>
                        <Text style = {styles.text}>Delete</Text>
                    </TouchableOpacity>
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
                    () => <View style={{ margin: 10 }}/>
                
                }    
                
                renderItem = {renderItem}
            />

        {/* display shopping cart list here */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        padding:6,
    },
    header:{
        fontSize:26,
        fontWeight:"bold",
        padding:4,
        marginBottom:20,
    },
    delete_btn_container:{
        flex:1,
        // alignItems:"flex-start"
        // justifyContent:"center",
        backgroundColor:"red",
        marginTop:10,
    },
    delete_btn:{
        // backgroundColor:"red",
        alignItems:"center",
    },
    item_container:{
        flexDirection:"row",
        flexWrap: "wrap",
        // justifyContent:"space-evenly"
    },
    text_container:{
        paddingLeft:10,
        flexDirection:"column",
        flex:1, 
        justifyContent:"space-between"
    },
    text:{
        fontSize:28,
    },
    image:{
        height:125,
        width:125,
        flex:1,
      },
      scales_container:{
        flexDirection:"row",
        alignItems:"baseline",
        justifyContent:"space-evenly",
      },
      scales:{
          fontSize:36,
           paddingHorizontal:10,
           fontWeight:"bold"
        //   justifyContent:"center"
          
      },
      scales_text:{
          fontSize:36,
          fontWeight:"bold"
      }

})


export default CartDetail