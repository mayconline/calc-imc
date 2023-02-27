import { View } from 'react-native';

interface IndicatorProps {
  active: boolean;
}

export function Indicator({ active = true }: IndicatorProps) {
  const isActive = active ? 'bg-gray-400' : 'bg-gray-500';

  return <View className={`w-5 h-3 rounded ml-2 ${isActive}`} />;
}
