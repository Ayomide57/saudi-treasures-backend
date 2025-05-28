import { Text, View, Button, ImageBackground, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { blurhash } from "../Welcome";
import CustomButton from "@/components/CustomButton";
import RouteTextButton from "@/components/RouteTextButton";
const pageImage4 = require("@/assets/images/get-started.png");
const logo = require("@/assets/images/splash-icon.png");
const google = require("@/assets/images/google.png");
const facebook = require("@/assets/images/facebook.png");
import { RelativePathString, useRouter } from "expo-router";

export default function Register() {
    const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView className="flex-1">
      <ImageBackground
        className="flex-1 flex-col p-5"
        source={pageImage4}
        resizeMode="cover"
      >
        <Image style={styles.image} source={logo} placeholder={{ blurhash }} />
        <View className="">
          <Text className="text-[44px] tracking-[.05em] text-white font-lato mb-10 text-nowrap">
            <Text className="font-thin">Let’s</Text> Begin Your Holy Land
            Adventure!
          </Text>
        </View>
        <CustomButton name="Sign in / Sign up" 
            className=" bg-primary " 
            textClassName="text-center text-white text-lg"
            onPress={() => router.navigate("./Login")}
            />
        <Text className="text-white p-10 text-center">or</Text>
        <CustomButton 
            name="Sign in with Google" 
            textClassName="text-center text-black text-lg"
            className=" bg-white mb-5"
            icon={<Image source={google} style={{ width: 27, height: 27, marginRight: 15 }} />} 
        />
        <CustomButton 
            name="Sign in with Facebook" 
            textClassName="text-center text-black text-lg"
            className=" bg-white "
            //className="bg-white flex-row mb-5"
            styles={{padding: "2.25rem"}}
            icon={<Image source={facebook} style={{ width: 27, height: 27, marginRight: 15 }} />} 
        />
        <RouteTextButton className="-bottom-44" textClassName="text-white" name="Continue as Guest" route={"./VerifyPhoneNumber"} />

      </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
  image: {
    width: 300,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
