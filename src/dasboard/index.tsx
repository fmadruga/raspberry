import {Text} from 'react-native';
import React from 'react';
import ScreenView from '../components/screenView';
import Card from '../components/card';
import YearsMultipleWinners from './yearsWithMultipleWinners';
import TopThreeStudios from './topThreeStudios';
import IntervalForProducers from './intervalForProducers';
import WinnersByYear from './winnersByYear';

const Dashboard = () => {
  return (
    <ScreenView>
      <YearsMultipleWinners />

      <TopThreeStudios />

      <IntervalForProducers />

      <WinnersByYear />
    </ScreenView>
  );
};

export default Dashboard;
