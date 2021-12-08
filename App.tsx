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



//const Home = () => <Text >Home</Text>;

const Stack = createNativeStackNavigator();

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
    <HomePageLayout>
      {/* <Search/> */}
      <ProductPage/>
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
        {/* <Stack.Screen name="Products" component={ProductScreen} 
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
  },
  navItem:{

  }

});


export default App;