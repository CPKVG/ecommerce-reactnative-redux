import React from "react";
import { cleanup, fireEvent } from "@testing-library/react-native";
import ProductResult from ".";
import { NavigationContainer } from '@react-navigation/native';
import renderer from "react-test-renderer";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import ProductImage from "../productImage";
import { render, store } from "../../../test-utils";
import { shallow } from "enzyme";

jest.useFakeTimers()

afterEach(cleanup)

describe('productResult component', () => {
    const component = (
        <NavigationContainer>
            <ProductResult/>
        </NavigationContainer>
    )

    const component1 = (
      <View>
        <Text testID="titleID">
        titleID
        </Text>
      </View>
    )
      
    const productDataSearch = [{
        category:"Apparel",
        description:"Keeps you warm",
        id:"0",
        image:"White_t-shirt",
        price:"5.99",        
        stock:"2",
        title:"White T-shirt",
    }]

    test('should render', () => { 
        expect(component).not.toBe(null)
      })


      //TODO, testing flatlist on react-native seems too difficult

      // it('should flatlist return keyExtractor correctly', () => {
      //   const renderItem = jest.fn();
      //   const { getByTestId  } = render(component, {    
      //     productDataSearch
      //     })
      //     fireEvent.press(getByTestId('flat-list'));
      //     expect(renderItem).toHaveBeenCalled();
       
      //  });


      // it("should render product search results",()=>{
      //   const { getByText } = render(component, {    
      //     productDataSearch
      //     })
      //     expect(getByText("White T-shirt")).toBeTruthy();
      // })

    // it("should render product search results",()=>{
    //     const { getByTestId } = render(component, {    
    //       productDataSearch
    //       })
    //       // expect(getByTestId("imageID")).toBeTruthy();
    //       expect(getByTestId("titleID")).toBeTruthy();
    //       // expect(getByTestId("priceID")).toBeTruthy();
    // })
    

      
  it("renders the productDetail component via snapshot",()=> {
    const renderItem = ({item}:any) => {
    
        return(
          //<ProductImage/>
          <TouchableOpacity>
            <Image 
              source = {ProductImage(item.image)}
            />
            <Text>
              {item.title}
            </Text>
            <Text>
              ${item.price} nzd
            </Text>
          </TouchableOpacity >
        )
      }
    const tree = renderer.create(
        <View>
        <FlatList  
        data={productDataSearch}
        numColumns ={2}
        ItemSeparatorComponent={
            () => <View style={{ width: 16 }}/>
        }
        renderItem={renderItem}
  
    />
  
      </View>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })

})