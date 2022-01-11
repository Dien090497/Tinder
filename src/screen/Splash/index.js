import React, { useEffect } from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";
import LinearGradient from "react-native-linear-gradient";
import { Images } from "../../assets/Images";
import { useNavigation } from "@react-navigation/native";
import Consts from "../../assets/Consts";


export default function News() {
  const navigation = useNavigation();

  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate(Consts.ScreenIds.Tabs)
    },2000)
  }, [])

  return (
    <View style={{flex:1}}>
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0.5}}
        locations={[0.25,1]}
        colors={['#ff8544', '#de4686']}
        style={styles.container}>
        <Image source={Images.icTabBarSwipeDeck} style={styles.logo} resizeMode={'center'}/>
      </LinearGradient>
    </View>
  );
}
