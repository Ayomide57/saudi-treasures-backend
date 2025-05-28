import { View, StyleSheet } from "react-native";
import CustomButton from "@/components/CustomButton";
import CustomText from "@/components/CustomText";
import MainContainer from "@/components/MainContainer";
import { router, useLocalSearchParams } from "expo-router";
import Card from "@/components/Card";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { YELLOW50 } from "@/Utils/constants";
import CountryFlag from "react-native-country-flag";

interface IVisaPackageItem{
  text: string;
  value: string;
  price?: boolean;
}

const VisaPackageItem = ({text, value, price}: IVisaPackageItem) => {
  return (
    <View className="flex-row justify-between mt-2 mb-2">
      <CustomText text={text} className="text-[14px] font-normal text-black-90"/>
      <CustomText text={value} className={`text-[14px] font-normal ${price ? "text-focus" : "text-black-90"}`} />
    </View>
  );
}

export default function VisaPackages() {
  const { packagename } = useLocalSearchParams<{ packagename: string; }>();

    
  return (
    <MainContainer title={`${packagename} Visa`}>
        <Card title="Qatar A1" titleClassName="text-[16px] text-black-100 ml-5 text-center" className="bg-white m-5" icon={<CountryFlag isoCode="us" size={16} />}>
          <VisaPackageItem text="Duration" value="30 days"/>
          <VisaPackageItem text="Processing Time" value="5-7 days"/>
          <VisaPackageItem text="Price" value="#350,000" price={true}/>
        </Card>
        <Card title="South Africa" titleClassName="text-[16px] text-black-100 ml-5 text-center" className="bg-white m-5" icon={<CountryFlag isoCode="za" size={16} />}>
          <VisaPackageItem text="Duration" value="180 days"/>
          <VisaPackageItem text="Processing Time" value="5-7 days"/>
          <VisaPackageItem text="Price" value="#350,000" price={true}/>
        </Card>
        <Card title="Morroco" titleClassName="text-[16px] text-black-100 ml-5 text-center" className="bg-white m-5" icon={<CountryFlag isoCode="us" size={16} />}>
          <VisaPackageItem text="Duration" value="90 days"/>
          <VisaPackageItem text="Processing Time" value="5-7 days"/>
          <VisaPackageItem text="Price" value="#350,000" price={true}/>
        </Card>
      </MainContainer>
  );
}

