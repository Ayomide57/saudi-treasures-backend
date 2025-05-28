import { View, TouchableOpacity } from "react-native";
import CustomText from "@/components/CustomText";
import MainContainer from "@/components/MainContainer";
import { router } from "expo-router";

export default function Security() {
  return (
    <MainContainer title="Security">
        <View className="flex-row justify-between items-center border-b-[1px] border-b-gray-60 p-5"  >
            <View className="">
                <CustomText text="Password" className="font-semibold text-[12px] text-black-100"/>
                <CustomText text="************" className="font-normal text-[12px] text-black-80"/>
            </View>
            <TouchableOpacity onPress={() => router.navigate("../(profile)/ChangePassword")}>
                <CustomText text="Change Password" className="font-semibold text-[12px] text-primary"/>
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-between items-center border-b-[1px] border-b-gray-60 p-5"  >
            <View className="">
                <CustomText text="Fingerprint" className="font-semibold text-[12px] text-black-100"/>
                <CustomText text="Allow fingerprint for login" className="font-normal text-[12px] text-black-80"/>
            </View>
            <TouchableOpacity onPress={() => router.navigate("../(profile)/PersonalInformation")}>
                <CustomText text="Edit" className="font-semibold text-[12px] text-primary"/>
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-between items-center border-b-[1px] border-b-gray-60 p-5"  >
            <View className="">
                <CustomText text="Face ID" className="font-semibold text-[12px] text-black-100"/>
                <CustomText text="Allow Face ID for login" className="font-normal text-[12px] text-black-80"/>
            </View>
            <TouchableOpacity onPress={() => router.navigate("../(profile)/PersonalInformation")}>
                <CustomText text="Edit" className="font-semibold text-[12px] text-primary"/>
            </TouchableOpacity>
        </View>
        
    </MainContainer>
  );
}

