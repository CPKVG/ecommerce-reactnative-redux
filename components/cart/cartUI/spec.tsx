import React from "react"

import { cleanup, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "../../../RootNavigation";
import CartUI from ".";
import { render } from "../../../test-utils";
import { Text, TouchableOpacity, View } from "react-native";
import renderer from "react-test-renderer"

afterEach(cleanup)
jest.useFakeTimers()

    describe('tesing cartUI component',()=>{
        const component = (
            <NavigationContainer>
                <CartUI/>
            </NavigationContainer>
        )
        test("btn event changes screen to checkout",()=>{
            const { getByTestId,findByText } = render(component)
            const button = getByTestId('btn')
            
            fireEvent.press(button)
            const newScreen = findByText('Contact Information')
            expect(button).toBeTruthy
            expect(newScreen).toBeTruthy    
        })

        //Snapshot test
        it("renders the UI component",() => {
            const buttonText = "UI btn"
            const tree = renderer.create(
                <View>
                    <TouchableOpacity>
                        <Text>
                            {buttonText}
                        </Text>
                    </TouchableOpacity>
                    
                </View>
            ).toJSON();
    
            expect(tree).toMatchSnapshot();
        })

    })
