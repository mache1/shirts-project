import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import reducer from './store/reducers';

import { Provider } from 'react-redux';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <AuthProvider>
            <BrowserRouter>
                <PersistGate persistor={persistor}>
                    <React.StrictMode>
                        <App />
                    </React.StrictMode>
                </PersistGate>
            </BrowserRouter>
        </AuthProvider>
    </Provider>,
    document.getElementById('root')
);