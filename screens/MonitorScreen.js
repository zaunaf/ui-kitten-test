import React from "react";
import { Platform, StyleSheet } from "react-native";
import { Layout, Text } from "react-native-ui-kitten";
import Colors from '../constants/Colors';
import IconBadge from 'react-native-icon-badge';
import { Feather, FontAwesome } from '@expo/vector-icons';

import { useSelector } from 'react-redux';

const MonitorScreen = props => {
  
  const { isLoggedIn, email } = useSelector(state => ({
    isLoggedIn: state.auth.isLoggedIn,
    email: state.auth.email
  }));

  let welcome;
  if (isLoggedIn) {
    welcome = <Text>Selamat datang {email}</Text>
  } else {
    welcome = <Text>Belum login ya oom..</Text>
  }
 
  return (
    <Layout style={styles.screen}>
      <Text>Monitor Screen</Text>
      {welcome}
    </Layout>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

MonitorScreen.navigationOptions = {
  headerTitle: 'Activities',
  headerStyle: {
    backgroundColor: ( Platform.OS === 'ios') ? 'white' : Colors.primaryColor
  },
  headerTintColor: ( Platform.OS === 'ios') ? Colors.primaryColor : 'white',
  tabBarOptions: {
    showLabel: false
  },  
  tabBarOptions: {
    showLabel: false
  },
  tabBarIcon: (tabInfo) => {
    return <Feather name="activity" size={25} color={tabInfo.tintColor} />;
  }
};

export default MonitorScreen;
