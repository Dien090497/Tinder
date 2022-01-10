import React, { useRef, useState } from "react";
import { Text, View, PanResponder, Animated, Image, Dimensions } from "react-native";
import { Images } from "../../assets/Images";
import { styles } from "./styles";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default function SwipeDeck() {
  const data = [
    {
      id: 0,
      avatar: Images.avatar1,
    },
    {
      id: 1,
      avatar: Images.avatar2,
    },
    {
      id: 2,
      avatar: Images.avatar3,
    },
    {
      id: 3,
      avatar: Images.avatar4,
    },
    {
      id: 4,
      avatar: Images.avatar5,
    },
    {
      id: 5,
      avatar: Images.avatar6,
    },
    {
      id: 6,
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

    });
  };

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
            <Animated.Image source={obj.avatar} style={styles.image} />
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

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      {renderCard()}
    </View>
  );
}
