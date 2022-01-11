import React, { useRef, useState } from "react";
import { Text, View, PanResponder, Animated, Image, Dimensions, Pressable, TouchableOpacity } from "react-native";
import { Images } from "../../assets/Images";
import { styles } from "./styles";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Colors } from "../../assets/Colors";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default function SwipeDeck() {
  const data = [
    {
      id: 0,
      name: 'Hiền',
      age: 23,
      desc: 'Đây là info',
      avatar: Images.avatar1,
    },
    {
      id: 1,
      name: 'Ngân',
      age: 18,
      desc: 'Đây là info',
      avatar: Images.avatar2,
    },
    {
      id: 2,
      name: 'Mai',
      age: 19,
      desc: 'Đây là info',
      avatar: Images.avatar3,
    },
    {
      id: 3,
      name: 'Phương',
      age: 20,
      desc: 'Đây là info',
      avatar: Images.avatar4,
    },
    {
      id: 4,
      name: 'Trang',
      age: 21,
      desc: 'Đây là info',
      avatar: Images.avatar5,
    },
    {
      id: 5,
      name: 'Uyên',
      age: 22,
      desc: 'Đây là info',
      avatar: Images.avatar6,
    },
    {
      id: 6,
      name: 'Linh',
      age: 22,
      desc: 'Đây là info',
      avatar: Images.avatar7,
    },
  ]

  const swipeRight = () => {
    Animated.spring(animatedValue, {
      toValue: {
        x: windowWidth * 2,
        y: 0,
      },
      useNativeDriver: false,
    }).start(() => {
      animatedValue.setValue({ x: 0, y: 0 });
      setCurrentCardIndex(prevCardIndex => prevCardIndex + 1);
    });
  };

  const swipeLeft = () => {
    Animated.spring(animatedValue, {
      toValue: {
        x: -windowWidth * 2,
        y: 0,
      },
      useNativeDriver: false,
    }).start(() => {
      animatedValue.setValue({ x: 0, y: 0 });
      setCurrentCardIndex(prevCardIndex => prevCardIndex + 1);
      // setIndexImage(0)
    });
  };
  //
  // const swipeTop = () => {
  //   Animated.timing(animatedValue, {
  //     toValue: {
  //       x: 0,
  //       y: -windowHeight*2,
  //     },
  //     useNativeDriver: false,
  //   }).start(() => {
  //     animatedValue.setValue({ x: 0, y: 0 });
  //     setCurrentCardIndex(prevCardIndex => prevCardIndex + 1);
  //     // setIndexImage(0)
  //   });
  // };

  const resetPosition = () => {
    Animated.timing(animatedValue, {
      toValue: {
        x: 0,
        y: 0,
      },
      useNativeDriver: false,
    }).start();
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        animatedValue.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > windowWidth * 0.25) {
          swipeRight();
        } else if (gesture.dx < -windowWidth * 0.25) {
          swipeLeft();
        } else {
          resetPosition();
        }
      },
    }),
  ).current;

  const animatedValue = useRef(new Animated.ValueXY()).current;

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [indexImage, setIndexImage] = useState(0);
  const [isPressReload, setIsPressReload] = useState(false);
  const [isPressX, setIsPressX] = useState(false);
  const [isPressStar, setIsPressStar] = useState(false);
  const [isPressLike, setIsPressLike] = useState(false);
  const [isPressFlash, setIsPressFlash] = useState(false);

  const renderCard = () => {

    return data.map((obj, i) => {
      if (i >= currentCardIndex) {
        let cardAnimationStyle = {};
        let likeTextAnimation = {};
        let nopeTextAnimation = {};
        const isActiveCard = i === currentCardIndex;
        if (isActiveCard) {
          cardAnimationStyle = {
            transform: [
              { translateX: animatedValue.x },
              {
                translateY: animatedValue.y.interpolate({
                  inputRange: [-windowHeight * 0.035, windowHeight * 0.035],
                  outputRange: [-windowHeight * 0.035, windowHeight * 0.035],
                  extrapolate: "clamp",
                }),
              },
              {
                rotate: animatedValue.x.interpolate({
                  inputRange: [-windowHeight * 5  , windowHeight * 5],
                  outputRange: ["-120deg", "120deg"],
                }),
              },
            ],
          };

          likeTextAnimation = {
            opacity: animatedValue.x.interpolate({
              inputRange: [0, windowWidth * 0.25],
              outputRange: [0, 1],
            }),
          };

          nopeTextAnimation = {
            opacity: animatedValue.x.interpolate({
              inputRange: [-windowWidth * 0.25, 0],
              outputRange: [1, 0],
            }),
          };
        }
        return (
          <Animated.View key={i} style={[styles.card, cardAnimationStyle]}>
            <Animated.Image source={obj.avatar[indexImage]} style={styles.image}/>
            {isActiveCard &&
              <Animated.Text style={[styles.textImage, styles.textLike, likeTextAnimation]}>LIKE</Animated.Text>
            }
            {isActiveCard &&
              <Animated.Text style={[styles.textImage, styles.textNope, nopeTextAnimation]}>NOPE</Animated.Text>
            }
          </Animated.View>
        );
      }
    }).reverse();
  };
  //
  // const nextImage = () =>{
  //   if (indexImage>= data[currentCardIndex].avatar.length -1) return;
  //   setIndexImage(prevIndexImage => prevIndexImage + 1)
  // }
  //
  // const prevImage = () =>{
  //   if (indexImage <= 0) return;
  //   setIndexImage(prevIndexImage => prevIndexImage - 1)
  // }

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      {renderCard()}
    </View>
  );
}
