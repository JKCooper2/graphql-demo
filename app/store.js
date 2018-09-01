import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import rootReducer from './reducers';

export const history = createBrowserHistory();

const store = createStore(
    connectRouter(history)(rootReducer),
    applyMiddleware(routerMiddleware(history), thunk)
);

export default store;