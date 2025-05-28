import { View, TouchableOpacity } from "react-native";
import CustomText from "@/components/CustomText";
import MainContainer from "@/components/MainContainer";
import { router } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import Ionicons from "@expo/vector-icons/Ionicons";

import { PRIMARY_COLOR, BLACK60, RED80, BLACK70, GREEN05 } from "@/Utils/constants";
import Entypo from "@expo/vector-icons/Entypo";


export default function Support() {
  return (
    <MainContainer title="Support">       

            <TouchableOpacity className="flex-row justify-between items-center border-b-[1px] border-b-gray-60 p-1" onPress={() => router.navigate("../(profile)/PersonalInformation")} >
                <View className="flex-row items-center">
                    <Ionicons size={28} className="p-6" name="flag" color={BLACK60} />
                    <CustomText text="Report an issue" className="font-semibold text-[14px] text-black-100"/>
                </View>
                <Entypo size={28} className="p-6" name="chevron-small-right" color="black" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row justify-between items-center border-b-[1px] border-b-gray-60 p-1" onPress={() => router.navigate("../(profile)/Security")} >
                <View className="flex-row items-center">
                    <MaterialCommunityIcons size={28} className="p-6" name="phone-in-talk" color={BLACK60} />
                    <CustomText text="Call customer care" className="font-semibold text-[14px] text-black-100"/>
                </View>
                <Entypo size={28} className="p-6" name="chevron-small-right" color="black" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row justify-between items-center border-b-[1px] border-b-gray-60 p-1" onPress={() => router.navigate("../(profile)/Security")} >
                <View className="flex-row items-center">
                    <MaterialCommunityIcons size={28} className="p-6" name="whatsapp" color={GREEN05} />
                    <CustomText text="Send whatsapp message" className="font-semibold text-[14px] text-black-100"/>
                </View>
                <Entypo size={28} className="p-6" name="chevron-small-right" color="black" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row justify-between items-center border-b-[1px] border-b-gray-60 p-1" onPress={() => router.navigate("../(profile)/Security")} >
                <View className="flex-row items-center">
                    <MaterialIcons size={28} className="p-6" name="attach-email" color={BLACK60} />
                    <CustomText text="Send an email" className="font-semibold text-[14px] text-black-100"/>
                </View>
                <Entypo size={28} className="p-6" name="chevron-small-right" color="black" />
            </TouchableOpacity>
            
    </MainContainer>
  );
}

