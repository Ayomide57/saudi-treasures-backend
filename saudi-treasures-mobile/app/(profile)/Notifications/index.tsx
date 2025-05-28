import { View, TouchableOpacity } from "react-native";
import CustomText from "@/components/CustomText";
import MainContainer from "@/components/MainContainer";
import { router } from "expo-router";
import { PRIMARY_COLOR } from "@/Utils/constants";
import Entypo from "@expo/vector-icons/Entypo";

interface INotificationItem{
    title: string;
    detail: string;
}

const INotificationItem = ({title, detail}: INotificationItem) => {
    return (
        <View className="flex-row justify-between bg-white p-3 items-center mt-5 rounded-2xl pt-4 pb-4" >
            <View className="flex-row items-center">
                <CustomText text="N" className="font-semibold text-[14px] text-white bg-primary rounded-full p-5 mr-5"/>
            </View>
            <View className="text-clip">
                <CustomText text={title} className="font-semibold text-[14px] text-black-100 mb-2"/>
                <CustomText 
                    text={detail} 
                    className="font-normal text-[14px] text-black-100 break-all"
                />
            </View>
            <TouchableOpacity className="flex-row items-center" onPress={() => router.navigate(`../(profile)/NotificationDetails/${detail}`)}>
                <CustomText text="View" className="font-semibold text-[12px] text-primary mr-2 self-center"/>
                <Entypo size={28} className="p-6 self-center" name="chevron-small-right" color={PRIMARY_COLOR} />
            </TouchableOpacity>
        </View>
    );
}


export default function Notifications() {
  return (
    <MainContainer title="Notifications">
        <INotificationItem 
            title="Hijrah 1433. Register Now!"
            detail="Your Umrah trip starts 19th of August. Contact customer care for more details."
        />
    </MainContainer>
  );
}

