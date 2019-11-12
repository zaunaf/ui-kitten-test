import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import SplashScreen from '../screens/SplashScreen';

const MainNavigator = createSwitchNavigator({
    Splash: SplashScreen,
    Main: MainScreen
},{
    initialRouteName: 'Splash'
});

export default createAppContainer(MainNavigator); 