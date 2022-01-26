import React from "react"
import { cleanup, fireEvent } from "@testing-library/react-native";
import ProductResult from ".";
import { NavigationContainer } from '@react-navigation/native';

jest.useFakeTimers()

afterEach(cleanup)

describe('productResult component', () => {
    const component = (
        <NavigationContainer>
            <ProductResult/>
        </NavigationContainer>
    )

    test('should render', () => { 
        expect(component).not.toBe(null)
      })
    

})