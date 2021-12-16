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



//const Home = () => <Text >Home</Text>;


export type RootStackParamList = {
  Home: undefined;
  Product: undefined;
  Cart:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// const Search = React.createContext({})


const HomeScreen = () => {
  
  return(
    <HomePageLayout>
      {/* <Search/> */}
      <HomePage/>
      {/* <ProductPage/> */}
    </HomePageLayout>
  )
}

const ProductScreen = () => {
  return(
    <ProductPageLayout>
      {/* <Search/> */}
      <ProductPage/>
    </ProductPageLayout>
  )
}

const CartScreen = () =>{
  return(
    <HomePageLayout>
      <CartPage/>
    </HomePageLayout>
  )
}



const App = () => {

  return(
    //<View>
    <>
    
    <NavigationContainer ref={navigationRef}>
      
      <Stack.Navigator
        screenOptions={{
          //headerShown: false
          // header:() => (
          //   <Search/>
          // )
        }}>
          
        
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
        {/* <Stack.Screen name="CheckOut" component={CartScreen}
        /> */}

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