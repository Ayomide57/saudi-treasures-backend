import { Text, TextInput, View } from "react-native";
import CustomText from "../CustomText";

interface ICustomTextInputProps {
  name: string;
  className?: string;
  disabled?: boolean;
  multiline?: boolean;
    numberOfLines?: number;
    value?: string;
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
    placeholderColor?: string;
    secureTextEntry?: boolean;
    label?: string;
    placeholder?: string;
    onChangeText: (text: string) => void;
}

const CustomTextInput = ({ placeholder, label, className, disabled, multiline, numberOfLines, value, keyboardType, placeholderColor, secureTextEntry, onChangeText}: ICustomTextInputProps) => {

  return (
    <View>
        {label && <CustomText text={label} className="text-[14px]" />}
        <TextInput 
        style={{}}
        className={className}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor || "rgba(68, 79, 96, 0.5)"}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        editable={!disabled}
        multiline={multiline}
        numberOfLines={numberOfLines}
    />
    </View>
  );
};

export default CustomTextInput;
