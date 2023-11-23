import {StyleSheet, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/Home';
import Videos from './src/Videos';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Research from './src/Research';
import LeaderBoard from './src/LeaderBoard';
import Profile from './src/Profile';

const Tab = createBottomTabNavigator();
const App = () => {
  const Stack = createStackNavigator();
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Home"
    //     screenOptions={{headerShown: false}}>
    //     <Stack.Screen component={Home} name="Home" />
    //     <Stack.Screen component={Videos} name="Videos" />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        tabBarOptions={{
          activeTintColor: '#6231AD', // Color for the active tab
          inactiveTintColor: '#D7DCDB', // Color for inactive tabs
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
