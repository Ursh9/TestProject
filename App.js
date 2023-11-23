import {StyleSheet, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Videos from './src/screens/Videos';
import Research from './src/screens/Research';
import LeaderBoard from './src/screens/LeaderBoard';
import Profile from './src/screens/Profile';

const Tab = createBottomTabNavigator();
const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        tabBarOptions={{
          activeTintColor: '#6231AD',
          inactiveTintColor: '#D7DCDB',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={require('./src/assets/HomeActive.png')}
                style={{tintColor: focused ? '#6231AD' : '#D7DCDB'}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Leagues"
          component={Videos}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={require('./src/assets/Leagues.png')}
                style={{tintColor: focused ? '#6231AD' : '#D7DCDB'}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Research"
          component={Research}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={require('./src/assets/Research.png')}
                style={{tintColor: focused ? '#6231AD' : '#D7DCDB'}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="LeaderBoard"
          component={LeaderBoard}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={require('./src/assets/LeaderBoard.png')}
                style={{tintColor: focused ? '#6231AD' : '#D7DCDB'}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={require('./src/assets/ProfileNew.png')}
                style={{tintColor: focused ? '#6231AD' : '#D7DCDB'}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
