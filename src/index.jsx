import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import history from './router/history';
import initStore, {sagaMiddleware} from './store-config/store';
import DevTools from './store-config/devtools';

import './index.css';
import App from './App';
import weatherSaga from './saga/weather.saga';

const store = initStore();
const devTools = process.env.NODE_ENV === 'development' ? <DevTools/> : null;

sagaMiddleware.run(weatherSaga);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
                <App/>
            {devTools}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
