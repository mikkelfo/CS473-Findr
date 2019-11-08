import React from 'react';
import Bookmark from "./Components/Bookmark";
import { fadeIn } from 'react-navigation-transitions';


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from "./Components/Main";


const MainNavigator = createStackNavigator(
    {
        Main: {screen: Main},
        Bookmark: {screen: Bookmark},
    },
    {
        initialRouteName: 'Main',
        transitionConfig: () => fadeIn(),
        defaultNavigationOptions: {
            header: null,
        },
    },
);

const App = createAppContainer(MainNavigator);

export default App;
