import React from 'react';  
import ReactDOM from 'react-dom';  
import App from './App';  
import { Provider } from 'react-redux';  
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";  
import myreducer from './Redux/reducer';  


const store=createStore(myreducer, applyMiddleware(thunk))

ReactDOM.render(  
    <Provider store={store}>
      <App />  
    </Provider>,document.getElementById('root'));

// serviceWorker.unregister();