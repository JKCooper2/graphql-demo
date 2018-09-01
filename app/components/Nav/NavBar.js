// @flow
import React from 'react';

import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';

type Props = {
    activeItem: string
};

export default ({ activeItem }: Props) => (
    <div className="navbar">
        <Segment inverted vertical>
            <Menu secondary inverted pointing>
                <Link to="/"><h3>DoppelBangers</h3></Link>
                <Menu.Item as={Link} to="/" name="home" active={activeItem === ''} />
                <Menu.Item as={Link} to="/about" name="about" active={activeItem === 'about'} />
            </Menu>
        </Segment>
    </div>
);