import React from "react";
import {TouchableOpacity, Text} from 'react-native';


interface ICustomButton {
    name: string;
    styles?: any;
    icon?: React.ReactNode;
    onPress?: () => void;
    className?: string;
    textClassName?: string;
    default?: boolean;
    disabled?: boolean;
    accent?: boolean;
}

const CustomButton = ({name, styles, icon, onPress, textClassName, className}: ICustomButton) => {

    return <TouchableOpacity style={styles} className={`rounded-xl p-2 flex-row h-12 items-center justify-center` + className} onPress={onPress}>
        {icon && <>{icon}</>}
        <Text className={`text-center text-lg font-lato ${textClassName}`}>{name}</Text>
    </TouchableOpacity>
}

export default CustomButton;
