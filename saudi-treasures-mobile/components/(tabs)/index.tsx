import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
   
      <ThemedView style={styles.titleContainer}>
        <Image
          source={require("@/assets/images/saudi-logo.png")}
          style={styles.homeLogo}
        />
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    //flexDirection: "row",
    alignItems: "center",
    flex: 1,
    alignContent: "center",
  },
  homeLogo: {
    height: 70,
    width: 250,
    alignSelf: "flex-start",
  },
});
