import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry, } from 'react-native-ui-kitten';
import SplashScreen from './screens/SplashScreen';

const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <SplashScreen />
    </ApplicationProvider>
  </React.Fragment>
);

export default App;