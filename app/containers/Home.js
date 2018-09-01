// @flow
import React, { Component } from 'react';

import { connect } from 'react-redux';

import Home from '../components/Home';

import { setMessage } from '../actions/message';

type Props = {
    dispatch: (fn: any) => mixed;
}

type State = {};

class HomeContainer extends Component<Props, State> {
    _onChange = (value: string) => {
        this.props.dispatch(setMessage(value));
    }

    render() {
        return (
            <React.Fragment>
                <Home />
            </React.Fragment>
        );
    }
}

export default connect(state => state)(HomeContainer);