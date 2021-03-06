// @flow
import React from 'react';
import { Segment, Container, Header, Grid, List } from 'semantic-ui-react';

const Footer = () => (
    <Segment inverted vertical style={{ padding: '2em 0em' }}>
        <Container>
            <Grid divided inverted stackable>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Header inverted as="h4" content="About" />
                        <List link inverted>
                            <List.Item as="a">Sitemap</List.Item>
                            <List.Item as="a">Contact Us</List.Item>
                            <List.Item as="a">Religious Ceremonies</List.Item>
                            <List.Item as="a">Gazebo Plans</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header inverted as="h4" content="Services" />
                        <List link inverted>
                            <List.Item as="a">Banana Pre-Order</List.Item>
                            <List.Item as="a">DNA FAQ</List.Item>
                            <List.Item as="a">How To Access</List.Item>
                            <List.Item as="a">Favorite X-Men</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header as="h4" inverted>Questions?</Header>
                        <p>E-mail <a href="mailto:admin@doppelbangers.net">admin@doppelbangers.net</a></p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </Segment>
);

export default Footer;
