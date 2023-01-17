import { Pressable, PressableProps } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IconProps extends PressableProps {
  name: string;
  size: number;
  color: string;
  onPress?: () => void;
}

export function Icon({ name, size, color, ...props }: IconProps) {
  return (
    <Pressable {...props}>
      <MaterialIcons name={name} size={size} color={color} />
    </Pressable>
  );
}
