import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  card: {
    width: "98%",
    height: "98%",
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius:20
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
    borderRadius: 10,
    marginTop:40
  },
  textLike:{
    left: 10,
    color: '#32CD32',
    borderColor: '#32CD32',
    transform: [
      { rotate: '-20deg'},
    ],
  },
  textNope:{
    borderColor: 'red',
    right: 10,
    color: 'red',
    transform: [
      { rotate: '20deg'},
    ],
  },
  viewInCard:{
    position: 'absolute',
    bottom: 0,
    width: '95%',
    height: '100%',
    justifyContent: 'space-between',
    padding: 10
  },
  viewActionCard:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemAction:{
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemAction1:{
    width: 45,
    height: 45,
  },
  itemAction2:{
    width: 60,
    height: 60
  },
  txtName:{
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold'
  },
  txtAge:{
    fontSize: 25,
    color: 'white',
    marginLeft: 10
  }
});
