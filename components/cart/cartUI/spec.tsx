import React from "react"

import { cleanup, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "../../../RootNavigation";
import CartUI from ".";
import { render } from "../../../test-utils";

afterEach(cleanup)
jest.useFakeTimers()

    describe('tesing cartUI component',()=>{
        const component = (
            <NavigationContainer>
                <CartUI/>
            </NavigationContainer>
        )
        test("btn event changes screen to checkout",()=>{
            if (navigationRef.isReady()) {
            const { getByTestId,findByText } = render(component)
            const button = getByTestId('btn')
            
            fireEvent.press(button)
            const newScreen = findByText('Contact Information')
            expect(newScreen).toBeTruthy    
            }
        })

        //Snapshot test
        

    })
