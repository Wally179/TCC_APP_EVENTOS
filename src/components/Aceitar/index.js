import React, { Component } from "react";
import { Animated, Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./style";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default class AceitarBtn extends Component {
  animation = new Animated.Value(0);
  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;
    Animated.spring(this.animation, {
      toValue,
      friction: 6,
      useNativeDriver: false,
    }).start();
    this.open = !this.open;
  };
  render() {
    const like = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -120],
          }),
        },
      ],
    };
    const dislike = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -60],
          }),
        },
      ],
    };
    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"],
          }),
        },
      ],
    };

    return (
      <View style={[styles.item, this.props.style]}>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.btn, styles.submenu, like]}>
            <AntDesign name="like1" size={24} color="white" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.btn, styles.submenu, dislike]}>
            <AntDesign name="dislike1" size={24} color="white" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.btn, rotation]}>
            <Text
              adjustsFontSizeToFit
              numberOfLines={1}
              style={{ textAlign: "center", color: "white" }}
            >
              Aceitar?
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
