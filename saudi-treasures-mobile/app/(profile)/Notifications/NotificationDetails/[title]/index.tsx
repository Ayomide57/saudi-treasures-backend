import { View, TouchableOpacity } from "react-native";
import CustomText from "@/components/CustomText";
import MainContainer from "@/components/MainContainer";
import { router, useLocalSearchParams } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";


export default function NotificationDetails() {
      const { title } = useLocalSearchParams<{ title: string; }>();
    
  return (
    <MainContainer title={title}>
        <View className=" bg-white p-3 items-center mt-5 rounded-2xl pt-4 pb-4" >
            <CustomText text="Hijrah 1433 starts in 19 days. Start your application on Saudi Treasures to be one of the first to enjoy our plenty packages." className="font-semibold text-[14px] text-black-100"/>
        </View>
    </MainContainer>
  );
}

