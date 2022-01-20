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

    function mockInput(objData:any,result:Boolean){
        if (navigationRef.isReady()) {
            const sentHandler = jest.fn()
            const { getByPlaceholderText } = render(<NavigationContainer><CheckOutDetail/></NavigationContainer>)
            render(<NavigationContainer><CheckoutUI validCheckoutInput = {sentHandler}/></NavigationContainer>)
         
            Object.keys(objData).forEach((x:any) => {
                return fireEvent.changeText(getByPlaceholderText(x),objData[x]);
            });
            expect(sentHandler).toBe(result)
        }
    }

    test("it should return true if input is true",()=>{

        let inputPlaceholder = [
            {"Card number":"4987654321098769"},
            {"CVC code":"100"},
            {"Card holder name":"John Doe"},
            {"Expire date":"0524"} ,
            {"First name":"Joe"},
            {"Last name":"Doe"},
            {"City":"Wellington"},
            {"Street Address":"Foo Street"},
            {"PostCode":"0912"},
            {"Email":"JoeMama@gmail.com"},
            {"Phone":"1234567890"}
        ]

        mockInput(inputPlaceholder,true)
    })

    test("it should return true if input is false",() => {
        const inputPlaceholder = [
            {"Card number":"10101"},
            {"CVC code":""},
            {"Card holder name":"1!..2"},
            {"Expire date":"may20th"} ,
            {"First name":""},
            {"Last name":""},
            {"City":""},
            {"Street Address":""},
            {"PostCode":"0"},
            {"Email":""},
            {"Phone":""}
        ]

        mockInput(inputPlaceholder,false)
    })

    test("btn event changes screen to purchase" ,()=>{
        const component = (
            <NavigationContainer>
                <CheckoutUI/>
            </NavigationContainer>
        )
            if (navigationRef.isReady()) {
                const { getByTestId,findByText } = render(component)
                const button = getByTestId('btn')
                
                fireEvent.press(button)
                const newScreen = findByText('Thank you for your purchase!')
                expect(button).toBeTruthy
                expect(newScreen).toBeTruthy                
            }
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

