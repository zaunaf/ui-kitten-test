import React from 'react';
import { Platform, Text } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

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

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { FeatherHeaderButton, FontAwesomeHeaderButton } from '../components/headerButtons';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { FeatherBadgedIcon, FontAwesomeBadgedIcon } from '../components/badgedIcons';


// Reusable Options yang disesuaikan dengan Platform
const defaultStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
  },
  headerTintColor:
    Platform.OS === "android" ? "white" : Colors.primaryColor,
  headerTitle: "A Screen"
};

const HomeNavigator = createStackNavigator({
  Home: {
    screen: MainScreen,
    // Ambil navigation sebagai parameter agar bisa navigate()
    navigationOptions: ({ navigation }) => {
      return ({
        headerTitle: 'UIK Test App',
        headerRight: (
          <HeaderButtons HeaderButtonComponent={FeatherHeaderButton}>
            <Item
              title="Alert"
              // badge count. Jika == 0, badge hilang
              count={13}
              // Pilih icon
              iconName="bell"
              // Buka AlertScreen sebagai stack
              onPress={() => {
                navigation.navigate("Alert")
              }}
            />
            <Item
              title="Chat"
              // badge count. Jika == 0, badge hilang
              count={125}
              // Pilih icon
              iconName="message-square"
              // Buka ChatScreen sebagai stack
              onPress={() => {
                navigation.navigate("Chat")
              }}
            />
          </HeaderButtons>
        )
      });
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
    navigationOptions: ({ navigation }) => {
      return ({
        headerTitle: 'Profile',
        headerRight: (
          <HeaderButtons HeaderButtonComponent={FontAwesomeHeaderButton}>
            <Item
              title="Edit"
              // Pilih icon
              iconName="pencil"
              // Buka AlertScreen sebagai stack
              onPress={() => {
                navigation.navigate("EditProfile")
              }}
            />
          </HeaderButtons>
        )
      })
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
    navigationOptions: ({ navigation }) => {
      return ({
        headerTitle: 'Edit Profile',        
        headerRight: (
          <HeaderButtons HeaderButtonComponent={FontAwesomeHeaderButton}>
            <Item
              title="Edit"
              // Pilih icon
              iconName="pencil"
              // Buka AlertScreen sebagai stack
              onPress={() => {
                navigation.navigate("EditProfile")
              }}
            />
          </HeaderButtons>
        )
      })
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
            <FontAwesomeBadgedIcon name='newspaper-o' count={5} size={25} color={tintColor} />
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