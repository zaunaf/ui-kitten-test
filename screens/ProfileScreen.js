import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "react-native-ui-kitten";

const ProfileScreen = props => {
  return (
    <Layout style={styles.screen}>
      <Text>Profile Screen</Text>
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

export default ProfileScreen;
