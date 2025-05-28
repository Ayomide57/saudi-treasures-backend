import { Text, Image, View, Button, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import { RelativePathString, useRouter } from 'expo-router';
import CustomText from "@/components/CustomText";
import Ionicons from '@expo/vector-icons/Ionicons';
import { PRIMARY_COLOR } from "@/Utils/constants";
const user = require("@/assets/images/User.png");
const bookflight = require("@/assets/images/Globe.png");
const apply = require("@/assets/images/Passport.png");
const plan = require("@/assets/images/Schedule.png");
const upcoming = require("@/assets/images/upcoming.png");

interface IQuickLinks {
  imageLink: any;
  text: string;
  route: RelativePathString;
}

const QuickLinks = ({imageLink, text, route}: IQuickLinks) => {
  const router = useRouter();
  return (
          
    <TouchableOpacity className="bg-primary p-5 justify-center rounded-2xl mr-5" onPress={() => router.navigate(route)}>
    <Image
      source={imageLink}
      className="rounded-2xl w-[64px] h-[64px] self-center mb-6"
    />
    <CustomText text={text} className="font-normal text-[12px] text-white"/>
  </TouchableOpacity>
  )
}


export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView className="p-5">
      <ScrollView >
      <View className="flex-row justify-between items-center mb-10">
        <View>
          <CustomText text="Hello Damilare," className="font-bold text-2xl text-black"/>
          <CustomText text="Welcome to Saudi Treasures " className="text-primary"/>
        </View>
        <TouchableOpacity className="" onPress={() => router.navigate('../(profile)')}>
          <Image
            source={user}
            style={styles.image}
            className="rounded-full -z-0"
            />
            <View className="absolute z-10 right-5 top-4 bg-primary w-5 h-5 rounded-full justify-center items-center">        
                   <Ionicons size={10} name="notifications" color="white" />
            </View>
        </TouchableOpacity>
      </View>
      <CustomText text="Popular Sacred Tours Around the Middle East" className="font-bold text-[15px] text-black"/>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="rounded-2xl mt-5">
          <View className="p-2 mr-4 rounded-xl bg-white w-[244px]">
            <Image
              source={require("@/assets/images/Tour.png")}
              className="rounded-2xl w-[228px] h-40 self-end"
            />
            <View className="mt-2">
            <CustomText text="Pilgrimage" className="font-normal text-[11px] text-black-80"/>
            <CustomText text="Hijrah 1435" className="font-bold text-[16px] text-black"/>
            <CustomText text="27th - 30th, November" className="font-normal text-[11px] text-black-80"/>

            </View>
          </View>
          <View className="p-2 mr-4 rounded-xl bg-white w-[244px]">
            <Image
              source={require("@/assets/images/Tour.png")}
              className="rounded-2xl w-[228px] h-40 self-end"
            />
            <View className="mt-2">
            <CustomText text="Pilgrimage" className="font-normal text-[11px] text-black-80"/>
            <CustomText text="Hijrah 1435" className="font-bold text-[16px] text-black"/>
            <CustomText text="27th - 30th, November" className="font-normal text-[11px] text-black-80"/>

            </View>
          </View>
          <View className="p-2 mr-4 rounded-xl bg-white w-[244px]">
            <Image
              source={require("@/assets/images/Tour.png")}
              className="rounded-2xl w-[228] h-40 self-end"
            />
            <View className="mt-2">
            <CustomText text="Pilgrimage" className="font-normal text-[11px] text-black-80"/>
            <CustomText text="Hijrah 1435" className="font-bold text-[16px] text-black"/>
            <CustomText text="27th - 30th, November" className="font-normal text-[11px] text-black-80"/>

            </View>
          </View>
      </ScrollView>
        <CustomText text="Quick Links" className="font-bold text-[16px] text-black mt-10 mb-5"/>
        <View className="flex-row justify-between ">
          <QuickLinks imageLink={bookflight} text="Book a Flight" route="./travel"/>
          <QuickLinks imageLink={apply} text="Apply for Visa" route="../(visa)"/>
          <QuickLinks imageLink={plan} text="Plan Your Trip" route="../(plan)/PlanTrip"/>
        </View>
        <CustomText text="Upcoming Trips" className="font-bold text-[16px] text-black mt-10 mb-5"/>
        <View className="border-primary border-2 rounded-2xl p-5 justify-center items-center">
            <Image
              source={upcoming}
              className="rounded-2xl w-[64px] h-[64px] self-center mb-6"
            />
            <CustomText text="You have no upcoming trips. Click to the plus icon to plan a new trip." className="text-[12px] text-black-90" />
        </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 0,
    
  },
  image: {
    width: 30,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});

