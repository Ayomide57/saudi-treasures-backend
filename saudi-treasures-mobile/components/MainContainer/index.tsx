import { ScrollView, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CustomText from "@/components/CustomText";
import { RelativePathString, useRouter } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { BLACK100 } from "@/Utils/constants";
import CustomButton from "../CustomButton";

interface IMainContainer {
      children?: React.ReactNode; 
    title: string;
    center?: boolean;
    button?: boolean;
    buttonText?: string;
    route?: RelativePathString;
}


export default function MainContainer({children, title, center, button, buttonText, route}: IMainContainer) {
      const router = useRouter();
    
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#F8F5FB] p-5 relative">
        <View className="flex-row items-center mb-6 mt-4 justify-between">
          <View className="flex-row items-center">
          <FontAwesome5
            name="chevron-left"
            size={17}
            color={BLACK100}
            onPress={() => router.back()}
            className="mr-5"
          />
          <CustomText 
            text={title}
            className={`text-[15px] font-semibold text-black-100 ${center ? "text-center" : "text-left"}`}
          />
          </View>
          {(route && button && buttonText) && <CustomButton name={buttonText}
                className=" bg-primary rounded-2xl" 
                textClassName="text-center text-white text-[10px]"
                onPress={() => router.navigate(route)}
                />}
        </View>
        <ScrollView>
        {children}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


