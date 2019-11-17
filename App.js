import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry, } from 'react-native-ui-kitten';
import MainNavigator from './navigation/MainNavigator';
import {
  ApplicationLoader,
  Assets,
} from './kitten/core/appLoader/applicationLoader.component';

// Redux stuff
import { createStore, combineReducers } from 'redux'
import authReducer from './store/reducers/auth';
import { Provider } from 'react-redux'

const rootReducer = combineReducers({
  auth: authReducer
});

const store = createStore(rootReducer);


// Assets stuff
const images = [
  require('./kitten/assets/images/source/image-profile-1.jpg'),
  require('./kitten/assets/images/source/image-profile-2.jpg'),
  require('./kitten/assets/images/source/image-profile-3.jpg'),
  require('./kitten/assets/images/source/image-profile-4.jpg'),
  require('./kitten/assets/images/source/image-profile-5.jpg'),
  require('./kitten/assets/images/source/image-profile-6.jpg'),
  require('./kitten/assets/images/source/image-profile-7.jpg'),
  require('./kitten/assets/images/source/image-profile-8.jpg'),
  require('./kitten/assets/images/source/image-profile-9.jpg'),
  require('./kitten/assets/images/source/image-profile-10.jpg'),
];

const fonts = {
  'opensans-semibold': require('./kitten/assets/fonts/opensans-semibold.ttf'),
  'opensans-bold': require('./kitten/assets/fonts/opensans-bold.ttf'),
  'opensans-extrabold': require('./kitten/assets/fonts/opensans-extra-bold.ttf'),
  'opensans-light': require('./kitten/assets/fonts/opensans-light.ttf'),
  'opensans-regular': require('./kitten/assets/fonts/opensans-regular.ttf'),
};

const assets = {
  images: images,
  fonts: fonts,
};

// Main
const App = () => (
  <Provider store={store}>
    <ApplicationLoader assets={assets}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <MainNavigator />
      </ApplicationProvider>
    </ApplicationLoader>
  </Provider>
);

export default App;