import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "react-native-ui-kitten";
import IconBadge from 'react-native-icon-badge';
import { Feather, FontAwesome } from '@expo/vector-icons';

const MainScreen = props => {
  return (
    <Layout style={styles.screen}>
      <Text>Main Screen</Text>
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

MainScreen.navigationOptions = {
  tabBarOptions: {
    showLabel: false
  },
  tabBarIcon: (tabInfo) => {
    return <Feather name="home" size={25} color={tabInfo.tintColor} />;
  }
};

export default MainScreen;
