import React from "react";
import { View, StyleSheet } from "react-native";
import { Layout, Text } from "react-native-ui-kitten";
import { ProfileSettings1Container } from "@src/containers/layouts/social";

const ProfileScreen = props => {
  return (
    <View style={styles.screen}>      
      <ProfileSettings1Container {...props} style={{width: "100%"}} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ProfileScreen;
