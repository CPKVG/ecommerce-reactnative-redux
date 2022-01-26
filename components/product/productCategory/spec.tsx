import React from "react"

import { NavigationContainer } from '@react-navigation/native';
import { render, store } from "../../../test-utils";
import ProductCategory from ".";
import { cleanup, fireEvent } from "@testing-library/react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

import Carousel from "react-native-snap-carousel";
import renderer from "react-test-renderer"
import ProductImage from "../productImage";


jest.useFakeTimers()

afterEach(cleanup)

describe('productCategory component', () => {
    const component = (
        <NavigationContainer>
            <ProductCategory/>
        </NavigationContainer>
    )
  test('should render', () => { 
    expect(component).not.toBe(null)
  })

  test("if category image is selected, navigate search to product",()=>{

    const { queryByTestId  } = render(component) 
    const imageBtn:any = queryByTestId("carousel")

    fireEvent.press(imageBtn)
    
    expect(imageBtn).toBeTruthy
  })


it("renders the setctionList component",()=> {
    const data = [{"category":"data1"},{"category":"data2"}]
    const renderItem = ({item}:any)=>{
        return(
            <TouchableOpacity>
                <Text>
                {item.category}
                </Text>
                <Image
                source = {ProductImage(item.image)}
                />
            </TouchableOpacity>
        )
    }

    const tree = renderer.create(
        <View>
            <Carousel
              data= {data}
              renderItem = {renderItem}
              sliderWidth={400}
              itemWidth={125}
              loop={true}
              autoplay={true}
              autoplayDelay={25000}
              autoplayInterval={2500}
            />
        </View>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})


})

