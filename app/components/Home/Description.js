import React from 'react';

import { Header, Grid, Image, List } from 'semantic-ui-react';
import ExchangeRates from '../ExchangeRates';

export default () => (
    <Grid container stackable verticalAlign="middle">
        <Grid.Row>
            <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: '2em' }}>A Picture Is Worth 1000 Words</Header>
                <p style={{ fontSize: '1.33em' }}>
                    You know what you want but still can&apos;t find it? That&apos;s because words aren&apos;t good enough. Don&apos;t worry,
                    DoppelBangers is here, complete with state of the art facial recognition software.
                </p>
                <Header as="h3" style={{ fontSize: '2em' }}>Getting the Best Results</Header>
                <div>
                    <p style={{ fontSize: '1.33em' }}>
                        To get the best results you need to think like a facial recognition algorithm
                    </p>
                    <List bulleted>
                        <List.Item>Decent sized images</List.Item>
                        <List.Item>Full view of the face</List.Item>
                        <List.Item>Try a few different expressions (see How Does It Work)</List.Item>
                    </List>
                </div>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
                <Image
                    bordered
                    rounded
                    size="large"
                    src="https://react.semantic-ui.com/assets/images/wireframe/white-image.png"
                />
            </Grid.Column>
            <Grid.Column>
                <ExchangeRates />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);