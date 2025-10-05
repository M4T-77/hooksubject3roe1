import { TextInput, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'

interface CustomTextFieldProps {
    title: string,
    value: string,
    variant: "normal" | "subtitle" | "title" | "normall" | "normalll",
    onChange: (text: string) => void,
}


const CustomTextField = ({ title, variant, value, onChange }: CustomTextFieldProps) => {
    return (
        <View className='w-full gap-2'>
            <CustomText variant={variant} value={title} />
            <TextInput
                className='bg-gray-200 rounded-lg p-4'
                value={value}
                onChangeText={onChange}
            />
        </View>
    )
}

export default CustomTextField