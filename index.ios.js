//  Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a Component
// const App = () => {
//   return (
//     <Text>Some Text</Text>
//   );
// };

// or using es6:

const App = () => (
  <Text>Some Text</Text>
);

// Render it to to the device
// name of string 'albums' must match up with name of App
// for every application we create, we must register at least one component
AppRegistry.registerComponent('albums', () => App);
 
