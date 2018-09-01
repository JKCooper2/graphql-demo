import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import 'semantic-ui-css/semantic.min.css';

import AppRoutes from './routes';
import store from './store';

const client = new ApolloClient({
    uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql'
});

ReactDOM.render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <AppRoutes />
        </ApolloProvider>
    </Provider>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}