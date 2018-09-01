import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import { history } from './store';

import PageNotFound from './components/Nav/PageNotFound';
import NavBarContainer from './containers/NavBar';
import Footer from './components/Nav/Footer';

import HomeContainer from './containers/Home';
import About from './containers/About';

export default () => (
    <ConnectedRouter history={history}>
        <React.Fragment>
            <NavBarContainer />
            <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route path="/about" component={About} />
                <Route component={PageNotFound} />
            </Switch>
            <Footer />
        </React.Fragment>
    </ConnectedRouter>
);