import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { RelativePathString, useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { YELLOW50, PRIMARY_COLOR, PINK80 } from "@/Utils/constants";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import CustomText from "@/components/CustomText";
import Card from "@/components/Card";
import CustomButton from "@/components/CustomButton";
const hotel1 = require("@/assets/images/hotel1.png");
const hotel2 = require("@/assets/images/hotel1.png");

interface IHotelTypeCard {
  image: any;
  type: string;
  price: string;
    route: RelativePathString;  
}

const HotelTypeCard = ({ image, type, price, route }: IHotelTypeCard) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      className="mr-4 ml-4"
      onPress={() => router.navigate(route)}
    >
      <Image
        source={image}
        className="rounded-xl w-[161px] h-[160px] self-center mb-2"
      />
      <View className="flex-row justify-between">
        <CustomText text={type} className="text-[14px] font-semibold text-black-100" /> 
          <Text className="text-[14px] font-lato font-semibold text-primary">
            ${price}/
            <Text className="text-[12px] font-lato font-normal text-[#000]">night</Text>
          </Text>
      </View>
    </TouchableOpacity>
  );
};

export default function HotelDetails() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-[#FEFCFF] pb-10">
      <ScrollView>
        <Image source={hotel1} className="w-full h-[332px] self-center mb-2" />
        <View className="p-5">
          <View className="flex-row justify-between border-b-[1px] border-[#E0D5EA] pb-1">
            <View className="flex-row pb-1">
              <FontAwesome
                size={13}
                className="mr-1"
                name="star-half-empty"
                color={YELLOW50}
              />
              <Text className="text-[12px] font-lato font-normal text-black-100">
                5.0
              </Text>
            </View>
            <CustomText text="203 reviews" className="text-primary text-[12px] font-semibold" />
          </View>
          <View className="mt-5">
            <View className="flex-row">
              <Text className="text-[16px] font-lato font-semibold text-black-100">
                Sa’ad Hotel
              </Text>
            </View>
            <View className="flex-row justify-between">
              <View className="flex-row">
                <EvilIcons
                  size={18}
                  className="mr-2"
                  name="location"
                  color={PRIMARY_COLOR}
                />
                <Text className="text-[14px] font-lato font-medium text-primary">
                  Jeddah
                </Text>
              </View>
              <Text className="text-[20px] text-primary font-lato font-bold">
                $456/
                <Text className="text-[14px] text-[#000000] font-lato font-medium">
                  night
                </Text>
              </Text>
            </View>
          </View>
          <View className="p-4 bg-white rounded-[20px] mt-6">
            <CustomText 
                className="text-pink-90 text-[12px]/7 tracking-[0.4px]"
                text="Sa’ad hotel sits in the heart of Jeddah with beautiful views of the beautiful landscape in Jeddah. Offers the best customer service around and close to exciting places in the city of Jeddah." 
            />
          </View>
        </View>
        <CustomText
          text="Room Types"
          className="font-semibold text-[14px] text-black-100 p-5"
        />
        <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            className="rounded-2xl pl-1"
         >
            <HotelTypeCard image={hotel1} type="Deluxe" price="450" route="../(hotel)/"/>
            <HotelTypeCard image={hotel2} type="Deluxe" price="450" route="../(hotel)/"/>
            <HotelTypeCard image={hotel1} type="Deluxe" price="450" route="../(hotel)/"/>
        </ScrollView>
        <CustomText
          text="Facilities"
          className="font-semibold text-[14px] text-black-100 p-5 mt-5"
        />
        <Card title="Serene environment" className="bg-white m-5" icon={<FontAwesome5 className="mr-5 self-center" name="bed" size={13} color={YELLOW50} />}>
            <CustomText
                text="Access to beautiful and serene hotel for three nights."
                className="font-semibold text-[12px] -mt-1 ml-10 text-primary"
            />
        </Card>
        <Card title="Swimming Pool" className="bg-white m-5" icon={<FontAwesome6 className="mr-5 self-center" name="person-swimming" size={15} color={PINK80} />}>
            <CustomText
                text="Visit beautiful tourist attraction sites in Riyadh for three days."
                className="font-semibold text-[12px] -mt-1 ml-10 text-primary"
            />
        </Card>
        <Card title="Bar" className="bg-white m-5" icon={<MaterialIcons className="mr-5 self-center" name="local-bar" size={1} color={PRIMARY_COLOR} />}>
            <CustomText
                text="Fun-filled activities for three days"
                className="font-semibold text-[12px] -mt-1 ml-10 text-primary"
            />
        </Card>
        <CustomButton name="Reserve" 
            className=" bg-primary mr-5 ml-5 mt-3 mb-5" 
            textClassName="text-center text-white text-lg"
            onPress={() => router.navigate("../(hotel)/ReserveHotel")}
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
});
