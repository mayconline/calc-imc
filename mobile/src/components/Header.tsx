import { View } from 'react-native';
import IMCLogo from '../../assets/svg/IMCLogo';
import { Text } from './Text';

import { ToogleTheme } from './ToggleTheme';

export function Header() {
  return (
    <View className="flex-row justify-between items-center bg-gray-200 dark:bg-gray-800 w-full p-3">
      <View className="flex-row justify-center items-center">
        <IMCLogo />
        <Text className="text-xl ml-2">IMC Calc</Text>
      </View>

      <ToogleTheme />
    </View>
  );
}
