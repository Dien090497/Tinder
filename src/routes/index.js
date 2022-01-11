import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Consts from "../assets/Consts";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Splash from "../screen/Splash";
import SwipeDeck from "../screen/SwipeDeck";
import News from "../screen/News";
import Payment from "../screen/Payment";
import Message from "../screen/Message";

import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Images } from "../assets/Images";
import { Colors } from "../assets/Colors";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabBarIcon = {
  [Consts.ScreenIds.SwipeDeck]: Images.icTabBarSwipeDeck,
  [Consts.ScreenIds.News]:  Images.icTabBarNews,
  [Consts.ScreenIds.Payment]:  Images.icTabBarPayment,
  [Consts.ScreenIds.Message]:  Images.icTabBarMessage,
};

const renderTabBarIcon = (focused, route) => {
  const tintColor = focused ? Colors.mainColor : 'gray';
  return (
    <Image
      source={TabBarIcon[route.name]}
      style={{
        width: 20,
        height: 20,
        tintColor: tintColor,
      }}
      resizeMode='contain'
    />
  );
};

const TabBarBottom = () => {
  return (
    <View style={{flex:1}}>
      <View style={{backgroundColor: 'white', padding: 10, alignItems: 'center', justifyContent: 'center', height: 60}}>
        <Image source={Images.avatar1[0]} resizeMode={'cover'} style={{width:40, height: 40, borderRadius: 20, position: 'absolute', top: 10, left: 10}}/>
        <View style={{flexDirection: 'row',alignItems: 'center'}}>
          <Image source={Images.icTabBarSwipeDeck} resizeMode={'contain'} style={{width:20, height: 40, borderRadius: 40, tintColor: '#FD297B'}}/>
          <Text style={{color: '#FD297B', fontSize: 20}}> tinder</Text>
        </View>
      </View>
      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: false,
          showLabel: false
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => renderTabBarIcon(focused, route),
          headerShown: false,
          tabBarStyle: { height: 60 },
        })}
      >
        <Tab.Screen name={Consts.ScreenIds.SwipeDeck} component={SwipeDeck} />
        <Tab.Screen name={Consts.ScreenIds.News} component={News}/>
        <Tab.Screen name={Consts.ScreenIds.Payment} component={Payment}/>
        <Tab.Screen name={Consts.ScreenIds.Message} component={Message}/>
      </Tab.Navigator>
    </View>
  );
};


export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Consts.ScreenIds.Tabs}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Consts.ScreenIds.Tabs} component={TabBarBottom} />
        <Stack.Screen name={Consts.ScreenIds.Splash} component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
