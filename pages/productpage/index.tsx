import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import ProductDetail from '../../components/product/ProductDetail';
import ProductResult from '../../components/product/productResult';
import { fetchProductDetail } from '../../redux/Product/product.action';
import { RootState } from '../../redux/rootReducer';


//display selected individual products
const ProductPage = () => {
    const productSelector:any = useSelector((state: RootState) => state.product)
    const fetchProductDetail = productSelector.productDetail
    
    return(
        // {productDetail}
        <View>
            <Text>
            {/* HELLO FROM PRODUCT DETAIL PAGE!! */}
                </Text>
           
            <ProductDetail/>
        </View>
    )

}

export default ProductPage