import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Welcome from "./Slider/welcome";
import { useState } from 'react';
import { PageSlider } from "@pietile-native-kit/page-slider";

export default function Slider() {
    const [selectedPage, setSelectedPage] = useState(0);
  
  return (
   
      <PageSlider
            style={styles.pageSlider}
            selectedPage={selectedPage}
            onSelectedPageChange={setSelectedPage}
            onCurrentPageChange={() => {}}
          >
            <Welcome />
            <Welcome />
            <Welcome />
          </PageSlider>
  );
}

const styles = StyleSheet.create({
  pageSlider: {
    width: "100%",
  },
  page: {
    alignItems: "center",
    height: 128,
    justifyContent: "center",
    padding: 16,
  },
});
