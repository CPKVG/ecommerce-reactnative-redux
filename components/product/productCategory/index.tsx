import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct, fetchProductSearch } from '../../../redux/Product/product.action'
import { RootState } from '../../../redux/rootReducer'
import  ProductImage  from '../productImage';




const Item = ({ item, onPress, backgroundColor, textColor }:any) => (
    <TouchableOpacity onPress={onPress} style={[backgroundColor]}>

      <Text style={[styles.category, textColor]}>
          {item.category}
      </Text>

        <Image    
        style = {styles.image}
        source = {ProductImage(item.image)}
        />
    </TouchableOpacity>
  );





//home page category selections
const ProductCategory = () =>{

    const [selectedCategory, setSelectedCategory] = useState("");


    console.log(selectedCategory)
   // console.log(selectedCategory)

    useEffect(() => {
        dispatch(fetchProductSearch(selectedCategory))
    },[selectedCategory])

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProduct())
    }, [])


    const productSelector:any = useSelector((state: RootState) => state.product)
    //console.log(productSelector.productData,"productselector")

    const productData = productSelector.productData
    let data:any = ""
    if(productData !== undefined && productData !== ""){
        data = productData.filter((val:any,id:any) => id == productData.findIndex((elem:any)=> elem.category == val.category))
        
    }
 

    // const displayProductCategory = (item:any) =>{
    //     //dispatch search input = item.category
    //     dispatch(fetchProductSearch(item))        
    // }   

    
    // const displayCategory = (item:any) => {
    //     <TouchableOpacity 
    //     onPress={() => displayProductCategory(item.category)} 
    //     style={styles.container}
    //     >

    //       <Image    
    //         style = {styles.image}
    //         source = {ProductImage(item.image)}
    //       />
    //       <Text style = {styles.category}>
    //         {/* {item.category} */}
    //         {item.category}
    //       </Text>
    //     </TouchableOpacity>
    // }

    




    const renderItem = ({item,backgroundColor,color}:any)=>{

    //const item = selectedCategory ? item = "" : item = item
    //const data = selectedCategory ?  dispatch(fetchProductSearch(item)) : item
        
        return (
             <Item
                item={item}
                onPress={() => setSelectedCategory(item.category)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
 
        )
    
    }



    return (
        selectedCategory ? null :
        <View>
            <FlatList 
            data = {data}
            horizontal = {true}
            renderItem = {renderItem}
            />
        </View>
    //     <View style={{ marginVertical: '5%' }}>
    //     <FlatList  
    //     data={data}
    //     numColumns ={2}
    //     ItemSeparatorComponent={
    //         () => <View style={{ width: 16 }}/>
    //     }
    //     renderItem={renderItem}
    // />
  
    //   </View>
    )
} 



const styles = StyleSheet.create({
    container: {    
        flex: 1,
    },
    category:{
        fontSize: 16,
        color: "black"
    },
    image:{
        height:120,
        width:120,
        padding:20,
        marginLeft:3,
        marginRight:3,
        //flex:1,
        backgroundColor:"red"
      }
})
export default ProductCategory    