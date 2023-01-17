import { View } from 'react-native';

import { ToogleTheme } from './ToggleTheme';

export function Header() {
  return (
    <View className="flex-row justify-end items-center bg-gray-200 dark:bg-gray-800 w-full p-3">
      <ToogleTheme />
    </View>
  );
}
