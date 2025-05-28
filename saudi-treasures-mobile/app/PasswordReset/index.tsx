import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import RouteTextButton from "@/components/RouteTextButton";
import CustomTextInput from "@/components/CustomInput";
import CustomText from "@/components/CustomText";
const pageImage4 = require("@/assets/images/get-started.png");
const logo = require("@/assets/images/splash-icon.png");
import { RelativePathString, useRouter } from "expo-router";
import MainContainer from "@/components/MainContainer";


export default function PasswordReset() {
  const router = useRouter();
  return (
    <MainContainer title="Password Reset" center={true}>
        <CustomText 
          text="A password reset code has been sent to 234 70677654009" 
          className="text-center text-black text-[15px] font-lato mb-24" 
        />
            
        <CustomButton name="Continue" 
            className=" bg-primary mb-5" 
            textClassName="text-white"
            onPress={() => router.navigate("./NewPassword")}
            />
            <CustomButton name="Get code through email" 
            className=" bg-accent-50 mb-14" 
            textClassName="text-primary"
            />
        
        <Text className="text-md text-center font-lato items-center justify-center">Don't have an account ? <RouteTextButton className="text-md items-center justify-center" textClassName="text-primary -m-1 ml-1"  name="Sign up here" route={"./Signup"} /></Text>
    </MainContainer>
  );
}

