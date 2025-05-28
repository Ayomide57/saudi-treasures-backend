import { Text, View } from 'react-native';
import React, { useMemo, useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

interface ICustomTextProps {
    text: string;
    className?: string;
    styles?: any; 
}


const CustomRadioButtom = ({text, className, styles}: ICustomTextProps) => {
    const radioButtons = useMemo(() => ([
        {
            id: 'Yes', // acts as primary key, should be unique and non-empty string
            label: 'Yes',
            value: 'yes'
        },
        {
            id: 'No',
            label: 'No',
            value: 'no'
        }
    ]), []);

    const [selectedId, setSelectedId] = useState();
    return (
        <View className='mt-2 mb-5'>
            <Text className={`font-lato ${className}`} style={styles}>{text}</Text>
            <RadioGroup
                radioButtons={radioButtons}
                onPress={() => setSelectedId}
                selectedId={selectedId}
                layout='row'
            />
        </View>
    )
}

export default CustomRadioButtom;
