import {Text} from 'react-native';
import React from 'react';
import ScreenView from '../components/screenView';
import Card from '../components/card';
import YearsMultipleWinners from './yearsWithMultipleWinners';
import TopThreeStudios from './topThreeStudios';
import IntervalForProducers from './intervalForProducers';

const Dashboard = () => {
  return (
    <ScreenView>
      <YearsMultipleWinners />

      <TopThreeStudios />

      <IntervalForProducers />

      <Card title="Vencedor do ano de">
        <Text>Dash</Text>
      </Card>
    </ScreenView>
  );
};

export default Dashboard;
