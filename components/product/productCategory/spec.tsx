import React from "react"

import { NavigationContainer } from '@react-navigation/native';
import { render, store } from "../../../test-utils";
import ProductCategory from ".";
import { cleanup, fireEvent } from "@testing-library/react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { navigationRef } from "../../../RootNavigation";

import {Provider} from 'react-redux'
import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store'

jest.useFakeTimers()

afterEach(cleanup)
const mockStore = configureStore([thunk])

describe('productCategory component', () => {
    // const store = mockStore({
    //     productSelector: {
    //         product: [''],
    //         loading:true,
    //         productData:'',
    //         productDataSearch:[undefined],
    //         productCategorySelect:"",
    //       },
    //   });

    // const component = render(
    //   <Provider store={store}>
    //     <ProductCategory />
    //   </Provider>,
    // )
    const component = (
        <NavigationContainer>
            <ProductCategory/>
        </NavigationContainer>
    )
  test('should render', () => { 
    expect(component).not.toBe(null)
  })

  test("if category image is selected, navigate search to product",()=>{

    const { queryByTestId ,findByText } = render(component) 
    const imageBtn:any = queryByTestId("carousel")

    fireEvent.press(imageBtn)
    
    expect(imageBtn).toBeTruthy
  })


})

