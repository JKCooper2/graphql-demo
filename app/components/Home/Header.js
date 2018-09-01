import React from 'react';
import { Container, Header } from 'semantic-ui-react';

export default () => (
    <Container text>
        <Header
            as="h1"
            content="DoppelBangers"
            inverted
            style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em' }}
        />
        <Header
            as="h2"
            content="Using science for science"
            inverted
            style={{ fontSize: '1.7em', fontWeight: 'normal' }}
        />
    </Container>
);