import React from 'react';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './Reducer/reducer';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const persistConfig = {
  key: 'root',
  storage: storage,
  
};
const pReducer = persistReducer(persistConfig, rootReducer);

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(pReducer, composeEnhances(applyMiddleware(thunk)));
const persistor = persistStore(store);
export { persistor, store };