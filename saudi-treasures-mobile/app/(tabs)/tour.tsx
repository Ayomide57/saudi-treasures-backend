import { Text, View, DeviceEventEmitter, StyleSheet, TouchableOpacity, Modal, Pressable, Alert} from "react-native";
import { Link, RelativePathString, router, useNavigation, useRouter } from 'expo-router';
import CustomText from "@/components/CustomText";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Entypo from '@expo/vector-icons/Entypo';
import { RED70, SEC100 } from "@/Utils/constants";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

interface ICustomButtonOption {
  iconName: any;
  text: string;
  iconColor?: any;
  iconType?: string;
  soon?: boolean;
  onPress?: () => void;
}

export const CustomButtonOption = ({iconName, text, iconColor, iconType, soon, onPress}: ICustomButtonOption) => {
  return (
    <TouchableOpacity className="flex-row justify-between bg-[#FAF5FF] p-3 items-center mt-5 rounded-2xl" onPress={onPress}>
      <View className="flex-row items-center">
        {iconType == "MaterialCommunityIcons" && <MaterialCommunityIcons size={18} className="bg-white rounded-full p-3 mr-6" name={iconName} color={iconColor} />}
        {iconType == "MaterialIcons" && <MaterialIcons size={18} className="bg-white rounded-full p-3 mr-6" name={iconName} color={iconColor} />}

        <CustomText text={text} className="font-medium text-[14px] text-black-100"/>
      </View>
      {!soon && <Entypo size={28} className="p-6" name="chevron-small-right" color="black" />}
      {soon && <CustomText text="Coming Soon" className="font-medium text-[14px] text-accent-60"/>}
  </TouchableOpacity>
  )
}

export default function Tour() {
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
        <CustomText text="Tours" className="font-semibold text-[16px] text-black-100 mt-5 "/>
        <CustomButtonOption iconName="mosque" text="Pilgrimage" iconColor={RED70} iconType="MaterialIcons" onPress={() => router.navigate("../(tour)/PilgrimageTour")} />
        <CustomButtonOption iconName="truck-fast" text="Adventure" iconColor={SEC100} iconType="MaterialCommunityIcons" soon={true}  />
        <CustomButtonOption iconName="airplane" text="Cultural" iconColor={RED70} iconType="MaterialCommunityIcons" soon={true}  />
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

