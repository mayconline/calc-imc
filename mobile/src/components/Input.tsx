import { useRef } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import colors from 'tailwindcss/colors';

interface InputProps extends TextInputProps {
  label: string;
}

export function Input({ label, ...props }: InputProps) {
  const inputRef = useRef<any>(null);

  const handleFocusInput = () => {
    inputRef.current.blur();
    inputRef.current.focus();
  };

  return (
    <View className="w-full mt-2">
      <Text className="font-bold text-base text-gray-500 dark:text-gray-100">
        {label}
      </Text>
      <TextInput
        className="h-12 p-3 mt-2 text-base rounded-sm text-gray-800 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 border-transparent focus:border-cyan-600 dark:focus:border-cyan-300 border-2"
        {...props}
        placeholderTextColor={colors.gray[400]}
        returnKeyType="next"
        onPressIn={handleFocusInput}
        ref={inputRef}
      />
    </View>
  );
}
