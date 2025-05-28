import { Text, View, DeviceEventEmitter, StyleSheet, TouchableOpacity, Modal, Pressable, Alert, ScrollView} from "react-native";
import { Link, RelativePathString, router, useNavigation, useRouter } from 'expo-router';
import CustomText from "@/components/CustomText";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { RED70, BLACK90 } from "@/Utils/constants";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import BottomModal from "@/components/Modal";
import { CustomButtonOption } from "@/app/(tabs)/tour";
import MainContainer from "@/components/MainContainer";
import CustomButton from "@/components/CustomButton";

interface IPackageDetailList{
    text: string;
}


const PackageDetailList = ({text}: IPackageDetailList) => {
    return(
        <View className="flex-row">
            <MaterialCommunityIcons size={18} className="bg-white rounded-full p-3 mr-3" name="check" color={BLACK90} />
            <CustomText className="text-black-90 text-[14px] text-center self-center text-wrap whitespace-break-spaces" text={text}/>
        </View>
    );
} 

export default function PilgrimageTour() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [details, setModalDetails] = useState(false);

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
    <MainContainer title="Pilgrimage Tours">
        <ScrollView className={modalVisible || details ? "opacity-20" : ""}>
        <CustomButtonOption iconName="mosque" text="Individual Umrah" iconColor={RED70} iconType="MaterialIcons" onPress={() => setModalVisible(true)} />
        <CustomButtonOption iconName="mosque" text="Maulud Umrah" iconColor={RED70} iconType="MaterialIcons" onPress={() => setModalVisible(true)} />
        <CustomButtonOption iconName="mosque" text="December Umrah" iconColor={RED70} iconType="MaterialIcons" onPress={() => setModalVisible(true)} />
        <CustomButtonOption iconName="mosque" text="Ramadan Umrah" iconColor={RED70} iconType="MaterialIcons" onPress={() => setModalVisible(true)} />
        
        </ScrollView >
        <BottomModal visible={modalVisible} setVisible={() => setModalVisible(!modalVisible)} title="Select Package" style={{ top: "40%"}}>
            <CustomButtonOption iconName="mosque" text="Standard" iconColor={RED70} iconType="MaterialIcons" onPress={() => {
                setModalVisible(false);
                setModalDetails(true)
                }} />
            <CustomButtonOption iconName="mosque" text="Executive Standard" iconColor={RED70} iconType="MaterialIcons" onPress={() => {
                setModalVisible(false);
                setModalDetails(true)
                }}  />
            <CustomButtonOption iconName="mosque" text="VIP" iconColor={RED70} iconType="MaterialIcons" onPress={() => {
                setModalVisible(false);
                setModalDetails(true)
                }}  />
        </BottomModal>
        
        <BottomModal visible={details} setVisible={() => setModalDetails(!details)} title="Standard" style={{ top: "4%"}} className="m-6" iconName="mosque" iconColor={RED70} >
            <ScrollView className="mb-10">
            <View className="p-3">
                <PackageDetailList text="Hajj Visa"/>
                <PackageDetailList text="Budget hotel in Makkah (8 mins to Makkam) "/>
                <PackageDetailList text="Basic 3-star hotel close to Makam"/>
                <PackageDetailList text="Two meals daily"/>
                <PackageDetailList text="Maximum of 4 in a room"/>
                <PackageDetailList text="Comfortable interstate travel"/>
                <PackageDetailList text="Free tour of historical places"/>
                <PackageDetailList text="Economy tent D in Minna and Arafat"/>
                <PackageDetailList text="Daily spiritual lecture and guidance"/>
                <PackageDetailList text="Economy class flight ticket"/>
            </View>
            <View className="rounded-2xl bg-[#F3E8FF] p-5 mb-2 mt-1">
                <CustomText text="Package Deposit" className="border-b-[1px] border-b-blue-50 pt-3 pb-2 text-black-100 font-semibold text-[16px]"/>
                <CustomText text="Quad for #8.5M" className="font-semibold text-[14px] pt-3 pb-3 text-blue-50"/>
                <CustomText text="Triple for #9.5M" className="font-semibold text-[14px] pt-3 pb-3 text-blue-50"/>
                <CustomText text="Double for #10M" className="font-semibold text-[14px] pt-3 pb-3 text-blue-50"/>
            </View>
            <CustomButton 
                name="Continue" 
                className=" bg-primary m-2" 
                textClassName="text-center text-white text-lg"
                onPress={() => {
                    setModalDetails(false);
                    router.push("../(tour)/TourRegistration");
                }}
            /> 
            </ScrollView>
        </BottomModal>

        
      </MainContainer >
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

