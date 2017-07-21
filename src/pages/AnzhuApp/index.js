import React from 'react'
import {Text} from 'react-native'
import {
    StackNavigator,
    TabNavigator
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

import IndexPage from './pages/IndexPage'
import Login from './pages/Login'

const Test=({text})=><Text>{text}</Text>

const MainTab = StackNavigator({
    IndexPage: {
        screen: IndexPage,
        path: '/',
        navigationOptions: {
           header:null
        },
    },
    Profile: {
        screen: Test,
        text:'Profile',
        path: '/people/:name',
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.name}'s Profile!`,
        }),
    },
});

const SettingsTab = StackNavigator({
    Settings: {
        screen: Test,
        text:'settings',
        path: '/',
        navigationOptions: () => ({
            title: 'Settings',
        }),
    },
    NotifSettings: {
        screen: Test,
        text:'notifications',
        navigationOptions: {
            title: 'Notifications',
        },
    },
});

const StacksInTabs = TabNavigator(
    {
        MainTab: {
            screen: MainTab,
            path: '/',
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? 'ios-home' : 'ios-home-outline'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                ),
            },
        },
        SettingsTab: {
            screen: SettingsTab,
            path: '/settings',
            navigationOptions: {
                tabBarLabel: 'Settings',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? 'ios-settings' : 'ios-settings-outline'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                ),
            },
        },
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
);

const StacksOverTabs = StackNavigator({
    Root: {
        screen: StacksInTabs,
        navigationOptions: {
            header:null
        },
    },
    Login: {
        screen: Login,
        text:'login',
        navigationOptions: {
            header:null
        },
    },
});

export default StacksOverTabs;