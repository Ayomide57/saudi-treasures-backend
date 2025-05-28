import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import RouteTextButton from "@/components/RouteTextButton";
import CustomTextInput from "@/components/CustomInput";
import CustomText from "@/components/CustomText";
import { RelativePathString, useRouter } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { RED70 } from "@/Utils/constants";
import { BLACK80 } from "@/Utils/constants";
import MainContainer from "@/components/MainContainer";

interface IFlight {
    airline: string;
    price: string;
    departureTotalHours: string;
    departureTime: string;
    departureLocation: string;
    departureDate: string;
    returnDepartureTime: string;
    arrivalTime: string;
    arrivalLocation: string;
    arrivalDate: string;
    returnArrivalTime: string;
    returnTotalHours: string;
    stopovers: number;
    route: RelativePathString;
}

const Flight = ({airline, price, departureTotalHours, departureTime, departureLocation, departureDate, returnDepartureTime, arrivalTime, arrivalLocation, arrivalDate, returnArrivalTime, returnTotalHours, stopovers, route}: IFlight) => {
    return (
        <View className="border-b border-accent-50 mb-3 pb-5 mt-5">
        <TouchableOpacity className="flex-row bg-[#FAF5FF] p-1 rounded-xl justify-between mb-3" >
            <View className="flex-row">
                <MaterialCommunityIcons size={18} className="rounded-full p-3 mr-auto ml-auto" name="airplane" color={RED70} />
                    <CustomText text={airline} className="font-medium text-[12px] text-black-100 text-center mt-3"/>
            </View>
                <CustomText text={price} className="font-medium text-[12px] text-primary text-center mt-3 pr-2"/>
        </TouchableOpacity>
        <CustomText text={`Departure ${departureDate}`} className="font-medium text-[12px] text-sec-100 text-right mb-3 mr-4"/>

        <TouchableOpacity className="flex-row bg-[#FAF5FF] p-3 rounded-2xl justify-between mb-3" >
            <View className="items-center justify-center">
                <CustomText text={departureTime} className="font-medium text-[12px] text-black-100 text-center mt-3"/>
                <CustomText text={departureLocation} className="font-normal text-[10px] text-black-80 text-center mt-1"/>
            </View>
            <View className="items-center justify-center">
                <CustomText text={departureTotalHours} className="font-medium text-[12px] text-black-100 text-center mt-3"/>
                <FontAwesome6 size={18} className="rounded-full p-3 mr-auto ml-auto" name="arrow-right-arrow-left" color={BLACK80} />
                <CustomText text={`${stopovers} stopovers`} className="font-normal text-[10px] text-black-80 text-center"/>
            </View>
            <View className="items-center justify-center">
                <CustomText text={arrivalTime} className="font-medium text-[12px] text-black-100 text-center mt-3"/>
                <CustomText text={arrivalLocation} className="font-normal text-[10px] text-primary text-center mt-1"/>
            </View>
        
        </TouchableOpacity>
        <CustomText text={`Return ${arrivalDate}`} className="font-medium text-[12px] text-sec-100 text-right mb-3 mr-4"/>

        <TouchableOpacity className="flex-row bg-[#FAF5FF] p-3 rounded-2xl justify-between mt-2 mb-3" >
            <View className="items-center justify-center">
                <CustomText text={returnDepartureTime} className="font-medium text-[12px] text-black-100 text-center mt-3"/>
                <CustomText text={arrivalLocation} className="font-normal text-[10px] text-black-80 text-center mt-1"/>
            </View>
            <View className="items-center justify-center">
                <CustomText text={returnTotalHours} className="font-medium text-[12px] text-black-100 text-center mt-3"/>
                <FontAwesome6 size={18} className="rounded-full p-3 mr-auto ml-auto" name="arrow-right-arrow-left" color={BLACK80} />
                <CustomText text={`${stopovers} stopovers`} className="font-normal text-[10px] text-black-80 text-center"/>
            </View>
            <View className="items-center justify-center">
                <CustomText text={returnArrivalTime} className="font-medium text-[12px] text-black-100 text-center mt-3"/>
                <CustomText text={departureLocation} className="font-normal text-[10px] text-primary text-center mt-1"/>
            </View>
        
        </TouchableOpacity>
        <RouteTextButton className="text-sm mb-0 mr-2" textClassName="text-primary text-right" name="View flight details   >" route={route} />

    </View>
    );
}



export default function FlightSearch() {
      const router = useRouter();
    
  return (
    <MainContainer title="Flight Search">
        <ScrollView showsVerticalScrollIndicator={false} className="mb-10 pt-5">
            <TouchableOpacity className="flex-row bg-[#FAF5FF] p-3 rounded-2xl justify-between " >
                <View>
                    <CustomText text="Abuja" className="font-medium text-[12px] text-black-100 text-center mt-3"/>
                    <CustomText text="Economy" className="font-normal text-[10px] text-black-80 text-left mt-3"/>
                </View>
                <View>
                    <CustomText text="Entebbe" className="font-medium text-[12px] text-black-100 text-center mt-3"/>
                    <CustomText text="Round Trip" className="font-normal text-[10px] text-black-80 text-left mt-3"/>
                </View>
                <View>
                    <CustomText text="16th Jan - 25th Apr" className="font-medium text-[12px] text-black-100 text-center mt-3"/>
                    <CustomText text="23 results" className="font-normal text-[10px] text-primary text-left mt-3"/>
                </View>
                <CustomButton name="Edit Flights" 
                className=" bg-primary" 
                textClassName="text-center text-white text-lg"
                onPress={() => router.navigate('./FlightSearch')}
                />
            </TouchableOpacity>
            <CustomText text="Available Flights" className="font-medium text-[14px] text-black-100 text-left mt-8"/>
            <Flight 
                airline="British Airways"
                price="N1,790,000"
                departureTotalHours="4 hrs"
                departureTime="10:10 am"
                departureLocation="Abuja"
                departureDate="16th Jan"
                returnDepartureTime="10:10 am"
                arrivalTime="02:10 pm"
                arrivalLocation="Entebbe"
                arrivalDate="25th Apr"
                returnArrivalTime="02:10 pm"
                returnTotalHours="4 hrs"
                stopovers={2}
                route="../(travel)/FlightDetails"
            />
            <Flight 
                airline="Kenyan Airways"
                price="N1,790,000"
                departureTotalHours="4 hrs"
                departureTime="10:10 am"
                departureLocation="Abuja"
                departureDate="16th Jan"
                returnDepartureTime="10:10 am"
                arrivalTime="02:10 pm"
                arrivalLocation="Entebbe"
                arrivalDate="25th Apr"
                returnArrivalTime="02:10 pm"
                returnTotalHours="4 hrs"
                stopovers={2}
                route="../(travel)/FlightDetails"
            />
          
            <CustomButton name="Search Flights" 
                className=" bg-primary mb-14" 
                textClassName="text-center text-white text-lg"
                onPress={() => router.navigate('./FlightSearch')}
                />
        </ScrollView>
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
