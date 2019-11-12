import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import MainScreen from '../screens/MainScreen';
import SplashScreen from '../screens/SplashScreen';
import UpdatesScreen from '../screens/UpdatesScreen';
import MonitorScreen from '../screens/MonitorScreen';
import TransactionScreen from '../screens/TransactionScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Buat Tab Navigator. MainScreen menjadi anggotanya
const mainTabNavigatorCfg =   {
    Home: {
      screen: MainScreen
    },
    Updates: {
      screen: UpdatesScreen
    },
    Monitor: {
      screen: MonitorScreen
    },
    Transaction: {
      screen: TransactionScreen
    },
    Profile: {
      screen: ProfileScreen
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