import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useDispatch, useSelector  } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RootState } from './redux/rootReducer';
import HomePage from './pages/homepage';
import Header from './components/header';
import Search from './components/search';
import ProductResult from './components/product/productResult';
import ProductPage from './pages/productpage';
import HomePageLayout from './layouts/HomePageLayout';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './RootNavigation';
import ProductPageLayout from './layouts/ProductPageLayout';
import CartPage from './pages/cartpage';
import CheckOutPage from './pages/checkoutpage';
import CheckoutPageLayout from './layouts/CheckoutPageLayout';
import CartUI from './components/cart/cartUI';
import ProductUI from './components/product/productUI';
import CheckoutUI from './components/checkout/checkoutUI';
import PurchasePage from './pages/purchasepage';


//const Home = () => <Text >Home</Text>;


export type RootStackParamList = {
  Home: undefined;
  Product: undefined;
  Cart:undefined;
  CheckOut:undefined;
  Purchase:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const HomeScreen = () => {
  
  return(
    <HomePageLayout>
      <HomePage/>
    </HomePageLayout>
  )
}

export const ProductScreen = () => {
  return(
    <ProductPageLayout>
      <ProductPage/>
      <ProductUI/>
    </ProductPageLayout>
  )
}

export const CartScreen = () =>{ 
  return(
    <ProductPageLayout>
      <CartPage/>
      <CartUI/>
    </ProductPageLayout>
  )
}

export const CheckOutScreen = () => {
  return(
    <CheckoutPageLayout>
      <CheckOutPage/>
      {/* <CheckoutUI/> */}
    </CheckoutPageLayout>
  )
}

export const PurchaseScreen = () => {
  return(
    <PurchasePage/>
  )
}

const App = () => {

  return(
    //<View>
    <>
    
    <NavigationContainer ref={navigationRef}>
      
      <Stack.Navigator
        // screenOptions={{
        //   //headerShown: false
        //   // header:() => (
        //   //   <Search/>
        //   // )
        // }}>

        >
        <Stack.Screen name="Home" component={HomeScreen} 
          options= {{
            header:() => (
              <Search/>
            )
          }}
        />
        <Stack.Screen name="Product" component={ProductScreen}
        />
        <Stack.Screen name="Cart" component={CartScreen}
        />
        <Stack.Screen name="CheckOut" component={CheckOutScreen}
        />
        <Stack.Screen name="Purchase" component={PurchaseScreen}
        />

      </Stack.Navigator>
      
    </NavigationContainer>

    
</>


  )
  };

const styles = StyleSheet.create({
  container: {
    // flex: 1
    ...StyleSheet.absoluteFillObject
  }

});


export default App;