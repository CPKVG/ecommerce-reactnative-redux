import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { composeWithDevTools } from 'remote-redux-devtools';

// const composeEnhancers = composeWithDevTools({ realtime: true, port: 8081 });

// export const middlewares = [thunk, logger];
export const middlewares = [thunk];

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(rootReducer, applyMiddleware(...middlewares))



// export const store = createStore(rootReducer)

export default store;
