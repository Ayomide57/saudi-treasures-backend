import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import RouteTextButton from "@/components/RouteTextButton";
import CustomTextInput from "@/components/CustomInput";
import CustomText from "@/components/CustomText";
import { useRouter } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { RED70 } from "@/Utils/constants";
import { BLACK80 } from "@/Utils/constants";
import MainContainer from "@/components/MainContainer";

export default function FlightDetails() {
  const router = useRouter();

  return (
    <MainContainer title="Flight Details">
      <ScrollView className="">
        <TouchableOpacity className="flex-row bg-[#FAF5FF] p-1 rounded-xl justify-center mb-0">
          <MaterialCommunityIcons
            size={18}
            className="rounded-full p-3 "
            name="airplane"
            color={RED70}
          />
          <CustomText
            text="British Airways"
            className="font-medium text-[12px] text-black-100 text-center mt-3"
          />
        </TouchableOpacity>
        <View className="mb-2 pb-2">
          <CustomText
            text="Departure 18th Jan"
            className="font-medium text-[12px] text-sec-100 text-right mt-3 mb-3 mr-5"
          />

          <TouchableOpacity className="flex-row bg-[#FAF5FF] p-3 rounded-2xl justify-between ">
            <View className="items-center justify-center">
              <CustomText
                text="10:10 am"
                className="font-medium text-[12px] text-black-100 text-center mt-3"
              />
              <CustomText
                text="Abuja"
                className="font-normal text-[10px] text-black-80 text-center mt-1"
              />
            </View>
            <View className="items-center justify-center">
              <CustomText
                text="4 hrs"
                className="font-medium text-[12px] text-black-100 text-center mt-3"
              />
              <FontAwesome6
                size={18}
                className="rounded-full p-3 mr-auto ml-auto"
                name="arrow-right-arrow-left"
                color={BLACK80}
              />
              <CustomText
                text="2 stopovers"
                className="font-normal text-[10px] text-black-80 text-center"
              />
            </View>
            <View className="items-center justify-center">
              <CustomText
                text="02:10 pm"
                className="font-medium text-[12px] text-black-100 text-center mt-3"
              />
              <CustomText
                text="Entebbe"
                className="font-normal text-[10px] text-black-80 text-center mt-1"
              />
            </View>
          </TouchableOpacity>
          <CustomText
            text="Return 18th Jan"
            className="font-medium text-[12px] text-sec-100 text-right mt-3 mb-3 mr-5"
          />

          <TouchableOpacity className="flex-row bg-[#FAF5FF] p-3 rounded-2xl justify-between mt-1">
            <View className="items-center justify-center">
              <CustomText
                text="10:10 am"
                className="font-medium text-[12px] text-black-100 text-center mt-3"
              />
              <CustomText
                text="Abuja"
                className="font-normal text-[10px] text-black-80 text-center mt-1"
              />
            </View>
            <View className="items-center justify-center">
              <CustomText
                text="4 hrs"
                className="font-medium text-[12px] text-black-100 text-center mt-3"
              />
              <FontAwesome6
                size={18}
                className="rounded-full p-3 mr-auto ml-auto"
                name="arrow-right-arrow-left"
                color={BLACK80}
              />
              <CustomText
                text="2 stopovers"
                className="font-normal text-[10px] text-black-80 text-center"
              />
            </View>
            <View className="items-center justify-center">
              <CustomText
                text="02:10 pm"
                className="font-medium text-[12px] text-black-100 text-center mt-3"
              />
              <CustomText
                text="Entebbe"
                className="font-normal text-[10px] text-black-80 text-center mt-1"
              />
            </View>
          </TouchableOpacity>
        </View>
        <CustomText
          text="Stopover Details"
          className="font-semibold text-[14px] text-black-100 text-left mt-3 mb-3"
        />

        <View>
          <CustomText
            text="Addis Ababa, Ethopia"
            className="font-medium text-[12px] text-sec-100 text-left mt-3 mr-3 mb-3 ml-3"
          />

          <TouchableOpacity className="flex-row bg-[#FAF5FF] p-3 rounded-2xl justify-between ">
            <View className="items-center justify-center">
              <CustomText
                text="10:10 am"
                className="font-medium text-[12px] text-black-100 text-center mt-3"
              />
              <CustomText
                text="Abuja"
                className="font-normal text-[10px] text-black-80 text-center mt-1"
              />
            </View>
            <View className="items-center justify-center">
              <CustomText
                text="4 hrs"
                className="font-medium text-[12px] text-black-100 text-center mt-3"
              />
              <FontAwesome6
                size={18}
                className="rounded-full p-3 mr-auto ml-auto"
                name="arrow-right-arrow-left"
                color={BLACK80}
              />
            </View>
            <View className="items-center justify-center">
              <CustomText
                text="02:10 pm"
                className="font-medium text-[12px] text-black-100 text-center mt-3"
              />
              <CustomText
                text="Entebbe"
                className="font-normal text-[10px] text-black-80 text-center mt-1"
              />
            </View>
          </TouchableOpacity>
          <CustomText
            text="Karibu, Kenya"
            className="font-medium text-[12px] text-sec-100 text-left mt-8 mr-3 mb-3 ml-3"
          />

          <TouchableOpacity className="flex-row bg-[#FAF5FF] p-3 rounded-2xl justify-between mt-0">
            <View className="items-center justify-center">
              <CustomText
                text="10:10 am"
                className="font-medium text-[12px] text-black-100 text-center mt-3"
              />
              <CustomText
                text="Abuja"
                className="font-normal text-[10px] text-black-80 text-center mt-1"
              />
            </View>
            <View className="items-center justify-center">
              <CustomText
                text="4 hrs"
                className="font-medium text-[12px] text-black-100 text-center mt-3"
              />
              <FontAwesome6
                size={18}
                className="rounded-full p-3 mr-auto ml-auto"
                name="arrow-right-arrow-left"
                color={BLACK80}
              />
            </View>
            <View className="items-center justify-center">
              <CustomText
                text="02:10 pm"
                className="font-medium text-[12px] text-black-100 text-center mt-3"
              />
              <CustomText
                text="Entebbe"
                className="font-normal text-[10px] text-black-80 text-center mt-1"
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View className="flex-row justify-between mt-5 mb-3 bg-primary p-8 -bottom-[11px] sticky">
        <View className="self-center">
          <CustomText
            text="Ticket Price:"
            className="font-medium text-[12px] text-yellow-100 text-left mt-3"
          />
          <CustomText
            text="N1,790,000"
            className="font-bold text-[20px] text-white text-left mt-1"
          />
        </View>
        <CustomButton
          name="Proceed"
          className=" bg-accent-50 self-center pl-8 pr-8"
          textClassName="text-center text-primary text-lg"
          onPress={() => router.navigate("../(payment)/ChoosePayment")}
        />
      </View>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 300,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
