import React from "react"

import { NavigationContainer } from "@react-navigation/native";
import CartDetail from ".";
import { render,waitFor, fireEvent,cleanup} from "../../../test-utils";
import { navigationRef } from "../../../RootNavigation";
import { mount, shallow } from "enzyme";
import ProductImage from "../../product/productImage";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import renderer from "react-test-renderer"
import mockStore from 'redux-mock-store';

const cartItem = [
    {
        id: "2",
        title: "RTX 3080",
        price: "1900.99",
        description: "Graphics card",
        stock: "0",
        image: "RTX3080",
        category: "Electronics"
    },
    {
        count: "1"
    }
]

const faultyCartItem = [
    {
        id: "sada",
        title: "1231241",
        price: "-1000",
        description: null,
        stock: "-100",
        image: "",
        category: ""
    },
    {
        count: "-10"
    }
]

afterEach(cleanup)
jest.useFakeTimers()

describe('testing chartDetail component',() => {


    test('renders a list of items', async () => {
        const sentHandler = jest.fn()

    // const {getByText, getByTestId} = render(<CartDetail sentHandler = {cartItem}/>)


    const component = (
        <NavigationContainer>
            <CartDetail/>
        </NavigationContainer>
    )
    // getByText(/title/i)
    // const initialState:any = { cartItem };   
    // const store = mockStore(initialState)

    // const wrapper = shallow(
    //     <NavigationContainer>
    //         <CartDetail store={store} />
    //     </NavigationContainer>

    //   );
    // const component = shallow(wrapper.getElements()[0]);

    // expect(component.find(FlatList).length).toBe(1);


    const { getByTestId, getByText } = render(component, {    
        initialState: {
            cartItem
      }})
      fireEvent.press(getByTestId('flat_list'))


    //   expect(component.find(FlatList).at(0).props().data.length).to.equal(league.clubs.length);
    //   expect(toJson(component)).toMatchSnapshot();


    //   expect(getByTestId("titleID")).toBeTruthy()
    // expect()
    // await waitFor(() => expect(getByText(/RTX 3080/i)))
    //     fetch.mockResponseOnce(
    //       JSON.stringify([
    //         { id: 1, title: '1' },
    //         { id: 2, title: '2' },
    //       ])
    //     );
    //     const { queryByTestId, getByTestId } = render(<CartDetail />);
    
    //     expect(queryByTestId('post-row-0')).toBeNull();
    
    //     await waitForElement(() => {
    //       return queryByTestId('post-row-0');
    //     });
    
    //     expect(getByTestId('post-row-0'));
      });




    
    // //shallow rendering to fetch out text from flatlist or remove from test
    // function mockBtn(getbyparam:string,cartItem:any){
    //         const sentHandler = jest.fn(cartItem)
    //         const { getByText } = render(<NavigationContainer><CartDetail cartItem = {sentHandler}/></NavigationContainer>)
    //         const button = getByText(getbyparam)
    //         fireEvent.press(button)      
    //         expect(sentHandler).toBeCalledTimes(1)
    //         expect(sentHandler).toBeTruthy()   
    // }

    // describe("Button should render",()=> {
    //     it("should increment item by 1",()=>{
    //         mockBtn("+",cartItem)
    //     })
    //     it("should decrement item by 1",()=>{
    //         mockBtn("-",cartItem)
    //     })
    //     it("should delete item",()=>{
    //         mockBtn("Delete",cartItem)
    //     })
    // })


    describe("ui renders",()=>{
        // it("should render item image",()=>{
        //         const { getByTestId } = render(<NavigationContainer><CartDetail/></NavigationContainer>)

        //         expect(getByTestId("Potatos")).toBeTruthy
        //         expect( getByTestId ).toBeCalled
            
        // })
        // it("should render buttons",()=>{
        //     if (navigationRef.isReady()) {   
        //         const { getByText } = render(<NavigationContainer><CartDetail/></NavigationContainer>)

        //         expect(getByText("+")).toHaveLength(1)
        //         expect(getByText("-")).toHaveLength(1)
        //         expect(getByText("Delete")).toHaveLength(6)
        //     }
        // })

        // it("should render item title,price and count",()=>{
        //     if (navigationRef.isReady()) {   
        //         const { getByTestId } = render(<NavigationContainer><CartDetail/></NavigationContainer>)
        //     //    expect(getByText("price")).toBeGreaterThanOrEqual(0)
        //         expect(getByTestId("title")).toBeTruthy
        //         expect(getByTestId("price")).toBeTruthy
        //         expect(getByTestId("count")).toBeTruthy
        //     }

        // })

     //snapshot test
        // test("render input correctly on start", () => {
        //     if (navigationRef.isReady()) {
        //         const tree = render(<CartDetail/>).toJSON
        //         expect(tree).toMatchSnapshot();
        //     }
        // })


        it("should render the shopping cart display(in cartDetails)",()=>{
            const BtnScales = ({item,onPress}:any) => (
                <View>
                    <TouchableOpacity onPress = {onPress}>
                        <Text>{item}</Text> 
                    </TouchableOpacity>
                </View>
            ) 

            const tree = renderer.create(
                <View>
                <Text>Shopping Cart</Text>
                <FlatList
                    data = {cartItem}
                    ItemSeparatorComponent={
                        () =><View/>
                    }    
                    // renderItem={renderItem}
                    renderItem = {({item}:any) => {
                        return(
                        <View>
                            <View>
                                <View>
                                    <Image
                                     source = {ProductImage(item.image)}
                                        // source = {require("./../../../assests/img/RTX3080.png")}
                                    />
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Text>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
        
                            <View>
                                <View>
                                    <Text>
                                        {item.title}     
                                    </Text>
                                </View>
                                <View>
                                    <Text testID="price">
                                        ${item.price} nzd
                                    </Text>
                                </View>

                                <View>
                                    <BtnScales item = {"-"}/>
                                        <Text testID="count">
                                        {item.count}
                                        </Text>
                                    <BtnScales item = {"+"}/>
                                </View>
                            </View>

        
                        </View>
                        )}}
                    />
            
            </View>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        })
    })

})