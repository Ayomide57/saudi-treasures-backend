import { Text, View, Button, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import { RelativePathString, useRouter } from 'expo-router';
import { useState } from "react";
import CustomText from "@/components/CustomText";
import CustomButton from "@/components/CustomButton";
import Card from "@/components/Card";
import MainContainer from "@/components/MainContainer";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";

import { GREEN } from "@/Utils/constants";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface IHistory {
  date: string;
  type: string;
  title: string;
  route: RelativePathString;
  tabHistory: string;
}

export default function HistoryDetails() {
  const [tabHistory, setTabHistory] = useState("tour");
  const router = useRouter();

  const History = ({date, type, title, route, tabHistory}: IHistory) => {
    return (
      <TouchableOpacity className="flex-row bg-[#FAF5FF] p-4 rounded-2xl justify-between border-2 border-primary mb-5" >
            <View>
                <View className="flex-row items-left">
                  <CustomText text={title} className="font-normal text-[14px] text-black-100 text-left mr-2"/>
                  <CustomText text={type} className="font-normal text-[8px] text-primary text-left p-2 bg-sec-80 rounded-xl"/>
                </View>
                <CustomText text={date} className="font-normal text-[12px] text-black-90 text-left mt-1"/>
            </View>
            
        </TouchableOpacity>
    );
  }
  return (
    <MainContainer title="Booking History">
      <ScrollView className=" mt-5">
       <Card title="December Umrah 1435 " className=" h-auto" titleClassName="text-[14px] font-semibold text-black-100">
        <View className="flex-row mt-5 mb-5 items-center">
          <Text className="text-black-90 font-normal text-[14px] mr-2">Date: </Text>
          <CustomText text="14th-23rd, 2025" className=" text-[12px] font-lato font-normal text-black-100"/>
        </View>
        <View className="flex-row mt-5 mb-5 items-center">
          <Text className="text-[#000] font-normal text-[14px] mr-2">Package: </Text>
          <CustomText text="standard" className="text-center text-primary  bg-sec-80 rounded-sm text-[8px] font-lato p-2"/>
        </View>
        <View className="flex-row mt-5 mb-5 items-center">
          <Text className="text-[#000] font-normal text-[14px] mr-2">Flight class: </Text>
          <CustomText text="first class" className="text-center text-gray-300  bg-sec-50 rounded-sm text-[8px] font-lato p-1"/>
        </View>
        <View className="flex-row mt-5 mb-5 items-center">
          <Text className="text-black-90 font-normal text-[14px] mr-2">Price: </Text>
          <CustomText text="N1,768,090" className=" text-[14px] font-semibold text-black-100"/>
        </View>
       </Card>
       <Card title="" className=" h-auto mb-10" titleClassName="text-[14px] font-semibold text-black-100 ">
        <View className="flex-1 flex-row mb-5 items-center ">
          <View className=" mt-auto mr-8">
            <Ionicons name="checkmark-circle-outline" size={24} color={GREEN} />
            <Text className="text-6xl text-[#77F777] font-thin text-center mt-5 mb-5 self-center">|</Text>
          </View>
          <View className="items-start justify-start mb-auto flex-1">
            <CustomText text="Application recieved" className="text-[14px] font-semibold text-black-90 text-left"/>
            <Text className="text-[12px] font-normal text-black-80 text-wrap mt-3">Your application was recieved by our processing team on 4th April, 2024</Text>
          </View>
        </View>
        <View className="flex-1 flex-row mb-5 items-center ">
          <View className=" mt-auto mr-8">
          <FontAwesome name="circle-thin" size={24} color={GREEN} />
          <Text className="text-6xl text-[#77F777] font-thin text-center mt-5 mb-5 self-center">|</Text>
          </View>
          <View className="items-start justify-start mb-auto flex-1">
            <CustomText text="Application Processing" className="text-[14px] font-semibold text-black-90 text-left"/>
            <Text className="text-[12px] font-normal text-black-80 text-wrap mt-3">Your application process ha commenced on 4th April, 2024.</Text>
          </View>
        </View>
        <View className="flex-1 flex-row mb-5 items-center border-b-2 border-accent-50 pb-14">
          <View className="mr-8 mb-auto">
            <FontAwesome name="circle-thin" size={24} color={GREEN} />
          </View>
          <View className="items-start justify-start mb-auto flex-1">
            <CustomText text="Visa Ready" className="text-[14px] font-semibold text-black-90 text-left"/>
            <Text className="text-[12px] font-normal text-black-80 text-wrap mt-3">Your visa is ready. Contact support for delivery.</Text>
          </View>
        </View>
        <Text className=""> Contact support on  <Text className="text-primary">+23456789086</Text> for more enquiries on visa processing</Text>
       </Card>
      </ScrollView>
    </MainContainer>
  );
}



