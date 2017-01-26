//  Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header'

const App = () => (
  <Header />
);

// Render it to to the device
// name of string 'albums' must match up with name of App
// for every application we create, we must register at least one component
AppRegistry.registerComponent('albums', () => App);
 
