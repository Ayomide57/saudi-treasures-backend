import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import RouteTextButton from "@/components/RouteTextButton";
import CustomTextInput from "@/components/CustomInput";
import CustomText from "@/components/CustomText";
import MainContainer from "@/components/MainContainer";


export default function Login() {
  return (
    <MainContainer title="Change Password">
        <View className="">
            <CustomTextInput 
                name="oldpassword"
                label="Old Password"
                placeholder="Enter your old password"
                onChangeText={() => {}}
                value=""
                keyboardType="default"
                placeholderColor="rgba(68, 79, 96, 0.5)"
                secureTextEntry={true}
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-3 h-14"
            />
            <CustomTextInput 
                name="newpassword"
                label="New Password"
                placeholder="Enter your new password"
                onChangeText={() => {}}
                value=""
                keyboardType="default"
                placeholderColor="rgba(68, 79, 96, 0.5)"
                secureTextEntry={true}
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-3 h-14"
            />
        <CustomText text="Your password must contain upper case letter, lower case letter, and a special character." className="text-left text-black text-sm mb-10" />

        </View>
        <CustomButton name="Save Changes" 
            className=" bg-primary mb-14" 
            textClassName="text-center text-white text-lg"
            />
        
    </MainContainer>
  );
}

