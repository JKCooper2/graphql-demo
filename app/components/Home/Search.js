import React from 'react';
import { Grid } from 'semantic-ui-react';

import UrlSearch from '../UrlSearch';

export default () => (
    <Grid container stackable verticalAlign="middle">
        <Grid.Column width={16}>
            <UrlSearch
                searchInProgress={false}
                searchByUrl={url => console.log(url)}
            />
        </Grid.Column>
    </Grid>
);