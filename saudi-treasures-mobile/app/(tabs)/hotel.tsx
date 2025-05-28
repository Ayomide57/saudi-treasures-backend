import { Text, View, Image, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, TextInput} from "react-native";
import { RelativePathString, useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { YELLOW50, BLACK80, BLACK90, PRIMARY_COLOR } from "@/Utils/constants";
const hotel1 = require("@/assets/images/hotel1.png");
const hotel2 = require("@/assets/images/hotel2.png");

interface IHotelCard {
  image: any;
  hotel: string;
  city: string;
  price: string;
  rating?: string;
  route: RelativePathString;
}

const SearchBar = () => {
  return (
    <View className="flex-row items-center bg-[#FAF5FF] w-full h-[48px] border-2 border-black-50 rounded-[12px] p-3 mb-5">
      <FontAwesome name="search" size={20} color={BLACK90} />
      <TextInput 
        className="text-[14px] font-lato font-normal text-black-90 ml-2" 
        placeholder="Search for hotels in Saudi Arabia"
        placeholderTextColor={BLACK90}
        style={{ flex: 1 }}
        onChangeText={(text) => console.log(text)}
        onFocus={() => console.log("Input focused")}
        onBlur={() => console.log("Input blurred")}
        onSubmitEditing={() => console.log("Input submitted")}
        autoCorrect={true}
      />
    </View>
  );
}


const HotelCard = ({image, hotel, city, price, rating, route}: IHotelCard) => {
  const router = useRouter();

  return (
    <TouchableOpacity className="mb-4 pb-2" 
      onPress={() => router.navigate(route)}
    >
      <Image
        source={image}
        className="rounded-[20px] w-full h-[332px] self-center mb-2"
      />
      <View className="mt-2">
          <View className="flex-row">
            <Text className="text-[16px] font-lato font-semibold text-black-100">{hotel}</Text>
            <Entypo
              size={20}
              className="mr-[2px]"
              name="dot-single"
              color={BLACK80}
            />          
            <FontAwesome
              size={13}
              className="mr-2 self-center"
              name="star"
              color={YELLOW50}
            />
            <Text className="text-[12px] font-lato font-semibold text-black-80 mt-[2px]">{rating}</Text>
          </View>
        <View className="flex-row justify-between">
          <View className="flex-row" >
          <EvilIcons
              size={18}
              className="mr-2"
              name="location"
              color={PRIMARY_COLOR}
            />
          <Text className="text-[14px] font-lato font-medium text-primary">{city}</Text>
          </View>
          <Text className="text-[20px] text-primary font-lato font-bold">${price}/<Text className="text-[14px] text-[#000000] font-lato font-medium">night</Text></Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function Hotel() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white pb-10">
      <ScrollView className="p-5 ">
        <SearchBar />
        <HotelCard image={hotel1} hotel="Sa’ad Hotel" city="Jeddah" rating="5.0" price="$456" route={`../(hotel)/HotelDetails`}/>
        <HotelCard image={hotel2} hotel="Sa’ad Hotel" city="Jeddah" rating="5.0" price="$456" route={`../(hotel)/HotelDetails`}/>
        <HotelCard image={hotel1} hotel="Sa’ad Hotel" city="Jeddah" rating="5.0" price="$456" route={`../(hotel)/HotelDetails`}/>
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

