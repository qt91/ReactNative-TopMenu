/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';


import {StackNavigator} from 'react-navigation';
import Dashboard from './src/screens/Dashboard';
import Sidebar from './src/screens/Sidebar';

const Navigation = StackNavigator({
    Dashboard: {screen: Dashboard},
    Sidebar: {screen: Sidebar}
});
export default Navigation;


