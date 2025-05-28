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


export default function VerifyPhoneNumber() {
  const router = useRouter();
  return (
    <MainContainer title="Verify Phone Number" center={true}>
      <CustomText 
          text="Verify Phone Number" 
          className="text-center text-black-100 text-[16px] mb-8 mt-8 font-semibold" 
        />
        <CustomText 
          text="Enter the SMS code that was sent to" 
          className="text-center text-black-100 text-[15px] mb-" 
        />
        <CustomText 
          text="234 70677654009" 
          className="text-center text-black text-[15px] mb-24 font-semibold" 
        />
        <Text className="text-md text-center items-center justify-center mb-8">Didn’t get a code?<RouteTextButton className="text-md items-center justify-center" textClassName="text-primary -m-[5px] ml-1"  name="Resend code" route={"./Signup"} /></Text>

        <CustomButton name="Continue" 
            className=" bg-primary mb-5" 
            textClassName="text-center text-white text-lg"
            onPress={() => router.navigate("./NewPassword")}
            />
            <CustomButton name="Get code through email" 
            className="bg-accent-50 mb-14" 
            textClassName="text-primary"
            />        
    </MainContainer>
  );
}


