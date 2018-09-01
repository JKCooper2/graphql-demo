import React from 'react';
import { Container, Header } from 'semantic-ui-react';

export default () => (
    <Container text>
        <Header as="h3" style={{ fontSize: '2em' }}>How Does It Work?</Header>
        <p style={{ fontSize: '1.33em' }}>
            Each image is broken apart into a representation of the key facial points, as well as the angle of the face.
            This is then matched against our database of analysed images to determine the closest matches.
            Facial expression does currently play a large role in determining image similarity, so it may help to try a
            variety of expressions and angles.
        </p>
        <p style={{ fontSize: '1.33em' }}>
            Hair colour is not currently determined from the image, rather the model&apos;s regular hair colour is used.
            This can lead to some incorrect hair colour filtering if the model changes hair colour, or is with other models
            with different hair colours. For the most part the filtering will be correct.
        </p>
    </Container>
);