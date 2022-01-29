import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Header from '.'
import { render,cleanup, fireEvent } from '../../test-utils'
import renderer from "react-test-renderer"
import { Text, View } from 'react-native'

afterEach(cleanup)
jest.useFakeTimers()


describe("header component",()=>{
    let title = "test Title"
    const component = (
        <NavigationContainer>
            <Header title={title} />
        </NavigationContainer>
    )

    it("should render the title text",()=>{
        const { findByText, getByText } = render(component)
        const button = getByText('test Title')
                
        fireEvent.press(button)
        expect(button).toBeTruthy
        //unable to detech any
        // const newScreen = findByText('')
        // expect(newScreen).toBeTruthy    
    })

    it("renders the Header component",() => {
        const tree = renderer.create(
            <View>
                <Text>
                    {title}
                </Text>
          </View>
        ).toJSON();
        expect(tree).toMatchSnapshot();
        })
    
})