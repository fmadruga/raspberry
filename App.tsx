import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './src/routes';

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
