/**
 * @format
 */

// import 'react-native';
// import React from 'react';
// import App from '../App';

// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
// import { inputValidation } from '../redux/Checkout/checkout.action';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

// it('if values of given input are empty, inputValidation() returns false', () => {
//   expect(inputValidation(undefined)).toBe(false);
// });


import React from 'react';
import { render } from '@testing-library/react-native';
import renderer, { act } from 'react-test-renderer';
import App from '../App';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { persistor, store } from '../redux/createStore';
import { PersistGate } from 'redux-persist/integration/react';


jest.useFakeTimers()

it("renders correctly",async() => {
    await act(async() => {
        renderer.create(
        <Provider store = {store}>
            <PersistGate persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
        );
    })
})








