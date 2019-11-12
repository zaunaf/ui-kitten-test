import React from 'react';
import { Text } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import IconBadge from 'react-native-icon-badge';
import { Feather, FontAwesome } from '@expo/vector-icons';

import MainScreen from '../screens/MainScreen';
import SplashScreen from '../screens/SplashScreen';
import UpdatesScreen from '../screens/UpdatesScreen';
import MonitorScreen from '../screens/MonitorScreen';
import TransactionScreen from '../screens/TransactionScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Buat Tab Navigator. MainScreen menjadi anggotanya
const mainTabNavigatorCfg =   {
    Home: {
      screen: MainScreen,
      navigationOptions: {
        tabBarOptions: {
          showLabel: false
        },
        tabBarIcon: (tabInfo) => {
          return <Feather name="home" size={25} color={tabInfo.tintColor} />;
        }
      }
    },
    Updates: {
      screen: UpdatesScreen,
      navigationOptions: {
        tabBarOptions: {
          showLabel: false
        },
        // tabBarIcon: (tabInfo) => {
        //   return <FontAwesome name="newspaper-o" size={25} color={tabInfo.tintColor} />;
        // }
        tabBarIcon: ({tintColor}) => {
          return (
            <IconBadge
              MainElement={<FontAwesome name='newspaper-o' size={25} color={tintColor} />}
              BadgeElement={<Text style={{ color: 'white' }}>{3}</Text>}
              IconBadgeStyle={{top: -8, right: -8, width:20, height:20, backgroundColor: '#FF0000'}}
              Hidden={false}
            />
          );
        }
      }
    },
    Monitor: {
      screen: MonitorScreen,
      navigationOptions: {
        tabBarOptions: {
          showLabel: false
        },
        tabBarIcon: (tabInfo) => {
          return <Feather name="activity" size={25} color={tabInfo.tintColor} />;
        }
      }
    },
    Transaction: {
      screen: TransactionScreen,
      navigationOptions: {
        tabBarOptions: {
          showLabel: false
        },
        tabBarIcon: (tabInfo) => {
          return <Feather name="repeat" size={25} color={tabInfo.tintColor} />;
        }
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarOptions: {
          showLabel: false
        },
        tabBarIcon: (tabInfo) => {
          return <Feather name="user" size={25} color={tabInfo.tintColor} />;
        }
      }
    }
};

const MainTabNavigator = createBottomTabNavigator(mainTabNavigatorCfg);

// MainScreen Diganti MainTabNavigator
const MainNavigator = createSwitchNavigator({
    Splash: SplashScreen,
    Main: MainTabNavigator
},{
    initialRouteName: 'Splash'
});


export default createAppContainer(MainNavigator); 