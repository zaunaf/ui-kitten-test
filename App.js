import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry, } from 'react-native-ui-kitten';
import MainNavigator from './navigation/MainNavigator';

const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <MainNavigator />
    </ApplicationProvider>
  </React.Fragment>
);

export default App;