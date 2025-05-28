import React from "react";
import {Text, View, StyleSheet} from 'react-native';

interface ICard {
    children?: React.ReactNode; 
    title?: string; 
    titleClassName?: string;
    className?: string;
    icon?: React.ReactNode;
}

const Card = ({ children, title, className, titleClassName, icon }: ICard): JSX.Element => {

    return (
        <View style={styles.shadow} className={`rounded-xl p-4 h-auto ${className}`}>
            <View className="flex-row pb-3">
                {icon && icon}
                <Text className={`font-lato ${titleClassName}`}>{title}</Text>
            </View>
            {children}
        </View>
    )
}


const styles = StyleSheet.create({

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        //

    },
  });

export default Card;
