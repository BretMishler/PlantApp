import { React } from 'react'
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import Browse from '../screens/Browse';
// import Explore from '../screens/Explore';
// import Forgot from '../screens/Forgot';
import Login from '../screens/Login';
// import Product from '../screens/Product';
// import Settings from '../screens/Settings';
import SignUp from '../screens/Signup';
import Welcome from '../screens/Welcome';

// createStackNavigator function enables us to stack our screens in order to 
// configure an app container with screens to navigate.
const screens = createStackNavigator({
    Welcome,
    // Browse,
    // Explore,
    // Forgot,
    Login,
    // Product,
    // Settings,
    SignUp,
}, {
    // navigation options configured to this defaultNavigationOptions object
    // are applied by default to all the screens in our screen const
    defaultNavigationOptions: {
        headerStyle: {},
        // headerBackImage: <Image/>,
        headerBackTitle: null,
        headerLeftContainerStyle: {},
        headerRightContainerStyle: {},
    }
});

// creates a container for our app, binding all the screens stacked together
export default createAppContainer(screens);