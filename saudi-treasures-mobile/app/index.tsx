import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import React from "react";
import PagerView from "react-native-pager-view";
import { useFonts } from "@expo-google-fonts/lato/useFonts";
import { Lato_100Thin } from "@expo-google-fonts/lato/100Thin";
import { Lato_100Thin_Italic } from "@expo-google-fonts/lato/100Thin_Italic";
import { Lato_300Light } from "@expo-google-fonts/lato/300Light";
import { Lato_300Light_Italic } from "@expo-google-fonts/lato/300Light_Italic";
import { Lato_400Regular } from "@expo-google-fonts/lato/400Regular";
import { Lato_400Regular_Italic } from "@expo-google-fonts/lato/400Regular_Italic";
import { Lato_700Bold } from "@expo-google-fonts/lato/700Bold";
import { Lato_700Bold_Italic } from "@expo-google-fonts/lato/700Bold_Italic";
import { Lato_900Black } from "@expo-google-fonts/lato/900Black";
import { Lato_900Black_Italic } from "@expo-google-fonts/lato/900Black_Italic";
import { Image } from "expo-image";
import { useRouter } from 'expo-router';
import RouteTextButton from "@/components/RouteTextButton";

const pageImage1 = require("@/assets/images/Welcome.png");

const pageImage2 = require("@/assets/images/Explore.png");
const pageImage3 = require("@/assets/images/plan-book.png");
const logo = require("@/assets/images/splash-icon.png");

const NextButton = () => {
  return (
    <View className="flex-row mt-5 mb-10">
    <TouchableOpacity
      className="bg-primary w-16 h-8 rounded-full mr-2"
      onPress={() => {}}
    />
    <TouchableOpacity
      className="bg-white w-8 h-8 rounded-full mr-2"
      onPress={() => {}}
    />
    <TouchableOpacity
      className="bg-white w-8 h-8 rounded-full mr-2"
      onPress={() => {}}
    />
    <TouchableOpacity
      className="bg-white w-8 h-8 rounded-full mr-2"
      onPress={() => {}}
    />
  </View>
  );
}
export const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Index = () => {
  const router = useRouter();

  
  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <PagerView style={styles.page} initialPage={0}>
          <ImageBackground
            className="flex-1 flex-col justify-between p-5"
            source={pageImage1}
            resizeMode="cover"
          >
            <Image
              style={styles.image}
              source={logo}
              placeholder={{ blurhash }}
            />
            <View className="mb-16 max-w-sm">
              <Text className="text-[44px] text-white font-lato text-wrap mb-5">
                Welcome to Saudi Treasure
              </Text>
              <Text className="text-white text-wrap  text-[15.32px]/7 tracking-[.05em]">
                Embark on a journey through the Holy Land with Saudi Treasure.
                Explore breathtaking sights, rich history, and unforgettable
                experiences
              </Text>
              <NextButton />
              <RouteTextButton textClassName="text-white" name="Skip this" route={"../(tabs)/home"} />
            </View>
          </ImageBackground>
          <ImageBackground
            className="flex-1 flex-col justify-between p-5"
            source={pageImage2}
            resizeMode="cover"
          >
            <Image
              style={styles.image}
              source={logo}
              placeholder={{ blurhash }}
            />
            <View className="mb-16">
            <Text className="text-[44px] text-white font-lato text-wrap mb-5">
            Uncover the Treasures of the Holy Land
              </Text>
              <Text className="text-white text-wrap text-[15.32px]/7 tracking-[.05em]">
                Navigate must-see destinations with expert insights and curated
                itineraries.
              </Text>
              <NextButton />
              <RouteTextButton textClassName="text-white" name="Skip this" route={"./Register"} />
            </View>
          </ImageBackground>
          <ImageBackground
            className="flex-1 flex-col justify-between p-5"
            source={pageImage3}
            resizeMode="cover"
          >
            <Image
              style={styles.image}
              source={logo}
              placeholder={{ blurhash }}
            />
            <View className="mb-16">
            <Text className="text-[44px] text-white font-lato text-wrap mb-5">
                Effortless Planning for a Spiritual Journey</Text>
                <Text className="text-white text-wrap text-[15.32px]/7 tracking-[.05em]">
                Book guided tours, find accommodations, and access essential
                travel info.
              </Text>
              <NextButton />
              <RouteTextButton textClassName="text-white" name="Skip this" route={"./Register"} />
            </View>
          </ImageBackground>
        </PagerView>
      </SafeAreaView>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
  page: {
    justifyContent: "center",
    alignItems: "baseline",
    flex: 1,
  },
  welcome: {
    fontFamily: "Lato_700Bold",
    fontSize: 43.77,
    fontWeight: "semibold",
    color: "#fff",
    textAlign: "left",
  },
  welcome_subtitle: {
    fontSize: 15.32,
    color: "#fff",
    textAlign: "left",
  },
  image: {
    width: 300,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
export default Index;
