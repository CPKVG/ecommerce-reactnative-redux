import React from "react"

import { NavigationContainer } from '@react-navigation/native';
//import { render, waitFor,cleanup } from '@testing-library/react-native';
import { render } from "../../../test-utils";
import renderer from "react-test-renderer"

import { cleanup, fireEvent } from "@testing-library/react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { navigationRef } from "../../../RootNavigation";
import ProductUI from ".";
// import { shallow, mount } from 'enzyme';


afterEach(cleanup)
jest.useFakeTimers()

describe('testing product UI component',() => {

    function mockInput(objData:any,result:Boolean){
        // if (navigationRef.isReady()) {
            // const sentHandler = jest.fn()
            // const { getByPlaceholderText } = render(<NavigationContainer><ProductUI/></NavigationContainer>)
            // render(<NavigationContainer><CheckoutUI validCheckoutInput = {sentHandler}/></NavigationContainer>)
         
            // Object.keys(objData).forEach((x:any) => {
            //     return fireEvent.changeText(getByPlaceholderText(x),objData[x]);
            // });
            // expect(sentHandler).toBe(result)
        // }
    }

    // test("it should return true if input is true",()=>{

    //     mockInput(inputPlaceholder,true)
    // }

    test("btn event changes screen to purchase" ,()=>{
        const component = (
            <NavigationContainer>
                <ProductUI/>
            </NavigationContainer>
        )
                const { getByTestId,findByText } = render(component)
                const button = getByTestId('navi_btn')
                
                fireEvent.press(button)
                const newScreen = findByText('Shopping Cart')
                expect(button).toBeTruthy
                expect(newScreen).toBeTruthy                
    })
    it("renders the Product UI component",() => {
        let count = 0
        const tree = renderer.create(
            <View>
            <TouchableOpacity>
                <Text>
                Add to Cart ({count})
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Text>
                    To CheckOut
                </Text>
            </TouchableOpacity>
        </View>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })


})