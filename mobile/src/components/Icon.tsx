import { memo } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IconProps {
  name: string;
  size: number;
  color: string;
}

function IconComponent({ name, size, color }: IconProps) {
  return <MaterialIcons name={name} size={size} color={color} />;
}

export const Icon = memo(IconComponent);
