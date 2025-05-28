import { Text, StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import RouteTextButton from "@/components/RouteTextButton";
import CustomTextInput from "@/components/CustomInput";
import CustomText from "@/components/CustomText";
const faceID = require("@/assets/images/FaceID.png");
const task_alt = require("@/assets/images/task_alt.png");
import { RelativePathString, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import MainContainer from "@/components/MainContainer";
import LocalAuthentication from "expo-local-authentication";
import { alertComponent } from "@/Utils";


export default function EnableBiometric() {
  const router = useRouter();
  const [biometric, setBiometric] = useState<boolean>(false);
  const [isBiometricSupported, setBiometricSupported] = useState<boolean>(false);

  const handleBiometric = async () => {
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();
    let supportBiometrics: any;
    if (!isBiometricAvailable) {
      return alertComponent({
        title: 'Biometric auth not supported',
        message: 'Please enter your password',
        btnText: 'OK',
    })
    }else{
      supportBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();
    }

    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    
    if(!savedBiometrics){
      return alertComponent({
          title: 'Biometric record not found',
          message: 'Please enter your password',
          btnText: 'OK',
      })
    }
    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login Successful",
      cancelLabel: "Cancel",
      disableDeviceFallback: true
    });

    if(biometricAuth){
      console.log("Loginnnnnnnnnnnnnnnnnnnnn");
    }
    
  }

  useEffect(() => {
    async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setBiometricSupported(compatible);
    }
  })
  return (
    <MainContainer title="Enable Biometric">
            {!biometric && <TouchableOpacity onPress={handleBiometric}> <Image
              style={styles.image}
              source={faceID}
              className="justify-center align-middle self-center -bottom-[14rem]"
            />
            </TouchableOpacity>
            }
            {biometric && <View className="h-[200px] w-[200px] border-accent-50 border-[20px] bg-primary rounded-full justify-center align-middle self-center -bottom-[14rem]">
                <Image
                style={styles.image}
                source={task_alt}
                />
            </View>}
            {isBiometricSupported && <CustomText 
          text="Your device is compatible with Biometrics" 
          className="text-center text-black-100 text-[15px] -bottom-[18rem] font-medium" 
        />}
        {!biometric && <CustomText 
          text="Tap the icon to allow Saudi Treasures to open with your face ID." 
          className="text-center text-black-100 text-[15px] -bottom-[18rem] font-medium" 
        />}

        {biometric && <CustomText 
          text="Face ID added successfully" 
          className="text-center text-black-100 text-[16px] -bottom-[18rem] font-medium" 
        />}
       
       {!biometric && <CustomButton 
            name="Skip" 
            className=" bg-accent-50 -bottom-[30rem]" 
            textClassName="text-center text-primary text-lg"
            onPress={() => router.push("/(tabs)/home")}
        />    }   
        {biometric && <CustomButton 
            name="Continue" 
            className=" bg-primary -bottom-[30rem]" 
            textClassName="text-center text-white text-lg"
            onPress={() => router.navigate("/(tabs)/home")}
        />    }   
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  
  image: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
