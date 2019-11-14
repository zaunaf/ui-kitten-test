import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "react-native-ui-kitten";
import { ConversationsListContainer } from '@src/containers/layouts/messaging';

const ChatScreen = props => {
  return (
    <Layout style={styles.screen}>
      <ConversationsListContainer {...props} />
    </Layout>
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

export default ChatScreen;
