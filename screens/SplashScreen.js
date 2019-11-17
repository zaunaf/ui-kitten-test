import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Button, Layout, Text } from 'react-native-ui-kitten';
import { googleSignin } from '../store/actions/auth';
import { useDispatch, useSelector } from 'react-redux';

export const GoogleIcon = (style) => (
    <Icon name='google' {...style} />
);

export const LoginButton = () => (
    <Button icon={GoogleIcon}>Login with Google</Button>
);

const SplashScreen = props => {
  
  // Definisikan nama state dan fungsi untuk mengubah state tsb, serta initial statenya ('')
  
  // Username state
  // const [username, setUsername] = useState('');
  // isLoggedIn state
  // const [isLoggedIn, setisLoggedIn] = useState(false);
  
  // Fungsi dari react redux untuk mengambil state
  const { isLoggedIn, email } = useSelector(state => ({
    isLoggedIn: state.auth.isLoggedIn,
    email: state.auth.email
  }));
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // const email = useSelector(state => state.auth.email); 

  // console.log("Email " + email);
  // console.log("isLoggedIn " + isLoggedIn);
  
  // Fungsi dari react redux untuk menendang action
  const dispatch = useDispatch();

  // Definisikan code fungsi action yg bisa dipanggil aplikasi untuk mengubah state 
  const loginHandler = (newEmail) => {
    // setisLoggedIn(true);
    // setemail(newEmail);
    dispatch(googleSignin(newEmail));

    // Tunggu sebentar, kemudian navigate
    setTimeout(() => {
      props.navigation.navigate('Main');
    }, 1000);
  }

  let button;
  let skip;

  if (!isLoggedIn) {
    button = <Button icon={GoogleIcon} onPress={() => loginHandler('Logged User')}>Login with Google</Button>;
    skip = <Text style={{color: 'blue', marginTop: 15}} onPress={()=> { props.navigation.navigate('Main'); }}>Skip</Text>;
  } else {
    button = <Text>Welcome {email}!</Text>
    skip = <Text>&nbsp;</Text>
  }

  return (
    <Layout style={styles.container}>
      <Text style={styles.text} category='h4'>UIK Test App</Text>
      {button}
      {skip}
    </Layout>
  )
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { marginVertical: 16 }
});

export default SplashScreen; 