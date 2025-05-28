import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import CustomTextInput from "@/components/CustomInput";
import CustomText from "@/components/CustomText";
import MainContainer from "@/components/MainContainer";
import { router } from "expo-router";


export default function Signup() {
  return (
    <MainContainer title="User Registration">
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
                name="email"
                label="Email"
                placeholder="Enter your email address"
                onChangeText={() => {}}
                value=""
                keyboardType="email-address"
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-3 h-14"
            />
            <CustomTextInput 
                name="password"
                label="Password"
                placeholder="Enter your email password"
                onChangeText={() => {}}
                value=""
                keyboardType="default"
                placeholderColor="rgba(68, 79, 96, 0.5)"
                secureTextEntry={true}
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-3 h-14"
            />
            <CustomText 
                text="Your password must contain upper case letter, lower case letter, and a special character."
                className="text-black-80 text-[12px] font-lato mb-5 mt-1" />
            <CustomTextInput 
                name="conformpassword"
                label="Confirm Password"
                placeholder="Re-enter your email password"
                onChangeText={() => {}}
                value=""
                keyboardType="default"
                placeholderColor="rgba(68, 79, 96, 0.5)"
                secureTextEntry={true}
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-3 h-14"
            />
            
        
            <CustomText 
                className="text-black-100 text-[14px] font-lato mb-5 mt-5 "
                text="By selecting agree and continue, I agree to the Saudi Treasures’ Terms of Service, Payments Terms of Service, and legal terms." />
        </View>
        <CustomButton name="Agree & Continue"
            className="p-16 bg-primary rounded-xl h-12 items-center justify-center mb-14" 
            textClassName="text-center text-white text-lg"
            onPress={() => router.push("./EnableBiometric")}
            />   
        
    </MainContainer>
  );
}

