import { Text, View, Button, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import { RelativePathString, useRouter } from 'expo-router';
import { useState } from "react";
import CustomText from "@/components/CustomText";
import CustomButton from "@/components/CustomButton";

interface IHistory {
  date: string;
  type: string;
  title: string;
  route: RelativePathString;
  tabHistory: string;
}

export default function History() {
  const [tabHistory, setTabHistory] = useState("tour");
  const router = useRouter();

  const History = ({date, type, title, route, tabHistory}: IHistory) => {
    return (
      <TouchableOpacity className="flex-row bg-[#FAF5FF] p-4 rounded-2xl justify-between border-2 border-primary mb-5" >
            <View>
                <View className="flex-row items-left">
                  <CustomText text={title} className="font-normal text-[14px] text-black-100 text-left mr-2"/>
                  <CustomText text={type} className="font-normal text-[8px] text-primary text-left p-2 bg-sec-80 rounded-xl"/>
                </View>
                <CustomText text={date} className="font-normal text-[12px] text-black-90 text-left mt-1"/>
            </View>
            
            <CustomButton name="View Details" 
            className=" bg-primary" 
            textClassName="text-center text-white text-lg"
            onPress={() => router.navigate(route)}
            />
        </TouchableOpacity>
    );
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View className="flex-row w-full mt-5 p-5">
        <TouchableOpacity 
          className={`rounded-[30px] p-8 ${tabHistory === "tour" ? "bg-yellow-50" : ""} `}
          onPress={() => setTabHistory("tour")}
          >
          <Text
            className={`${tabHistory === "tour" ? "text-white" : "text-black-80"}  text-[12px] font-semibold text-center`}
            >
            Tour
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          className={`rounded-[30px] p-8 ${tabHistory === "travel" ? "bg-yellow-50" : ""} `}
          onPress={() => setTabHistory("travel")}
          >
          <Text
            className={`${tabHistory === "travel" ? "text-white" : "text-black-80"}  text-[12px] font-semibold text-center`}
            >
            Travels
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          className={`rounded-[30px] p-8 ${tabHistory === "hotel" ? "bg-yellow-50" : ""} `}
          onPress={() => setTabHistory("hotel")}
        >
          <Text
            className={`${tabHistory === "hotel" ? "text-white" : "text-black-80"}  text-[12px] font-semibold text-center`}
            >
            Hotels
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          className={`rounded-[30px] p-8 ${tabHistory === "visa" ? "bg-yellow-50" : ""} `}
          onPress={() => setTabHistory("visa")}
          >
          <Text
            className={`${tabHistory === "visa" ? "text-white" : "text-black-80"}  text-[12px] font-semibold text-center`}
          >
            Visas
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="p-5 mt-5">
        <History 
          date="April, 14th-23rd, 2025"
          title="December Umrah"
          tabHistory={tabHistory}
          type="standard"
          route="../(history)/HistoryDetails"
         />
         <History 
          date="April, 14th-23rd, 2025"
          title="December Umrah"
          tabHistory={tabHistory}
          type="standard"
          route="../(history)/HistoryDetails"
         />
         <History 
         date="April, 14th-23rd, 2025"
         title="December Umrah"
         tabHistory={tabHistory}
         type="standard"
         route="../(history)/HistoryDetails"
         />
      </ScrollView>
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

