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
  SafeAreaView,
  StatusBar,
} from 'react-native';
import SwipeDeck from './src/screen/SwipeDeck'

const App: () => Node = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <SwipeDeck/>
    </SafeAreaView>
  );
};

export default App;
