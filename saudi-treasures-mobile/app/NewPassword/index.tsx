import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import RouteTextButton from "@/components/RouteTextButton";
import CustomTextInput from "@/components/CustomInput";
import CustomText from "@/components/CustomText";
import MainContainer from "@/components/MainContainer";

//dont forget otp code boxes
export default function NewPassword() {
  return (
    <MainContainer title="New Password">
        <Text className="text-md text-black-90 text-left items-center justify-center mb-5 font-lato">Welcome back, <RouteTextButton className="text-md items-center justify-center" textClassName="text-primary -m-1 ml-1"  name="Damilare" route={"./Signup"} /></Text>
        <CustomText 
          text="Please enter your password to continue." 
          className="text-left text-black text-sm mb-5 mt-1 font-lato" 
        />
            <CustomTextInput 
                name="newpassword"
                label="New Password"
                placeholder="Enter your new password"
                onChangeText={() => {}}
                value=""
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-3 h-14"
            />
            <Text className="text-md text-left items-center font-lato justify-center mb-5">Didn’t get a code?<RouteTextButton className="text-md items-center justify-center" textClassName="text-primary -m-[5px] ml-1"  name="Resend code" route={"./Signup"} /></Text>
            <CustomText 
                text="Your password must contain upper case letter, lower case letter, and a special character."
                className="text-black-80 text-[12.4px] mb-5 mt-1" />

        <CustomButton name="Continue" 
            className=" bg-primary mb-14" 
            textClassName="text-center text-white text-lg"
            />        
    </MainContainer>
  );
}

