import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import CustomTextInput from "@/components/CustomInput";
import CustomText from "@/components/CustomText";
import MainContainer from "@/components/MainContainer";
import { router } from "expo-router";


export default function PassportInformation() {
  return (
    <MainContainer title="Passport Information">
       <View className="">
        
            <CustomText 
                text="Your password must contain upper case letter, lower case letter, and a special character."
                className="text-black-80 text-[12px] font-lato mb-5 mt-1" />
        </View>
        <CustomButton name="Next"
            className="p-16 bg-primary rounded-xl h-12 items-center justify-center mb-14" 
            textClassName="text-center text-white text-lg"
            onPress={() => router.push("../(tour)/PassportInformation")}
            />   
        
    </MainContainer>
  );
}

