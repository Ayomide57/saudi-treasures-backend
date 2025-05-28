import {
  Text,
  View,
  DeviceEventEmitter,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import CustomText from "@/components/CustomText";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { RED70, SEC100, PRIMARY_COLOR } from "@/Utils/constants";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import BottomModal from "@/components/Modal";
import CustomTextInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import MainContainer from "@/components/MainContainer";

export default function ChoosePayment() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const isFocused = useIsFocused();
  useEffect(() => {
    const subscription = DeviceEventEmitter.addListener(
      "hardwareBackPress",
      () => setModalVisible(false)
    );

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <MainContainer title="Choose Payment Method">
       
        <TouchableOpacity
          className="flex-row justify-between bg-[#FAF5FF] p-3 items-center mt-5 rounded-2xl"
          onPress={() => setModalVisible(true)}
        >
          <View className="flex-row items-center">
            <MaterialCommunityIcons
              size={18}
              className="rounded-full p-3 mr-6"
              name="credit-card-plus"
              color={PRIMARY_COLOR}
            />
            <CustomText
              text="Pay with card"
              className="font-medium text-[14px] text-black-100"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row justify-between bg-[#FAF5FF] p-3 items-center mt-5 rounded-2xl">
          <View className="flex-row items-center">
            <MaterialIcons
              size={18}
              className="rounded-full p-3 mr-6"
              name="assured-workload"
              color={PRIMARY_COLOR}
            />
            <CustomText
              text="Pay with bank transfer"
              className="font-medium text-[14px] text-black-100"
            />
          </View>
        </TouchableOpacity>
        <BottomModal
          visible={modalVisible}
          setVisible={() => setModalVisible(!modalVisible)}
          title="Pay with card"
          style={{ top: "52%"}}
        >
          <View className="w-fit pl-5 pr-5 mt-5">
            <CustomTextInput
              name="cardNumber"
              label="Card Number"
              placeholder="Enter your card number"
              onChangeText={() => {}}
              value=""
              className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-5 h-14"
            />
            <View className="flex-row justify-between">
              <CustomTextInput
                name="expiryDate"
                label="Expiry Date"
                placeholder="Enter your card number"
                onChangeText={() => {}}
                value=""
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-3 h-14"
              />
              <CustomTextInput
                name="cvv"
                label="CVV"
                placeholder="Enter your cvv"
                onChangeText={() => {}}
                value=""
                className="border-accent-50 border-2 rounded-lg mb-5 mt-3 p-5 h-14"
              />
            </View>
            <CustomButton
              name="Pay $456"
              className=" bg-accent-50 mt-5 mb-10"
              textClassName="text-center text-primary text-lg "
              onPress={() => router.navigate('./SuccessMessage')} />
          </View>
        </BottomModal>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
