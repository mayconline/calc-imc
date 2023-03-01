import { useColorScheme } from 'nativewind';
import { useState } from 'react';
import { View } from 'react-native';
import IMCLogo from '../../assets/svg/IMCLogo';
import { textColorTheme, ToggleColorTheme } from '../utils/textColorTheme';
import { Icon } from './Icon';
import { MenuModal } from './MenuModal';
import { Text } from './Text';

export function Header() {
  const [openModal, setOpenModal] = useState(false);

  const { colorScheme, toggleColorScheme } = useColorScheme();
  const color = textColorTheme(colorScheme);
  const toggleColor = ToggleColorTheme(colorScheme);

  return (
    <>
      <View className="flex-row justify-between items-center bg-gray-100 dark:bg-gray-900 w-full p-3">
        <View className="flex-row justify-center items-center">
          <IMCLogo />
          <Text className="text-lg ml-2">IMC Calc</Text>
        </View>

        <View className="flex-row justify-center items-center">
          <Icon
            name="theme-light-dark"
            size={28}
            color={toggleColor}
            onPress={toggleColorScheme}
            isPressable
            className="mr-6"
          />
          <Icon
            name="dots-vertical"
            size={28}
            color={color}
            onPress={() => setOpenModal(true)}
            isPressable
          />
        </View>
      </View>
      <MenuModal visible={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}
