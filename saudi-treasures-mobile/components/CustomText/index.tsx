import React from 'react';
import { Text } from 'react-native';

interface ICustomTextProps {
    text: string;
    className?: string;
    styles?: any; 
}


const CustomText = ({text, className, styles}: ICustomTextProps) => {
    
    return (
        <Text className={`font-lato ${className}`} style={styles}>{text}</Text>
    )
}

export default CustomText;
