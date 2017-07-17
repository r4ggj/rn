/* @flow */

import React from 'react';

import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Banner from './Banner';
import CustomTabs from './CustomTabs';
import Drawer from './Drawer';
import TabsInDrawer from './TabsInDrawer';
import ModalStack from './ModalStack';
import StacksInTabs from './StacksInTabs';
import StacksOverTabs from './StacksOverTabs';
import SimpleStack from './SimpleStack';
import SimpleTabs from './SimpleTabs';

import ScrollableTabViewDemo from './pages/ScrollableTabViewDemo'
import VideoDemo from './pages/VideoDemo'
import VideoPlayer from './components/VideoPlayer'
import AnzhuApp from './pages/AnzhuApp'

const ExampleRoutes = {
  AnzhuApp:{
      name: 'AnzhuApp',
      description: 'AnzhuApp',
      screen: AnzhuApp,
  },
  VideoDemo:{
    name: 'VideoDemo',
    description: 'VideoDemo',
    screen: VideoDemo,
  },
  ScrollableTabView:{
    name: 'React-Native-Scrollable-Tab-View',
    description: 'Scrollable Tab View Demo',
    screen: ScrollableTabViewDemo,
  },
  SimpleStack: {
    name: 'React Navigation Stack Example',
    description: 'A card stack',
    screen: SimpleStack,
  },
  SimpleTabs: {
    name: 'React Navigation Tabs Example',
    description: 'Tabs following platform conventions',
    screen: SimpleTabs,
  },
  Drawer: {
    name: 'React Navigation Drawer Example',
    description: 'Android-style drawer navigation',
    screen: Drawer,
  },
  TabsInDrawer: {
    name: 'React Navigation Drawer + Tabs Example',
    description: 'A drawer combined with tabs',
    screen: TabsInDrawer,
  },
  CustomTabs: {
    name: 'React Navigation Custom Tabs',
    description: 'Custom tabs with tab router',
    screen: CustomTabs,
  },
  ModalStack: {
    name: Platform.OS === 'ios'
      ? 'React Navigation Modal Stack Example'
      : 'React Navigation Stack with Dynamic Header',
    description: Platform.OS === 'ios'
      ? 'Stack navigation with modals'
      : 'Dynamically showing and hiding the header',
    screen: ModalStack,
  },
  StacksInTabs: {
    name: 'React Navigation Stacks in Tabs',
    description: 'Nested stack navigation in tabs',
    screen: StacksInTabs,
  },
  StacksOverTabs: {
    name: 'React Navigation Stacks over Tabs',
    description: 'Nested stack navigation that pushes on top of tabs',
    screen: StacksOverTabs,
  },
  LinkStack: {
    name: 'React Navigation Link in Stack',
    description: 'Deep linking into a route in stack',
    screen: SimpleStack,
    path: 'people/Jordan',
  },
  LinkTabs: {
    name: 'React Navigation Link to Settings Tab',
    description: 'Deep linking into a route in tab',
    screen: SimpleTabs,
    path: 'settings',
  },
};

const MainScreen = ({ navigation }) => (
  <ScrollView>
    <Banner />
    {Object.keys(ExampleRoutes).map((routeName: string) => (
      <TouchableOpacity
        key={routeName}
        onPress={() => {
          const { path, params, screen } = ExampleRoutes[routeName];
          const { router } = screen;
          const action = path && router.getActionForPathAndParams(path, params);
          navigation.navigate(routeName, {}, action);
        }}
      >
        <View style={styles.item}>
          <Text style={styles.title}>{ExampleRoutes[routeName].name}</Text>
          <Text style={styles.description}>
            {ExampleRoutes[routeName].description}
          </Text>
        </View>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

const AppNavigator = StackNavigator(
  {
    ...ExampleRoutes,
    VideoPlayer:{
      screen:VideoPlayer
    },
    Index: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',

    /*
   * Use modal on iOS because the card mode comes from the right,
   * which conflicts with the drawer example gesture
   */
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);

export default () => <AppNavigator />;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  description: {
    fontSize: 13,
    color: '#999',
  },
});
