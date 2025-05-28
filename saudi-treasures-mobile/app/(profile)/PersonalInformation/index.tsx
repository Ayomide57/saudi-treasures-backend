import { View, TouchableOpacity } from "react-native";
import CustomText from "@/components/CustomText";
import MainContainer from "@/components/MainContainer";
import { router } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { BLACK60, RED80, BLACK70 } from "@/Utils/constants";
import Entypo from "@expo/vector-icons/Entypo";


export default function PersonalInformation() {
  return (
    <MainContainer title="Personal Information">
        <View className="flex-row justify-between items-center border-b-[1px] border-b-gray-60 p-5"  >
            <View className="">
                <CustomText text="Name" className="font-semibold text-[12px] text-black-100"/>
                <CustomText text="Adebisi Damilare" className="font-normal text-[12px] text-black-80"/>
            </View>
            <TouchableOpacity onPress={() => router.navigate("../(profile)/PersonalInformation")}>
                <CustomText text="Edit" className="font-semibold text-[12px] text-primary"/>
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-between items-center border-b-[1px] border-b-gray-60 p-5"  >
            <View className="">
                <CustomText text="Email" className="font-semibold text-[12px] text-black-100"/>
                <CustomText text="ade***re23@gmail.com" className="font-normal text-[12px] text-black-80"/>
            </View>
            <TouchableOpacity onPress={() => router.navigate("../(profile)/PersonalInformation")}>
                <CustomText text="Edit" className="font-semibold text-[12px] text-primary"/>
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-between items-center border-b-[1px] border-b-gray-60 p-5"  >
            <View className="">
                <CustomText text="Country" className="font-semibold text-[12px] text-black-100"/>
                <CustomText text="Nigeria" className="font-normal text-[12px] text-black-80"/>
            </View>
            <TouchableOpacity onPress={() => router.navigate("../(profile)/PersonalInformation")}>
                <CustomText text="Edit" className="font-semibold text-[12px] text-primary"/>
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-between items-center border-b-[1px] border-b-gray-60 p-5"  >
            <View className="">
                <CustomText text="Date of Birth" className="font-semibold text-[12px] text-black-100"/>
                <CustomText text="09-03-1990" className="font-normal text-[12px] text-black-80"/>
            </View>
            <TouchableOpacity onPress={() => router.navigate("../(profile)/PersonalInformation")}>
                <CustomText text="Edit" className="font-semibold text-[12px] text-primary"/>
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-between items-center border-b-[1px] border-b-gray-60 p-5"  >
            <View className="">
                <CustomText text="State" className="font-semibold text-[12px] text-black-100"/>
                <CustomText text="Oyo" className="font-normal text-[12px] text-black-80"/>
            </View>
            <TouchableOpacity onPress={() => router.navigate("../(profile)/PersonalInformation")}>
                <CustomText text="Edit" className="font-semibold text-[12px] text-primary"/>
            </TouchableOpacity>
        </View>
    </MainContainer>
  );
}

