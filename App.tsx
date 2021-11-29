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
import { Link, NativeRouter, Route, Routes } from 'react-router-native';
import HomePageLayout from './layouts/HomePageLayout';


//const Home = () => <Text >Home</Text>;

const App = () => {

  return(

    <NativeRouter>
      <Routes>
        
          <Route path = "/" element = {
                  <HomePageLayout>
                    <HomePage/>
                  </HomePageLayout>
                }/>
          <Route path = "/product" element = {<ProductPage/>}/>
        </Routes>
    </NativeRouter>


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