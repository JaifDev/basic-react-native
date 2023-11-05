import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  Easing,
} from "react-native-reanimated";

const initialScale = 1;
const deflatedScale = 0.8;

export default function Home() {
  const scale = useSharedValue(initialScale);
  const isInflated = React.useRef(false);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    borderRadius: scale.value * 75,
    backgroundColor: scale.value > deflatedScale ? "#FF69B4" : "#29ABCA",
  }));

  const toggleInflation = () => {
    if (!isInflated.current) {
      scale.value = withSpring(2, {
        damping: 2,
        stiffness: 40,
        easing: Easing.inOut(Easing.ease),
      });
      isInflated.current = true;
    } else {
      scale.value = withSpring(deflatedScale, {
        damping: 2,
        stiffness: 40,
        easing: Easing.inOut(Easing.ease),
      });
      isInflated.current = false;
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.balloon, animatedStyles]} />
      <TouchableOpacity style={styles.button} onPress={toggleInflation}>
        <Text style={styles.buttonText}>
          {!isInflated.current ? "Inflate Balloon" : "Deflate Balloon"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  balloon: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#29ABCA",
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
