import {StyleSheet} from "react-native";
import { Colors } from "../../assets/Colors";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: Colors.bgSplash,
    alignItems: 'center',
    justifyContent:'center',
  },
  logo:{
    height: '30%',
    tintColor: 'white'
  }
})
