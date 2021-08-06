import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import reducer from './store/reducer';

import { Provider } from 'react-redux';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <AuthProvider>
            <BrowserRouter>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </BrowserRouter>
        </AuthProvider>
    </Provider>,
    document.getElementById('root')
);