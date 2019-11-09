import React from 'react';

import { fadeIn } from 'react-navigation-transitions';


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Bookmark from "./Components/Bookmark";
import Main from "./Components/Main";
import DiscoveryPage from "./Components/DiscoveryPage";


const MainNavigator = createStackNavigator(
    {
        Main: {screen: Main},
        Bookmark: {screen: Bookmark},
        Discovery: {screen: DiscoveryPage},
    },
    {
        initialRouteName: 'Discovery',
        transitionConfig: () => fadeIn(),
        defaultNavigationOptions: {
            header: null,
        },
    },
);

const App = createAppContainer(MainNavigator);

export default App;
