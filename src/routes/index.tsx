import {ParamListBase} from '@react-navigation/native';
import Dashboard from '../dasboard';
import React from 'react';
import List from '../list';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RemixIcon from 'react-native-remix-icon';

const Stack = createBottomTabNavigator<ParamListBase>();

const Routes = () => (
  <Stack.Navigator
    initialRouteName="Dashboard"
    screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        let iconName: string = '';

        if (route.name === 'Dashboard') {
          iconName = focused ? 'home-gear-fill' : 'home-gear-line';
        } else if (route.name === 'List') {
          iconName = focused ? 'file-list-2-fill' : 'file-list-2-line';
        }

        return <RemixIcon name={iconName} />;
      },
    })}>
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="List" component={List} />
  </Stack.Navigator>
);

export default Routes;
