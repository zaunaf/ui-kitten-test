import React from 'react';
import { Platform, Text } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import IconBadge from 'react-native-icon-badge';
import { Feather, FontAwesome } from '@expo/vector-icons';

import SplashScreen from '../screens/SplashScreen';

import MainScreen from '../screens/MainScreen';
import AlertScreen from '../screens/Home/AlertScreen';
import ChatScreen from '../screens/Home/ChatScreen';

import UpdatesScreen from '../screens/UpdatesScreen';
import NewsScreen from '../screens/Updates/NewsScreen';
import MailScreen from '../screens/Updates/MailScreen';

import MonitorScreen from '../screens/MonitorScreen';
import PositionScreen from '../screens/Monitor/PositionScreen';

import TransactionScreen from '../screens/TransactionScreen';
import TransactionDetailScreen from '../screens/Transaction/TransactionDetailScreen';

import ProfileScreen from '../screens/ProfileScreen';
import AddEditChildScreen from '../screens/Profile/AddEditChildScreen';
import EditProfileScreen from '../screens/Profile/EditProfileScreen';

import Colors from "../constants/Colors";

// Reusable Options yang disesuaikan dengan Platform
const defaultStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
  },
  headerTintColor:
    Platform.OS === "android" ? "white" : Colors.primaryColor,
  headerTitle: "A Screen"
};

// HomeNavigator
const HomeNavigator = createStackNavigator({
  Home: {
    screen: MainScreen,
    navigationOptions: {
      headerTitle: 'UIK Test App'
    }
  },
  Alert: { 
    screen: AlertScreen,
    navigationOptions: {
      headerTitle: 'Alert'
    }

  },
  Chat: { 
    screen: ChatScreen,
    navigationOptions: {
      headerTitle: 'Chat'
    }
  }
},{
  defaultNavigationOptions: defaultStackNavigationOptions
});

// ProfileNavigator
const UpdatesNavigator = createStackNavigator({
  Updates: {
    screen: UpdatesScreen,
    navigationOptions: {
      headerTitle: 'Updates'
    }
  },
  News: {
    screen: NewsScreen,
    navigationOptions: {
      headerTitle: 'News'
    }
  },
  Mail: {
    screen: MailScreen,
    navigationOptions: {
      headerTitle: 'Mail'
    }
  },
},{
  defaultNavigationOptions: defaultStackNavigationOptions
});

// MonitorNavigator
const MonitorNavigator = createStackNavigator({
  Monitor: {
    screen: MonitorScreen,
    navigationOptions: {
      headerTitle: 'Activities'
    }
  },
  Position: { 
    screen: PositionScreen,
    navigationOptions: {
      headerTitle: 'Position'
    }
  }
},{
  defaultNavigationOptions: defaultStackNavigationOptions
});


// TransactionNavigator
const TransactionNavigator = createStackNavigator({
  Transaction: {
    screen: TransactionScreen,
    navigationOptions: {
      headerTitle: 'Transaction'
    }
  },
  TransactionDetail: { 
    screen: TransactionDetailScreen,
    navigationOptions: {
      headerTitle: 'Transaction Detail'
    }
  }
},{
  defaultNavigationOptions: defaultStackNavigationOptions
});

// ProfileNavigator
const ProfileNavigator = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerTitle: 'Profile'
    }
  },
  AddEditChild: { 
    screen: AddEditChildScreen,
    navigationOptions: {
      headerTitle: 'Childs'
    }
  },
  EditProfile: { 
    screen: EditProfileScreen,
    navigationOptions: {
      headerTitle: 'Edit Profile'
    }
  }
},{
  defaultNavigationOptions: defaultStackNavigationOptions
});

// Buat Tab Navigator. MainScreen menjadi anggotanya
const mainTabNavigatorCfg =   {
    Home: {
      screen: HomeNavigator,
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
      screen: UpdatesNavigator,
      navigationOptions: {
        tabBarOptions: {
          showLabel: false
        },
        tabBarIcon: ({tintColor}) => {
          return (
            <IconBadge
              MainElement={<FontAwesome name='newspaper-o' size={25} color={tintColor} />}
              BadgeElement={<Text style={{ color: 'white' }}>{3}</Text>}
              IconBadgeStyle={{top: -8, right: -8, width:20, height:20, backgroundColor: Colors.secondaryColor}}
              Hidden={false}
            />
          );
        }
      }
    },
    Monitor: {
      screen: MonitorNavigator,
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
      screen: TransactionNavigator,
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
      screen: ProfileNavigator,
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

const MainNavigator = createSwitchNavigator({
    Splash: SplashScreen,
    Main: MainTabNavigator
},{
    initialRouteName: 'Splash'
});

export default createAppContainer(MainNavigator); 