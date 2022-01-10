import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  card: {
    width: "90%",
    height: "90%",
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius:20
  },
  textImage:{
    fontSize:32,
    width: '30%',
    textAlign: 'center',
    borderWidth: 2,
    padding:5,
    top: 10,
    position: 'absolute',
    borderRadius: 10
  },
  textLike:{
    left: 10,
    color: '#32CD32',
    borderColor: '#32CD32',
  },
  textNope:{
    borderColor: 'red',
    right: 10,
    color: 'red',
  }
});
