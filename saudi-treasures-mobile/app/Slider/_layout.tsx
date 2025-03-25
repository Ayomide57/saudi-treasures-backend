import React, { useState } from 'react';
import { Platform, StyleSheet } from "react-native";

import { PageSlider } from "@pietile-native-kit/page-slider";

import { useColorScheme } from '@/hooks/useColorScheme';
import Welcome from './welcome';

export default function SliderLayout() {
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
