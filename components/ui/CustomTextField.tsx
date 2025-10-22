import { TextInput, View, Text } from 'react-native'
import React from 'react'
import CustomText from './CustomText'

interface CustomTextFieldProps {
    title: string,
    value: string,
    onChange: (text: string) => void,
    onBlur: () => void,
    placeholder: string,
    secureTextEntry?: boolean,
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad",
    autoCapitalize?: "none" | "sentences" | "words" | "characters",
    error?: string,
}

const CustomTextField = (props: CustomTextFieldProps) => {
    const { title, value, onChange, onBlur, placeholder, secureTextEntry, keyboardType, autoCapitalize, error } = props;

    return (
        <View className='w-full gap-2'>
            <CustomText variant="bodyBoldWhite" value={title} />
            <TextInput
                className={`bg-primary text-secondary border ${error ? 'border-red-500' : 'border-secondary'} rounded-md px-4 py-3`}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                placeholderTextColor="#B2BEB5"
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
            />
            {error && <Text className="text-red-500 text-xs">{error}</Text>}
        </View>
    )
}

export default CustomTextField