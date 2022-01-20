import React from "react"

import { NavigationContainer } from '@react-navigation/native';
import { render } from "../../../test-utils";
import ProductCategory from ".";
import { cleanup, fireEvent } from "@testing-library/react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { navigationRef } from "../../../RootNavigation";


afterEach(cleanup)
jest.useFakeTimers()

describe('testing productCategory component',() => {

       

        it("fetch productSelector data from actions from productSelectCategory",()=> {
            if (navigationRef.isReady()) {
            const sentHandler = jest.fn()
            const { getByTestId } = render(<NavigationContainer><ProductCategory productSelector = {sentHandler}/></NavigationContainer>)
        
            expect(sentHandler).toBeCalledTimes(1)
            expect(sentHandler).toBeTruthy()   
            expect(getByTestId("text")).toBe("food")
            }
        })



        test("if category image is selected, navigate search to product",()=>{
            if (navigationRef.isReady()) {
                const sentHandler = jest.fn()
                const { getByTestId } = render(<NavigationContainer><ProductCategory productSelector = {sentHandler}/></NavigationContainer>)
                //todo
            }
        })
        //snapshot test
})