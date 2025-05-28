import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import CustomTextInput from "@/components/CustomInput";
import CustomText from "@/components/CustomText";
import { useRouter } from "expo-router";
import MainContainer from "@/components/MainContainer";
import { useState } from "react";
import PaymentMethodModal from "@/components/PaymentMethodModal";


export default function ReserveHotel() {
      const router = useRouter();
    const [paymentMethod, setPaymentMethod] = useState(false);
      
    
  return (
    <MainContainer title="Reserve Hotel">
       <View className="">
        <CustomTextInput 
                name="fullname"
                label="Room type"
                placeholder="Deluxe ($456)"
                onChangeText={() => {}}
                value=""
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-3 h-14"
            />
            <CustomText 
                text="32 rooms available"
                className="text-[#E08443] text-[12px] font-medium font-lato mb-5 mt-1" />
                
            <CustomTextInput 
                name="email"
                label="Number of Guests"
                placeholder="5"
                onChangeText={() => {}}
                value=""
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-3 h-14"
            />
            <CustomText 
                text="Max of 3 guests"
                className="text-black-80 text-[12px] font-medium font-lato mb-5 mt-1" />
            <CustomTextInput 
                name="checkindate"
                label="Check In Date"
                placeholder="5"
                onChangeText={() => {}}
                value=""
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-3 h-14"
            />
            <CustomTextInput 
                name="checkoutdate"
                label="Check Out Date"
                placeholder="5"
                onChangeText={() => {}}
                value=""
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-3 h-14"
            />
            <CustomTextInput 
                name="checkoutdate"
                label="Reason for booking?"
                placeholder="5"
                onChangeText={() => {}}
                value=""
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-3 h-14"
            />
            
        </View>
        <CustomButton name="Book for $456"
            onPress={() => setPaymentMethod(!paymentMethod)}
            className="p-16 bg-primary rounded-xl h-12 items-center justify-center mb-14" 
            textClassName="text-center text-white text-lg"
            />   
    <PaymentMethodModal title="Payment Method" paymentMethod={paymentMethod} setPaymentMethod={() => setPaymentMethod(!paymentMethod)} style={{ bottom: -603}} style2={{ bottom: -473}}/>
            
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 0,
    backgroundColor: "#fff",
    
  },
  image: {
    width: 300,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
