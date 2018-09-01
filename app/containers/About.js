// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export default () => (
    <React.Fragment>
        About
        <Link to="/">
            <Button>Go Home</Button>
        </Link>
    </React.Fragment>
);