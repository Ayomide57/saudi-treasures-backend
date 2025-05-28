import { Text, StyleSheet, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import RouteTextButton from "@/components/RouteTextButton";
import CustomTextInput from "@/components/CustomInput";
import CustomText from "@/components/CustomText";
const faceID = require("@/assets/images/FaceID.png");
const task_alt = require("@/assets/images/task_alt.png");
import { RelativePathString, router, useRouter } from "expo-router";
import { useState } from "react";


export default function SuccessMessage() {
  return (
    <SafeAreaView style={styles.container} className="bg-white justify-center items-center">
            
            <View className="h-[200px] w-[200px] border-accent-50 border-[20px] bg-primary rounded-full justify-center align-middle self-center m-10">
                <Image
                style={styles.image}
                source={task_alt}
                />
            </View>
       

        <CustomText 
          text="Payment Successful" 
          className="text-center text-black-100 text-[20px] font-medium m-5" 
        />
       <CustomText 
          text="Your payment has been processed. Check the booking history to view your booking." 
          className="text-center text-black-100 text-[14px] font-medium m-5" 
        />
       <View className="flex-row justify-between w-fit mt-10 p-5">
            <CustomButton 
                name="Go Back" 
                className=" bg-accent-50 w-1/2 m-5" 
                textClassName="text-primary"
                onPress={() => router.back()}
            />    
            <CustomButton 
                name="View Booking" 
                className=" bg-primary w-1/2 m-5" 
                textClassName="text-center text-white text-lg "
            /> 
        </View>   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 0,
    
  },
  image: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
