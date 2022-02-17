// import { configureStore } from '@reduxjs/toolkit';
// import React from 'react';
// import { render as rtlRender } from '@testing-library/react-native'
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistor } from './redux/createStore';
// import { rootReducer } from './redux/rootReducer';

// //custom render

// function render(
//     ui ,{
//         preloadedState,
//         store = configureStore({ reducer: rootReducer, preloadedState}),
//         ...renderOptions
//     } = {}
// ){
//   function Wrapper( {childern} ){
//       return <Provider store = {store}>
//           <PersistGate persistor={persistor}>
//             {childern}
//           </PersistGate>
//       </Provider>
//   }  
//   return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
// }

// //re-export everything
// export * from '@testing-library/react-native'
// //override render method
// export { render }


import React from "react"
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { rootReducer } from "./redux/rootReducer";

const INITIAL_STATE = { ...rootReducer }; // Or use value from root reducer
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
// const mockStore = configureStore([]);
const store = mockStore(INITIAL_STATE);

const reduxRender = (ui, options) =>
  render(ui, {
    
    wrapper: ({ children }) => <
      Provider store={store}>
          {children}
      </Provider>,
    ...options
  });

// re-export everything for convenience
export * from '@testing-library/react-native';

// override render method
export { reduxRender as render, store };