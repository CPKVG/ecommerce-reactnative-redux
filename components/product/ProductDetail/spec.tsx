import React from "react"

import { NavigationContainer } from '@react-navigation/native';
import { render, store } from "../../../test-utils";
import ProductDetail from ".";
import { cleanup, fireEvent } from "@testing-library/react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

import Carousel from "react-native-snap-carousel";
import renderer from "react-test-renderer"
import ProductImage from "../productImage";


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

const mockFn = jest.fn();

    const component = (
        <NavigationContainer>
            <ProductDetail fetchProductDetail = {mockFn}/>
        </NavigationContainer>
    )


  test('should render', () => { 
    expect(component).not.toBe(null)
  })

  test("",()=>{
    const { getByTestId, queryByTestId  } = render(component) 
    // const title:any = getByTestId("titleID")
    // const image:any = queryByTestId("imageID")
    // const description:any = queryByTestId("DescriptionID")
    // const stock:any = queryByTestId("StockID")
    // const price:any = queryByTestId("PriceID")
    const category:any = queryByTestId("categoryID")


    expect(category).toBe("Apparel")
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