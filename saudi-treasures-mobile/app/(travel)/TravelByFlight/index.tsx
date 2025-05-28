import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import RouteTextButton from "@/components/RouteTextButton";
import CustomTextInput from "@/components/CustomInput";
import CustomText from "@/components/CustomText";
import { useRouter } from "expo-router";
import MainContainer from "@/components/MainContainer";


export default function TravelByFlight() {
      const router = useRouter();
    
  return (
    <MainContainer title="Travel By Flight">
        <View className="">
            <CustomTextInput 
                name="bookingType"
                label="Booking Type"
                placeholder="Enter your email address"
                onChangeText={() => {}}
                value=""
                keyboardType="email-address"
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-3 h-14"
            />
            <CustomTextInput 
                name="bookingType"
                label="Flight Type"
                placeholder="Enter your Flight Type"
                onChangeText={() => {}}
                value=""
                keyboardType="email-address"
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-3 h-14"
            />
            <CustomTextInput 
                name="bookingType"
                label="Flight Type"
                placeholder="Enter your Flight Type"
                onChangeText={() => {}}
                value=""
                keyboardType="email-address"
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-3 h-14"
            />
            <CustomTextInput 
                name="date"
                label="Date"
                placeholder="Enter your Date"
                onChangeText={() => {}}
                value=""
                keyboardType="email-address"
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-3 h-14"
            />
            <CustomTextInput 
                name="numberOfPeople"
                label="How many people are you booking for?"
                placeholder="Enter your Flight Type"
                onChangeText={() => {}}
                value=""
                keyboardType="email-address"
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-3 h-14"
            />
            <CustomTextInput 
                name="from"
                label="Where are you travelling from?"
                placeholder="Enter your Flight Type"
                onChangeText={() => {}}
                value=""
                keyboardType="email-address"
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-3 h-14"
            />
            <CustomTextInput 
                name="to"
                label="Flight Class "
                placeholder="Enter your Flight Type"
                onChangeText={() => {}}
                value=""
                keyboardType="email-address"
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-3 h-14"
            />

        </View>
        <CustomButton name="Search Flights" 
            className=" bg-primary mb-14" 
            textClassName="text-center text-white text-lg"
            onPress={() => router.navigate('../(travel)/FlightSearch')}
            />
        
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 0,
    
  },
  image: {
    width: 300,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
