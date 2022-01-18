import React, { useState } from "react"
import CheckOutDetail from "."
import renderer from "react-test-renderer"
import { render } from "../../../test-utils"
import { FlatList, SectionList, Text, TextInput, View } from "react-native"
import { cleanup, fireEvent } from "@testing-library/react-native"
// import { mount, shallow } from 'enzyme'




// import { render } from "@testing-library/react-native"
const DATA = [
    {
        title:"title1",
        data:["dataA1","dataB1","dataC1"]
    },
    {
        title:"title2",
        data:["dataA2","dataB2","dataC2"]
    },
    {
        title:"title3",
        data:["dataA3","dataB3","dataC3"]
    },
]

afterEach(cleanup)
jest.useFakeTimers()
describe("checkout detail component",()=>{

    test("it should not allow numbers inputed",() => {
        
    })

    test("it should return error/red hightlight if creds do not match",() => {
         
    })

    test("it should highlight input green for valid inputs",()=>{

    })

    test("it should dispatch and return value via selector",()=>{
        
    })

    //snapshot test
    test("render input correctly on start", async() => {
        const tree = render(<CheckOutDetail/>).toJSON
        expect(tree).toMatchSnapshot();
    })

    it("renders the sectionList component", () => {
        const tree = renderer.create(
        <View>
        <SectionList
            sections = {DATA}
            renderItem = {({item}:any) => {
                return(
                    <View>
                        <FlatList
                            data = {item}
                            numColumns={2}
                            renderItem = {({item}:any) => {
                                return(
                                <View>
                                    <TextInput
                                        placeholder = {item}
                                    />
                                </View>
                            )}}
                        />
                    </View>
            
                )
            }}
            renderSectionHeader={({ section: { title } }) => (
                <Text>{title}</Text>
            )}
            
            />
        </View>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })

})

