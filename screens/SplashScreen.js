import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Button, Layout, Text } from 'react-native-ui-kitten';

export const GoogleIcon = (style) => (
    <Icon name='google' {...style} />
);
  
export const LoginButton = () => (
    <Button icon={GoogleIcon}>Login with Google</Button>
);

const SplashScreen = () => (
  <Layout style={styles.container}>
    <Text style={styles.text} category='h4'>Welcome to UI Kitten</Text>
    <Button icon={GoogleIcon} >Login with Google</Button>
    <Text style={{color: 'blue', marginTop: 15}}>Skip</Text>
  </Layout>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { marginVertical: 16 }
});

export default SplashScreen;