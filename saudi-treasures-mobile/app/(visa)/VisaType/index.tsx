import { View } from "react-native";
import MainContainer from "@/components/MainContainer";
import { router } from "expo-router";
import { CustomButtonOption } from "@/app/(tabs)/tour";
import { BLUE100, RED70, ORANGE50, PURPLE50, GREEN05 } from "@/Utils/constants";


export default function VisaType() {
  return (
    <MainContainer title="Visa Type">
       <View className="">
            <CustomButtonOption text="Hajj/Umrah Visa" iconColor={BLUE100} iconName="mosque" iconType="MaterialIcons" onPress={() => router.navigate("../(visa)/VisaPackages/HajjUmrah")} />
            <CustomButtonOption text="Tourist Visa" iconColor={RED70} iconName="airplane" iconType="MaterialCommunityIcons" onPress={() => router.navigate("../(visa)/VisaPackages/Tourist")} />
            <CustomButtonOption text="Student Visa" iconColor={ORANGE50} iconName="school" iconType="MaterialCommunityIcons" onPress={() => router.navigate("../(visa)/VisaPackages/Student")} />
            <CustomButtonOption text="Resident Visa" iconColor={PURPLE50} iconName="add-home-work" iconType="MaterialIcons" onPress={() => router.navigate("../(visa)/VisaPackages/Resident")} />
            <CustomButtonOption text="Work Visa" iconColor={GREEN05} iconName="apartment" iconType="MaterialIcons" onPress={() => router.navigate("../(visa)/VisaPackages/Work")} />
        </View>
    </MainContainer>
  );
}

