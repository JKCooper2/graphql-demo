// @flow
import React from 'react';
import { Grid, Statistic, Icon } from 'semantic-ui-react';

type MainStatisticProps = {
    icon: string;
    value: string;
    label: string;
}

const MainStatistic = ({ icon, value, label }: MainStatisticProps) => (
    <Grid.Column textAlign="center">
        <Statistic size="small">
            <Statistic.Value>
                <Icon name={icon} />
                <span style={{ marginLeft: 10 }}>{value}</span>
            </Statistic.Value>
            <Statistic.Label>{label}</Statistic.Label>
        </Statistic>
    </Grid.Column>
);

type Props = {
    photos: number;
    models: number;
    searches: number;
}

export default ({ photos, models, searches }: Props) => (
    <Grid centered columns={4}>
        <MainStatistic
            icon="camera"
            value={`${photos.toLocaleString()}+`}
            label="Photos"
        />
        <MainStatistic
            icon="group"
            value={`${models.toLocaleString()}+`}
            label="Models"
        />
        <MainStatistic
            icon="search"
            value={`${searches.toLocaleString()}+`}
            label="Searches"
        />
    </Grid>
);