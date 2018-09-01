// @flow
import React from 'react';
import { connect } from 'react-redux';

import NavBar from '../components/Nav/NavBar';

type Props = {
    activeRoute: string
};

const NavBarContainer = ({ activeRoute }: Props) => (
    <NavBar activeItem={activeRoute.split('/')[1]} />
);

function mapStateToProps(state) {
    return {
        activeRoute: state.router.location.pathname
    };
}

// $FlowFixMe
export default connect(mapStateToProps, null)(NavBarContainer);
