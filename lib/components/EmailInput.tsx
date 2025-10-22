import React, { useState, useCallback } from 'react';
import { View, Text, TextInput } from 'react-native';
import { emailSchema } from '../schemas/emailSchema';
import debounce from 'lodash.debounce';
import CustomText from '../../components/ui/CustomText';

interface EmailInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
  disabled?: boolean;
  onValueChange?: (value: string, isValid: boolean) => void;
  className?: string;
  showErrorMessages?: boolean;
}

const EmailInput: React.FC<EmailInputProps> = ({
  name,
  label,
  placeholder,
  defaultValue = '',
  required = false,
  disabled = false,
  onValueChange,
  className,
  showErrorMessages = true,
}) => {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);
  const [isValidating, setIsValidating] = useState(false);

  const validate = useCallback((val: string) => {
    setIsValidating(true);
    const result = emailSchema.safeParse(val);
    if (result.success) {
      setError(null);
      onValueChange?.(val, true);
    } else {
      const errorMessage = result.error.issues[0].message;
      setError(errorMessage);
      onValueChange?.(val, false);
    }
    setIsValidating(false);
  }, [onValueChange]);

  const debouncedValidate = useCallback(debounce(validate, 300), [validate]);

  const handleChange = (text: string) => {
    setValue(text);
    if (touched) {
      debouncedValidate(text);
    }
  };

  const handleBlur = () => {
    setTouched(true);
    validate(value);
  };

  return (
    <View className='w-full gap-2'>
      {label && <CustomText variant="bodyBoldWhite" value={label} />}
      <TextInput
        className={`bg-primary text-secondary border ${error && touched ? 'border-red-500' : 'border-secondary'} rounded-md px-4 py-3`}
        value={value}
        onChangeText={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        placeholderTextColor="#B2BEB5"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        disabled={disabled}
      />
      {showErrorMessages && touched && error && (
        <Text className="text-red-500 text-xs">{error}</Text>
      )}
    </View>
  );
};

export default EmailInput;
