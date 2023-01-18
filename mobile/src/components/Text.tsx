import { Text as RNText, TextProps as RNTextProps } from 'react-native';

interface TextProps extends RNTextProps {}

export function Text(props: TextProps) {
  return (
    <RNText
      className="text-gray-500 dark:text-gray-100 font-bold text-base"
      {...props}
    />
  );
}
