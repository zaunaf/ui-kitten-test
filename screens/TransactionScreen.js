import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "react-native-ui-kitten";

import { useSelector } from 'react-redux';

const TransactionScreen = props => {

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
      <Text>Transaction Screen</Text>
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

export default TransactionScreen;
