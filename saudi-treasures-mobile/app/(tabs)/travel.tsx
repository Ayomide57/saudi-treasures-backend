import { Text, View, DeviceEventEmitter, StyleSheet, TouchableOpacity, Modal, Pressable, Alert} from "react-native";
import { Link, useNavigation, useRouter } from 'expo-router';
import CustomText from "@/components/CustomText";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { RED70, SEC100 } from "@/Utils/constants";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import BottomModal from "@/components/Modal";

export default function Travel() {
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
    <SafeAreaProvider >
      <SafeAreaView className="p-5 relative" >
        <CustomText text="Travels" className="font-semibold text-[16px] text-black-100 mt-5 "/>
        <TouchableOpacity className="flex-row justify-between bg-[#FAF5FF] p-3 items-center mt-5 rounded-2xl" onPress={() => setModalVisible(true)}>
          <View className="flex-row items-center">
            <MaterialCommunityIcons size={18} className="bg-white rounded-full p-3 mr-6" name="airplane" color={RED70} />
            <CustomText text="Travel by flight" className="font-medium text-[14px] text-black-100"/>
          </View>
          <Entypo size={28} className="p-6" name="chevron-small-right" color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row justify-between bg-[#FAF5FF] p-3 items-center mt-5 rounded-2xl">
          <View className="flex-row items-center">
            <MaterialCommunityIcons size={18} className="bg-white rounded-full p-3 mr-6" name="truck-fast" color={SEC100} />
            <CustomText text="Travel by road" className="font-medium text-[14px] text-black-100"/>
          </View>
            <CustomText text="Coming Soon" className="font-medium text-[14px] text-accent-60"/>
          </TouchableOpacity>
          <BottomModal visible={modalVisible} setVisible={() => setModalVisible(!modalVisible)} title="Choose flight type" style={{ top: "68%" }}>
              <View className="flex-row justify-between w-fit mb-10">
                <TouchableOpacity className=" bg-[#FAF5FF] p-8  m-5 rounded-2xl flex-1 self-center " >
                    <MaterialCommunityIcons size={18} className="bg-white rounded-full p-3 mr-auto ml-auto" name="airplane" color={RED70} />
                    <CustomText text="Local" className="font-medium text-[14px] text-black-100 text-center mt-3"/>
                </TouchableOpacity>
                <TouchableOpacity className=" bg-[#FAF5FF] p-8 m-5 rounded-2xl flex-1 self-center" onPress={() => router.navigate('../(travel)/TravelByFlight')}>
                    <MaterialCommunityIcons size={18} className="bg-white rounded-full p-3 mr-auto ml-auto" name="airplane" color={RED70} />
                    <CustomText text="International" className="font-medium text-[14px] text-black-100 text-center mt-3"/>
                </TouchableOpacity>
              </View>
        </BottomModal>

      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  
});

