import { memo } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IconProps extends TouchableOpacityProps {
  name: string;
  size: number;
  color: string;
  isPressable?: boolean;
}

function IconComponent({
  isPressable = false,
  name,
  size,
  color,
  ...props
}: IconProps) {
  return isPressable ? (
    <TouchableOpacity
      className="flex-row items-center justify-center"
      {...props}
    >
      <MaterialIcons name={name} size={size} color={color} />
    </TouchableOpacity>
  ) : (
    <MaterialIcons name={name} size={size} color={color} />
  );
}

export const Icon = memo(IconComponent);
