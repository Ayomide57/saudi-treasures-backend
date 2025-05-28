import { Link, router } from "expo-router";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText";
import Feather from "@expo/vector-icons/Feather";
import { BLACK100 } from "@/Utils/constants";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface IBottomModal {
  children: any;
  visible: boolean;
  title: string;
  style: any;
  className?: string;
  iconName?: any;
  iconColor?: any;
  setVisible?: () => void;
}

export default function BottomModal({ children, visible, title, style, className, iconName, iconColor, setVisible}: IBottomModal) {
  //const isPresented = router.canGoBack();

  return (
    <Modal
      animationType="slide"
      className="rounded-t-2xl "
      transparent={true}
      visible={visible}
    >
      <View className={`w-fit ${className}`} style={styles.centeredView}>
        <View className="p-4 w-fit h-auto" style={[styles.modalView, style]}>
        <View className="flex-row justify-between items-center">
          <View className="flex-row">
            {iconName && <MaterialIcons size={18} className="bg-white rounded-full p-3 mr-3" name={iconName} color={iconColor} />}
            <CustomText
              text={title}
              className="font-semibold text-[16px] text-black-100 text-center self-center"
            />
          </View>
          <TouchableOpacity
            onPress={setVisible}
            className=""  >
              <Feather
                size={18}
                className="mr-2"
                name="x"
                color={BLACK100}
              />
            </TouchableOpacity>
        </View>
          {children}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    //bottom: -630,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
