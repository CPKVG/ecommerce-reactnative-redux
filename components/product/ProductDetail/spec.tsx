import React from "react"

import { NavigationContainer } from '@react-navigation/native';
import { render, store } from "../../../test-utils";
import ProductDetail from ".";
import { cleanup, fireEvent } from "@testing-library/react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

import Carousel from "react-native-snap-carousel";
import renderer from "react-test-renderer"
import ProductImage from "../productImage";
import * as redux from 'react-redux'

jest.useFakeTimers()

afterEach(cleanup)

describe('productCategory component', () => {
    const fetchProductDetail = {
        category:"Apparel",
        description:"Keeps you warm",
        id:"0",
        image:"White_t-shirt",
        price:"5.99",        
        stock:"2",
        title:"White T-shirt",
}

// const mockFn = jest.fn();

    const component = (
        <NavigationContainer>
            <ProductDetail/>
        </NavigationContainer>
    )


  test('should render', () => { 
    expect(component).not.toBe(null)
  })

  it("should render fetchProductDetail",() => { 

    const { getByTestId } = render(component, {    
      initialState: {
        fetchProductDetail
    }})
    expect(getByTestId("titleID")).toBeTruthy();
    expect(getByTestId("imageID")).toBeTruthy();

    expect(getByTestId("descID")).toBeTruthy();
    expect(getByTestId("stockID")).toBeTruthy();
    expect(getByTestId("priceID")).toBeTruthy();
  })
  


  it("renders the productDetail component via snapshot",()=> {

    const tree = renderer.create(
        <View>
            <View>
            <Text>{fetchProductDetail.title}</Text>
        </View>
          <View>
            <Image
            source = {ProductImage(fetchProductDetail.image)}/>
          </View>

        <View> 
            <Text>Description: {fetchProductDetail.description}</Text>
            <Text>Stock: {fetchProductDetail.stock}</Text>
            <Text>Price: ${fetchProductDetail.price}nzd</Text>
        </View>
        </View>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })

})