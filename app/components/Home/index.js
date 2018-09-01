import React from 'react';

import { Segment } from 'semantic-ui-react';

import Statistics from './Statistics';
import HowItWorks from './HowItWorks';
import Description from './Description';
import Header from './Header';
import Search from './Search';

const Home = () => (
    <React.Fragment>
        <Segment inverted textAlign="center" vertical >
            <Header />
        </Segment>

        <Segment style={styles.segment} vertical>
            <Search />
        </Segment>

        <Segment style={styles.segment} vertical>
            <Description />
        </Segment>

        <Segment style={styles.segment} vertical>
            <HowItWorks />
        </Segment>

        <Segment style={styles.segment} vertical>
            <Statistics
                photos={250000}
                models={15000}
                searches={20000000}
            />
        </Segment>
    </React.Fragment>
);

const styles = {
    segment: {
        padding: '4em 0em'
    }
};

export {
    Home as default,
    Statistics,
    HowItWorks,
    Search,
    Description,
    Header
};