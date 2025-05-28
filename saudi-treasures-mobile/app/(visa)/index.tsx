import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import CustomTextInput from "@/components/CustomInput";
import CustomText from "@/components/CustomText";
import MainContainer from "@/components/MainContainer";
import { router } from "expo-router";
import CustomRadioButtom from "@/components/CustomRadioButton";


export default function Visa() {
  return (
    <MainContainer title="Apply for Visa">
       <View className="">
        <CustomTextInput 
                name="fullname"
                label="Full Name"
                placeholder="Enter your full name"
                onChangeText={() => {}}
                value=""
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-3 h-14"
            />
            <CustomTextInput 
                name="dob"
                label="Date of Birth"
                placeholder="Enter your DOB"
                onChangeText={() => {}}
                value=""
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-3 h-14"
            />
            <CustomTextInput 
                name="email"
                label="Email"
                placeholder="Enter your email address"
                onChangeText={() => {}}
                value=""
                keyboardType="email-address"
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-3 h-14"
            />
            <CustomTextInput 
                name="country"
                label="Country"
                placeholder="Enter your Country"
                onChangeText={() => {}}
                value=""
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-3 h-14"
            />
            <CustomTextInput 
                name="state"
                label="State"
                placeholder="Enter your State"
                onChangeText={() => {}}
                value=""
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-3 h-14"
            />
            
            <CustomText 
                text="Your password must contain upper case letter, lower case letter, and a special character."
                className="text-black-80 text-[12px] font-lato mb-5 mt-1" />
            <CustomRadioButtom className="text-black-100 mb-2" text="Do you have a valid international passport?" />

        </View>
        <CustomButton name="Next"
            className="p-16 bg-primary rounded-xl h-12 items-center justify-center mt-5 mb-14" 
            textClassName="text-center text-white text-lg"
            onPress={() => router.push("../(visa)/VisaType")}
            />   
        
    </MainContainer>
  );
}

