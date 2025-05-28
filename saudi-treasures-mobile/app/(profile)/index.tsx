import { View, TouchableOpacity } from "react-native";
import CustomText from "@/components/CustomText";
import MainContainer from "@/components/MainContainer";
import { router } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { PRIMARY_COLOR, BLACK60, RED80, BLACK70 } from "@/Utils/constants";
import Entypo from "@expo/vector-icons/Entypo";


export default function ProfileSettings() {
  return (
    <MainContainer title="Profile and Settings">
        <TouchableOpacity className="flex-row justify-between bg-white p-3 items-center mt-5 rounded-2xl" >
            <View className="flex-row items-center">
                <CustomText text="AD " className="font-semibold text-[14px] text-white bg-primary rounded-full p-5 mr-5"/>
                <CustomText text="Adebisi Damilare " className="font-semibold text-[14px] text-black-100"/>
            </View>
            <View className="relative">        
                <MaterialIcons size={28} className="p-6" name="notifications-active" color={PRIMARY_COLOR} />
                <CustomText text="6" className="font-semibold text-[10px] text-white bg-red-900 rounded-full absolute z-10 right-5 top-4 justify-center items-center p-1 pr-[6px] pl-[6px]"/>
            </View>
        </TouchableOpacity>

        <View className="rounded-2xl h-auto bg-white mt-5 pt-3 pb-3">
            <TouchableOpacity className="flex-row justify-between items-center border-b-[1px] border-b-gray-60 p-1" onPress={() => router.navigate("../(profile)/PersonalInformation")} >
                <View className="flex-row items-center">
                    <MaterialIcons size={28} className="p-6" name="person" color={BLACK60} />
                    <CustomText text="Personal Information" className="font-semibold text-[14px] text-black-100"/>
                </View>
                <Entypo size={28} className="p-6" name="chevron-small-right" color="black" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row justify-between items-center border-b-[1px] border-b-gray-60 p-1" onPress={() => router.navigate("../(profile)/Security")} >
                <View className="flex-row items-center">
                    <MaterialIcons size={28} className="p-6" name="lock" color={BLACK60} />
                    <CustomText text="Security" className="font-semibold text-[14px] text-black-100"/>
                </View>
                <Entypo size={28} className="p-6" name="chevron-small-right" color="black" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row justify-between items-center border-b-[1px] border-b-gray-60 p-1" onPress={() => router.navigate("../(profile)/Notifications")} >
                <View className="flex-row items-center">
                    <MaterialIcons size={28} className="p-6" name="notifications-active" color={BLACK70} />
                    <CustomText text="Notifications" className="font-semibold text-[14px] text-black-100"/>
                </View>
                <Entypo size={28} className="p-6" name="chevron-small-right" color="black" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row justify-between items-center border-b-[1px] border-b-gray-60 p-1" onPress={() => router.navigate("../(profile)/Security")} >
                <View className="flex-row items-center">
                    <MaterialIcons size={28} className="p-6" name="admin-panel-settings" color={BLACK60} />
                    <CustomText text="Privacy Policy" className="font-semibold text-[14px] text-black-100"/>
                </View>
                <Entypo size={28} className="p-6" name="chevron-small-right" color="black" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row justify-between items-center border-b-[1px] border-b-gray-60 p-1" onPress={() => router.navigate("../(profile)/Support")} >
                <View className="flex-row items-center">
                    <MaterialIcons size={28} className="p-6" name="support-agent" color={BLACK60} />
                    <CustomText text="Support" className="font-semibold text-[14px] text-black-100"/>
                </View>
                <Entypo size={28} className="p-6" name="chevron-small-right" color="black" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row justify-between items-center p-1" onPress={() => router.navigate("../(profile)/Security")} >
                <View className="flex-row items-center">
                    <MaterialIcons size={28} className="p-6" name="logout" color={RED80} />
                    <CustomText text="Logout" className="font-semibold text-[14px] text-red-80"/>
                </View>
                <Entypo size={28} className="p-6" name="chevron-small-right" color="black" />
            </TouchableOpacity>
        </View>
    </MainContainer>
  );
}

