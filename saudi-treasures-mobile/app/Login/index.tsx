import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import RouteTextButton from "@/components/RouteTextButton";
import CustomTextInput from "@/components/CustomInput";
import CustomText from "@/components/CustomText";
import MainContainer from "@/components/MainContainer";


export default function Login() {
  return (
    <MainContainer title="Sign in to your account">
        <CustomText text="Welcome back!" className="text-left text-primary text-sm mb-5 mt-5" />
        <CustomText text="Please enter your email and password to continue" className="text-left text-black text-sm mb-10" />
        <View className="">
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

            <RouteTextButton className="text-sm mb-10" textClassName="text-primary" name="Forgot Password?" route={"./PasswordReset"} />
        </View>
        <CustomButton name="Continue" 
            className=" bg-primary mb-14" 
            textClassName="text-center text-white text-lg"
            />
        
        <Text className="text-md text-center font-lato items-center justify-center">Don't have an account ? <RouteTextButton className="text-md items-center justify-center" textClassName="text-primary -m-1 ml-1"  name="Sign up here" route={"./Signup"} /></Text>
    </MainContainer>
  );
}

