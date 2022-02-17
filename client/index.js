/**
 * @format
 */

 import {AppRegistry} from 'react-native';
 import React from 'react';
 import App from './App';
 import {name as appName} from './app.json';
 import { Provider } from 'react-redux';
 
 import {store, persistor } from './redux/createStore';
import { PersistGate } from 'redux-persist/integration/react';
 import {Footer} from './components/footer';
 // const store = configureStore()
 
 const RNRedux = () => (

     <Provider store = { store }>    
      <PersistGate persistor = {persistor}>
        <App />
       </PersistGate>
     </Provider>
   )
 
 // AppRegistry.registerComponent(appName, () => App);
 AppRegistry.registerComponent(appName, () => RNRedux);