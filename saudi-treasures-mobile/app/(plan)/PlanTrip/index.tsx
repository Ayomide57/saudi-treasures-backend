import {
    Text,
    View,
    TouchableOpacity,

  } from "react-native";
  import { useRouter } from "expo-router";
  import CustomText from "@/components/CustomText";
  import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
  import { PRIMARY_COLOR, BLACK70 } from "@/Utils/constants";  
  import CustomButton from "@/components/CustomButton";
  import MainContainer from "@/components/MainContainer";
import Entypo from "@expo/vector-icons/Entypo";
import React, { useState } from 'react';
import CustomRadioButtom from "@/components/CustomRadioButton";


  export default function PlanTrip() {
    const router = useRouter();
    const [modalVisible, setModalVisible] = useState(false);
    const [stage1, setStage1] = useState(false);

  
    
    return (
      <MainContainer title="Plan a Trip" center={true} button={true} buttonText="Set Reminder" route="../(plan)/SetReminder">
         <Text className="text-[15px] font-lato font-bold text-[#000]">Start <Text className="text-sec-100">planning</Text> your trip for the best experience.</Text>
         <View className="flex-row justify-between mt-5">
            <TouchableOpacity className="flex-row p-2">
                <MaterialCommunityIcons size={20} name={stage1 ? "check-circle"  : "record-circle-outline"} color={PRIMARY_COLOR} />
                <CustomText text="Pre-Travel" className="font-semibold text-[12px] text-primary mr-1 ml-1"/>
                <View className="w-8 border-b-2 border-b-black-70 mb-auto mt-auto"></View>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row p-2">
                <Entypo size={20} name={ "circle"} color={BLACK70} />
                <CustomText text="Packing" className="font-semibold text-[12px] text-primary mr-1 ml-1"/>
                <View className="w-8 border-b-2 border-b-black-70 mb-auto mt-auto"></View>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row p-2">
                <Entypo size={20} name={ "circle"} color={BLACK70} />
                <CustomText text="On-Site Tasks" className="font-semibold text-[12px] text-primary mr-1 ml-1"/>
            </TouchableOpacity>
         </View>
         <View className="bg-white rounded-2xl mt-5 p-5">
            <CustomRadioButtom className="text-black-100 mb-2" text="Do you have a valid international passport?" />
            <CustomRadioButtom className="text-black-100 mb-2" text="Have you completed your visa application?" />
            <CustomRadioButtom className="text-black-100 mb-2" text="Have you completed your ticket booking?" />
            <CustomRadioButtom className="text-black-100 mb-2" text="Have you completed your yellow fever vaccination?" />
        </View>
        <CustomButton name="Next" 
            className=" bg-primary mb-14 mt-10" 
            textClassName="text-center text-white text-lg"
            />
      </MainContainer>
    );
  }
  
  