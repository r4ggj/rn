/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {
  AppRegistry
} from 'react-native';
import App from './src/App';
const returnTrue=()=>true;
const returnFalse=()=>false;
const returnUndefined=()=>undefined;
const returnNull=()=>null;
global.returnTrue=returnTrue;
global.returnFalse=returnFalse;
global.returnNull=returnNull;
global.returnUndefined=returnUndefined;

AppRegistry.registerComponent('rn', () => App);
