/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Image,
  SafeAreaView, Text, View,
} from "react-native";
import Router from './src/routes'
import { Images } from "./src/assets/Images";

const App: () => Node = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Router/>
    </SafeAreaView>
  );
};

export default App;
