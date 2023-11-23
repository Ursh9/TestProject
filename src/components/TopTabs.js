import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const Tab = createMaterialTopTabNavigator();
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import GamePlayed from '../screens/GamePlayed';
import Badges from '../screens/Badges';
const TopTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#6231AD',
        tabBarInactiveTintColor: '#727682',
      }}
      tabBarOptions={{
        indicatorStyle: {backgroundColor: '#6231AD'}, // Set the color of the indicator
      }}
      tabBarIndicatorStyle={{color: '#6231AD'}}>
      <Tab.Screen name="GamePlayed" component={GamePlayed} />
      <Tab.Screen name="Badges" component={Badges} />
    </Tab.Navigator>
  );
};

export default TopTabs;

const styles = StyleSheet.create({});
