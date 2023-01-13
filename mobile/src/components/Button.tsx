import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      className="py-3 px-4 rounded bg-cyan-500 items-center justify-center"
      {...props}
    >
      <Text className="text-base text-gray-800 font-bold">{children}</Text>
    </TouchableOpacity>
  );
}
