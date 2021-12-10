import React from "react"
import { Text, View } from "react-native"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/rootReducer"




export const ProductDetail = () =>{
    const productSelector:any = useSelector((state: RootState) => state.product)
    //console.log(productSelector)
    let fetchProductDetail = productSelector.productDetail
    // console.log(fetchProductDetail,"fetchProductDetail")
  return (
      <View>
        
          <Text>{fetchProductDetail.title}</Text>
          <Text>{fetchProductDetail.image}</Text>
          <Text>{fetchProductDetail.description}</Text>
          <Text>{fetchProductDetail.stock}</Text>
          <Text>{fetchProductDetail.price}</Text>

      </View>
  )
}

export default ProductDetail
