import React from 'react';

import {createAppContainer} from 'react-navigation';
import MainScreen from "./Screens/MainScreen";
import BookmarkScreen from "./Screens/BookmarkScreen";
import DiscoveryScreen from "./Screens/DiscoveryScreen";
import UploadScreen from "./Screens/UploadScreen";
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from "react-navigation-drawer";
import SideMenu from "./Components/SideMenu";
import {fadeIn} from "react-navigation-transitions";
import FullScreenPicture from "./Components/FullScreenPicture/FullScreenPicture";

const MainNavigator = createStackNavigator(
    {
        Main: {screen: MainScreen},
        Bookmark: {screen: BookmarkScreen},
        Discovery: {screen: DiscoveryScreen},
        Upload: {screen: UploadScreen},
        FullPic: {screen: FullScreenPicture}
    },
    {
        initialRouteName: 'Main',
        transitionConfig: () => fadeIn(),
        defaultNavigationOptions: {header: null},
    },
);

const AppDrawerNavigator = createDrawerNavigator({
    Main: MainNavigator,
}, {
    contentComponent: SideMenu,
    drawerWidth: 225,
});

const App = createAppContainer(AppDrawerNavigator);

export default App;
