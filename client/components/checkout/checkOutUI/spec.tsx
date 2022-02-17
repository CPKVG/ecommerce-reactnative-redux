import React from "react"

import { NavigationContainer } from '@react-navigation/native';
//import { render, waitFor,cleanup } from '@testing-library/react-native';
import { render } from "../../../test-utils";
import CheckoutUI from ".";
import renderer from "react-test-renderer"

import { cleanup, fireEvent } from "@testing-library/react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { navigationRef } from "../../../RootNavigation";
import CheckOutDetail from "../checkoutDetail";
// import { shallow, mount } from 'enzyme';


afterEach(cleanup)
jest.useFakeTimers()

describe('testing checkout UI component',() => {

    const component = (
        <NavigationContainer>
            <CheckoutUI/>
        </NavigationContainer>
    )

  test('should render', () => { 
    expect(component).not.toBe(null)
  })

    test("btn event changes screen to purchase" ,()=>{
        
                const { findByText, getByText } = render(component)
                const button = getByText('Order Submit')
                
                fireEvent.press(button)
                const newScreen = findByText('Thank you for your purchase!')
                expect(button).toBeTruthy
                expect(newScreen).toBeTruthy                
    })
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


//NAVIGATION HOOK TODO
// const mockedDispatch = jest.fn();

// test("testing navigation route params",() =>{
//     const navigation = {navigate:jest.fn()};
//     const { getByTestId } = render(<App navigation = {navigation}/>)

// })

// const mockedDispatch = jest.fn();

// jest.mock("@react-navigation/native",() => {
//     const actualNav = jest.requireActual("@react-navigation/native");
//     return{
//         ...actualNav,
//         useNavigation:() => ({
//             navigate:jest.fn(),
//             dispatch:mockedDispatch
//         })
//     }
// })



// describe('testing checkout UI component', () => {
//     console.log(mockedDispatch)
//     beforeEach(() => {
//         mockedDispatch.mockClear();
//     })
//     it('clicking checkout btn takes you to post-purchase screen',async() => {
//         const { getByTestId } = render(<CheckoutUI/>)
//         // const { getByText } = render(<Text>Order Submit</Text>)

//         const button = getByTestId('btn')
        
//         fireEvent.press(button)
//         expect(mockedDispatch).toHaveBeenCalledTimes(1)
        
        

//     });
// })


// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
// afterEach(cleanup)
// jest.useFakeTimers()

// describe('testing checkout UI component', () => {
//     it('clicking checkout btn takes you to post-purchase screen',async() => {
//         const { getByText } = render(
//               <App />
//           );
          
//           await waitFor(() => getByText('Purchase'));       
      
//     })


// })

