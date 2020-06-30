import 'expo/build/Expo.fx';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { activateKeepAwake } from 'expo-keep-awake';
import firebase from 'firebase';
import { firebaseConfig } from "./src/config/fireBase";
import navigation from './src/navigations';

firebase.initializeApp(firebaseConfig);

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(navigation);
