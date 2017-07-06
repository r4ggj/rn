import Reactotron from 'reactotron-react-native'

Reactotron
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect() // let's connect!
global.log=Reactotron.log;
global.warn=Reactotron.warn;
global.error=Reactotron.error;
global.display=Reactotron.display;
