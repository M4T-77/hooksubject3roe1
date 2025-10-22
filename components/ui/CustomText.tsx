import React from 'react';
import { Text } from 'react-native';

interface CustomTextProps{
    value: string;
    variant: "body" | "subtitle" | "title" | "titleSecondary" | "bodyBold" | "bodyBoldWhite";
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
        case "body":
            return "text-black font-normal"
        case "subtitle":
            return "text-gray-400 text-xl font-normal"
        case "title":
            return "text-white text-4xl font-bold "
        case "titleSecondary":
            return "text-white font-bold text-2xl"
        case "bodyBold":
            return "text-black font-bold text-xl"
        case "bodyBoldWhite":
            return "text-white font-bold text-xl"
        default:
            return "text-black font-normal"
    }
}