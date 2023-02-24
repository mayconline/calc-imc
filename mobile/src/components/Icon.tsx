import { memo } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IconProps {
  name: string;
  size: number;
  color: string;
  onPress?: () => void;
}

function IconComponent(props: IconProps) {
  return <MaterialIcons {...props} />;
}

export const Icon = memo(IconComponent);
