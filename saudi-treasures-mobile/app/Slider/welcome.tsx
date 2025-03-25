import { ImageBackground, StyleSheet, Platform } from "react-native";

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const image = { uri: require("@/assets/images/Welcome.png") };

export default function Welcome() {
  return (
    <ThemedView style={styles.titleContainer}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    //flexDirection: "row",
    alignItems: "center",
    flex: 1,
    alignContent: "center",
    //backgroundImage:
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
