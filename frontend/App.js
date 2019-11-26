import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import MainScreen from "./Screens/MainScreen";
import BookmarkScreen from "./Screens/BookmarkScreen";
import DiscoveryScreen from "./Screens/DiscoveryScreen";
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from "react-navigation-drawer";
import SideMenu from "./Components/SideMenu";
import {fadeIn} from "react-navigation-transitions";
import FullScreenPicture from "./Components/FullScreenPicture/FullScreenPicture";
import LoginScreen from "./Screens/LoginScreen";
import SignupScreen from "./Screens/SignupScreen";
import UploadScreen from "./Screens/UploadScreen";

const MainNavigator = createStackNavigator(
    {
        Upload: { screen: UploadScreen},
        Main: {screen: MainScreen},
        Bookmark: {screen: BookmarkScreen},
        Discovery: {screen: DiscoveryScreen},
        FullPic: {screen: FullScreenPicture},
    },
    {
        initialRouteName: 'Main',
        transitionConfig: () => fadeIn(),
        defaultNavigationOptions: {header: null},
    },
);

const AppDrawerNavigator = createDrawerNavigator(
    {
        Main: MainNavigator,
    },
    {
        contentComponent: SideMenu,
        drawerWidth: 225,
    }
);
const AuthNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen},
    Signup: { screen:  SignupScreen}
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

const switchNavigator = createSwitchNavigator(
  {
      Auth: AuthNavigator,
      MainApp: AppDrawerNavigator,
  }, {
      headerMode: "none",
      initialRouteName: "Auth" }
);

const App = createAppContainer(switchNavigator);

export default App;

