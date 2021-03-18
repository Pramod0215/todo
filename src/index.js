import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {store, persistor} from './Store/store'


const app=(
  <Provider store={store}>
   
      <App />
     
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);


reportWebVitals();
