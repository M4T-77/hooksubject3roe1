import React from 'react';
import { Text } from 'react-native';

interface CustomTextProps{
    value: string;
    variant: "normal" | "subtitle" | "title" | "normall" | "normalll";
}

const CustomText = ({value, variant}: CustomTextProps) => {
  return (
    <Text className={selectVariant(variant)}>
        {value}
    </Text>
  )
}

export default CustomText

function selectVariant(variant:string):string{
    switch (variant) {
        case "normal":
            return "text-black font-normal"
        case "subtitle":
            return "text-gray-400 text-xl font-normal"
        case "title":
            return "text-white text-4xl font-bold "
        case "normall":
            return "text-white font-bold text-2xl"
        case "normalll":
            return "text-black font-bold text-xl"
        default:
            return "text-black font-normal"
    }
}