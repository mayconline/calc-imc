import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Text } from './Text';

interface ButtonProps extends TouchableOpacityProps {}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      className="py-3 px-4 rounded bg-cyan-500 items-center justify-center"
      {...props}
    >
      <Text className="text-gray-800">{children}</Text>
    </TouchableOpacity>
  );
}
