import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "react-native-ui-kitten";
import IconBadge from 'react-native-icon-badge';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { ProductsListContainer } from '@src/containers/layouts/ecommerce';

const MainScreen = props => {
  return (
    <Layout style={styles.screen}>
      <ProductsListContainer {...props} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 10
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
